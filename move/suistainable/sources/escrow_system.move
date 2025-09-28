module suika::escrow_system {
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::coin::{Self, Coin};
    use sui::sui::SUI;

    /// Coffre qui détient l’argent d’un projet.
    public struct Vault has key {
        id: UID,
        project_id: ID,
        balance: Coin<SUI>,
    }

    public fun pay(
    vault: &mut Vault,
    to: address,
    amount: u64,
    ctx: &mut TxContext
    ) {
        let c = sui::coin::split(&mut vault.balance, amount, ctx);
        sui::transfer::public_transfer(c, to);
    }

    /// Créer un Vault vide pour un projet (appelle ça après avoir créé le Project).
    /// On partage le Vault pour autoriser dépôts/payouts publics (selon tes guards).
    public fun create_vault(project_id: ID, ctx: &mut TxContext) {
        let zero = sui::coin::zero<SUI>(ctx);
        let v = Vault { id: object::new(ctx), project_id, balance: zero };
        let id = object::id(&v);
        transfer::share_object(v);
    }

    /// Déposer une pièce SUI dans le coffre (fusion avec le solde).
    /// Le front doit passer l’objectId du Vault du projet, et un Coin<SUI> du donateur
    /// (déjà split côté `payment_processing` pour contenir EXACTEMENT le montant du don).
    public fun deposit(vault: &mut Vault, payment: Coin<SUI>) {
        sui::coin::join(&mut vault.balance, payment);
    }

    /// Payer plateforme + journaliste + ONG depuis le coffre.
    /// (Appelle ceci dans la même tx que la mise à jour d’état du projet/milestone)
    public fun payout(
        vault: &mut Vault,
        to_platform: address,
        platform_fee: u64,
        to_journalist: address,
        journalist_fee: u64,
        to_ngo: address,
        ngo_amount: u64,
        ctx: &mut TxContext
    ) {
        // Prélever et transférer les parts. `split` attend &mut coin, amount, ctx.
    let fee_coin = sui::coin::split(&mut vault.balance, platform_fee, ctx);
    sui::transfer::public_transfer(fee_coin, to_platform);

    let j_coin = sui::coin::split(&mut vault.balance, journalist_fee, ctx);
    sui::transfer::public_transfer(j_coin, to_journalist);

    let ngo_coin = sui::coin::split(&mut vault.balance, ngo_amount, ctx);
    sui::transfer::public_transfer(ngo_coin, to_ngo);
    }

    /// Helpers de lecture
    public fun vault_id(v: &Vault): ID { object::id(v) }
    public fun project_of(v: &Vault): ID { v.project_id }
    public fun balance(v: &Vault): u64 { sui::coin::value(&v.balance) }
}
