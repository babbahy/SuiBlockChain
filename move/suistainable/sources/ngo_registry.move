module suika::ngo_registry {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use std::string::{Self, String};

    public struct NGOProfile has key {
        id: UID,
        owner: address,
        name: String,
        country: String,
    }

    public fun create(name: String, country: String, ctx: &mut TxContext) {
        let p = NGOProfile { id: object::new(ctx), owner: tx_context::sender(ctx), name, country };
        transfer::transfer(p, tx_context::sender(ctx));
    }
}
