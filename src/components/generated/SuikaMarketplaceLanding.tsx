import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, ShieldCheck, TrendingUp, ArrowRight, Award, HeartHandshake, MapPin, Calendar, Users, Sparkles, Search, Play, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useIsMobile } from '../../hooks/use-mobile';

// @component: SuikaMarketplaceLanding
export const SuikaMarketplaceLanding: React.FC = () => {
  const isMobile = useIsMobile();
  const beige = 'bg-[#F8F4ED]';
  const beigeText = 'text-[#3A2F27]';
  const softGreen = 'text-[#2F8F6B]';
  const softGreenBg = 'bg-[#DDF3EA]';
  const accent = 'text-[#1F6B51]';
  const card = 'bg-white/90';
  const cardBorder = 'border-[#E9E3D8]';
  const muted = 'text-[#6B5E54]';
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
  }) => <SortableContainer dndKitId="c627afe0-a59d-4e14-a6e9-3d982b77dc2b" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      {eyebrow ? <SortableContainer dndKitId="54fa20d4-c06a-4971-8b61-0526aa38e14e" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">{eyebrow}</span>
        </SortableContainer> : null}
      <SortableContainer dndKitId="eaaa10b5-afac-433f-9d88-09a8948b7642" containerType="regular" prevTag="div" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="ea9fd498-b631-4b3b-951e-19c27ed9d42a" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4 md:p-6', card, cardBorder)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="6897519c-4e09-4d3d-84c2-1bb020465aad" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-lg p-2', softGreenBg)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="2c2a7bd3-68ae-44cf-971d-9378edc08efb" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="56177ef3-062d-41a3-83be-777b77fbf3e5" containerType="regular" prevTag="motion.div" whileHover={{
    y: -4
  }} className={cn('rounded-2xl border p-5 md:p-6 h-full', card, cardBorder)} data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="bd8bb698-a7d5-4db1-95fb-f403a8bd8ae2" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-xl p-3', softGreenBg)} data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="c020ebdf-9013-452e-af5e-1febed5d4f57" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="80f693bf-14c2-41a9-8668-07ea62c6237c" containerType="regular" prevTag="div" className={cn('flex items-center justify-between gap-4 rounded-xl border px-4 py-2 text-sm', card, cardBorder, 'min-w-[180px]')} data-magicpath-id="19" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
    return <SortableContainer dndKitId="a33ef8f5-2ff6-4b1e-836c-d63b330f83f9" containerType="regular" prevTag="div" className={cn('flex flex-col gap-3 rounded-xl border p-4', 'bg-white/90', cardBorder)} data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="d0370f38-64db-442e-a309-670dc0368be1" containerType="regular" prevTag="div" className="flex items-center justify-between gap-3" data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="c0b0fcb8-562e-42c0-a999-ff626f404df9" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="03ee2256-009b-4f52-97c8-44bc07b8cdcd" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs', statusStyles)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {StatusIcon}
              <span className="font-medium" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">{statusLabel}</span>
            </SortableContainer>
          </SortableContainer>
          {date ? <SortableContainer dndKitId="3c8db8cf-cd57-4e44-9536-923e6557dbfb" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 text-xs', muted)} data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Calendar className="h-4 w-4" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">{date}</span>
            </SortableContainer> : null}
        </SortableContainer>
        <SortableContainer dndKitId="2e7797f1-28fd-4828-b563-7ab82d5a1d2e" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="5927c7bb-9f58-4924-89f8-59478e542a05" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-semibold', beigeText)} data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</div>
            <div className={cn('text-sm', muted)} data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone budget</div>
          </SortableContainer>
          <SortableContainer dndKitId="4b26e25b-a203-443d-9629-e6fb8e81e7f4" containerType="regular" prevTag="div" className={cn('text-right')} data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-bold', softGreen)} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">{amount}</div>
            <SortableContainer dndKitId="d9461fd6-15f2-40ba-ad20-ca6040a6ee64" containerType="regular" prevTag="button" className={cn('mt-1 inline-flex items-center gap-1 text-xs font-medium', accent)} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              See details <ArrowUpRight className="h-3.5 w-3.5" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="f2157af0-8b7f-46d6-b0e7-14898ac336c4" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="9cd5b9cc-a5b6-49f6-939a-af6b315890a5" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-[#E9E3D8]" data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="7ad3e6f0-a79c-40f6-8e5f-a70f9031fd53" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="65953042-dfc5-4613-8ca6-77a3422b303b" containerType="regular" prevTag="div" className={cn('h-9 w-9 rounded-xl flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <HeartHandshake className={cn('h-5 w-5', accent)} data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="8277d44c-ba6e-4a6c-8c8b-d6c7bddf8d44" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                SUIka
              </span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8c2e7f27-3636-4e92-bfb6-5dd7977a584e" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-6" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

          <SortableContainer dndKitId="83cbdf56-56d9-413e-95ce-755f3e57ed71" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="55" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="91db535c-62ea-416d-9875-07836df28b8e" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="56" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="57" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="d6b3b3c2-b5cf-46a2-bc73-baafe50a1ab9" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="58" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="59" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="3ebeee6c-0685-4ddf-895a-544dcd696a67" containerType="regular" prevTag="main" data-magicpath-id="60" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="0333665c-3ebd-47f9-be8b-dd5bb547d703" containerType="regular" prevTag="section" className="relative overflow-hidden" data-magicpath-id="61" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="62" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="f9f7c13d-775a-41b9-b162-9292d051999a" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" data-magicpath-id="63" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="b099342e-0233-4bdd-8c0d-4c8de4784618" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="65" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Built on SUI • Dynamic Milestones • Verified Impact
                </div>
                <h1 className={cn('mt-4 text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} data-magicpath-id="66" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Fund trusted humanitarian projects with real-time, verifiable progress
                </h1>
                <p className={cn('mt-4 text-base md:text-lg leading-relaxed', muted)} data-magicpath-id="67" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  SUIka is a decentralized marketplace where verified NGOs publish projects with dynamic milestones.
                  Donors fund specific phases and journalists validate real-world outcomes—for radical transparency.
                </p>

                <SortableContainer dndKitId="80fcdf8f-6781-4afa-9ef0-b25868539ed0" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="68" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="1a06515d-8e5b-4288-acdd-22ba97208bef" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="69" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    Start exploring projects
                    <ArrowRight className="h-4 w-4" data-magicpath-id="70" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="c5dbb0af-d410-4473-8219-fa11ad257ba4" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="71" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Play className="h-4 w-4" data-magicpath-id="72" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    How SUIka works
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="0b8b2986-c00e-41e3-b209-25c5d95fb2be" containerType="regular" prevTag="div" className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" data-magicpath-id="73" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <ProgressPill label="Active projects" value="128" data-magicpath-id="74" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Funds raised" value="$4.7M" data-magicpath-id="75" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Avg. verification time" value="5 days" data-magicpath-id="76" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="NGOs onboarded" value="86" data-magicpath-id="77" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="3819c678-4e0d-461c-bd18-fddb194ff3cf" containerType="regular" prevTag="div" className="relative" data-magicpath-id="78" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="334bb887-daf2-48f5-92ca-7f994623c4e0" containerType="regular" prevTag="div" className={cn('rounded-2xl border shadow-sm p-4 md:p-6', card, cardBorder)} role="region" aria-label="Featured project preview" data-magicpath-id="79" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="36019385-161f-41ae-bf21-9bd09c9d7bac" containerType="regular" prevTag="div" className="flex items-start justify-between gap-4" data-magicpath-id="80" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="8afda977-7f87-4974-8992-b3a574b7626f" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="81" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="NGO volunteers distributing aid" className="h-12 w-12 rounded-xl object-cover" data-magicpath-id="82" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <SortableContainer dndKitId="f49446f9-7483-4b9e-acff-e7387bc4a99f" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className={cn('text-sm font-medium', muted)} data-magicpath-id="84" data-magicpath-path="SuikaMarketplaceLanding.tsx">Featured Project</div>
                        <div className={cn('text-base md:text-lg font-semibold', beigeText)} data-magicpath-id="85" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          Clean Water for Kakuma Refugee Camp
                        </div>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="de6ee98b-85e1-4eff-8c01-c57edcc68680" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs', softGreenBg, 'border-transparent', accent)} data-magicpath-id="86" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className="h-4 w-4" data-magicpath-id="87" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      Verified NGO
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="d12b95a7-ec66-4778-8d1b-c0a38eeaf9ff" containerType="regular" prevTag="div" className="mt-4 grid gap-4 md:grid-cols-2" data-magicpath-id="88" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="b25e912a-94d4-4b73-8bba-d7912b34fc2d" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="89" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <MilestoneItem title="Phase 1: Borehole drilling" amount="$35,000" status="complete" date="Mar 12" data-magicpath-id="90" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 2: Filtration units" amount="$28,500" status="verifying" date="Apr 02" data-magicpath-id="91" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 3: Distribution points" amount="$42,000" status="funding" data-magicpath-id="92" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="622ffab1-3989-4c0f-830d-64987436d374" containerType="regular" prevTag="div" className="flex flex-col gap-4" data-magicpath-id="93" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="11f46f13-6a2d-40d3-a4be-fc7762a47c61" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="94" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="a4ecbd83-8066-4dd4-913f-31ab1076b7d9" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="95" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={cn('text-sm', muted)} data-magicpath-id="96" data-magicpath-path="SuikaMarketplaceLanding.tsx">Funding Progress</span>
                          <span className={cn('text-sm font-semibold', softGreen)} data-magicpath-id="97" data-magicpath-path="SuikaMarketplaceLanding.tsx">74%</span>
                        </SortableContainer>
                        <SortableContainer dndKitId="8154f6bc-392b-4727-8876-385dd7aef0c7" containerType="regular" prevTag="div" className="mt-2 h-3 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="98" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <div className="h-3 rounded-full bg-[#1F6B51]" style={{
                          width: '74%'
                        }} aria-hidden data-magicpath-id="99" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="8c046f44-85ba-440d-a223-a7ac4bc8e149" containerType="regular" prevTag="div" className="mt-2 flex items-center justify-between text-xs" data-magicpath-id="100" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={muted} data-magicpath-id="101" data-magicpath-path="SuikaMarketplaceLanding.tsx">$77,500 raised</span>
                          <span className={muted} data-magicpath-id="102" data-magicpath-path="SuikaMarketplaceLanding.tsx">of $105,500</span>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="095df3b2-3747-43a6-a514-ce4e4e43d4ff" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="103" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="97c4a63e-c853-4285-94ae-11b925e80926" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="104" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <Users className={cn('h-4 w-4', accent)} data-magicpath-id="105" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="79608f08-804e-4fe7-a800-89e7c2d7a894" containerType="regular" prevTag="div" data-magicpath-id="106" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="107" data-magicpath-path="SuikaMarketplaceLanding.tsx">1,340</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="108" data-magicpath-path="SuikaMarketplaceLanding.tsx">Donors</div>
                          </SortableContainer>
                        </SortableContainer>
                        <SortableContainer dndKitId="2db9a258-08ba-4ba2-9fd5-6f8959f6337b" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="109" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <MapPin className={cn('h-4 w-4', accent)} data-magicpath-id="110" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="1fa80338-c866-4e56-b910-f40b83cf0b6f" containerType="regular" prevTag="div" data-magicpath-id="111" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="112" data-magicpath-path="SuikaMarketplaceLanding.tsx">Turkana, Kenya</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="113" data-magicpath-path="SuikaMarketplaceLanding.tsx">Impact region</div>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="2c2fcc22-266d-4c63-8b89-ae3f85d5baa9" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45] w-full')} data-magicpath-id="114" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        Fund Phase 3
                        <ArrowRight className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>

                {!isMobile && <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#DDF3EA] blur-3xl opacity-70" data-magicpath-id="116" data-magicpath-path="SuikaMarketplaceLanding.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="62a6c86c-52c9-43d9-b18c-47106686659a" containerType="regular" prevTag="section" id="trust" className="border-t border-[#E9E3D8]" data-magicpath-id="117" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="118" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Trust-first design" title="Verified organizations. Transparent milestones. On-chain accountability." subtitle="Every project undergoes NGO verification. Each milestone is a dynamic field on SUI, added as conditions evolve. Journalists and local verifiers attest to outcomes for credible impact." data-magicpath-id="119" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="50fe708b-a32c-4901-b0fc-547d4bf754e1" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="120" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="NGO Verification" description="Organizations pass a rigorous KYC and due diligence process before listing. Their reputation compounds over time." icon={<ShieldCheck className={cn('h-6 w-6', accent)} data-magicpath-id="122" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="121" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Dynamic Milestones" description="Projects evolve in the field. Add, update, and fund milestones dynamically using SUI's Dynamic Fields." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="124" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="123" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Independent Validation" description="Local journalists and auditors verify outcomes with media evidence and attestations recorded on-chain." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="126" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="125" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="daaf6c80-07fb-4dc6-b6a0-5e3663e68eab" containerType="regular" prevTag="section" id="projects" className="border-t border-[#E9E3D8]" data-magicpath-id="127" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="128" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Featured now" title="Humanitarian projects seeking support" subtitle="Discover trustworthy initiatives across regions and causes." data-magicpath-id="129" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <div className="mt-8 grid md:grid-cols-3 gap-5" data-magicpath-id="130" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {[1, 2, 3].map(i => <SortableContainer dndKitId="e05ef093-e7d7-485c-bd60-8ed430536b35" containerType="regular" prevTag="motion.article" key={i} whileHover={{
              y: -6
            }} className={cn('rounded-2xl overflow-hidden border', cardBorder, 'bg-white')} data-magicpath-id="131" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="b928a340-66c4-4d67-8d1b-79c2bb76c35b" containerType="regular" prevTag="div" className="relative" data-magicpath-id="132" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <img src={i === 1 ? 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1593111774831-0952b2c5d5f0?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop'} alt="Project cover" className="h-40 w-full object-cover" data-magicpath-id="133" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <SortableContainer dndKitId="da384da3-61fa-4e5a-beab-6abc2d27a5ae" containerType="regular" prevTag="div" className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-white/90" data-magicpath-id="134" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <Globe2 className={cn('h-4 w-4', accent)} data-magicpath-id="135" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('font-medium', beigeText)} data-magicpath-id="136" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global South</span>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="e739da77-8fe6-47f2-bd1a-f4bc92bff473" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="137" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="7a49aac4-bb70-42e2-8ab5-cc11c5f15030" containerType="regular" prevTag="div" className="flex items-start justify-between gap-3" data-magicpath-id="138" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <h3 className={cn('text-base font-semibold', beigeText)} data-magicpath-id="139" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        {i === 1 ? 'Cyclone Relief: Emergency Kits' : i === 2 ? 'Rural Health: Mobile Clinics' : 'Education Access: Solar Classroom'}
                      </h3>
                      <SortableContainer dndKitId="a97d028c-e303-48e9-858d-3d1e949b470e" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', softGreenBg, accent)} data-magicpath-id="140" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <ShieldCheck className="h-3.5 w-3.5" data-magicpath-id="141" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        Verified
                      </SortableContainer>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm line-clamp-2', muted)} data-magicpath-id="142" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      {i === 1 ? 'Distributing food, water purification, and shelter materials to families impacted by severe cyclones.' : i === 2 ? 'Operating mobile clinics to deliver essential primary care to underserved rural communities.' : 'Deploying solar-powered digital classrooms to improve access to quality learning.'}
                    </p>

                    <SortableContainer dndKitId="fe63924d-9681-4e97-8116-bbdcc71079c6" containerType="regular" prevTag="div" className="mt-4" data-magicpath-id="143" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="a05b3704-2119-4f5c-9722-21feab3283c5" containerType="regular" prevTag="div" className="flex items-center justify-between text-xs" data-magicpath-id="144" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <span className={muted} data-magicpath-id="145" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestones funded</span>
                        <span className={cn('font-semibold', softGreen)} data-magicpath-id="146" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '3/5' : i === 2 ? '2/4' : '4/6'}</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="08fb2082-cb70-4e3a-ba5e-ba0c072419a5" containerType="regular" prevTag="div" className="mt-1.5 h-2 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="147" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className="h-2 rounded-full bg-[#1F6B51]" style={{
                      width: i === 1 ? '60%' : i === 2 ? '45%' : '70%'
                    }} aria-hidden data-magicpath-id="148" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>

                    <SortableContainer dndKitId="7e67441a-c6e8-4f58-9e03-111624959095" containerType="regular" prevTag="div" className="mt-4 flex items-center justify-between" data-magicpath-id="149" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="5bddef3b-3793-4f38-94a2-f2b5dc59b050" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="150" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <Users className={cn('h-4 w-4', accent)} data-magicpath-id="151" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        <span className={cn('text-xs', muted)} data-magicpath-id="152" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '524' : i === 2 ? '312' : '781'} donors</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="008aa5d8-e9d4-4fc8-bf91-9d4eed5860f4" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-1 text-sm font-medium', accent)} data-magicpath-id="153" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        View project <ArrowUpRight className="h-4 w-4" data-magicpath-id="154" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>)}
            </div>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="32acdf39-4385-4ab3-b972-246dc6bb3b2f" containerType="regular" prevTag="section" id="how-it-works" className="border-t border-[#E9E3D8]" data-magicpath-id="155" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="156" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="How SUIka works" title="A simple, transparent flow" subtitle="From project creation to impact verification, every step is recorded for accountability." data-magicpath-id="157" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="14c7e3e9-d25e-4fe6-b22b-fc9b3e41649c" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="158" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="1. NGO creates project" description="Approved NGOs publish a project and add its first milestone on-chain." icon={<HeartHandshake className={cn('h-6 w-6', accent)} data-magicpath-id="160" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="159" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="2. Donors fund milestones" description="Backers fund specific phases as needs evolve, with funds locked to that milestone." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="162" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="161" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="3. Journalists verify" description="Independent verifiers confirm outcomes with geo-tagged media and attestations." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="164" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="163" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="50652d4b-3227-4ced-a48d-72dc5d84eb19" containerType="regular" prevTag="section" id="impact" className="border-t border-[#E9E3D8]" data-magicpath-id="165" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="166" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Impact in numbers" title="Scaling trust and outcomes" subtitle="SUIka’s transparent model accelerates funding and reduces overhead, so more resources reach those who need them most." data-magicpath-id="167" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="14597a9c-ad44-4b1a-80b4-1c2914ff0faf" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="168" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Stat label="Avg. fee reduction" value="32%" icon={<TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="170" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="169" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Verified milestones" value="9,842" icon={<CheckCircle2 className={cn('h-5 w-5', accent)} data-magicpath-id="172" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="171" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Countries reached" value="52" icon={<Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="174" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="173" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Journalist network" value="1,140" icon={<Award className={cn('h-5 w-5', accent)} data-magicpath-id="176" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="175" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="0b3d84e5-7d41-4019-adcd-02e598c9ea56" containerType="regular" prevTag="section" id="cta" className="border-t border-[#E9E3D8]" data-magicpath-id="177" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="178" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="0f049a84-5a7a-4119-aa8c-5434e9fd890a" containerType="regular" prevTag="div" className={cn('relative overflow-hidden rounded-2xl border p-6 md:p-10', 'bg-gradient-to-br from-[#EAF6F0] to-[#F8F4ED]', cardBorder)} data-magicpath-id="179" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {!isMobile && <>
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#DDF3EA] blur-2xl opacity-70" data-magicpath-id="180" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#F1E8D9] blur-2xl opacity-70" data-magicpath-id="181" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </>}

              <SortableContainer dndKitId="ffc2d527-19c5-4128-9b0a-e639fb12004d" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-6 items-center" data-magicpath-id="182" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="ddea4b52-9b9e-4fad-bc69-6d630d74852c" containerType="regular" prevTag="div" data-magicpath-id="183" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="184" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    For NGOs and Donors
                  </div>
                  <h3 className={cn('mt-3 text-2xl md:text-3xl font-semibold', beigeText)} data-magicpath-id="185" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    Join SUIka’s trusted marketplace today
                  </h3>
                  <p className={cn('mt-3 text-sm md:text-base', muted)} data-magicpath-id="186" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    NGOs: publish dynamic, transparent projects. Donors: fund with confidence and follow impact in real time.
                  </p>

                  <SortableContainer dndKitId="84f52fa9-0498-4d01-bb1e-420378b12c67" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="187" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="0c4d4e60-1bcb-46b7-b69b-22255e7e76b9" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="188" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Apply as NGO
                      <ArrowRight className="h-4 w-4" data-magicpath-id="189" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="190" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Explore projects
                    </button>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="98f97d4e-66a1-4255-b820-d0f101757005" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="191" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="f93db199-34c3-4355-8e58-78d410f38fdc" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="192" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="22fae07c-b2af-40dc-88cc-a4f2379bebab" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="193" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className={cn('h-5 w-5', accent)} data-magicpath-id="194" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="195" data-magicpath-path="SuikaMarketplaceLanding.tsx">Verified NGOs</span>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm', muted)} data-magicpath-id="196" data-magicpath-path="SuikaMarketplaceLanding.tsx">Rigorous checks and evolving reputation scores.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="5a74db6f-b3a5-456f-99dd-674f631017be" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="197" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Award className={cn('h-5 w-5', accent)} data-magicpath-id="198" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="199" data-magicpath-path="SuikaMarketplaceLanding.tsx">Independent Impact</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="200" data-magicpath-path="SuikaMarketplaceLanding.tsx">Journalist attestations for outcome validation.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="b60011a9-5c4c-4582-874c-e51a6b02e552" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="201" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="202" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="203" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone Funding</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="204" data-magicpath-path="SuikaMarketplaceLanding.tsx">Targeted support for each project phase.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="c2108076-a99c-4d58-b228-fcfb4fb91d5a" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="205" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

      <SortableContainer dndKitId="4360c886-5ccc-4cb3-88e2-35d2f2f5cb3b" containerType="regular" prevTag="footer" className="border-t border-[#E9E3D8]" data-magicpath-id="209" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="210" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="5e6b39b9-cd40-4f18-bf9b-2a12c6a48d6d" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="211" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="6a234b8f-4e9b-4fe5-bdbb-85e49774a11f" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="212" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="a7cc33b0-a88c-4082-ae80-fb910e2f553f" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="213" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="214" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="215" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="bb9aa851-704a-48f6-824e-cd389c6f307d" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="216" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <a className={cn('hover:opacity-80', beigeText)} href="#privacy" data-magicpath-id="217" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Privacy
              </a>
              <a className={cn('hover:opacity-80', beigeText)} href="#terms" data-magicpath-id="218" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Terms
              </a>
              <a className={cn('hover:opacity-80', beigeText, 'inline-flex items-center gap-1')} href="#status" data-magicpath-id="219" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                Status <span className={cn('h-2 w-2 rounded-full bg-[#1F6B51] inline-block')} aria-hidden data-magicpath-id="220" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </a>
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>
    </SortableContainer>;
};