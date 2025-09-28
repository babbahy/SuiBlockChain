import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { genAddressSeed, getZkLoginSignature } from "@mysten/sui/zklogin";
import type { ZkSession } from "./session";

export async function executeZkTx(
  client: SuiClient,
  session: ZkSession,
  build: (tx: Transaction) => void,
) {
  if (!session.ephemeral || !session.jwtPayload || !session.userSalt || !session.partialProof) {
    throw new Error("zkLogin session incomplete");
  }

  const tx = new Transaction();
  if (!session.address) throw new Error("Missing zkLogin address");
  tx.setSender(session.address);
  build(tx);

  const { bytes, signature: userSignature } = await tx.sign({
    client,
    signer: session.ephemeral.keypair,
  });

  const addressSeed = genAddressSeed(
    BigInt(session.userSalt),
    'sub',
    session.jwtPayload.sub!,
    Array.isArray(session.jwtPayload.aud) ? session.jwtPayload.aud[0] : session.jwtPayload.aud!,
  ).toString();

  const zkLoginSignature = getZkLoginSignature({
    inputs: {
      ...(session.partialProof as any),
      addressSeed,
    },
    maxEpoch: session.maxEpoch!,
    userSignature,
  });

  return client.executeTransactionBlock({ transactionBlock: bytes, signature: zkLoginSignature });
}


