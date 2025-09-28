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
  const softGreen = 'text-[color(display-p3_0.16_0.46_0.36)]';
  const softGreenBg = 'bg-[linear-gradient(135deg,_#DDF3EA_0%,_#E6F7F1_60%,_#F0FFFA_100%)]';
  const accent = 'text-[color(display-p3_0.12_0.41_0.32)]';
  const card = 'bg-white/85 backdrop-blur-sm';
  const cardBorder = 'border-[#E4E8F0]';
  const muted = 'text-[#5a5956]';
  const Container: React.FC<React.PropsWithChildren<{
    className?: string;
  }>> = ({
    children,
    className
  }) => <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)} data-magicpath-id="0" data-magicpath-path="SuikaMarketplaceLanding.tsx">{children}</div>;
  const SectionTitle: React.FC<React.PropsWithChildren<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
  }>> = ({
    eyebrow,
    title,
    subtitle,
    children
  }) => <SortableContainer dndKitId="c10c0510-de28-4f2d-97aa-5d0a3c13eb93" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      {eyebrow ? <SortableContainer dndKitId="bc42b5f5-09bd-4118-ad7f-013129aff210" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} style={{
      display: "none"
    }} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span style={{
        display: "none"
      }} data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">{eyebrow}</span>
        </SortableContainer> : null}
      <SortableContainer dndKitId="6404056d-e9d9-4b4e-80e8-9cdfb16562da" containerType="regular" prevTag="div" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <h2 className={cn('text-2xl md:text-4xl font-semibold tracking-tight', beigeText)} data-magicpath-id="5" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</h2>
        {subtitle ? <p className={cn('mt-3 text-base md:text-lg', muted)} data-magicpath-id="6" data-magicpath-path="SuikaMarketplaceLanding.tsx">{subtitle}</p> : null}
      </SortableContainer>
      {children}
    </SortableContainer>;
  const Stat: React.FC<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }> = ({
    label,
    value,
    icon
  }) => <SortableContainer dndKitId="f462d3bb-231b-45fb-9679-e4da3ead1c8a" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4 md:p-6', card, cardBorder)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="15ab2277-43b2-479c-a659-e8673fd07731" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-lg p-2', softGreenBg)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="efc3bc2b-d3a5-456a-8417-f34e5a2b0814" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <div className={cn('text-2xl md:text-3xl font-bold', beigeText)} data-magicpath-id="11" data-magicpath-path="SuikaMarketplaceLanding.tsx">{value}</div>
          <div className={cn('text-sm', muted)} data-magicpath-id="12" data-magicpath-path="SuikaMarketplaceLanding.tsx">{label}</div>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
  const Feature: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }> = ({
    title,
    description,
    icon
  }) => <SortableContainer dndKitId="10dbfec9-4f86-4174-a736-dee9190fc156" containerType="regular" prevTag="motion.div" whileHover={{
    y: -4
  }} className={cn('rounded-2xl border p-5 md:p-6 h-full', card, cardBorder)} data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="db292d2b-8f9f-4375-89ef-6fcbc89be343" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-xl p-3', softGreenBg)} data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="f7c25791-44ce-4ef1-aac9-c2743b9ba4c2" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <h3 className={cn('text-lg font-semibold', beigeText)} data-magicpath-id="17" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</h3>
          <p className={cn('mt-2 text-sm leading-relaxed', muted)} data-magicpath-id="18" data-magicpath-path="SuikaMarketplaceLanding.tsx">{description}</p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
  const ProgressPill: React.FC<{
    label: string;
    value: string;
  }> = ({
    label,
    value
  }) => <SortableContainer dndKitId="e9b33807-8b34-4c4f-bf6d-787324e91a8f" containerType="regular" prevTag="div" className={cn('flex items-center justify-between gap-4 rounded-xl border px-4 py-2 text-sm', card, cardBorder, 'min-w-[180px]')} style={{
    display: "none"
  }} data-magicpath-id="19" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <span className={cn('font-medium', beigeText)} data-magicpath-id="20" data-magicpath-path="SuikaMarketplaceLanding.tsx">{label}</span>
      <span className={cn('font-semibold', softGreen)} data-magicpath-id="21" data-magicpath-path="SuikaMarketplaceLanding.tsx">{value}</span>
    </SortableContainer>;
  const MilestoneItem: React.FC<{
    title: string;
    amount: string;
    status: 'funding' | 'complete' | 'verifying';
    date?: string;
  }> = ({
    title,
    amount,
    status,
    date
  }) => {
    const statusStyles = status === 'complete' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : status === 'verifying' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-sky-50 text-sky-700 border-sky-200';
    const statusLabel = status === 'complete' ? 'Completed' : status === 'verifying' ? 'Awaiting verification' : 'Funding';
    const StatusIcon = status === 'complete' ? <CheckCircle2 className="h-4 w-4" data-magicpath-id="22" data-magicpath-path="SuikaMarketplaceLanding.tsx" /> : status === 'verifying' ? <Award className="h-4 w-4" data-magicpath-id="23" data-magicpath-path="SuikaMarketplaceLanding.tsx" /> : <TrendingUp className="h-4 w-4" data-magicpath-id="24" data-magicpath-path="SuikaMarketplaceLanding.tsx" />;
    return <SortableContainer dndKitId="c9d56208-adb1-4ad5-8ee9-15fbd7d7273a" containerType="regular" prevTag="div" className={cn('flex flex-col gap-3 rounded-xl border p-4', 'bg-white/90', cardBorder)} data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="ce2730fd-9116-4dfa-9c3d-414867eba6fe" containerType="regular" prevTag="div" className="flex items-center justify-between gap-3" data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="b1ebb303-3d83-4c7e-bfb8-32e673dd639a" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="6b555299-ca44-4ef8-9aad-6c34851533b9" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs', statusStyles)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {StatusIcon}
              <span className="font-medium" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">{statusLabel}</span>
            </SortableContainer>
          </SortableContainer>
          {date ? <SortableContainer dndKitId="d0d18133-7f67-41ab-93ee-9d127e974708" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 text-xs', muted)} data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Calendar className="h-4 w-4" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">{date}</span>
            </SortableContainer> : null}
        </SortableContainer>
        <SortableContainer dndKitId="6c338f36-7cae-420d-8f3d-b29fd34c81de" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="60be905f-cc32-4e26-aeaa-5800b21f299d" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-semibold', beigeText)} data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</div>
            <div className={cn('text-sm', muted)} data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone budget</div>
          </SortableContainer>
          <SortableContainer dndKitId="7052bc99-0602-4dcd-8869-762ca09f6e4c" containerType="regular" prevTag="div" className={cn('text-right')} data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-bold', softGreen)} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">{amount}</div>
            <SortableContainer dndKitId="5ee66040-0a51-47f9-abae-b265a2c9a088" containerType="regular" prevTag="button" className={cn('mt-1 inline-flex items-center gap-1 text-xs font-medium', accent)} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              See details <ArrowUpRight className="h-3.5 w-3.5" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="e69bab58-808b-4886-b52c-0214f12a86c9" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="5a1af855-8f1e-4c4f-92e4-6adde0d59b67" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" style={{
      mixBlendMode: 'normal'
    }} data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="375f1573-f722-4b51-ba93-55ba445834b0" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="a36b0c88-f9fd-4c02-abbd-80c4fdc5bea4" containerType="regular" prevTag="div" className={cn('h-9 w-9 rounded-xl flex items-center justify-center', softGreenBg)} aria-hidden style={{
            display: "none"
          }} data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <HeartHandshake className={cn('h-5 w-5', accent)} style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="15fdebc4-a212-4331-8e52-5c61528bd6e8" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables
            </span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="daee6f66-70e6-43f9-a402-d4fc7308028a" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-6" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#projects" data-magicpath-id="51" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Projects
            </a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#how-it-works" data-magicpath-id="52" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              How it works
            </a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#impact" data-magicpath-id="53" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Impact
            </a>
            <a className={cn('text-sm font-medium hover:opacity-80', beigeText)} href="#faq" data-magicpath-id="54" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              FAQ
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="3695c93a-2525-48f2-9272-a29d84af84b1" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="55" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="3648127d-b1d9-4121-971f-68d1f41647db" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="56" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="57" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="decfc0d5-f391-428c-8a33-47efd28bd910" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="58" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="59" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="98c108de-05be-4547-9c1f-aef194e05a03" containerType="regular" prevTag="main" data-magicpath-id="60" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="428f1dcd-8133-40f6-a64a-97f06e771ed5" containerType="regular" prevTag="section" className="relative overflow-hidden min-h-dvh flex items-center" data-magicpath-id="61" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-12 md:py-16" data-magicpath-id="62" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="c91d43d2-9bfa-4791-90ff-4ab28b26d57e" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="63" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="c0a1868b-4cda-4359-9d36-e10754567212" containerType="regular" prevTag="div" className="text-center max-w-4xl mx-auto" data-magicpath-id="64" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <h1 className={cn('text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight')} style={{
                background: 'linear-gradient(90deg, #0F3E31 0%, #C8BFAF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }} data-magicpath-id="65" data-magicpath-path="SuikaMarketplaceLanding.tsx">Blockchain-secured donations, locked until real world impact is verified.</h1>
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="19d8cfca-0772-4321-9148-e5e140753e1a" containerType="regular" prevTag="section" id="trust" className="pt-20" data-magicpath-id="66" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="67" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Trust-first design" title="Verified organizations. Transparent milestones. On-chain accountability." subtitle="Every project undergoes NGO verification. Each milestone is a dynamic field on SUI, added as conditions evolve. Journalists and local verifiers attest to outcomes for credible impact." data-magicpath-id="68" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="79338dae-a881-4deb-a692-7304328b8442" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="69" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="NGO Verification" description="Organizations pass a rigorous KYC and due diligence process before listing. Their reputation compounds over time." icon={<ShieldCheck className={cn('h-6 w-6', accent)} data-magicpath-id="71" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="70" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Dynamic Milestones" description="Projects evolve in the field. Add, update, and fund milestones dynamically using SUI's Dynamic Fields." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="73" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="72" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Independent Validation" description="Local journalists and auditors verify outcomes with media evidence and attestations recorded on-chain." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="75" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="74" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="a4f178a2-db62-48e7-a0e6-d6ff2088b18f" containerType="regular" prevTag="section" id="projects" data-magicpath-id="76" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="77" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Featured now" title="Humanitarian projects seeking support" subtitle="Discover trustworthy initiatives across regions and causes." data-magicpath-id="78" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <div className="mt-8 grid md:grid-cols-3 gap-5" data-magicpath-id="79" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {[1, 2, 3].map(i => <SortableContainer dndKitId="fe08908b-b1ed-41a0-829f-646f99651f5c" containerType="regular" prevTag="motion.article" key={i} whileHover={{
              y: -6
            }} className={cn('rounded-2xl overflow-hidden border', cardBorder, 'bg-white/90 backdrop-blur-sm')} data-magicpath-id="80" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="52fa3972-5b44-428c-8983-9300b3ad2c1a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="81" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <img src={i === 1 ? 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1593111774831-0952b2c5d5f0?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop'} alt="Project cover" className="h-40 w-full object-cover" data-magicpath-id="82" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <SortableContainer dndKitId="eaef8c81-c9cc-4a24-92a4-4a96f28286fc" containerType="regular" prevTag="div" className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-white/80 backdrop-blur" data-magicpath-id="83" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <Globe2 className={cn('h-4 w-4', accent)} data-magicpath-id="84" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('font-medium', beigeText)} data-magicpath-id="85" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global South</span>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="e3cd6341-8fb5-4e09-8841-bf8d022e81a0" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="86" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="b84328fa-af7c-46a1-8624-e4c3eb42f334" containerType="regular" prevTag="div" className="flex items-start justify-between gap-3" data-magicpath-id="87" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <h3 className={cn('text-base font-semibold', beigeText)} data-magicpath-id="88" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        {i === 1 ? 'Cyclone Relief: Emergency Kits' : i === 2 ? 'Rural Health: Mobile Clinics' : 'Education Access: Solar Classroom'}
                      </h3>
                      <SortableContainer dndKitId="d95416a7-5bd4-4ea1-9836-b39667af6478" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', softGreenBg, accent)} data-magicpath-id="89" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <ShieldCheck className="h-3.5 w-3.5" data-magicpath-id="90" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        Verified
                      </SortableContainer>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm line-clamp-2', muted)} style={{
                  display: "none"
                }} data-magicpath-id="91" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      {i === 1 ? 'Distributing food, water purification, and shelter materials to families impacted by severe cyclones.' : i === 2 ? 'Operating mobile clinics to deliver essential primary care to underserved rural communities.' : 'Deploying solar-powered digital classrooms to improve access to quality learning.'}
                    </p>

                    <SortableContainer dndKitId="752ecb72-4e4b-497f-bcf0-4e001d0e5554" containerType="regular" prevTag="div" className="mt-4" style={{
                  display: "none"
                }} data-magicpath-id="92" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="888609f5-60de-4918-af72-e1b2d2619717" containerType="regular" prevTag="div" className="flex items-center justify-between text-xs" style={{
                    display: "none"
                  }} data-magicpath-id="93" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <span className={muted} style={{
                      display: "none"
                    }} data-magicpath-id="94" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestones funded</span>
                        <span className={cn('font-semibold', softGreen)} data-magicpath-id="95" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '3/5' : i === 2 ? '2/4' : '4/6'}</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="b2ef2a9b-86d0-4b15-9fff-48f7051b15bc" containerType="regular" prevTag="div" className="mt-1.5 h-2 w-full rounded-full bg-[linear-gradient(90deg,_#E9EDF5_0%,_#E7F4EE_100%)]" style={{
                    background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                    display: "none"
                  }} data-magicpath-id="96" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className="h-2 rounded-full bg-[linear-gradient(90deg,_#1F6B51_0%,_#2BAA80_100%)]" style={{
                      width: i === 1 ? '60%' : i === 2 ? '45%' : '70%',
                      background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                      display: "none"
                    }} aria-hidden data-magicpath-id="97" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>

                    <SortableContainer dndKitId="c1ef7daf-6614-4c9c-b7ad-a2baf27bc8d0" containerType="regular" prevTag="div" className="mt-4 flex items-center justify-between" style={{
                  display: "none"
                }} data-magicpath-id="98" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="552619bc-83f1-4699-b3a2-d4ef0c2cf2fb" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="99" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <Users className={cn('h-4 w-4', accent)} data-magicpath-id="100" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        <span className={cn('text-xs', muted)} data-magicpath-id="101" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '524' : i === 2 ? '312' : '781'} donors</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="6c61474e-c9e1-4c9c-9892-c22013f2ef74" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-1 text-sm font-medium', accent)} data-magicpath-id="102" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        View project <ArrowUpRight className="h-4 w-4" data-magicpath-id="103" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>)}
            </div>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="1633ff36-cc5d-4aba-a9c2-be0f041e6fac" containerType="regular" prevTag="section" id="how-it-works" style={{
        display: "none"
      }} data-magicpath-id="104" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="105" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="How SUIka works" title="A simple, transparent flow" subtitle="From project creation to impact verification, every step is recorded for accountability." data-magicpath-id="106" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="a2930f54-f06c-4c30-bc15-a5be814e6802" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="107" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="1. NGO creates project" description="Approved NGOs publish a project and add its first milestone on-chain." icon={<HeartHandshake className={cn('h-6 w-6', accent)} data-magicpath-id="109" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="108" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="2. Donors fund milestones" description="Backers fund specific phases as needs evolve, with funds locked to that milestone." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="111" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="110" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="3. Journalists verify" description="Independent verifiers confirm outcomes with geo-tagged media and attestations." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="113" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="112" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="5b45867d-db09-40c1-a950-786b119552e2" containerType="regular" prevTag="section" id="impact" data-magicpath-id="114" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="115" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Impact in numbers" title="Scaling trust and outcomes" subtitle="SUIka’s transparent model accelerates funding and reduces overhead, so more resources reach those who need them most." data-magicpath-id="116" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="4cc9bd1b-51f7-47cd-a9ab-26471d8c41df" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="117" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Stat label="Avg. fee reduction" value="32%" icon={<TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="119" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="118" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Verified milestones" value="9,842" icon={<CheckCircle2 className={cn('h-5 w-5', accent)} data-magicpath-id="121" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="120" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Countries reached" value="52" icon={<Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="123" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="122" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Journalist network" value="1,140" icon={<Award className={cn('h-5 w-5', accent)} data-magicpath-id="125" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="124" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="42a726f9-56ea-4f96-a486-579d6f188cd8" containerType="regular" prevTag="section" id="cta" data-magicpath-id="126" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="127" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="a30a277d-15ff-49ae-a886-69f359f252c9" containerType="regular" prevTag="div" className={cn('relative overflow-hidden rounded-2xl border p-6 md:p-10', 'bg-[linear-gradient(135deg,_#EAF6F0_0%,_#EEF4FF_60%,_#F8F4ED_100%)]', cardBorder)} data-magicpath-id="128" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {!isMobile && <>
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#DDF3EA_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="129" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#F1E8D9_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="130" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </>}

              <SortableContainer dndKitId="57f18dd6-45f1-4ab1-91f5-aada848e7beb" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-6 items-center" data-magicpath-id="131" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="727a4a40-1b73-4f21-9920-6575cfc408b7" containerType="regular" prevTag="div" data-magicpath-id="132" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="133" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    For NGOs and Donors
                  </div>
                  <h3 className={cn('mt-3 text-2xl md:text-3xl font-semibold', beigeText)} data-magicpath-id="134" data-magicpath-path="SuikaMarketplaceLanding.tsx">Join Suistainables trusted marketplace</h3>
                  <p className={cn('mt-3 text-sm md:text-base', muted)} data-magicpath-id="135" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    NGOs: publish dynamic, transparent projects. Donors: fund with confidence and follow impact in real time.
                  </p>

                  <SortableContainer dndKitId="5a3418f5-21df-4115-9999-cf0312dfc20c" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="136" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="686bd606-59ab-4295-90b3-a086012b150c" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="137" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Apply as NGO
                      <ArrowRight className="h-4 w-4" data-magicpath-id="138" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="139" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Explore projects
                    </button>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="66d1c3c5-7e27-4263-8705-a2570d5cb441" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="140" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="da52dbdb-377e-4125-a573-e8d15d0efe43" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="141" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="ed3de668-3aaa-4938-9284-b69440547bf7" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="142" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className={cn('h-5 w-5', accent)} data-magicpath-id="143" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="144" data-magicpath-path="SuikaMarketplaceLanding.tsx">Verified NGOs</span>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm', muted)} data-magicpath-id="145" data-magicpath-path="SuikaMarketplaceLanding.tsx">Rigorous checks and evolving reputation scores.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="7fd31e17-3d9d-41ac-a6bc-1d98cb33872f" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="146" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Award className={cn('h-5 w-5', accent)} data-magicpath-id="147" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="148" data-magicpath-path="SuikaMarketplaceLanding.tsx">Independent Impact</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="149" data-magicpath-path="SuikaMarketplaceLanding.tsx">Journalist attestations for outcome validation.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="a7cd8226-b5d1-4891-8187-9a9a28fd8d6b" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="150" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="151" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="152" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone Funding</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="153" data-magicpath-path="SuikaMarketplaceLanding.tsx">Targeted support for each project phase.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="74da1e7a-946b-4d3b-b55a-4ab03251eef8" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="154" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="155" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="156" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global Access</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="157" data-magicpath-path="SuikaMarketplaceLanding.tsx">Optimized for mobile, low-bandwidth environments.</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="c39f0a76-2224-4a70-8422-176dd44bb266" containerType="regular" prevTag="footer" data-magicpath-id="158" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="159" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="add48fe6-ca38-4886-bb4e-862820b2b07f" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="160" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="65163cb9-427d-4ec9-b893-e658e9d12631" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="161" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="ab2bbdde-7b0e-4fbd-95e8-be5f8b3e7a60" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="162" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="163" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="164" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="51fdf8a1-acbb-4966-92c2-c9b85009a34d" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="165" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy" data-magicpath-id="166" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms" data-magicpath-id="167" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status" data-magicpath-id="168" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Status <span className={cn('h-2 w-2 rounded-full bg-[linear-gradient(180deg,_#1F6B51_0%,_#2BAA80_100%)] inline-block')} aria-hidden data-magicpath-id="169" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </a>
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>
    </SortableContainer>;
};