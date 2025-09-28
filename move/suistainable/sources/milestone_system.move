module suika::milestone_system {
    use std::option;
    use std::string;           // module (so you can call string::utf8)
    use std::string::String; 
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;
    use sui::transfer;

    public struct Milestone has key, store {
        id: UID,
        project_id: ID,
        name: String,
        amount_to_release: u64,
        verified: bool,
        released: bool,
        verifier: option::Option<address>,
        evidence_cid: String,         // e.g., IPFS/Arweave CID
        journalist_fee_bps: u16,       // bounded by config
    }

    public struct MilestoneVerified has copy, drop {
        milestone_id: ID, project_id: ID, verifier: address,
    }
    public struct MilestoneReleased has copy, drop {
        milestone_id: ID, project_id: ID,
    }

    public entry fun create(
        project: &mut suika::project_management::Project,
        name: String,
        amount: u64,
        journalist_fee_bps: u16,
        ctx: &mut TxContext
    ): ID {
        let m = Milestone {
            id: object::new(ctx),
            project_id: suika::project_management::get_id(project),
            name,
            amount_to_release: amount,
            verified: false,
            released: false,
            verifier: option::none<address>(),
            evidence_cid: string::utf8(b""),
            journalist_fee_bps,
        };
        let id = object::id(&m);
        transfer::share_object(m);
        suika::project_management::push_milestone(project, id);
        id
    }

    public fun mark_verified(m: &mut Milestone, who: address, cid: String) {
    m.verified = true;
    m.verifier = option::some<address>(who);
    m.evidence_cid = cid; // move it into storage

    sui::event::emit(MilestoneVerified {
        milestone_id: object::id(m),
        project_id: m.project_id,
        verifier: who,
    });
}

    public fun mark_released_and_emit(m: &mut Milestone) {
        m.released = true;
        sui::event::emit(MilestoneReleased {
            milestone_id: object::id(m),
            project_id: m.project_id,
        });
    }
    public fun project_of(m: &Milestone): ID { m.project_id }
    public fun amount(m: &Milestone): u64 { m.amount_to_release }
    public fun journalist_bps(m: &Milestone): u16 { m.journalist_fee_bps }
    public fun is_verified(m: &Milestone): bool { m.verified }
    public fun is_released(m: &Milestone): bool { m.released }
}
