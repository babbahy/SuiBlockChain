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
  return <SortableContainer dndKitId="03c97ca8-8a12-48df-94cb-46011fdca1d5" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="1ceb277b-af9d-4a20-96e7-f913f6439fe2" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{
      mixBlendMode: 'normal'
    }} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="237dedfa-1667-4ca6-b960-f500cb41c1f8" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="300afe0a-1f39-420f-9d09-c38f1fc5d75f" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="5" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="6" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables</span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="56be96d2-b3d9-447d-8849-397a351f05d3" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="40b71ab2-089e-46d0-9ef9-48bff2738732" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="88277dc6-0ce8-4e81-987e-6d775e84c7ab" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="11" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="12" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="848014d1-3b55-415d-8c9b-1d0a4d4a0bb3" containerType="regular" prevTag="main" data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="732aab6c-54eb-41be-877d-acd11c51c5b2" containerType="regular" prevTag="section" className="relative overflow-hidden min-h-dvh flex items-center" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-12 md:py-16" data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="ec635ea0-2a0b-4f46-897f-6ba45b17f26b" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <h1 className={cn('text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight')} style={{
              background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }} data-magicpath-id="17" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Blockchain-secured donations, locked until real world impact is verified.
              </h1>

              <SortableContainer dndKitId="bcdfae7f-258f-4211-bc0e-c3065f7414c1" containerType="regular" prevTag="button" className={cn('group relative inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 md:py-4', 'text-base md:text-lg font-semibold', 'transition-all duration-300 ease-out', 'bg-[radial-gradient(120%_120%_at_0%_0%,_#1F6B51_0%,_#2BAA80_45%,_#15664f_100%)] text-white', 'shadow-[0_10px_30px_-10px_rgba(31,107,81,0.45)]', 'hover:shadow-[0_18px_40px_-12px_rgba(31,107,81,0.55)]')} data-magicpath-id="18" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <span className="relative z-10" data-magicpath-id="19" data-magicpath-path="SuikaMarketplaceLanding.tsx">Explore</span>
                <span className={cn('absolute inset-0 rounded-full border opacity-40', 'border-white/40', 'transition-transform duration-300 ease-out', 'group-hover:scale-[1.03]')} aria-hidden data-magicpath-id="20" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                <span className={cn('pointer-events-none absolute -inset-px rounded-full opacity-0', 'bg-[radial-gradient(60%_60%_at_50%_0%,_#ffffff33_0%,_transparent_60%)]', 'transition-opacity duration-300 ease-out', 'group-hover:opacity-100')} aria-hidden data-magicpath-id="21" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="24afe060-5f3f-4862-881a-60c61803eece" containerType="regular" prevTag="footer" data-magicpath-id="22" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="23" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="a2a53c37-19ff-46f3-994d-8105849e57a4" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="24" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="59e9514e-cdfd-40e7-b0ff-b4c320da3d6e" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="3e2b34e6-5469-4de3-bdfc-afb5cc2092c9" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="04932f54-5296-4fe1-bfd7-714423251749" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy" data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status" data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Status <span className={cn('h-2 w-2 rounded-full bg-[linear-gradient(180deg,_#1F6B51_0%,_#2BAA80_100%)] inline-block')} aria-hidden data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </a>
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>
    </SortableContainer>;
};