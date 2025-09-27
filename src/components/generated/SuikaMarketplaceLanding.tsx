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
  }) => <SortableContainer dndKitId="023ad759-e15c-48b1-a674-0fba726a4b44" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      {eyebrow ? <SortableContainer dndKitId="6f758118-f11c-4ba4-8e20-3557d9d78203" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} style={{
      display: "none"
    }} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span style={{
        display: "none"
      }} data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">{eyebrow}</span>
        </SortableContainer> : null}
      <SortableContainer dndKitId="87a95ad4-a545-4e58-8172-cf27e2750c77" containerType="regular" prevTag="div" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="61940cc7-bbb4-44cb-b25b-7fd7105c3178" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4 md:p-6', card, cardBorder)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="59a604a9-4e05-447f-8aa2-708d92897882" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-lg p-2', softGreenBg)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="33c8693e-36d4-4fe0-87ca-b7b11bb9098c" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="07147dc4-f1a4-4663-b151-6e6244142a04" containerType="regular" prevTag="motion.div" whileHover={{
    y: -4
  }} className={cn('rounded-2xl border p-5 md:p-6 h-full', card, cardBorder)} data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="acb83999-fc33-47ad-839f-877711964b89" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-xl p-3', softGreenBg)} data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="1ee42ab1-c29b-40b7-9e01-d206c7d5468d" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="b12a6d53-0974-4871-ad4d-a55bc44516f7" containerType="regular" prevTag="div" className={cn('flex items-center justify-between gap-4 rounded-xl border px-4 py-2 text-sm', card, cardBorder, 'min-w-[180px]')} style={{
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
    return <SortableContainer dndKitId="97d58ae9-2b59-4314-b5d3-f5997f9b7bbc" containerType="regular" prevTag="div" className={cn('flex flex-col gap-3 rounded-xl border p-4', 'bg-white/90', cardBorder)} data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="7c3e6d52-e8fe-4ec0-b349-e6cb0f2e3e42" containerType="regular" prevTag="div" className="flex items-center justify-between gap-3" data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="50c4be2d-57ba-43fd-a6d4-51abda4c00a5" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="70706e15-1ce1-45a9-8d05-5fde1f3b9f83" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs', statusStyles)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {StatusIcon}
              <span className="font-medium" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">{statusLabel}</span>
            </SortableContainer>
          </SortableContainer>
          {date ? <SortableContainer dndKitId="4f601650-0990-49fd-b7f9-185a6d95a157" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 text-xs', muted)} data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Calendar className="h-4 w-4" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">{date}</span>
            </SortableContainer> : null}
        </SortableContainer>
        <SortableContainer dndKitId="048c3fc1-e457-4ab4-b2ef-f4d66e814c45" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="e300419d-da86-443c-afe8-de5dfab2f869" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-semibold', beigeText)} data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</div>
            <div className={cn('text-sm', muted)} data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone budget</div>
          </SortableContainer>
          <SortableContainer dndKitId="2aaea022-66c2-4c3c-95ba-0430e2ab0d0b" containerType="regular" prevTag="div" className={cn('text-right')} data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-bold', softGreen)} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">{amount}</div>
            <SortableContainer dndKitId="4aeb3f0a-8d71-476c-9278-29990135a938" containerType="regular" prevTag="button" className={cn('mt-1 inline-flex items-center gap-1 text-xs font-medium', accent)} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              See details <ArrowUpRight className="h-3.5 w-3.5" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="bea30b6f-dbf0-464d-bd67-13c821a48430" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="6f96ef13-b700-401e-a7c6-87667e61eaa4" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60" data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="a47570d5-f911-4d1e-9353-a8c5e15a6ba5" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="95a147d9-7ad0-4e40-bcee-62ff1cce8aba" containerType="regular" prevTag="div" className={cn('h-9 w-9 rounded-xl flex items-center justify-center', softGreenBg)} aria-hidden style={{
            display: "none"
          }} data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <HeartHandshake className={cn('h-5 w-5', accent)} style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="13248e4f-bd30-4e23-8557-c6ffe1f6b5aa" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables
            </span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="eb2042f2-d60a-44a7-ac3e-601941291914" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-6" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

          <SortableContainer dndKitId="4366d415-2287-420c-bf99-b8e898d0490b" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="55" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="150e7374-d2bb-4979-9aff-f6b6d1425361" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="56" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="57" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="af9f6485-abf5-470a-a5a8-9732746eac83" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="58" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="59" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="f35aa0f5-50d1-4bfd-934a-ede7718219f1" containerType="regular" prevTag="main" data-magicpath-id="60" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="1f36025a-241f-4d9f-8af4-21ffc60d3a00" containerType="regular" prevTag="section" className="relative overflow-hidden" data-magicpath-id="61" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="62" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="b95d7cbc-ab58-4be6-a957-571506b32376" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" style={{
            display: "flex",
            flexDirection: "row"
          }} data-magicpath-id="63" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="68473e92-2cf5-4718-ba02-376b40ab497a" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} style={{
                display: "none"
              }} data-magicpath-id="65" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Built on SUI • Dynamic Milestones • Verified Impact
                </div>
                <h1 className={cn('mt-4 text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} data-magicpath-id="66" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Fund trusted humanitarian projects with real-time, verifiable progress
                </h1>
                <p className={cn('mt-4 text-base md:text-lg leading-relaxed', muted)} data-magicpath-id="67" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables is a decentralized marketplace where verified NGOs publish projects with dynamic milestones. Donors fund specific phases and journalists validate real-world outcomes—for radical transparency.</p>

                <SortableContainer dndKitId="9d15eab7-bf45-4a17-afd0-56a042665b01" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" style={{
                display: "none"
              }} data-magicpath-id="68" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="fb419d71-aedf-4a05-a033-13513042b27f" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="69" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    Start exploring projects
                    <ArrowRight className="h-4 w-4" data-magicpath-id="70" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="2484fb38-077d-48c4-ac43-5021bc672905" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="71" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Play className="h-4 w-4" data-magicpath-id="72" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    How SUIka works
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="c28b3ffd-e898-46c6-b0d3-8e928b4023bd" containerType="regular" prevTag="div" className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" style={{
                display: "none"
              }} data-magicpath-id="73" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <ProgressPill label="Active projects" value="128" data-magicpath-id="74" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Funds raised" value="$4.7M" data-magicpath-id="75" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Avg. verification time" value="5 days" data-magicpath-id="76" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="NGOs onboarded" value="86" data-magicpath-id="77" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="110eba08-b30a-42b5-9cc2-58d17a89e702" containerType="regular" prevTag="div" className="relative" data-magicpath-id="78" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="78fe89c4-b363-419e-8332-bd9eb0cd00cb" containerType="regular" prevTag="div" className={cn('rounded-2xl border shadow-sm p-4 md:p-6', card, cardBorder)} role="region" aria-label="Featured project preview" style={{
                display: "none"
              }} data-magicpath-id="79" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="bf05c0d2-9a80-4835-b07d-1efa41334ea4" containerType="regular" prevTag="div" className="flex items-start justify-between gap-4" data-magicpath-id="80" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="3c775219-4a0f-4f30-99ca-35991084ae0e" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="81" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="NGO volunteers distributing aid" className="h-12 w-12 rounded-xl object-cover" data-magicpath-id="82" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <SortableContainer dndKitId="269f5621-190c-41bc-b5fa-af1b605d88c8" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className={cn('text-sm font-medium', muted)} data-magicpath-id="84" data-magicpath-path="SuikaMarketplaceLanding.tsx">Featured Project</div>
                        <div className={cn('text-base md:text-lg font-semibold', beigeText)} data-magicpath-id="85" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          Clean Water for Kakuma Refugee Camp
                        </div>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="5e3e6d59-3cc9-480b-9ea6-a0ac3d00a6eb" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs', softGreenBg, 'border-transparent', accent)} data-magicpath-id="86" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className="h-4 w-4" data-magicpath-id="87" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      Verified NGO
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="715f72d2-425b-436c-8ca2-86aaa9864ac9" containerType="regular" prevTag="div" className="mt-4 grid gap-4 md:grid-cols-2" data-magicpath-id="88" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="fc52ef6a-29ee-4b0e-a461-84aba7e2ed29" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="89" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <MilestoneItem title="Phase 1: Borehole drilling" amount="$35,000" status="complete" date="Mar 12" data-magicpath-id="90" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 2: Filtration units" amount="$28,500" status="verifying" date="Apr 02" data-magicpath-id="91" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 3: Distribution points" amount="$42,000" status="funding" data-magicpath-id="92" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="4b79b895-e720-4594-9edb-c1fc3176086a" containerType="regular" prevTag="div" className="flex flex-col gap-4" data-magicpath-id="93" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="090aecdd-0fa9-4fb1-9a08-a739e4048b01" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="94" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="8f01bb6c-3c67-4016-9ad2-3018e6085a25" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="95" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={cn('text-sm', muted)} data-magicpath-id="96" data-magicpath-path="SuikaMarketplaceLanding.tsx">Funding Progress</span>
                          <span className={cn('text-sm font-semibold', softGreen)} data-magicpath-id="97" data-magicpath-path="SuikaMarketplaceLanding.tsx">74%</span>
                        </SortableContainer>
                        <SortableContainer dndKitId="f6074c5a-bb26-4c70-9f88-fa0b9d36e189" containerType="regular" prevTag="div" className="mt-2 h-3 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="98" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <div className="h-3 rounded-full bg-[#1F6B51]" style={{
                          width: '74%'
                        }} aria-hidden data-magicpath-id="99" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="1c6f5508-e3f0-4860-a538-e2e87871cf0b" containerType="regular" prevTag="div" className="mt-2 flex items-center justify-between text-xs" data-magicpath-id="100" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={muted} data-magicpath-id="101" data-magicpath-path="SuikaMarketplaceLanding.tsx">$77,500 raised</span>
                          <span className={muted} data-magicpath-id="102" data-magicpath-path="SuikaMarketplaceLanding.tsx">of $105,500</span>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="efc28015-319b-438f-8773-8dca7f91483d" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="103" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="02311f30-4123-4b8f-bb5a-6c4288bdd14f" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="104" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <Users className={cn('h-4 w-4', accent)} data-magicpath-id="105" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="edd9d263-e627-4a79-8531-4c3035cb6d07" containerType="regular" prevTag="div" data-magicpath-id="106" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="107" data-magicpath-path="SuikaMarketplaceLanding.tsx">1,340</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="108" data-magicpath-path="SuikaMarketplaceLanding.tsx">Donors</div>
                          </SortableContainer>
                        </SortableContainer>
                        <SortableContainer dndKitId="8cf77c2d-a91f-4246-a4cb-c9fd91e87689" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="109" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <MapPin className={cn('h-4 w-4', accent)} data-magicpath-id="110" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="ebd220d4-3561-4c53-86f9-faca6af7bda1" containerType="regular" prevTag="div" data-magicpath-id="111" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="112" data-magicpath-path="SuikaMarketplaceLanding.tsx">Turkana, Kenya</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="113" data-magicpath-path="SuikaMarketplaceLanding.tsx">Impact region</div>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="0c7ae707-6f0f-448d-9701-369f6b99d108" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45] w-full')} data-magicpath-id="114" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        Fund Phase 3
                        <ArrowRight className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>

                {!isMobile && <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#DDF3EA_0%,_transparent_70%)] blur-3xl opacity-80" data-magicpath-id="116" data-magicpath-path="SuikaMarketplaceLanding.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="3bff34b0-3593-4f29-b35d-210ae9a0a9dc" containerType="regular" prevTag="section" id="trust" data-magicpath-id="117" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="118" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Trust-first design" title="Verified organizations. Transparent milestones. On-chain accountability." subtitle="Every project undergoes NGO verification. Each milestone is a dynamic field on SUI, added as conditions evolve. Journalists and local verifiers attest to outcomes for credible impact." data-magicpath-id="119" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="4ff5d6d3-a0e9-43cd-845b-94b1ec941bb2" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="120" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="NGO Verification" description="Organizations pass a rigorous KYC and due diligence process before listing. Their reputation compounds over time." icon={<ShieldCheck className={cn('h-6 w-6', accent)} data-magicpath-id="122" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="121" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Dynamic Milestones" description="Projects evolve in the field. Add, update, and fund milestones dynamically using SUI's Dynamic Fields." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="124" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="123" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Independent Validation" description="Local journalists and auditors verify outcomes with media evidence and attestations recorded on-chain." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="126" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="125" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="ab61f503-3f54-40c8-a2fa-5ac691915d6b" containerType="regular" prevTag="section" id="projects" data-magicpath-id="127" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="128" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Featured now" title="Humanitarian projects seeking support" subtitle="Discover trustworthy initiatives across regions and causes." data-magicpath-id="129" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <div className="mt-8 grid md:grid-cols-3 gap-5" data-magicpath-id="130" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {[1, 2, 3].map(i => <SortableContainer dndKitId="2a4c6e86-a61d-4407-b252-4753f718829c" containerType="regular" prevTag="motion.article" key={i} whileHover={{
              y: -6
            }} className={cn('rounded-2xl overflow-hidden border', cardBorder, 'bg-white/90 backdrop-blur-sm')} data-magicpath-id="131" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="f34d1ec1-2e83-4c29-bd4a-2dddcf2f2a24" containerType="regular" prevTag="div" className="relative" data-magicpath-id="132" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <img src={i === 1 ? 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1593111774831-0952b2c5d5f0?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop'} alt="Project cover" className="h-40 w-full object-cover" data-magicpath-id="133" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <SortableContainer dndKitId="273abb05-0295-4177-8d9a-54768a89f0b0" containerType="regular" prevTag="div" className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-white/80 backdrop-blur" data-magicpath-id="134" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <Globe2 className={cn('h-4 w-4', accent)} data-magicpath-id="135" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('font-medium', beigeText)} data-magicpath-id="136" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global South</span>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="6c176179-088e-4dba-b85d-f5f3c9f85fba" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="137" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="53f424da-2c67-432e-a18c-955ba816b0dc" containerType="regular" prevTag="div" className="flex items-start justify-between gap-3" data-magicpath-id="138" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <h3 className={cn('text-base font-semibold', beigeText)} data-magicpath-id="139" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        {i === 1 ? 'Cyclone Relief: Emergency Kits' : i === 2 ? 'Rural Health: Mobile Clinics' : 'Education Access: Solar Classroom'}
                      </h3>
                      <SortableContainer dndKitId="39bc968d-2b6e-4d34-b217-55310d90de2f" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', softGreenBg, accent)} data-magicpath-id="140" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <ShieldCheck className="h-3.5 w-3.5" data-magicpath-id="141" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        Verified
                      </SortableContainer>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm line-clamp-2', muted)} data-magicpath-id="142" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                  display: "none"
                }}>
                      {i === 1 ? 'Distributing food, water purification, and shelter materials to families impacted by severe cyclones.' : i === 2 ? 'Operating mobile clinics to deliver essential primary care to underserved rural communities.' : 'Deploying solar-powered digital classrooms to improve access to quality learning.'}
                    </p>

                    <SortableContainer dndKitId="6314f686-b2b6-48d8-abe4-e0927e37836a" containerType="regular" prevTag="div" className="mt-4" data-magicpath-id="143" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                  display: "none"
                }}>
                      <SortableContainer dndKitId="2d82cee2-e149-463f-b0ec-4a10278b71ce" containerType="regular" prevTag="div" className="flex items-center justify-between text-xs" data-magicpath-id="144" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                    display: "none"
                  }}>
                        <span className={muted} data-magicpath-id="145" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                      display: "none"
                    }}>Milestones funded</span>
                        <span className={cn('font-semibold', softGreen)} data-magicpath-id="146" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '3/5' : i === 2 ? '2/4' : '4/6'}</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="46fb26c5-61b9-4275-8177-8af8b86f237d" containerType="regular" prevTag="div" className="mt-1.5 h-2 w-full rounded-full bg-[linear-gradient(90deg,_#E9EDF5_0%,_#E7F4EE_100%)]" data-magicpath-id="147" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                    background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                    display: "none"
                  }}>
                        <div className="h-2 rounded-full bg-[linear-gradient(90deg,_#1F6B51_0%,_#2BAA80_100%)]" style={{
                      width: i === 1 ? '60%' : i === 2 ? '45%' : '70%',
                      background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                      display: "none"
                    }} aria-hidden data-magicpath-id="148" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>

                    <SortableContainer dndKitId="487f2e40-7fc6-4263-8500-f632d8a27f78" containerType="regular" prevTag="div" className="mt-4 flex items-center justify-between" data-magicpath-id="149" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                  display: "none"
                }}>
                      <SortableContainer dndKitId="b0641f95-ab58-4525-b0aa-4958ac0c1532" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="150" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <Users className={cn('h-4 w-4', accent)} data-magicpath-id="151" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        <span className={cn('text-xs', muted)} data-magicpath-id="152" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '524' : i === 2 ? '312' : '781'} donors</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="c8284536-fd53-4d9c-ae5f-c4955f763c13" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-1 text-sm font-medium', accent)} data-magicpath-id="153" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        View project <ArrowUpRight className="h-4 w-4" data-magicpath-id="154" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>)}
            </div>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="fad73e84-463a-4f72-80eb-79a38be191e9" containerType="regular" prevTag="section" id="how-it-works" style={{
        display: "none"
      }} data-magicpath-id="155" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="156" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="How SUIka works" title="A simple, transparent flow" subtitle="From project creation to impact verification, every step is recorded for accountability." data-magicpath-id="157" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="f13e6cec-8a2e-4cff-8f77-4427bd6f7617" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="158" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="1. NGO creates project" description="Approved NGOs publish a project and add its first milestone on-chain." icon={<HeartHandshake className={cn('h-6 w-6', accent)} data-magicpath-id="160" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="159" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="2. Donors fund milestones" description="Backers fund specific phases as needs evolve, with funds locked to that milestone." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="162" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="161" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="3. Journalists verify" description="Independent verifiers confirm outcomes with geo-tagged media and attestations." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="164" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="163" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="3db13115-7b9f-4693-9e7a-1a268ad33cce" containerType="regular" prevTag="section" id="impact" data-magicpath-id="165" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="166" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Impact in numbers" title="Scaling trust and outcomes" subtitle="SUIka’s transparent model accelerates funding and reduces overhead, so more resources reach those who need them most." data-magicpath-id="167" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="da6f77eb-932c-4d60-9760-b7c529ee9ea5" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="168" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Stat label="Avg. fee reduction" value="32%" icon={<TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="170" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="169" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Verified milestones" value="9,842" icon={<CheckCircle2 className={cn('h-5 w-5', accent)} data-magicpath-id="172" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="171" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Countries reached" value="52" icon={<Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="174" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="173" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Journalist network" value="1,140" icon={<Award className={cn('h-5 w-5', accent)} data-magicpath-id="176" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="175" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="33803c74-0bcd-4543-ab81-ac50931215f7" containerType="regular" prevTag="section" id="cta" data-magicpath-id="177" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="178" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="de02ff4c-b572-4fc8-b301-46694036c365" containerType="regular" prevTag="div" className={cn('relative overflow-hidden rounded-2xl border p-6 md:p-10', 'bg-[linear-gradient(135deg,_#EAF6F0_0%,_#EEF4FF_60%,_#F8F4ED_100%)]', cardBorder)} data-magicpath-id="179" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {!isMobile && <>
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#DDF3EA_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="180" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#F1E8D9_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="181" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </>}

              <SortableContainer dndKitId="7882a684-eb97-4ea4-b822-453479dec77c" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-6 items-center" data-magicpath-id="182" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="c67482b7-ed70-4f23-b408-2338f745e73f" containerType="regular" prevTag="div" data-magicpath-id="183" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="184" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    For NGOs and Donors
                  </div>
                  <h3 className={cn('mt-3 text-2xl md:text-3xl font-semibold', beigeText)} data-magicpath-id="185" data-magicpath-path="SuikaMarketplaceLanding.tsx">Join Suistainables trusted marketplace</h3>
                  <p className={cn('mt-3 text-sm md:text-base', muted)} data-magicpath-id="186" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    NGOs: publish dynamic, transparent projects. Donors: fund with confidence and follow impact in real time.
                  </p>

                  <SortableContainer dndKitId="2c964575-3752-4d6e-afdc-be21c1734ab2" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="187" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="60c39cd1-a385-41da-baa8-f151d4cbe4a8" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="188" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Apply as NGO
                      <ArrowRight className="h-4 w-4" data-magicpath-id="189" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="190" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Explore projects
                    </button>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="2a031fe5-6b0e-468f-ab22-71317c78e5a7" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="191" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="e5a86aee-f510-4ddf-86a6-ad44f71c9b3f" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="192" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="2feb4b69-4ea0-493e-b1e2-1845623cb7ea" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="193" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className={cn('h-5 w-5', accent)} data-magicpath-id="194" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="195" data-magicpath-path="SuikaMarketplaceLanding.tsx">Verified NGOs</span>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm', muted)} data-magicpath-id="196" data-magicpath-path="SuikaMarketplaceLanding.tsx">Rigorous checks and evolving reputation scores.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="983edb2f-5cdb-4201-baed-2a1c911bceae" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="197" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Award className={cn('h-5 w-5', accent)} data-magicpath-id="198" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="199" data-magicpath-path="SuikaMarketplaceLanding.tsx">Independent Impact</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="200" data-magicpath-path="SuikaMarketplaceLanding.tsx">Journalist attestations for outcome validation.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="7ec53573-c938-4b12-b50a-4ee5b58fe79a" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="201" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="202" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="203" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone Funding</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="204" data-magicpath-path="SuikaMarketplaceLanding.tsx">Targeted support for each project phase.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="d1ad0e39-2025-4059-ac45-6d1a81c86d23" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="205" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="206" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="207" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global Access</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="208" data-magicpath-path="SuikaMarketplaceLanding.tsx">Optimized for mobile, low-bandwidth environments.</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="f6be4647-5f67-4fea-b7ba-2c5abe2e1dde" containerType="regular" prevTag="footer" data-magicpath-id="209" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="210" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="3bce01ad-7839-480c-a662-ff77b6b2bdd5" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="211" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="d8d9eaea-1352-4529-aa46-97230a511d76" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="212" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="f27473b9-7127-4ff7-8c3a-7d474af8b78b" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="213" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="214" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="215" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="b3f5cba7-1b20-4bc0-b8ab-f1fb01b5ca92" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="216" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy" data-magicpath-id="217" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms" data-magicpath-id="218" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status" data-magicpath-id="219" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Status <span className={cn('h-2 w-2 rounded-full bg-[linear-gradient(180deg,_#1F6B51_0%,_#2BAA80_100%)] inline-block')} aria-hidden data-magicpath-id="220" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </a>
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>
    </SortableContainer>;
};