import { DEFAULT_PROVER_URL } from "./config";
import type { EphemeralBundle } from "./helpers";

export interface ProverRequest {
  jwt: string;
  extendedEphemeralPublicKey: string; // base64 string
  maxEpoch: string; // as string per API
  jwtRandomness: string; // base64 or bigint as string
  salt: string; // base64 or bigint as string
  keyClaimName: "sub" | "email" | string;
}

export type PartialZkLoginSignature = {
  proofPoints: unknown;
  issBase64Details: unknown;
  headerBase64: string;
};

export async function requestProof(
  req: ProverRequest,
  proverUrl?: string,
): Promise<PartialZkLoginSignature> {
  const url = proverUrl ?? DEFAULT_PROVER_URL;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    throw new Error(`Prover error: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as PartialZkLoginSignature;
}

