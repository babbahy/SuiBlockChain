#[test_only]
module suika::payment_processing_test {
    use std::string;
    use sui::sui::SUI;
    use sui::coin;
    use sui::tx_context::{Self, TxContext};
    use sui::test_scenario as ts;
    use sui::test_utils::{assert_eq};
    use sui::transfer;

    use suika::project_management;
    use suika::escrow_system;
    use suika::payment_processing;

    const NGO: address = @0xA11CE;
    const DONOR: address = @0xD0;

    const ONE_SUI: u64 = 1_000_000_000;



    /// ✅ Happy path: DONATE crédite le vault et n’abort pas.
    #[test]
    fun test_donate_happy_path() {
        let mut ts = ts::begin(NGO);
        ts::next_tx(&mut ts ,NGO);

        let title = string::utf8(b"Demo Project");
        let desc  = string::utf8(b"Impact description");
        let target = 10 * ONE_SUI;

        let pid = project_management::create_project(title, desc, target, ts.ctx());

        escrow_system::create_vault(pid,  ts.ctx());

        ts::next_tx(&mut ts, DONOR);

        // Récupérer les objets partagés (Project + Vault) depuis le scénario
        // NOTE: l'ordre de take_shared dépend de l'ordre d'émission dans ta VM;
        // si besoin, appelle deux fois et matche par type.
        let mut project: project_management::Project = ts::take_shared(&mut ts);
        let mut vault: escrow_system::Vault = ts::take_shared(&mut ts);


        // Donateur a 10 SUI
        ts::next_tx(&mut ts, DONOR);
        let payment = coin::mint_for_testing<SUI>(10 * ONE_SUI, ts.ctx());

        // Tx donateur: donne 3 SUI
        ts::next_tx(&mut ts, DONOR);

        let amount = 3 * ONE_SUI;

        payment_processing::donate(&mut project, &mut vault, payment, amount, ts.ctx());

        // Vérifier que le vault a été crédité d'au moins `amount`
        let bal = escrow_system::balance(&vault);
        assert_eq(bal >= amount, true);

        // Remettre les objets partagés si d'autres tests suivent dans le même scenario
        ts::return_shared(project);
        ts::return_shared(vault);

        ts::end(ts);
    }

    /// ❌ amount == 0 -> abort code 1
    #[test, expected_failure(abort_code = 1)]
    fun test_donate_zero_amount_aborts() {
        let mut ts = ts::begin(NGO);
        ts::next_tx(&mut ts ,NGO);

        let title = string::utf8(b"Demo Project");
        let desc  = string::utf8(b"Impact description");
        let target = 10 * ONE_SUI;

        let pid = project_management::create_project(title, desc, target, ts.ctx());

        escrow_system::create_vault(pid,  ts.ctx());

        ts::next_tx(&mut ts, NGO);

        // Récupérer les objets partagés (Project + Vault) depuis le scénario
        // NOTE: l'ordre de take_shared dépend de l'ordre d'émission dans ta VM;
        // si besoin, appelle deux fois et matche par type.
        let mut project: project_management::Project = ts::take_shared(&mut ts);
        let mut vault: escrow_system::Vault = ts::take_shared(&mut ts);

        // Donateur a 5 SUI
        ts::next_tx(&mut ts, DONOR);
        let payment = coin::mint_for_testing<SUI>(5 * ONE_SUI, ts.ctx());

        ts::next_tx(&mut ts, DONOR);

        // amount = 0 => abort(1)
        payment_processing::donate(&mut project, &mut vault, payment, 0, ts.ctx());

        ts::return_shared(project);
        ts::return_shared( vault);
        ts::end(ts);
    }

    /// ❌ Vault ≠ Project -> abort code 2
    #[test, expected_failure(abort_code = 2)]
    fun test_donate_wrong_vault_aborts() {
        let mut ts = ts::begin(NGO);
        ts::next_tx(&mut ts ,NGO);
        // Projet A + Vault A
        let title = string::utf8(b"Demo Project");
        let desc  = string::utf8(b"Impact description");
        let target = 10 * ONE_SUI;

        let pid = project_management::create_project(title, desc, target, ts.ctx());

        escrow_system::create_vault(pid,  ts.ctx());

        ts::next_tx(&mut ts, DONOR);
        // Récupérer les objets partagés (Project + Vault) depuis le scénario
        // NOTE: l'ordre de take_shared dépend de l'ordre d'émission dans ta VM;
        // si besoin, appelle deux fois et matche par type.
        let mut project_a: project_management::Project = ts::take_shared(&mut ts);
        let mut vault_a: escrow_system::Vault = ts::take_shared(&mut ts);
        // Projet B + Vault B
        ts::next_tx(&mut ts ,NGO);

        let title = string::utf8(b"Demo Project");
        let desc  = string::utf8(b"Impact description");
        let target = 10 * ONE_SUI;

        let pid = project_management::create_project(title, desc, target, ts.ctx());

        escrow_system::create_vault(pid,  ts.ctx());

        ts::next_tx(&mut ts, DONOR);

        // Récupérer les objets partagés (Project + Vault) depuis le scénario
        // NOTE: l'ordre de take_shared dépend de l'ordre d'émission dans ta VM;
        // si besoin, appelle deux fois et matche par type.
        let mut project_b: project_management::Project = ts::take_shared(&mut ts);
        let mut vault_b: escrow_system::Vault = ts::take_shared(&mut ts);

        // Donateur a 5 SUI
        ts::next_tx(&mut ts, DONOR);
        let payment = coin::mint_for_testing<SUI>(5 * ONE_SUI, ts.ctx());

        ts::next_tx(&mut ts, DONOR);

        // Utilise volontairement le vault B avec le project A -> doit abort(2)
        payment_processing::donate(&mut project_a, &mut vault_b, payment, 1 * ONE_SUI, ts.ctx());

        ts::return_shared( project_a);
        ts::return_shared(vault_a);
        ts::return_shared( project_b);
        ts::return_shared(vault_b);
        ts.end();
    }
}
