module suika::verification_system {
    use suika::milestone_system;

    use std::string::String;
    use sui::object::{Self, UID};
    use sui::tx_context;              // module (for tx_context::sender)
    use sui::tx_context::TxContext;   // type
    use sui::transfer;

    public struct JournalistCap has key {
        id: UID,
        journalist: address,
    }

    public fun mint_cap(to: address, ctx: &mut TxContext) {
        let cap = JournalistCap { id: object::new(ctx), journalist: to };
        transfer::transfer(cap, to);
    }

    public fun verify_milestone(
        m: &mut milestone_system::Milestone,
        cap: &JournalistCap,
        evidence_cid: String,
        ctx: &mut TxContext
    ) {
        // Only the cap owner can verify
        assert!(tx_context::sender(ctx) == cap.journalist, 20);
        assert!(!milestone_system::is_verified(m), 21);
        milestone_system::mark_verified(m, cap.journalist, evidence_cid);
    }
}
