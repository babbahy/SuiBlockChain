import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { generateNonce, generateRandomness, jwtToAddress, getExtendedEphemeralPublicKey } from "@mysten/sui/zklogin";
import { jwtDecode } from "jwt-decode";
import type { ZkLoginEnv } from "./config";

export interface JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

export interface EphemeralBundle {
  keypair: Ed25519Keypair;
  maxEpoch: number;
  randomness: string; // store as string for prover API
  nonce: string;
}

export async function createEphemeral(env: ZkLoginEnv): Promise<EphemeralBundle> {
  const rpc = env.rpcUrl ?? getFullnodeUrl("devnet");
  const client = new SuiClient({ url: rpc });
  const { epoch } = await client.getLatestSuiSystemState();
  const maxEpoch = Number(epoch) + 2;
  const keypair = new Ed25519Keypair();
  const rnd: unknown = generateRandomness();
  const nonce = generateNonce(
    keypair.getPublicKey(),
    maxEpoch,
    typeof rnd === 'bigint' ? (rnd as bigint) : BigInt(rnd as string),
  );
  const randomness = typeof rnd === 'bigint' ? rnd.toString() : String(rnd);
  return { keypair, maxEpoch, randomness, nonce };
}

export function parseJwt(encoded: string): JwtPayload {
  return jwtDecode(encoded) as JwtPayload;
}

export function deriveAddress(jwt: string, userSalt: string | bigint) {
  return jwtToAddress(jwt, userSalt);
}

export function extendedEphemeralPublicKey(bundle: EphemeralBundle): string {
  return getExtendedEphemeralPublicKey(bundle.keypair.getPublicKey());
}

