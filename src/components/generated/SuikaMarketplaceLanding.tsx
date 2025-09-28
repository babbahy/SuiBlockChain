import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, ShieldCheck, TrendingUp, ArrowRight, Award, HeartHandshake, MapPin, Calendar, Users, Sparkles, Search, Play, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useIsMobile } from '../../hooks/use-mobile';

// @component: SuikaMarketplaceLanding
export const SuikaMarketplaceLanding: React.FC = () => {
  const isMobile = useIsMobile();
  // Replace flat colors with modern gradient-based identity
  const beige = 'bg-[linear-gradient(135deg,_#F8F4ED_0%,_#EEF7F2_35%,_#E9F0FF_100%)]';
  const beigeText = 'text-[#1d1b19]';
  const softGreenBg = 'bg-[linear-gradient(135deg,_#DDF3EA_0%,_#E6F7F1_60%,_#F0FFFA_100%)]';
  const accent = 'text-[color(display-p3_0.12_0.41_0.32)]';
  const cardBorder = 'border-[#E4E8F0]';
  const muted = 'text-[#5a5956]';
  const Container: React.FC<React.PropsWithChildren<{
    className?: string;
  }>> = ({
    children,
    className
  }) => <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)}>{children}</div>;

  // @return
  return <div className={cn('w-full min-h-dvh', beige)}>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{
      mixBlendMode: 'normal'
    }}>
        <Container className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <img
                src="https://res.cloudinary.com/dw5ba0va3/image/upload/f_auto,q_auto,dpr_2.0,e_trim/v1759027072/Suika_A4_2_st56lb.png"
                alt="Suistainables logo"
                className="h-5 md:h-6 lg:h-7 w-auto object-contain"
              />
              <span className={cn('text-[11px] md:text-xs', muted)}>Humanitarian Marketplace</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#projects"><span>Projects</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#how"><span>How it works</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#impact"><span>Impact</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#faq"><span>FAQ</span></a>
          </nav>

          <div className="flex items-center gap-2">
            <button className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)}>
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </button>
            <button className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')}>
              <span>Log in</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden min-h-dvh flex items-center" id="home">
          {/* Background embellishment: subtle gradients + logo marks */}
          <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden style={{
          background: 'radial-gradient(60% 40% at 0% 0%, rgba(29, 107, 81, 0.10) 0%, rgba(29, 107, 81, 0.00) 60%), radial-gradient(40% 30% at 100% 10%, rgba(200, 191, 175, 0.18) 0%, rgba(200, 191, 175, 0.00) 60%), radial-gradient(50% 40% at 100% 100%, rgba(33, 65, 120, 0.10) 0%, rgba(33, 65, 120, 0.00) 60%)'
        }} />
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <svg className="h-full w-full opacity-15" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1F6B51" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2BAA80" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <g>
                <circle cx="200" cy="140" r="80" stroke="url(#g1)" strokeWidth="2" />
                <circle cx="980" cy="220" r="60" stroke="url(#g1)" strokeWidth="2" />
                <circle cx="1060" cy="620" r="90" stroke="url(#g1)" strokeWidth="2" />
                <circle cx="320" cy="640" r="70" stroke="url(#g1)" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <Container className="py-12 md:py-16">
            <div className="flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto">
              <h1 className={cn('text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight')} style={{
              background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
                Blockchain-secured donations, locked until real world impact is verified.
              </h1>

              <button className={cn('group relative inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 md:py-4', 'text-base md:text-lg font-semibold', 'transition-all duration-300 ease-out', 'bg-[radial-gradient(120%_120%_at_0%_0%,_#1F6B51_0%,_#2BAA80_45%,_#15664f_100%)] text-white', 'shadow-[0_10px_30px_-10px_rgba(31,107,81,0.45)]', 'hover:shadow-[0_18px_40px_-12px_rgba(31,107,81,0.55)]')}>
                <span className="relative z-10">Explore</span>
                <span className={cn('absolute inset-0 rounded-full border opacity-40', 'border-white/40', 'transition-transform duration-300 ease-out', 'group-hover:scale-[1.03]')} aria-hidden />
                <span className={cn('pointer-events-none absolute -inset-px rounded-full opacity-0', 'bg-[radial-gradient(60%_60%_at_50%_0%,_#ffffff33_0%,_transparent_60%)]', 'transition-opacity duration-300 ease-out', 'group-hover:opacity-100')} aria-hidden />
              </button>
            </div>
          </Container>
        </section>

        <section id="how" className="py-14 md:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={cn('text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} style={{
                background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>How it works</h2>
              <p className={cn('mt-3 md:mt-4 text-sm md:text-base', muted)}>A transparent, verification-first marketplace connecting NGOs, donors, and journalists.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className={cn('rounded-2xl border bg-white p-5 md:p-6', cardBorder)}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: '#E6F7F1' }}>
                  <Globe2 className={cn('h-5 w-5', accent)} />
                </div>
                <h3 className={cn('mt-4 text-lg font-semibold', beigeText)}>For NGOs</h3>
                <ul className={cn('mt-2 text-sm space-y-2', muted)}>
                  <li>Project storefronts with rich listings</li>
                  <li>Milestone tracking with clear timelines</li>
                  <li>Request professional verification</li>
                  <li>Build reputation across completed projects</li>
                  <li>Receive funds tied to outcomes</li>
                </ul>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 md:p-6', cardBorder)}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: '#E6F7F1' }}>
                  <ShieldCheck className={cn('h-5 w-5', accent)} />
                </div>
                <h3 className={cn('mt-4 text-lg font-semibold', beigeText)}>For Donors</h3>
                <ul className={cn('mt-2 text-sm space-y-2', muted)}>
                  <li>Browse verified projects like a marketplace</li>
                  <li>Fund specific projects you care about</li>
                  <li>Get real-time updates & media</li>
                  <li>See journalist-verified evidence of impact</li>
                  <li>Track your portfolio of funded projects</li>
                </ul>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 md:p-6', cardBorder)}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: '#E6F7F1' }}>
                  <Award className={cn('h-5 w-5', accent)} />
                </div>
                <h3 className={cn('mt-4 text-lg font-semibold', beigeText)}>For Journalists</h3>
                <ul className={cn('mt-2 text-sm space-y-2', muted)}>
                  <li>Paid verification jobs (50–300 SUI)</li>
                  <li>Build portfolio of impact stories</li>
                  <li>Leverage local expertise</li>
                  <li>Grow reputation through accurate reporting</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className={cn('rounded-2xl border bg-white p-5 md:p-6', cardBorder)}>
                <h4 className={cn('text-base md:text-lg font-semibold', beigeText)}>Project listing process</h4>
                <ol className={cn('mt-3 text-sm space-y-2 list-decimal pl-5', muted)}>
                  <li>NGO creates a project with goal and budget</li>
                  <li>Defines milestones with timelines</li>
                  <li>Publishes in their Kiosk storefront</li>
                  <li>Donors fund specific amounts toward the goal</li>
                  <li>Funds held in escrow until milestones verified</li>
                </ol>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 md:p-6', cardBorder)}>
                <h4 className={cn('text-base md:text-lg font-semibold', beigeText)}>Verification process</h4>
                <ol className={cn('mt-3 text-sm space-y-2 list-decimal pl-5', muted)}>
                  <li>NGO completes a milestone</li>
                  <li>Community validation via zkLogin submissions</li>
                  <li>Assigned journalist verifies on site</li>
                  <li>Report submitted and recorded</li>
                  <li>Funds released to NGO upon proof</li>
                </ol>
              </div>
            </div>
          </Container>
        </section>

        <section id="impact" className="py-14 md:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={cn('text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} style={{
                background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>Impact</h2>
              <p className={cn('mt-3 md:mt-4 text-sm md:text-base', muted)}>Funds are secured in escrow and released only after independent verification confirms impact.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className={cn('rounded-2xl border bg-white p-5 text-center', cardBorder)}>
                <Sparkles className={cn('h-6 w-6 mx-auto', accent)} />
                <div className={cn('mt-2 text-2xl font-semibold', beigeText)}>250+</div>
                <div className={cn('text-xs', muted)}>Verified projects</div>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 text-center', cardBorder)}>
                <ShieldCheck className={cn('h-6 w-6 mx-auto', accent)} />
                <div className={cn('mt-2 text-2xl font-semibold', beigeText)}>88%</div>
                <div className={cn('text-xs', muted)}>Average NGO success rate</div>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 text-center', cardBorder)}>
                <TrendingUp className={cn('h-6 w-6 mx-auto', accent)} />
                <div className={cn('mt-2 text-2xl font-semibold', beigeText)}>$4.2M</div>
                <div className={cn('text-xs', muted)}>Funds secured in escrow</div>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5 text-center', cardBorder)}>
                <Users className={cn('h-6 w-6 mx-auto', accent)} />
                <div className={cn('mt-2 text-2xl font-semibold', beigeText)}>120k</div>
                <div className={cn('text-xs', muted)}>Beneficiaries helped</div>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="py-14 md:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={cn('text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} style={{
                background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>FAQ</h2>
              <p className={cn('mt-3 md:mt-4 text-sm md:text-base', muted)}>Answers about funding, verification, and how Suistainables keeps projects accountable.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className={cn('rounded-2xl border bg-white p-5', cardBorder)}>
                <div className={cn('font-semibold', beigeText)}>How are funds protected?</div>
                <p className={cn('mt-2 text-sm', muted)}>Funds are held on‑chain in milestone-based escrow. Release happens only when independent verification confirms the milestone was completed.</p>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5', cardBorder)}>
                <div className={cn('font-semibold', beigeText)}>Who verifies the impact?</div>
                <p className={cn('mt-2 text-sm', muted)}>Professional journalists are assigned to visit the site, interview beneficiaries, and submit a public report. Community validation via zkLogin supplements this.</p>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5', cardBorder)}>
                <div className={cn('font-semibold', beigeText)}>What can NGOs customize?</div>
                <p className={cn('mt-2 text-sm', muted)}>NGOs run storefront Kiosks, define milestones, upload documentation, and build their reputation through consistent delivery.</p>
              </div>
              <div className={cn('rounded-2xl border bg-white p-5', cardBorder)}>
                <div className={cn('font-semibold', beigeText)}>What do donors receive?</div>
                <p className={cn('mt-2 text-sm', muted)}>Transparent progress, media updates, and final proof once journalists verify. Your portfolio tracks everything you’ve supported.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer>
        <Container className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden>
                <HeartHandshake className={cn('h-4 w-4', accent)} />
              </div>
              <div className={cn('text-sm', muted)}>© {new Date().getFullYear()} Suistainables All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status">
                Status <span className={cn('h-2 w-2 rounded-full bg-[linear-gradient(180deg,_#1F6B51_0%,_#2BAA80_100%)] inline-block')} aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>;
};