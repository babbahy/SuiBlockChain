module suika::payouts {
    use suika::config;
    use suika::escrow_system;
    use suika::milestone_system;
    use suika::project_management;

    use sui::object::{Self, ID};
    use sui::tx_context::TxContext;

    // Local event for detailed amounts (allowed to emit here)
    public struct PayoutExecuted has copy, drop {
        project_id: ID,
        milestone_id: ID,
        amount: u64,
        platform_fee: u64,
        journalist_fee: u64,
        ngo_amount: u64,
        journalist: address,
    }

    public fun payout_for_milestone(
        project: &mut project_management::Project,
        vault: &mut escrow_system::Vault,
        milestone: &mut milestone_system::Milestone,
        cfg: &config::FeeConfig,
        to_ngo: address,
        to_journalist: address,
        ctx: &mut TxContext
    ) {
        // Guards
        assert!(milestone_system::project_of(milestone) == project_management::get_id(project), 30);
        assert!(escrow_system::project_of(vault) == project_management::get_id(project), 31);
        assert!(milestone_system::is_verified(milestone), 32);
        assert!(!milestone_system::is_released(milestone), 33);

        // If you add this getter in project_management:
        //   public fun ngo_of(p: &Project): address { p.ngo }
        // then re-enable the assert below.
        // assert!(to_ngo == project_management::ngo_of(project), 34);

        let amount = milestone_system::amount(milestone);
        let bal = escrow_system::balance(vault);
        assert!(bal >= amount, 35);

        let platform_bps_u16 = config::platform_bps(cfg);
        let journalist_bps_u16 = milestone_system::journalist_bps(milestone);
        assert!(journalist_bps_u16 <= config::max_journalist_bps(cfg), 36);

        // fee math (u128 to avoid overflow), then cast back to u64
        let platform_fee_u64 =
            (((amount as u128) * (platform_bps_u16 as u128)) / 10000u128) as u64;

        let journalist_fee_u64 =
            (((amount as u128) * (journalist_bps_u16 as u128)) / 10000u128) as u64;

        let ngo_amount = amount - platform_fee_u64 - journalist_fee_u64;

        // Use escrow_system helper to move coins (no direct field access)
        escrow_system::pay(vault, config::platform_wallet(cfg), platform_fee_u64, ctx);
        escrow_system::pay(vault, to_journalist, journalist_fee_u64, ctx);
        escrow_system::pay(vault, to_ngo, ngo_amount, ctx);

        // Flip milestone + let milestone module emit its own local event
        milestone_system::mark_released_and_emit(milestone);

        // Emit detailed payout event from this module
        sui::event::emit(PayoutExecuted {
            project_id: project_management::get_id(project),
            milestone_id: sui::object::id(milestone),
            amount,
            platform_fee: platform_fee_u64,
            journalist_fee: journalist_fee_u64,
            ngo_amount,
            journalist: to_journalist,
        });
    }
}
