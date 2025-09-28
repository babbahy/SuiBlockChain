import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
  }) => <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)} data-magicpath-id="0" data-magicpath-path="SuikaMarketplaceLanding.tsx">{children}</div>;

  // @return
  return <SortableContainer dndKitId="5ca4ccf2-2854-4fef-8b41-f9a782870d23" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="62c8f58f-ce7d-428c-8b10-fdaa6358c789" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{
      mixBlendMode: 'normal'
    }} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="a7ce7aac-7e23-438a-ad23-052409e920e5" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="163648e7-39e5-4ffc-9492-53e43efb7962" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="5" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="6" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables</span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7b330c5d-a883-4608-8c12-3dd9be488031" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-8" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#projects" data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx"><span data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">Projects</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#how" data-magicpath-id="11" data-magicpath-path="SuikaMarketplaceLanding.tsx"><span data-magicpath-id="12" data-magicpath-path="SuikaMarketplaceLanding.tsx">How it works</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#impact" data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx"><span data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">Impact</span></a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#faq" data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx"><span data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">FAQ</span></a>
          </SortableContainer>

          <SortableContainer dndKitId="dd1f750a-8e42-4dc3-901c-0eeec44a336b" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="17" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="52151be7-4003-4ba5-b0c1-59c2ab2dc9bf" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="18" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="19" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="20" data-magicpath-path="SuikaMarketplaceLanding.tsx">Explore</span>
            </SortableContainer>
            <SortableContainer dndKitId="9d8b76e9-d803-4e2a-ad44-c2f6b026cdf6" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="21" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span data-magicpath-id="22" data-magicpath-path="SuikaMarketplaceLanding.tsx">Connect Wallet</span>
              <ArrowRight className="h-4 w-4" data-magicpath-id="23" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="885a3094-4dca-458f-9ca9-8146b06a98c4" containerType="regular" prevTag="main" data-magicpath-id="24" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="2b192b91-9f2f-447d-bcff-1edfa71f8fc3" containerType="regular" prevTag="section" className="relative overflow-hidden min-h-dvh flex items-center" data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          {/* Background embellishment: subtle gradients + logo marks */}
          <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden style={{
          background: 'radial-gradient(60% 40% at 0% 0%, rgba(29, 107, 81, 0.10) 0%, rgba(29, 107, 81, 0.00) 60%), radial-gradient(40% 30% at 100% 10%, rgba(200, 191, 175, 0.18) 0%, rgba(200, 191, 175, 0.00) 60%), radial-gradient(50% 40% at 100% 100%, rgba(33, 65, 120, 0.10) 0%, rgba(33, 65, 120, 0.00) 60%)'
        }} data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
          <SortableContainer dndKitId="cc39baf8-6c04-4614-904d-d66890b816a6" containerType="regular" prevTag="div" className="pointer-events-none absolute inset-0" aria-hidden data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <svg className="h-full w-full opacity-15" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <defs data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1" data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <stop offset="0%" stopColor="#1F6B51" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2BAA80" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <g data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <circle cx="200" cy="140" r="80" stroke="url(#g1)" strokeWidth="2" data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                <circle cx="980" cy="220" r="60" stroke="url(#g1)" strokeWidth="2" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                <circle cx="1060" cy="620" r="90" stroke="url(#g1)" strokeWidth="2" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                <circle cx="320" cy="640" r="70" stroke="url(#g1)" strokeWidth="2" data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </g>
            </svg>
          </SortableContainer>
          <Container className="py-12 md:py-16" data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="52c82489-d04a-4110-a756-3666d800965e" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto" data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <h1 className={cn('text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight')} style={{
              background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Blockchain-secured donations, locked until real world impact is verified.
              </h1>

              <SortableContainer dndKitId="3cc5c02e-996e-40c9-b056-01a1a6dd2c3a" containerType="regular" prevTag="button" className={cn('group relative inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 md:py-4', 'text-base md:text-lg font-semibold', 'transition-all duration-300 ease-out', 'bg-[radial-gradient(120%_120%_at_0%_0%,_#1F6B51_0%,_#2BAA80_45%,_#15664f_100%)] text-white', 'shadow-[0_10px_30px_-10px_rgba(31,107,81,0.45)]', 'hover:shadow-[0_18px_40px_-12px_rgba(31,107,81,0.55)]')} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <span className="relative z-10" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx">Explore</span>
                <span className={cn('absolute inset-0 rounded-full border opacity-40', 'border-white/40', 'transition-transform duration-300 ease-out', 'group-hover:scale-[1.03]')} aria-hidden data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                <span className={cn('pointer-events-none absolute -inset-px rounded-full opacity-0', 'bg-[radial-gradient(60%_60%_at_50%_0%,_#ffffff33_0%,_transparent_60%)]', 'transition-opacity duration-300 ease-out', 'group-hover:opacity-100')} aria-hidden data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="16b98bb6-3263-4b6b-b9cf-c01078064f3d" containerType="regular" prevTag="footer" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="f1c71641-bd0a-4e67-8be1-e80f639f36f4" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="a28502b2-7ef7-4ce9-bfe1-b4c124add956" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="27619749-927a-4754-8d26-6ee71ca57d81" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="66cff8cf-154e-4401-916e-06c17a473d2d" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy" data-magicpath-id="51" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms" data-magicpath-id="52" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status" data-magicpath-id="53" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Status <span className={cn('h-2 w-2 rounded-full bg-[linear-gradient(180deg,_#1F6B51_0%,_#2BAA80_100%)] inline-block')} aria-hidden data-magicpath-id="54" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </a>
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>
    </SortableContainer>;
};