import { useEffect, useMemo, useState } from 'react';
import { useZkSession } from '../sui/zk/session';
import { parseJwt, deriveAddress, extendedEphemeralPublicKey } from '../sui/zk/helpers';
import { requestProof } from '../sui/zk/proof';
import { DEFAULT_PROVER_URL } from '../sui/zk/config';

export function ZkCallback() {
  const { session, setSession } = useZkSession();
  const [jwt, setJwt] = useState<string | null>(null);
  const [salt, setSalt] = useState<string>("");
  const [status, setStatus] = useState<string>("Waiting for JWT…");
  const [error, setError] = useState<string | null>(null);

  // Extract id_token or code from URL
  useEffect(() => {
    const url = new URL(window.location.href);
    const idToken = url.searchParams.get('id_token');
    // Note: For providers returning 'code', implement token exchange flow server-side.
    if (idToken) {
      setJwt(idToken);
      setStatus('JWT received. Provide your user salt to continue.');
    } else {
      setError('Missing id_token in callback URL.');
    }
  }, []);

  const payload = useMemo(() => (jwt ? parseJwt(jwt) : undefined), [jwt]);

  async function continueWithSalt() {
    try {
      if (!jwt || !session.ephemeral) throw new Error('Missing JWT or ephemeral session.');
      if (!salt) throw new Error('Please enter your user salt.');
      setStatus('Deriving address…');
      const address = deriveAddress(jwt, salt);

      setStatus('Requesting ZK proof…');
      const ext = extendedEphemeralPublicKey(session.ephemeral);
      const partial = await requestProof({
        jwt,
        extendedEphemeralPublicKey: ext,
        maxEpoch: String(session.maxEpoch ?? session.ephemeral.maxEpoch),
        jwtRandomness: session.ephemeral.randomness.toString(),
        salt: String(salt),
        keyClaimName: 'sub',
      }, DEFAULT_PROVER_URL);

      setSession({
        ...session,
        jwt,
        jwtPayload: payload,
        userSalt: String(salt),
        address,
        partialProof: partial,
      });
      setStatus('zkLogin session ready. You can now navigate back.');
    } catch (e: any) {
      setError(e?.message ?? 'Unknown error');
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold">zkLogin Callback</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div className="text-sm text-slate-700">{status}</div>
      {jwt && (
        <div className="space-y-2">
          <div className="text-sm break-all"><strong>sub</strong>: {payload?.sub ?? 'n/a'}</div>
          <label className="block text-sm">User Salt</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={salt}
            onChange={(e) => setSalt(e.target.value)}
            placeholder="Enter your user salt (16-byte / <2^128)"
          />
          <button onClick={continueWithSalt} className="px-3 py-2 rounded bg-slate-900 text-white">
            Continue
          </button>
        </div>
      )}
      <div>
        <button onClick={() => (window.location.href = '/')} className="px-3 py-2 rounded border">
          Back to Home
        </button>
      </div>
    </div>
  );
}


