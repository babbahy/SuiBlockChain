import { useCallback, useState } from 'react';
import { createEphemeral } from '../sui/zk/helpers';
import { getAuthUrl, type ZkLoginEnv } from '../sui/zk/config';
import { useZkSession } from '../sui/zk/session.tsx';

// NOTE: Replace placeholders with your actual OAuth client and redirect
const zkEnv: ZkLoginEnv = {
  provider: 'google',
  clientId: import.meta.env.VITE_ZK_CLIENT_ID ?? 'YOUR_CLIENT_ID',
  redirectUrl: import.meta.env.VITE_ZK_REDIRECT_URL ?? (window.location.origin + '/zk-callback'),
  proverUrl: import.meta.env.VITE_ZK_PROVER_URL, // optional, defaults to dev prover
};

export function LoginButton({ label = 'Log In' }: { label?: string }) {
  const { session, setSession, clear: clearZkSession } = useZkSession();
  const [busy, setBusy] = useState(false);

  const onLogin = useCallback(async () => {
    try {
      setBusy(true);
      const ephemeral = await createEphemeral({ provider: zkEnv.provider, clientId: zkEnv.clientId, redirectUrl: zkEnv.redirectUrl, proverUrl: zkEnv.proverUrl });
      setSession({ ephemeral, maxEpoch: ephemeral.maxEpoch });
      const url = getAuthUrl(zkEnv, ephemeral.nonce);
      window.location.assign(url);
    } finally {
      setBusy(false);
    }
  }, [setSession]);

  const onLogout = useCallback(() => {
    clearZkSession();
    window.location.assign('/'); // Redirect home after logout
  }, [clearZkSession]);

  if (session.address) {
    return (
      <button onClick={onLogout} className="px-3 py-2 rounded bg-red-600 text-white">
        Logout (zkLogin)
      </button>
    );
  }

  return (
    <button onClick={onLogin} disabled={busy} className="px-3 py-2 rounded bg-slate-900 text-white">
      {busy ? 'Preparing…' : label}
    </button>
  );
}


