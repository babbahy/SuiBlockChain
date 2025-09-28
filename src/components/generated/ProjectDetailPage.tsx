import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Users, Award, ShieldCheck, Lock, Check, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getProjectById, Project } from './projects-data';
import { useSuistainableTx } from '../../sui/tx'; // Corrected import path
import { useSuiClient, useCurrentAccount } from '@mysten/dapp-kit'; // Added useCurrentAccount
import { Transaction } from '@mysten/sui/transactions';
import { useZkSession } from '../../sui/zk/session.tsx';
import { executeZkTx } from '../../sui/zk/execute';
import { useNetworkVariable } from '../../sui/networkConfig'; // Added useNetworkVariable

export const ProjectDetailPage: React.FC<{ projectId: string }> = ({ projectId }) => {
  const beige = 'bg-[linear-gradient(135deg,_#F8F4ED_0%,_#EEF7F2_35%,_#E9F0FF_100%)]';
  const beigeText = 'text-[#1d1b19]';
  const softGreenBg = 'bg-[linear-gradient(135deg,_#DDF3EA_0%,_#E6F7F1_60%,_#F0FFFA_100%)]';
  const accent = 'text-[color(display-p3_0.12_0.41_0.32)]';
  const cardBorder = 'border-[#E4E8F0]';
  const muted = 'text-[#5a5956]';

  const project = getProjectById(projectId) as Project | undefined;

  const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
    <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)}>{children}</div>
  );

  if (!project) {
    return (
      <div className={cn('w-full min-h-dvh flex items-center justify-center', beige)}>
        <div className={cn('text-center', beigeText)}>
          <div className="mb-4">
            <a href="#projects" className={cn('inline-flex items-center gap-2 rounded-lg px-3 py-2 border', cardBorder, beigeText)}>
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </a>
          </div>
          <div className="text-lg">Project not found.</div>
        </div>
      </div>
    );
  }

  const [donationAmount, setDonationAmount] = useState(0);
  const [isDonating, setIsDonating] = useState(false);
  const [donationError, setDonationError] = useState<string | null>(null);

  const suiClient = useSuiClient();
  const currentAccount = useCurrentAccount(); // Correctly get the current connected wallet account
  const { session: zkSession } = useZkSession();
  const { call: suistainableTxCall, target } = useSuistainableTx(); // Correctly get the 'call' method
  const sustainablePackageId = useNetworkVariable("sustainablePackageId");

  const handleDonate = async () => {
    const activeAccountAddress = zkSession.address || currentAccount?.address;
    if (!activeAccountAddress) {
      setDonationError('Please connect your wallet or log in with zkLogin to fund.');
      return;
    }

    if (donationAmount <= 0) {
      setDonationError('Donation amount must be greater than 0.');
      return;
    }

    if (!project.vault_id) {
      setDonationError('Project vault not found. Cannot fund this project.');
      return;
    }

    setIsDonating(true);
    setDonationError(null);

    try {
      const txBuilder = (tx: Transaction) => {
        // Split the gas coin to get the donation amount
        const [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(donationAmount * 1_000_000_000)]); // Assuming SUI is 9 decimal places

        tx.moveCall({
          target: target('donate'), // Assuming `suistainable::donate` function
          arguments: [
            tx.object(project.id), // Project Object ID (suika::project_management::Project)
            tx.object(project.vault_id.id), // Vault Object ID (suika::escrow_system::Vault)
            coin, // The coin to donate (mut payment: Coin<SUI>)
            tx.pure.u64(donationAmount * 1_000_000_000), // amount: u64
          ],
        });
      };

      if (zkSession.address) {
        await executeZkTx(suiClient, zkSession, txBuilder);
      } else if (currentAccount) {
        const tx = new Transaction();
        tx.setSender(currentAccount.address);
        txBuilder(tx);
        await suiClient.signAndExecuteTransactionBlock({
          signer: currentAccount,
          transactionBlock: tx,
        });
      } else {
        throw new Error("No active wallet or zkLogin session.");
      }

      alert(`Donation of ${donationAmount} SUI successful!`);
      setDonationAmount(0);
    } catch (error: any) {
      console.error("Donation error:", error);
      setDonationError(error.message || 'Donation failed.');
    } finally {
      setIsDonating(false);
    }
  };

  return (
    <div className={cn('w-full min-h-dvh', beige)}>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{ mixBlendMode: 'normal' }}>
        <Container className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#projects" className={cn('inline-flex items-center gap-2 text-sm font-medium', beigeText)}>
              <ArrowLeft className="h-4 w-4" /> Projects
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#projects"><span>Projects</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#how"><span>How it works</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#impact"><span>Impact</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#faq"><span>FAQ</span></a>
          </nav>
          <div className="flex items-center gap-2">
            <a className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} href="#login">
              <span>Log in</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </header>

      <main>
        <section className="pt-8 md:pt-10">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border bg-white" style={{ borderColor: '#E4E8F0' }}>
                  <img src={project.cover} alt="" className="h-full w-full object-cover" />
                </div>
                <h1 className={cn('mt-5 text-2xl md:text-4xl font-semibold', beigeText)}>{project.title}</h1>
                <div className={cn('mt-2 flex flex-wrap items-center gap-4 text-sm', muted)}>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {project.location}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {project.date}</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {project.beneficiariesCount.toLocaleString()} beneficiaries</span>
                </div>
                <p className={cn('mt-4 text-base', muted)}>{project.summary}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.milestones.map((m, idx) => {
                    const isOpen = idx === project.currentMilestoneIndex;
                    const isCompleted = idx < project.currentMilestoneIndex;
                    return (
                      <div key={m.id} className={cn('rounded-xl border p-4 bg-white flex items-center justify-between', cardBorder)}>
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <Check className={cn('h-5 w-5', accent)} />
                          ) : isOpen ? (
                            <CheckCircle2 className={cn('h-5 w-5', accent)} />
                          ) : (
                            <Lock className={cn('h-5 w-5', muted)} />
                          )}
                          <div>
                            <div className={cn('text-sm font-semibold', beigeText)}>{m.name}</div>
                            <div className={cn('text-xs', muted)}>Target: {m.target}</div>
                          </div>
                        </div>
                        {isOpen ? (
                          <a href="#login" className={cn('text-sm font-medium hover:opacity-80', beigeText)}>Fund</a>
                        ) : isCompleted ? (
                          <span className={cn('text-xs font-medium', muted)}>Completed</span>
                        ) : (
                          <span className={cn('text-xs font-medium', muted)}>Locked</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="lg:col-span-1 space-y-4">
                <div className={cn('rounded-2xl border p-5 bg-white', cardBorder)}>
                  <div className={cn('text-sm', muted)}>Funding goal</div>
                  <div className={cn('text-2xl font-semibold', beigeText)}>{project.goal}</div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Timeline</div>
                      <div className={cn('mt-1 font-medium', beigeText)}>{project.timelineMonths} mo</div>
                    </div>
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Category</div>
                      <div className={cn('mt-1 font-medium', beigeText)}>{project.category}</div>
                    </div>
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Beneficiaries</div>
                      <div className={cn('mt-1 font-medium', beigeText)}>{project.beneficiariesCount.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <input
                      type="number"
                      placeholder="Amount (SUI)"
                      value={donationAmount === 0 ? '' : donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="0"
                    />
                    <button
                      onClick={handleDonate}
                      disabled={isDonating || donationAmount <= 0 || (!zkSession.address && !currentAccount)}
                      className={cn(
                        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm',
                        isDonating || donationAmount <= 0 || (!zkSession.address && !currentAccount)
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                          : 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110'
                      )}
                    >
                      {isDonating ? 'Funding…' : 'Fund current milestone'}
                    </button>
                    {donationError && <div className="text-red-600 text-xs mt-1">{donationError}</div>}
                    <div className={cn('text-xs text-center', muted)}>Verification occurs automatically when the NGO uploads evidence. Funds are released only after confirmation.</div>
                  </div>
                </div>

                <div className={cn('rounded-2xl border p-5 bg-white space-y-3', cardBorder)}>
                  <div className={cn('text-sm font-semibold', beigeText)}>NGO</div>
                  <div className={cn('text-base', beigeText)}>{project.ngo.name}</div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Success rate</div>
                      <div className={cn('mt-1 font-medium inline-flex items-center gap-1', beigeText)}>
                        <ShieldCheck className="h-4 w-4" /> {project.ngo.successRate}%
                      </div>
                    </div>
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Beneficiaries</div>
                      <div className={cn('mt-1 font-medium', beigeText)}>{project.ngo.beneficiaries.toLocaleString()}</div>
                    </div>
                    <div className="rounded-lg p-3 border" style={{ borderColor: '#E4E8F0' }}>
                      <div className={cn('text-[11px]', muted)}>Journalist proofs</div>
                      <div className={cn('mt-1 font-medium inline-flex items-center gap-1', beigeText)}>
                        <Award className="h-4 w-4" /> {project.ngo.journalistEndorsements}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn('rounded-2xl border p-5 bg-white space-y-3', cardBorder)}>
                  <div className={cn('text-sm font-semibold', beigeText)}>Verification process</div>
                  <ul className={cn('text-sm list-disc pl-5 space-y-1', muted)}>
                    <li>NGO uploads evidence after completing the current milestone</li>
                    <li>Automatic validation pipeline runs (incl. zkLogin community checks)</li>
                    <li>Assigned journalist confirms on site and submits a report</li>
                    <li>Funds are released automatically upon verified proof</li>
                  </ul>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};


