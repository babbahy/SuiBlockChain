import { useEffect, useMemo, useState } from 'react';
import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import { Container, Theme } from './settings/types';
// %IMPORT_STATEMENT
import { SuikaMarketplaceLanding } from './components/generated/SuikaMarketplaceLanding'
import { ProjectsPage } from './components/generated/ProjectsPage'
import { ProjectDetailPage } from './components/generated/ProjectDetailPage'
import { LoginButton } from './components/LoginButton';
import { ZkCallback } from './components/ZkCallback';
import { useZkSession } from './sui/zk/session.tsx';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const [hash, setHash] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const { session: zkSession } = useZkSession();
  const currentWalletAccount = useCurrentAccount();
  const { mutate: disconnectSuiWallet } = useDisconnectWallet(); // Corrected: use mutate

  const generatedComponent = useMemo(() => {
    if (hash.startsWith('#/zk-callback') || window.location.pathname === '/zk-callback') {
      return <ZkCallback />;
    }
    if (hash.startsWith('#project/')) {
      const projectId = hash.replace('#project/', '');
      return <ProjectDetailPage projectId={projectId} />;
    }
    if (hash.startsWith('#projects')) {
      return <ProjectsPage />;
    }
    return <SuikaMarketplaceLanding />; // %EXPORT_STATEMENT%
  }, [hash]);

  const content = (
    <div className="w-full">
      <div className="w-full flex justify-end p-2 gap-2">
        {/* Conditional rendering for login/logout buttons */}
        {zkSession.address ? (
          <LoginButton label="Logout (zkLogin)" />
        ) : currentWalletAccount ? (
          <button onClick={() => disconnectSuiWallet()} className="px-3 py-2 rounded bg-red-600 text-white">
            Logout (Sui Wallet)
          </button>
        ) : (
          <LoginButton label="Log In" />
        )}
        {!zkSession.address && <ConnectButton />}
      </div>
      {generatedComponent}
    </div>
  );

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {content}
      </div>
    );
  }
  return content;
}

export default App;