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
  }) => <SortableContainer dndKitId="5fbd7927-bbdc-4ac2-b9ef-7c21a4f72d72" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      {eyebrow ? <SortableContainer dndKitId="a210ac57-6eb9-4d77-beff-0947cdee7813" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">{eyebrow}</span>
        </SortableContainer> : null}
      <SortableContainer dndKitId="04207f88-5344-401a-bee1-1cadc201143d" containerType="regular" prevTag="div" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="4ea1367c-8d7f-4dd5-be92-9ac36efe1458" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4 md:p-6', card, cardBorder)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="900943b7-65c8-47f1-a817-9ffe848e45fb" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-lg p-2', softGreenBg)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="db4f4210-bc3e-47da-b8f5-0ce348853f39" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="dd1340b5-dec4-43f4-b921-098035defa64" containerType="regular" prevTag="motion.div" whileHover={{
    y: -4
  }} className={cn('rounded-2xl border p-5 md:p-6 h-full', card, cardBorder)} data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="fa466e3a-8ac6-4478-9e54-d33b0dad0b32" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-xl p-3', softGreenBg)} data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="851c5923-d270-470b-896c-82a6c6201344" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="aa6ce51b-4f28-422f-9cad-fa2279f27d22" containerType="regular" prevTag="div" className={cn('flex items-center justify-between gap-4 rounded-xl border px-4 py-2 text-sm', card, cardBorder, 'min-w-[180px]')} data-magicpath-id="19" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
    display: "none"
  }}>
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
    return <SortableContainer dndKitId="f6b6ef3f-0be4-4d0e-86aa-2fe248e442c4" containerType="regular" prevTag="div" className={cn('flex flex-col gap-3 rounded-xl border p-4', 'bg-white/90', cardBorder)} data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="e3b50b28-515b-4a1e-aec2-ca36b95d2bac" containerType="regular" prevTag="div" className="flex items-center justify-between gap-3" data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="311ff354-fb86-4fdd-8df5-977055d75194" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="0eb6f18e-bdf1-41e9-a2e6-0ef4f4e60d2c" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs', statusStyles)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {StatusIcon}
              <span className="font-medium" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">{statusLabel}</span>
            </SortableContainer>
          </SortableContainer>
          {date ? <SortableContainer dndKitId="6fc85b2c-dfec-4730-b068-b4dcfaa1b2eb" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 text-xs', muted)} data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Calendar className="h-4 w-4" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">{date}</span>
            </SortableContainer> : null}
        </SortableContainer>
        <SortableContainer dndKitId="427697df-0599-42fd-bfb3-862a1a619568" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="1d88a9d1-3ffc-4645-9467-d71c0902d818" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-semibold', beigeText)} data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</div>
            <div className={cn('text-sm', muted)} data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone budget</div>
          </SortableContainer>
          <SortableContainer dndKitId="4dbc686a-a6cc-487b-a0b8-1b95db2c3e53" containerType="regular" prevTag="div" className={cn('text-right')} data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-bold', softGreen)} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">{amount}</div>
            <SortableContainer dndKitId="39ead281-df51-4e13-9969-434b2a0a1407" containerType="regular" prevTag="button" className={cn('mt-1 inline-flex items-center gap-1 text-xs font-medium', accent)} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              See details <ArrowUpRight className="h-3.5 w-3.5" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="75dce704-e847-4c74-85e6-6455a2ee3235" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="affad9d9-11a3-4bc1-8bea-4ca514d5619f" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-[#E9E3D8]" data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="bad33885-d1ed-4e61-8207-d66ac15b2098" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="bb201ff8-6fcd-4470-9271-2cf886e83940" containerType="regular" prevTag="div" className={cn('h-9 w-9 rounded-xl flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
            display: "none"
          }}>
              <HeartHandshake className={cn('h-5 w-5', accent)} data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
              display: "none"
            }} />
            </SortableContainer>
            <SortableContainer dndKitId="3c6f05c5-3dd9-4d2b-9c57-199a0ca66057" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                SUIstainables
              </span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="914fcf9e-c1f8-4857-bab0-553d2a0a8188" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-6" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

          <SortableContainer dndKitId="da5a52de-3f51-4d6a-b52a-2a6c2ea9bf16" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="55" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="35520c3c-7d2f-4ba5-a807-b6c661c04fac" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="56" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="57" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="da2fffb5-3bbd-407c-a9ef-e52a4b022058" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="58" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="59" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="da13df6e-6ce2-4fbf-80d7-85a9cabc271d" containerType="regular" prevTag="main" data-magicpath-id="60" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="ed76dfea-b78b-4da9-ad85-2940f3c807eb" containerType="regular" prevTag="section" className="relative overflow-hidden" data-magicpath-id="61" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="62" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="68b6475e-f78c-4541-8abe-3a9a99df1440" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" data-magicpath-id="63" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
            display: "flex",
            flexDirection: "row"
          }}>
              <SortableContainer dndKitId="09f8bfcc-8f0a-4314-8fa1-da7429b1d09f" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="65" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                display: "none"
              }}>
                  Built on SUI • Dynamic Milestones • Verified Impact
                </div>
                <h1 className={cn('mt-4 text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} data-magicpath-id="66" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Fund trusted humanitarian projects with real-time, verifiable progress
                </h1>
                <p className={cn('mt-4 text-base md:text-lg leading-relaxed', muted)} data-magicpath-id="67" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  SUIka is a decentralized marketplace where verified NGOs publish projects with dynamic milestones.
                  Donors fund specific phases and journalists validate real-world outcomes—for radical transparency.
                </p>

                <SortableContainer dndKitId="84bc63e4-a0d7-4364-aac7-ff04d497885d" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="68" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                display: "none"
              }}>
                  <SortableContainer dndKitId="ee69e630-f9ea-4054-bb34-efae1fdd41c6" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="69" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    Start exploring projects
                    <ArrowRight className="h-4 w-4" data-magicpath-id="70" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="6194a1b2-a66b-437c-bc52-9e1688475c13" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="71" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Play className="h-4 w-4" data-magicpath-id="72" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    How SUIka works
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="783aeecb-5144-49a0-88a8-7d4a130a09e1" containerType="regular" prevTag="div" className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" data-magicpath-id="73" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                display: "none"
              }}>
                  <ProgressPill label="Active projects" value="128" data-magicpath-id="74" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Funds raised" value="$4.7M" data-magicpath-id="75" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Avg. verification time" value="5 days" data-magicpath-id="76" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="NGOs onboarded" value="86" data-magicpath-id="77" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="29469f3b-8fa7-4e4c-8008-be54b55f1e98" containerType="regular" prevTag="div" className="relative" data-magicpath-id="78" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="1f8e46c6-0119-424e-a51b-5a0f9787f14b" containerType="regular" prevTag="div" className={cn('rounded-2xl border shadow-sm p-4 md:p-6', card, cardBorder)} role="region" aria-label="Featured project preview" data-magicpath-id="79" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
                display: "none"
              }}>
                  <SortableContainer dndKitId="19a70cc6-05b9-4600-b424-356d71c308dc" containerType="regular" prevTag="div" className="flex items-start justify-between gap-4" data-magicpath-id="80" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="a7bad977-c75c-4d0b-8f83-284e99ea0632" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="81" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="NGO volunteers distributing aid" className="h-12 w-12 rounded-xl object-cover" data-magicpath-id="82" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <SortableContainer dndKitId="626c95dc-f09a-460a-af18-43503289cefa" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className={cn('text-sm font-medium', muted)} data-magicpath-id="84" data-magicpath-path="SuikaMarketplaceLanding.tsx">Featured Project</div>
                        <div className={cn('text-base md:text-lg font-semibold', beigeText)} data-magicpath-id="85" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          Clean Water for Kakuma Refugee Camp
                        </div>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="a410be35-d825-43cd-b58b-65bfef2c8034" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs', softGreenBg, 'border-transparent', accent)} data-magicpath-id="86" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className="h-4 w-4" data-magicpath-id="87" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      Verified NGO
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="0367a629-fa17-4b6e-9232-71858c78bdcd" containerType="regular" prevTag="div" className="mt-4 grid gap-4 md:grid-cols-2" data-magicpath-id="88" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="d8ad6e65-698a-4602-b2d1-6bfa9f5ee09f" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="89" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <MilestoneItem title="Phase 1: Borehole drilling" amount="$35,000" status="complete" date="Mar 12" data-magicpath-id="90" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 2: Filtration units" amount="$28,500" status="verifying" date="Apr 02" data-magicpath-id="91" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 3: Distribution points" amount="$42,000" status="funding" data-magicpath-id="92" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="db1ff531-aa69-4584-a943-629a1c4668de" containerType="regular" prevTag="div" className="flex flex-col gap-4" data-magicpath-id="93" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="060b9ff8-d717-4d8e-9b79-eaa4e892ec87" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="94" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="5ab43207-e4e3-4259-beba-8d8282d4e0ba" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="95" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={cn('text-sm', muted)} data-magicpath-id="96" data-magicpath-path="SuikaMarketplaceLanding.tsx">Funding Progress</span>
                          <span className={cn('text-sm font-semibold', softGreen)} data-magicpath-id="97" data-magicpath-path="SuikaMarketplaceLanding.tsx">74%</span>
                        </SortableContainer>
                        <SortableContainer dndKitId="30295496-7003-41c5-98e9-92ccf52ddce0" containerType="regular" prevTag="div" className="mt-2 h-3 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="98" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <div className="h-3 rounded-full bg-[#1F6B51]" style={{
                          width: '74%'
                        }} aria-hidden data-magicpath-id="99" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="2fd75511-684d-4460-a3e8-6aea61700e38" containerType="regular" prevTag="div" className="mt-2 flex items-center justify-between text-xs" data-magicpath-id="100" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={muted} data-magicpath-id="101" data-magicpath-path="SuikaMarketplaceLanding.tsx">$77,500 raised</span>
                          <span className={muted} data-magicpath-id="102" data-magicpath-path="SuikaMarketplaceLanding.tsx">of $105,500</span>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="fb5c8e7c-b8e6-4dd2-a960-2273b2bfb81f" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="103" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="099e1d09-2527-40b7-a4af-8efdca252e7c" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="104" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <Users className={cn('h-4 w-4', accent)} data-magicpath-id="105" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="7e8feeaa-69e3-4f87-9bab-c3c9b36c26ed" containerType="regular" prevTag="div" data-magicpath-id="106" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="107" data-magicpath-path="SuikaMarketplaceLanding.tsx">1,340</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="108" data-magicpath-path="SuikaMarketplaceLanding.tsx">Donors</div>
                          </SortableContainer>
                        </SortableContainer>
                        <SortableContainer dndKitId="6e8d2f39-f80b-4bde-b5d1-48b5c040cab8" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="109" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <MapPin className={cn('h-4 w-4', accent)} data-magicpath-id="110" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="d5adb08e-294f-4e26-b8b7-08397163e5c8" containerType="regular" prevTag="div" data-magicpath-id="111" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="112" data-magicpath-path="SuikaMarketplaceLanding.tsx">Turkana, Kenya</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="113" data-magicpath-path="SuikaMarketplaceLanding.tsx">Impact region</div>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="3e015893-4ae4-4f92-a4cf-6b061751d664" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45] w-full')} data-magicpath-id="114" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

        <SortableContainer dndKitId="4096dd71-7a9b-4b8a-8003-dfd461c0d68a" containerType="regular" prevTag="section" id="trust" className="border-t border-[#E9E3D8]" data-magicpath-id="117" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="118" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Trust-first design" title="Verified organizations. Transparent milestones. On-chain accountability." subtitle="Every project undergoes NGO verification. Each milestone is a dynamic field on SUI, added as conditions evolve. Journalists and local verifiers attest to outcomes for credible impact." data-magicpath-id="119" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="547f99c8-0c09-4cc3-92f0-e116b6ac8c66" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="120" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="NGO Verification" description="Organizations pass a rigorous KYC and due diligence process before listing. Their reputation compounds over time." icon={<ShieldCheck className={cn('h-6 w-6', accent)} data-magicpath-id="122" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="121" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Dynamic Milestones" description="Projects evolve in the field. Add, update, and fund milestones dynamically using SUI's Dynamic Fields." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="124" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="123" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Independent Validation" description="Local journalists and auditors verify outcomes with media evidence and attestations recorded on-chain." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="126" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="125" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="18d9a0d7-7f5b-4abf-9b45-acaf97156130" containerType="regular" prevTag="section" id="projects" className="border-t border-[#E9E3D8]" data-magicpath-id="127" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="128" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Featured now" title="Humanitarian projects seeking support" subtitle="Discover trustworthy initiatives across regions and causes." data-magicpath-id="129" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <div className="mt-8 grid md:grid-cols-3 gap-5" data-magicpath-id="130" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {[1, 2, 3].map(i => <SortableContainer dndKitId="0100254e-59ea-49d7-8f45-668508039f6f" containerType="regular" prevTag="motion.article" key={i} whileHover={{
              y: -6
            }} className={cn('rounded-2xl overflow-hidden border', cardBorder, 'bg-white')} data-magicpath-id="131" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="ec509507-1f98-452f-a00b-a0c3e6352d4d" containerType="regular" prevTag="div" className="relative" data-magicpath-id="132" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <img src={i === 1 ? 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1593111774831-0952b2c5d5f0?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop'} alt="Project cover" className="h-40 w-full object-cover" data-magicpath-id="133" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <SortableContainer dndKitId="b9cc85fc-26f7-475f-a9a0-029574660aa5" containerType="regular" prevTag="div" className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-white/90" data-magicpath-id="134" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <Globe2 className={cn('h-4 w-4', accent)} data-magicpath-id="135" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('font-medium', beigeText)} data-magicpath-id="136" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global South</span>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="9661ec6d-8471-41cf-8bb3-ed269b1367d5" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="137" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="6949c2cd-06f4-4837-a53b-7253ba4582c7" containerType="regular" prevTag="div" className="flex items-start justify-between gap-3" data-magicpath-id="138" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <h3 className={cn('text-base font-semibold', beigeText)} data-magicpath-id="139" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        {i === 1 ? 'Cyclone Relief: Emergency Kits' : i === 2 ? 'Rural Health: Mobile Clinics' : 'Education Access: Solar Classroom'}
                      </h3>
                      <SortableContainer dndKitId="cfad53c2-3379-4bb8-bbe5-ad9c1cd4e0b3" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', softGreenBg, accent)} data-magicpath-id="140" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <ShieldCheck className="h-3.5 w-3.5" data-magicpath-id="141" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        Verified
                      </SortableContainer>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm line-clamp-2', muted)} data-magicpath-id="142" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      {i === 1 ? 'Distributing food, water purification, and shelter materials to families impacted by severe cyclones.' : i === 2 ? 'Operating mobile clinics to deliver essential primary care to underserved rural communities.' : 'Deploying solar-powered digital classrooms to improve access to quality learning.'}
                    </p>

                    <SortableContainer dndKitId="93b4f645-dcdf-4b56-89ab-9bf5cd8f2ea8" containerType="regular" prevTag="div" className="mt-4" data-magicpath-id="143" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="539554d9-4a84-4f31-aa7b-23e0cbc51fb9" containerType="regular" prevTag="div" className="flex items-center justify-between text-xs" data-magicpath-id="144" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <span className={muted} data-magicpath-id="145" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestones funded</span>
                        <span className={cn('font-semibold', softGreen)} data-magicpath-id="146" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '3/5' : i === 2 ? '2/4' : '4/6'}</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="f126a0aa-9f10-4088-94c2-efcc5ff6937d" containerType="regular" prevTag="div" className="mt-1.5 h-2 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="147" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className="h-2 rounded-full bg-[#1F6B51]" style={{
                      width: i === 1 ? '60%' : i === 2 ? '45%' : '70%'
                    }} aria-hidden data-magicpath-id="148" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>

                    <SortableContainer dndKitId="df4b9946-b779-4feb-95a8-4e01a503835d" containerType="regular" prevTag="div" className="mt-4 flex items-center justify-between" data-magicpath-id="149" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="0aae43c6-7497-48c2-8f0a-3c2349a67175" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="150" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <Users className={cn('h-4 w-4', accent)} data-magicpath-id="151" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        <span className={cn('text-xs', muted)} data-magicpath-id="152" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '524' : i === 2 ? '312' : '781'} donors</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="14ee7187-1db4-46cd-89b8-0a310a7d0e4c" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-1 text-sm font-medium', accent)} data-magicpath-id="153" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        View project <ArrowUpRight className="h-4 w-4" data-magicpath-id="154" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>)}
            </div>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="02d769fe-8ae6-427e-8e76-fd8c6bf0275f" containerType="regular" prevTag="section" id="how-it-works" className="border-t border-[#E9E3D8]" data-magicpath-id="155" data-magicpath-path="SuikaMarketplaceLanding.tsx" style={{
        display: "none"
      }}>
          <Container className="py-10 md:py-16" data-magicpath-id="156" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="How SUIka works" title="A simple, transparent flow" subtitle="From project creation to impact verification, every step is recorded for accountability." data-magicpath-id="157" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="e5941d1a-6c99-4589-b32c-c4c952d18e49" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="158" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="1. NGO creates project" description="Approved NGOs publish a project and add its first milestone on-chain." icon={<HeartHandshake className={cn('h-6 w-6', accent)} data-magicpath-id="160" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="159" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="2. Donors fund milestones" description="Backers fund specific phases as needs evolve, with funds locked to that milestone." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="162" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="161" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="3. Journalists verify" description="Independent verifiers confirm outcomes with geo-tagged media and attestations." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="164" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="163" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="2df716fc-ef44-4cfe-b255-ab6be4bf22cc" containerType="regular" prevTag="section" id="impact" className="border-t border-[#E9E3D8]" data-magicpath-id="165" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="166" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Impact in numbers" title="Scaling trust and outcomes" subtitle="SUIka’s transparent model accelerates funding and reduces overhead, so more resources reach those who need them most." data-magicpath-id="167" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="5ecdf0e7-fb74-481c-8d7d-52c854268e87" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="168" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Stat label="Avg. fee reduction" value="32%" icon={<TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="170" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="169" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Verified milestones" value="9,842" icon={<CheckCircle2 className={cn('h-5 w-5', accent)} data-magicpath-id="172" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="171" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Countries reached" value="52" icon={<Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="174" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="173" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Journalist network" value="1,140" icon={<Award className={cn('h-5 w-5', accent)} data-magicpath-id="176" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="175" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="d4c63b4c-22e6-46f8-9baa-8076ecfa5cac" containerType="regular" prevTag="section" id="cta" className="border-t border-[#E9E3D8]" data-magicpath-id="177" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="178" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="a6e88612-fc14-4d7a-88a9-927a3f61a6fa" containerType="regular" prevTag="div" className={cn('relative overflow-hidden rounded-2xl border p-6 md:p-10', 'bg-gradient-to-br from-[#EAF6F0] to-[#F8F4ED]', cardBorder)} data-magicpath-id="179" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {!isMobile && <>
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#DDF3EA] blur-2xl opacity-70" data-magicpath-id="180" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#F1E8D9] blur-2xl opacity-70" data-magicpath-id="181" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </>}

              <SortableContainer dndKitId="446ab61f-f165-4019-ae83-9e8e4991f971" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-6 items-center" data-magicpath-id="182" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="20611e48-ad40-49db-9c8e-7726ef591c27" containerType="regular" prevTag="div" data-magicpath-id="183" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="184" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    For NGOs and Donors
                  </div>
                  <h3 className={cn('mt-3 text-2xl md:text-3xl font-semibold', beigeText)} data-magicpath-id="185" data-magicpath-path="SuikaMarketplaceLanding.tsx">Join Suistainables trusted marketplace</h3>
                  <p className={cn('mt-3 text-sm md:text-base', muted)} data-magicpath-id="186" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    NGOs: publish dynamic, transparent projects. Donors: fund with confidence and follow impact in real time.
                  </p>

                  <SortableContainer dndKitId="8510abb2-f805-4711-aed9-8d606e708a06" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="187" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="25d00147-6b3c-4674-b660-585fa4421b97" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="188" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Apply as NGO
                      <ArrowRight className="h-4 w-4" data-magicpath-id="189" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="190" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Explore projects
                    </button>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="74f691a0-f6cb-40cb-91a9-1a1401bc6eda" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="191" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="e348012c-84d5-48b9-b31e-971940cb2549" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="192" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="969c2d51-c9c0-41d4-a325-e336f7caf2a6" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="193" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className={cn('h-5 w-5', accent)} data-magicpath-id="194" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="195" data-magicpath-path="SuikaMarketplaceLanding.tsx">Verified NGOs</span>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm', muted)} data-magicpath-id="196" data-magicpath-path="SuikaMarketplaceLanding.tsx">Rigorous checks and evolving reputation scores.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="a02aad89-c103-4164-acb3-9bb450e61e87" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="197" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Award className={cn('h-5 w-5', accent)} data-magicpath-id="198" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="199" data-magicpath-path="SuikaMarketplaceLanding.tsx">Independent Impact</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="200" data-magicpath-path="SuikaMarketplaceLanding.tsx">Journalist attestations for outcome validation.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="403f4620-c829-43ba-8d84-7590238116b5" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="201" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="202" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="203" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone Funding</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="204" data-magicpath-path="SuikaMarketplaceLanding.tsx">Targeted support for each project phase.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="0ac2e300-e713-4a83-84ee-05ce4ee3e041" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="205" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

      <SortableContainer dndKitId="363d1540-87e9-45b7-80ca-9497149a2180" containerType="regular" prevTag="footer" className="border-t border-[#E9E3D8]" data-magicpath-id="209" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="210" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="d08e9677-4b10-42cd-94c5-1b8662539d44" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="211" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="46413a0c-8815-4a5b-9df3-d7c47473c70c" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="212" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="01d8b44d-148f-4910-83d4-d84c26b4a228" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="213" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="214" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="215" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="bf217e17-1d84-4c90-a0c0-3402d894d2df" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="216" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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