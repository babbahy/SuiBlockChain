module suika::project_management {
    use suika::milestone_system;
    use suika::escrow_system;
    use suika::verification_system;

    use std::string::{Self, String};
    use std::vector;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;

    public struct Project has key {
        id: UID,
        ngo: address,
        title: String,
        description: String,
        target_amount: u64,
        received_amount: u64,
        milestones: vector<ID>,        // pointeurs vers objets Milestone (shared)
        vault_id: option::Option<ID>,  // Coin<SUI> escrow (géré par escrow_system)
        next_to_release: u64,
    }

    public struct ProjectCreated has copy, drop { project_id: ID, ngo: address }
    public struct VaultBound has copy, drop { project_id: ID, vault_id: ID }
    public struct DonationReceived has copy, drop {
        project_id: ID, donor: address, amount: u64, pass_id: ID
    }

    public fun create_project(
        title: String,
        description: String,
        target_amount: u64,
        ctx: &mut TxContext
    ): ID {
        let p = Project {
            id: object::new(ctx),
            ngo: tx_context::sender(ctx),
            title, description,
            target_amount,
            received_amount: 0,
            milestones: vector::empty<ID>(),
            vault_id: option::none<ID>(),
            next_to_release: 0,
        };
        let id = object::id(&p);
        transfer::share_object(p);
        sui::event::emit(ProjectCreated { project_id: id, ngo: tx_context::sender(ctx) });
        id
    }

    public entry fun bind_vault(proj: &mut Project, vault_id: ID) {
        assert!(option::is_none(&proj.vault_id), 10);
        option::fill(&mut proj.vault_id, vault_id);
        sui::event::emit(VaultBound { project_id: object::id(proj), vault_id });
    }

    /// Appelé par milestone_system pour enregistrer un milestone créé.
    public fun push_milestone(proj: &mut Project, m_id: ID) {
        vector::push_back(&mut proj.milestones, m_id);
    }

    public fun get_id(p: &Project): ID { object::id(p) }
    public fun get_vault_id(p: &Project): option::Option<ID> { p.vault_id }

    /// Accessible seulement aux modules déclarés en `friend` (ex: payment_processing).
    public fun add_received(proj: &mut Project, delta: u64) {
        proj.received_amount = proj.received_amount + delta;
    }
}
