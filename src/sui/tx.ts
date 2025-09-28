import { Transaction } from "@mysten/sui/transactions";
import { useNetworkVariable } from "./networkConfig";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";

export function useSuistainableTx() {
  const sustainablePackageId = useNetworkVariable("sustainablePackageId");
  const suiClient = useSuiClient();
  const { mutateAsync: signAndExecute } = useSignAndExecuteTransaction();

  async function call(entry: string, args: (tx: Transaction) => void) {
    const tx = new Transaction();
    args(tx);
    const result = await signAndExecute({ transaction: tx });
    await suiClient.waitForTransaction({ digest: result.digest });
    return result;
  }

  function target(func: string) {
    return `${sustainablePackageId}::suistainable::${func}`;
  }

  return { call, target };
}

