module suika::payment_processing {
    use std::option;
    use std::string::String;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::coin::{Self, Coin};
    use sui::sui::SUI;

    /// Local event (so we can emit from this module)
    public struct DonationLogged has copy, drop {
        project_id: ID,
        donor: address,
        amount: u64,
        pass_id: ID,
    }

    public struct AccessPass has key {
        id: UID,
        project_id: ID,
        donor: address,
        amount: u64,
        tier: u8,
    }

    public entry fun donate(
        project: &mut suika::project_management::Project,
        vault: &mut suika::escrow_system::Vault,
        mut payment: Coin<SUI>,
        amount: u64,
        ctx: &mut TxContext
    ) {
        assert!(amount > 0, 1);

        let pid = suika::project_management::get_id(project);
        assert!(suika::escrow_system::project_of(vault) == pid, 2);

        // If project.vault_id is set, it must match this vault
        let vo = suika::project_management::get_vault_id(project);
        if (option::is_some(&vo)) {
            let vid_ref = option::borrow(&vo); // &ID
            assert!(*vid_ref == sui::object::id(vault), 3);
        };

        // Split exact donation, return change
        let change = sui::coin::split(&mut payment, amount, ctx);
        transfer::public_transfer(change, tx_context::sender(ctx));

        // Deposit and update totals
        suika::escrow_system::deposit(vault, payment);
        suika::project_management::add_received(project, amount);

        // Simple tiering
        let tier: u8 =
            if (amount >= 1_000_000_000 * 1000) { 2 }
            else if (amount >= 1_000_000_000 * 100) { 1 }
            else { 0 };

        // Mint certification/pass
        let pass = AccessPass {
            id: object::new(ctx),
            project_id: pid,
            donor: tx_context::sender(ctx),
            amount,
            tier,
        };
        let pass_id = sui::object::id(&pass);
        transfer::transfer(pass, tx_context::sender(ctx));

        // Emit local event (avoid cross-module event construction)
        sui::event::emit(DonationLogged {
            project_id: pid,
            donor: tx_context::sender(ctx),
            amount,
            pass_id,
        });
    }

    public fun receive_amount(p: &AccessPass): u64 { p.amount }
}
