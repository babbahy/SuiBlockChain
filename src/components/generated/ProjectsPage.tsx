import React from 'react';
import { ArrowRight, HeartHandshake, MapPin, Calendar, Search, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { projects } from './projects-data';

export const ProjectsPage: React.FC = () => {
  const beige = 'bg-[linear-gradient(135deg,_#F8F4ED_0%,_#EEF7F2_35%,_#E9F0FF_100%)]';
  const beigeText = 'text-[#1d1b19]';
  const softGreenBg = 'bg-[linear-gradient(135deg,_#DDF3EA_0%,_#E6F7F1_60%,_#F0FFFA_100%)]';
  const accent = 'text-[color(display-p3_0.12_0.41_0.32)]';
  const cardBorder = 'border-[#E4E8F0]';
  const muted = 'text-[#5a5956]';

  const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
    <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)}>{children}</div>
  );

  

  return (
    <div className={cn('w-full min-h-dvh', beige)}>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{
        mixBlendMode: 'normal'
      }}>
        <Container className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <a href="#home" className="inline-flex items-center">
                <img
                  src="https://res.cloudinary.com/dw5ba0va3/image/upload/f_auto,q_auto,dpr_2.0,e_trim/v1759027072/Suika_A4_2_st56lb.png"
                  alt="Suistainables logo"
                  className="h-5 md:h-6 lg:h-7 w-auto object-contain"
                />
              </a>
              <span className={cn('text-[11px] md:text-xs', muted)}>Humanitarian Projects</span>
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
        <section className="relative overflow-hidden py-10 md:py-14">
          <Container>
            <div className="mb-8 md:mb-12 text-center">
              <h2
                className={cn('text-3xl md:text-5xl font-semibold leading-tight tracking-tight')}
                style={{
                  background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Explore Projects to Support
              </h2>
              <p className={cn('mt-3 md:mt-4 text-sm md:text-base', muted)}>
                Funds are held on‑chain and released only when independent verification confirms impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((p) => (
                <article key={p.id} className={cn('group rounded-2xl border shadow-sm overflow-hidden h-full flex flex-col', cardBorder, 'bg-white')}> 
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" aria-hidden />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
                    <h3 className={cn('text-lg md:text-xl font-semibold', beigeText)}>{p.title}</h3>
                    <div className={cn('flex items-center gap-3 text-xs md:text-sm', muted)}>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {p.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {p.date}</span>
                    </div>
                    <p className={cn('text-sm', muted)}>{p.summary}</p>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      <span className={cn('text-sm md:text-base font-medium', beigeText)}>Goal: {p.goal}</span>
                      <a
                        href={`#project/${p.id}`}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold',
                          'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110'
                        )}
                      >
                        More
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
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
              <div className={cn('text-sm', muted)}>© {new Date().getFullYear()} Suistainables. All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy">Privacy</a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms">Terms</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};


