module suika::config {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;

    /// One-time witness for module initialization.
    public struct CONFIG has drop {}

    /// Authority: holder can update config.
    public struct AdminCap has key {
        id: UID,
        admin: address,
    }

    /// Public, shared configuration.
    public struct FeeConfig has key {
        id: UID,
        /// basis points (1% = 100, 100% = 10_000)
        platform_bps: u16,
        max_journalist_bps: u16,
        platform_wallet: address,
    }

    /// Sui module initializer: ONLY (CONFIG, &mut TxContext) allowed.
    /// Set defaults and make the publisher the initial platform wallet.
    fun init(_: CONFIG, ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);

        let cap = AdminCap {
            id: object::new(ctx),
            admin: sender,
        };
        let cfg = FeeConfig {
            id: object::new(ctx),
            platform_bps: 0,
            max_journalist_bps: 1000,      // 10% cap for journalists by default
            platform_wallet: sender,       // default to publisher; can be changed later
        };

        // Give AdminCap to publisher; share FeeConfig for global read access.
        transfer::transfer(cap, sender);
        transfer::share_object(cfg);
    }

    // ===== Setters (authority = possession of AdminCap) =====

    public fun set_platform_fee(_cap: &AdminCap, cfg: &mut FeeConfig, bps: u16) {
        assert!(bps <= 10_000, 1);
        cfg.platform_bps = bps;
    }

    public fun set_max_journalist_fee(_cap: &AdminCap, cfg: &mut FeeConfig, bps: u16) {
        assert!(bps <= 10_000, 2);
        cfg.max_journalist_bps = bps;
    }

    public fun set_platform_wallet(_cap: &AdminCap, cfg: &mut FeeConfig, wallet: address) {
        cfg.platform_wallet = wallet;
    }

    // ===== Getters =====

    public fun platform_bps(cfg: &FeeConfig): u16 { cfg.platform_bps }
    public fun max_journalist_bps(cfg: &FeeConfig): u16 { cfg.max_journalist_bps }
    public fun platform_wallet(cfg: &FeeConfig): address { cfg.platform_wallet }
}
