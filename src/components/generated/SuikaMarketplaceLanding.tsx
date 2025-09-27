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
  }) => <SortableContainer dndKitId="d43d3383-21aa-445b-8b9e-a547e3ce61ba" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="1" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      {eyebrow ? <SortableContainer dndKitId="0265ebbb-bb0a-4c35-8a7f-d326c9f8c626" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} style={{
      display: "none"
    }} data-magicpath-id="2" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span style={{
        display: "none"
      }} data-magicpath-id="3" data-magicpath-path="SuikaMarketplaceLanding.tsx">{eyebrow}</span>
        </SortableContainer> : null}
      <SortableContainer dndKitId="f11c85df-0b64-4164-b19f-7f67cd3c348e" containerType="regular" prevTag="div" data-magicpath-id="4" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="2fa3b2ba-f967-460e-8cbe-3238c067893b" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4 md:p-6', card, cardBorder)} data-magicpath-id="7" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="b4ad4111-b6a5-4ac7-9705-85dab1e78466" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-lg p-2', softGreenBg)} data-magicpath-id="9" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="debf5406-a8ff-4de5-983a-b3f55b64c4d2" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="3eb9d7a6-9783-4246-82c5-303e7fc9e879" containerType="regular" prevTag="motion.div" whileHover={{
    y: -4
  }} className={cn('rounded-2xl border p-5 md:p-6 h-full', card, cardBorder)} data-magicpath-id="13" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="d899f524-5f1a-4fe2-8aca-461e9db5a31f" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="14" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <div className={cn('rounded-xl p-3', softGreenBg)} data-magicpath-id="15" data-magicpath-path="SuikaMarketplaceLanding.tsx">{icon}</div>
        <SortableContainer dndKitId="89cbaeb4-ea35-4930-909a-ad381697610d" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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
  }) => <SortableContainer dndKitId="87020cca-e75a-48d5-8951-26345395c696" containerType="regular" prevTag="div" className={cn('flex items-center justify-between gap-4 rounded-xl border px-4 py-2 text-sm', card, cardBorder, 'min-w-[180px]')} style={{
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
    return <SortableContainer dndKitId="f7a02907-b2bd-4d18-ba2b-2d4cacb42f80" containerType="regular" prevTag="div" className={cn('flex flex-col gap-3 rounded-xl border p-4', 'bg-white/90', cardBorder)} data-magicpath-id="25" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="570088f2-37dd-48dc-8df0-cb44107e2111" containerType="regular" prevTag="div" className="flex items-center justify-between gap-3" data-magicpath-id="26" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="c25945d0-3d9c-40cf-8c93-ee15b6f5d5d6" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="27" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="5e13fc36-d000-4d7f-9854-963dfca0752f" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs', statusStyles)} data-magicpath-id="28" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {StatusIcon}
              <span className="font-medium" data-magicpath-id="29" data-magicpath-path="SuikaMarketplaceLanding.tsx">{statusLabel}</span>
            </SortableContainer>
          </SortableContainer>
          {date ? <SortableContainer dndKitId="48976917-6192-4268-9496-586a366aab20" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 text-xs', muted)} data-magicpath-id="30" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Calendar className="h-4 w-4" data-magicpath-id="31" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <span data-magicpath-id="32" data-magicpath-path="SuikaMarketplaceLanding.tsx">{date}</span>
            </SortableContainer> : null}
        </SortableContainer>
        <SortableContainer dndKitId="d17266b4-b668-46d0-a54f-1ac745a764b4" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="33" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="9743f825-3259-4baa-873c-45ef35c33459" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-semibold', beigeText)} data-magicpath-id="35" data-magicpath-path="SuikaMarketplaceLanding.tsx">{title}</div>
            <div className={cn('text-sm', muted)} data-magicpath-id="36" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone budget</div>
          </SortableContainer>
          <SortableContainer dndKitId="98768234-adb6-46c6-973e-dab75363474c" containerType="regular" prevTag="div" className={cn('text-right')} data-magicpath-id="37" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <div className={cn('font-bold', softGreen)} data-magicpath-id="38" data-magicpath-path="SuikaMarketplaceLanding.tsx">{amount}</div>
            <SortableContainer dndKitId="0ebdc3ce-22c3-45a7-89d7-a60b2860c07c" containerType="regular" prevTag="button" className={cn('mt-1 inline-flex items-center gap-1 text-xs font-medium', accent)} data-magicpath-id="39" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              See details <ArrowUpRight className="h-3.5 w-3.5" data-magicpath-id="40" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="4daa64a3-1218-41d7-948f-2c2350ecaab4" containerType="regular" prevTag="div" className={cn('w-full min-h-dvh', beige)} data-magicpath-id="41" data-magicpath-path="SuikaMarketplaceLanding.tsx">
      <SortableContainer dndKitId="8af14591-95b2-4e9e-af42-f34ce0569833" containerType="regular" prevTag="header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-[#E4E8F0]" data-magicpath-id="42" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="flex h-16 md:h-20 items-center justify-between" data-magicpath-id="43" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="65ed39fe-2d40-4a0c-964c-67347729db5c" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="44" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="a75c6d26-dd49-48d8-ba0c-c7cabee319cf" containerType="regular" prevTag="div" className={cn('h-9 w-9 rounded-xl flex items-center justify-center', softGreenBg)} aria-hidden style={{
            display: "none"
          }} data-magicpath-id="45" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <HeartHandshake className={cn('h-5 w-5', accent)} style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="2badaaeb-b0b9-49a2-bbb0-85b8694199cf" containerType="regular" prevTag="div" className="flex flex-col leading-tight" data-magicpath-id="47" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <span className={cn('text-lg md:text-xl font-semibold tracking-tight', beigeText)} data-magicpath-id="48" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables
            </span>
              <span className={cn('text-[11px] md:text-xs', muted)} data-magicpath-id="49" data-magicpath-path="SuikaMarketplaceLanding.tsx">Humanitarian Marketplace</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7d8cabed-cd00-4fbc-b72e-ea879dd62b9a" containerType="regular" prevTag="nav" className="hidden md:flex items-center gap-6" data-magicpath-id="50" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

          <SortableContainer dndKitId="f8876950-df8c-459b-9392-46d3c67980b3" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="55" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="56fdcea9-182a-419a-82d4-e7182f5323f2" containerType="regular" prevTag="button" className={cn('hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium', cardBorder, beigeText)} data-magicpath-id="56" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Search className="h-4 w-4" data-magicpath-id="57" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              Explore
            </SortableContainer>
            <SortableContainer dndKitId="52232024-8869-435c-b098-d2e3b7127d67" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-2 rounded-lg px-3 md:px-4 py-2 text-sm font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="58" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              Connect Wallet
              <ArrowRight className="h-4 w-4" data-magicpath-id="59" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </Container>
      </SortableContainer>

      <SortableContainer dndKitId="c7d18799-0c21-45d9-b79e-1e909e72c5d0" containerType="regular" prevTag="main" data-magicpath-id="60" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <SortableContainer dndKitId="75a58bc8-8677-4f8c-b645-a58496b71dae" containerType="regular" prevTag="section" className="relative overflow-hidden" data-magicpath-id="61" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="62" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="691443c4-516c-417f-ab90-1f3fa9eb9362" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" style={{
            display: "flex",
            flexDirection: "row"
          }} data-magicpath-id="63" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="04dd56ea-4cbc-4214-8013-f3988be5186b" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} style={{
                display: "none"
              }} data-magicpath-id="65" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Built on SUI • Dynamic Milestones • Verified Impact
                </div>
                <h1 className={cn('mt-4 text-3xl md:text-5xl font-semibold tracking-tight', beigeText)} data-magicpath-id="66" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  Fund trusted humanitarian projects with real-time, verifiable progress
                </h1>
                <p className={cn('mt-4 text-base md:text-lg leading-relaxed', muted)} data-magicpath-id="67" data-magicpath-path="SuikaMarketplaceLanding.tsx">Suistainables is a decentralized marketplace where verified NGOs publish projects with dynamic milestones. Donors fund specific phases and journalists validate real-world outcomes—for radical transparency.</p>

                <SortableContainer dndKitId="72487a75-3165-4a6a-95e8-6ea90b0f7872" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" style={{
                display: "none"
              }} data-magicpath-id="68" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="48679f22-f7b9-48ca-a85d-2df2bbbcd9d2" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45]')} data-magicpath-id="69" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    Start exploring projects
                    <ArrowRight className="h-4 w-4" data-magicpath-id="70" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="1ba47d91-46bb-4828-89ff-c035985ba7c4" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="71" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Play className="h-4 w-4" data-magicpath-id="72" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    How SUIka works
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="0e34ef88-5f04-4d98-bcc1-f19a7f9cd335" containerType="regular" prevTag="div" className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" style={{
                display: "none"
              }} data-magicpath-id="73" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <ProgressPill label="Active projects" value="128" data-magicpath-id="74" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Funds raised" value="$4.7M" data-magicpath-id="75" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="Avg. verification time" value="5 days" data-magicpath-id="76" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <ProgressPill label="NGOs onboarded" value="86" data-magicpath-id="77" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="0c53e3a6-4f58-40f2-b688-e75b3305eaf6" containerType="regular" prevTag="div" className="relative" data-magicpath-id="78" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="8c873882-854d-42d0-a3cd-d0378111d5a2" containerType="regular" prevTag="div" className={cn('rounded-2xl border shadow-sm p-4 md:p-6', card, cardBorder)} role="region" aria-label="Featured project preview" style={{
                display: "none"
              }} data-magicpath-id="79" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="47152c31-e80d-491e-a34d-2aa3268d6219" containerType="regular" prevTag="div" className="flex items-start justify-between gap-4" data-magicpath-id="80" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="a5ff12bc-8d51-4c33-80d9-2666fce054f4" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="81" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="NGO volunteers distributing aid" className="h-12 w-12 rounded-xl object-cover" data-magicpath-id="82" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <SortableContainer dndKitId="e95faf21-3249-4f83-903b-210ed0366355" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className={cn('text-sm font-medium', muted)} data-magicpath-id="84" data-magicpath-path="SuikaMarketplaceLanding.tsx">Featured Project</div>
                        <div className={cn('text-base md:text-lg font-semibold', beigeText)} data-magicpath-id="85" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          Clean Water for Kakuma Refugee Camp
                        </div>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="82d518fc-881a-44ec-8ae4-c8fda9d2ab6a" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs', softGreenBg, 'border-transparent', accent)} data-magicpath-id="86" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className="h-4 w-4" data-magicpath-id="87" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      Verified NGO
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="3fbfd678-85ce-4e5b-ad0f-65753351336a" containerType="regular" prevTag="div" className="mt-4 grid gap-4 md:grid-cols-2" data-magicpath-id="88" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="cb2a72fb-b7e9-41d9-93d2-d96b59f6b31c" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="89" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <MilestoneItem title="Phase 1: Borehole drilling" amount="$35,000" status="complete" date="Mar 12" data-magicpath-id="90" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 2: Filtration units" amount="$28,500" status="verifying" date="Apr 02" data-magicpath-id="91" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <MilestoneItem title="Phase 3: Distribution points" amount="$42,000" status="funding" data-magicpath-id="92" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="94749e89-b148-4532-bf22-ceb277fbb33e" containerType="regular" prevTag="div" className="flex flex-col gap-4" data-magicpath-id="93" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="c7be2433-7f33-4dc5-a174-0ae7a7334c5b" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="94" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="0522bb6b-9b2f-4464-807a-f9089d67f0e1" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="95" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={cn('text-sm', muted)} data-magicpath-id="96" data-magicpath-path="SuikaMarketplaceLanding.tsx">Funding Progress</span>
                          <span className={cn('text-sm font-semibold', softGreen)} data-magicpath-id="97" data-magicpath-path="SuikaMarketplaceLanding.tsx">74%</span>
                        </SortableContainer>
                        <SortableContainer dndKitId="325cba2f-b455-43ac-9c77-0519ba52ac5a" containerType="regular" prevTag="div" className="mt-2 h-3 w-full rounded-full bg-[#E9E3D8]" data-magicpath-id="98" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <div className="h-3 rounded-full bg-[#1F6B51]" style={{
                          width: '74%'
                        }} aria-hidden data-magicpath-id="99" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="4b489ddc-247e-410a-9388-ec87b79d2f6d" containerType="regular" prevTag="div" className="mt-2 flex items-center justify-between text-xs" data-magicpath-id="100" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <span className={muted} data-magicpath-id="101" data-magicpath-path="SuikaMarketplaceLanding.tsx">$77,500 raised</span>
                          <span className={muted} data-magicpath-id="102" data-magicpath-path="SuikaMarketplaceLanding.tsx">of $105,500</span>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="d85313a6-f622-433e-953c-48ec63d5f1a6" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="103" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <SortableContainer dndKitId="ab81f2d0-fa7a-4738-ac00-bdc0818e55b2" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="104" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <Users className={cn('h-4 w-4', accent)} data-magicpath-id="105" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="4f43aa06-738e-49ab-aecb-2a5828ce9fe2" containerType="regular" prevTag="div" data-magicpath-id="106" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="107" data-magicpath-path="SuikaMarketplaceLanding.tsx">1,340</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="108" data-magicpath-path="SuikaMarketplaceLanding.tsx">Donors</div>
                          </SortableContainer>
                        </SortableContainer>
                        <SortableContainer dndKitId="a4734e3e-79e8-415d-b08f-535c907d704d" containerType="regular" prevTag="div" className={cn('flex items-center gap-2 rounded-xl border p-3', card, cardBorder)} data-magicpath-id="109" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                          <MapPin className={cn('h-4 w-4', accent)} data-magicpath-id="110" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                          <SortableContainer dndKitId="2ef24f5f-6b11-4394-b3d4-9ac5715225b0" containerType="regular" prevTag="div" data-magicpath-id="111" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                            <div className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="112" data-magicpath-path="SuikaMarketplaceLanding.tsx">Turkana, Kenya</div>
                            <div className={cn('text-xs', muted)} data-magicpath-id="113" data-magicpath-path="SuikaMarketplaceLanding.tsx">Impact region</div>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      <SortableContainer dndKitId="839d1f16-c009-450b-af0c-8a8826976b51" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm', 'bg-[#1F6B51] text-white hover:bg-[#1a5b45] w-full')} data-magicpath-id="114" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

        <SortableContainer dndKitId="ea2213d0-3eb5-4789-aaf8-bcf7ca38d951" containerType="regular" prevTag="section" id="trust" className="border-t border-[#E4E8F0]" data-magicpath-id="117" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="118" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Trust-first design" title="Verified organizations. Transparent milestones. On-chain accountability." subtitle="Every project undergoes NGO verification. Each milestone is a dynamic field on SUI, added as conditions evolve. Journalists and local verifiers attest to outcomes for credible impact." data-magicpath-id="119" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="4b38e59a-03b5-472d-9b2d-748bbb7270af" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="120" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="NGO Verification" description="Organizations pass a rigorous KYC and due diligence process before listing. Their reputation compounds over time." icon={<ShieldCheck className={cn('h-6 w-6', accent)} data-magicpath-id="122" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="121" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Dynamic Milestones" description="Projects evolve in the field. Add, update, and fund milestones dynamically using SUI's Dynamic Fields." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="124" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="123" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="Independent Validation" description="Local journalists and auditors verify outcomes with media evidence and attestations recorded on-chain." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="126" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="125" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="efebefdc-1d11-4f10-94f6-c98880fa0019" containerType="regular" prevTag="section" id="projects" className="border-t border-[#E4E8F0]" data-magicpath-id="127" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="128" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Featured now" title="Humanitarian projects seeking support" subtitle="Discover trustworthy initiatives across regions and causes." data-magicpath-id="129" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <div className="mt-8 grid md:grid-cols-3 gap-5" data-magicpath-id="130" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {[1, 2, 3].map(i => <SortableContainer dndKitId="d8e280e2-0661-4e08-acdc-a4d5eebdb107" containerType="regular" prevTag="motion.article" key={i} whileHover={{
              y: -6
            }} className={cn('rounded-2xl overflow-hidden border', cardBorder, 'bg-white/90 backdrop-blur-sm')} data-magicpath-id="131" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="624ab8be-cbbc-4196-9b7f-5884c50d3f35" containerType="regular" prevTag="div" className="relative" data-magicpath-id="132" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <img src={i === 1 ? 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' : i === 2 ? 'https://images.unsplash.com/photo-1593111774831-0952b2c5d5f0?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop'} alt="Project cover" className="h-40 w-full object-cover" data-magicpath-id="133" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <SortableContainer dndKitId="fe985b74-1912-4c67-a999-ddc18f49dbd1" containerType="regular" prevTag="div" className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-white/80 backdrop-blur" data-magicpath-id="134" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <Globe2 className={cn('h-4 w-4', accent)} data-magicpath-id="135" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('font-medium', beigeText)} data-magicpath-id="136" data-magicpath-path="SuikaMarketplaceLanding.tsx">Global South</span>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="48f81c7d-80ac-4140-b51e-b9be713194c6" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="137" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="4c4f031e-ef96-4715-9d1d-526bb3202f49" containerType="regular" prevTag="div" className="flex items-start justify-between gap-3" data-magicpath-id="138" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <h3 className={cn('text-base font-semibold', beigeText)} data-magicpath-id="139" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        {i === 1 ? 'Cyclone Relief: Emergency Kits' : i === 2 ? 'Rural Health: Mobile Clinics' : 'Education Access: Solar Classroom'}
                      </h3>
                      <SortableContainer dndKitId="1868d7f6-71a1-4938-bc1e-bf3dee7d1672" containerType="regular" prevTag="div" className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', softGreenBg, accent)} data-magicpath-id="140" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <ShieldCheck className="h-3.5 w-3.5" data-magicpath-id="141" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        Verified
                      </SortableContainer>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm line-clamp-2', muted)} data-magicpath-id="142" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      {i === 1 ? 'Distributing food, water purification, and shelter materials to families impacted by severe cyclones.' : i === 2 ? 'Operating mobile clinics to deliver essential primary care to underserved rural communities.' : 'Deploying solar-powered digital classrooms to improve access to quality learning.'}
                    </p>

                    <SortableContainer dndKitId="3ad94b11-824b-44c3-8795-5bdb92fe6d81" containerType="regular" prevTag="div" className="mt-4" data-magicpath-id="143" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="44a40ceb-8af6-4203-bf73-9f5dcfa5bc80" containerType="regular" prevTag="div" className="flex items-center justify-between text-xs" data-magicpath-id="144" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <span className={muted} data-magicpath-id="145" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestones funded</span>
                        <span className={cn('font-semibold', softGreen)} data-magicpath-id="146" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '3/5' : i === 2 ? '2/4' : '4/6'}</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="09fa8097-7fd0-4ab7-a4e8-a6369dd1282d" containerType="regular" prevTag="div" className="mt-1.5 h-2 w-full rounded-full bg-[linear-gradient(90deg,_#E9EDF5_0%,_#E7F4EE_100%)]" data-magicpath-id="147" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <div className="h-2 rounded-full bg-[linear-gradient(90deg,_#1F6B51_0%,_#2BAA80_100%)]" style={{
                      width: i === 1 ? '60%' : i === 2 ? '45%' : '70%'
                    }} aria-hidden data-magicpath-id="148" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>

                    <SortableContainer dndKitId="675077d4-e83f-4c22-ad0b-1fd4235a251f" containerType="regular" prevTag="div" className="mt-4 flex items-center justify-between" data-magicpath-id="149" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <SortableContainer dndKitId="9c2df9df-0524-426f-9923-6338aa965582" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="150" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        <Users className={cn('h-4 w-4', accent)} data-magicpath-id="151" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                        <span className={cn('text-xs', muted)} data-magicpath-id="152" data-magicpath-path="SuikaMarketplaceLanding.tsx">{i === 1 ? '524' : i === 2 ? '312' : '781'} donors</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="c878d93e-99e2-4bc7-aedd-0f0a695ecd2a" containerType="regular" prevTag="button" className={cn('inline-flex items-center gap-1 text-sm font-medium', accent)} data-magicpath-id="153" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                        View project <ArrowUpRight className="h-4 w-4" data-magicpath-id="154" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>)}
            </div>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="a996a129-d493-44a3-906f-7d30e5ea55fb" containerType="regular" prevTag="section" id="how-it-works" className="border-t border-[#E4E8F0]" style={{
        display: "none"
      }} data-magicpath-id="155" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="156" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="How SUIka works" title="A simple, transparent flow" subtitle="From project creation to impact verification, every step is recorded for accountability." data-magicpath-id="157" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="f7928d50-13bd-43b9-a192-a5126f4d3db3" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="158" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Feature title="1. NGO creates project" description="Approved NGOs publish a project and add its first milestone on-chain." icon={<HeartHandshake className={cn('h-6 w-6', accent)} data-magicpath-id="160" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="159" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="2. Donors fund milestones" description="Backers fund specific phases as needs evolve, with funds locked to that milestone." icon={<TrendingUp className={cn('h-6 w-6', accent)} data-magicpath-id="162" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="161" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Feature title="3. Journalists verify" description="Independent verifiers confirm outcomes with geo-tagged media and attestations." icon={<Award className={cn('h-6 w-6', accent)} data-magicpath-id="164" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="163" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="a2026302-0dbe-4d40-bb29-ea3022f88e63" containerType="regular" prevTag="section" id="impact" className="border-t border-[#E4E8F0]" data-magicpath-id="165" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="166" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SectionTitle eyebrow="Impact in numbers" title="Scaling trust and outcomes" subtitle="SUIka’s transparent model accelerates funding and reduces overhead, so more resources reach those who need them most." data-magicpath-id="167" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            <SortableContainer dndKitId="ae66fc0a-be37-49d0-a4d3-523b119e51bd" containerType="regular" prevTag="div" className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="168" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <Stat label="Avg. fee reduction" value="32%" icon={<TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="170" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="169" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Verified milestones" value="9,842" icon={<CheckCircle2 className={cn('h-5 w-5', accent)} data-magicpath-id="172" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="171" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Countries reached" value="52" icon={<Globe2 className={cn('h-5 w-5', accent)} data-magicpath-id="174" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="173" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              <Stat label="Journalist network" value="1,140" icon={<Award className={cn('h-5 w-5', accent)} data-magicpath-id="176" data-magicpath-path="SuikaMarketplaceLanding.tsx" />} data-magicpath-id="175" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
            </SortableContainer>
          </Container>
        </SortableContainer>

        <SortableContainer dndKitId="4b1c70c7-5e6b-473b-9320-b89bc008192e" containerType="regular" prevTag="section" id="cta" className="border-t border-[#E4E8F0]" data-magicpath-id="177" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <Container className="py-10 md:py-16" data-magicpath-id="178" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="58e60688-13d3-4fdf-baa9-94f7ec39d275" containerType="regular" prevTag="div" className={cn('relative overflow-hidden rounded-2xl border p-6 md:p-10', 'bg-[linear-gradient(135deg,_#EAF6F0_0%,_#EEF4FF_60%,_#F8F4ED_100%)]', cardBorder)} data-magicpath-id="179" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              {!isMobile && <>
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#DDF3EA_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="180" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#F1E8D9_0%,_transparent_70%)] blur-2xl opacity-80" data-magicpath-id="181" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                </>}

              <SortableContainer dndKitId="a9a948f5-3577-46a0-ab82-8ce9b846ba70" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-6 items-center" data-magicpath-id="182" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <SortableContainer dndKitId="9fe71520-3bb4-4e9b-a6d8-b01144ccae24" containerType="regular" prevTag="div" data-magicpath-id="183" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm', softGreenBg, accent)} data-magicpath-id="184" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    For NGOs and Donors
                  </div>
                  <h3 className={cn('mt-3 text-2xl md:text-3xl font-semibold', beigeText)} data-magicpath-id="185" data-magicpath-path="SuikaMarketplaceLanding.tsx">Join Suistainables trusted marketplace</h3>
                  <p className={cn('mt-3 text-sm md:text-base', muted)} data-magicpath-id="186" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    NGOs: publish dynamic, transparent projects. Donors: fund with confidence and follow impact in real time.
                  </p>

                  <SortableContainer dndKitId="cb774585-9c26-4e9a-8150-c29ed2bc8081" containerType="regular" prevTag="div" className="mt-6 flex flex-col sm:flex-row gap-3" data-magicpath-id="187" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="51755e85-e945-424c-b675-7d87f69db872" containerType="regular" prevTag="button" className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm md:text-base font-semibold shadow-sm', 'bg-[linear-gradient(135deg,_#15664f_0%,_#1F6B51_50%,_#29906F_100%)] text-white hover:brightness-110')} data-magicpath-id="188" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Apply as NGO
                      <ArrowRight className="h-4 w-4" data-magicpath-id="189" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    </SortableContainer>
                    <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm md:text-base font-semibold', cardBorder, beigeText)} data-magicpath-id="190" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      Explore projects
                    </button>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="c926b839-4d7c-439d-849a-ee0604df6974" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-3" data-magicpath-id="191" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                  <SortableContainer dndKitId="7dac92da-0632-4c51-9373-16939f5795f7" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="192" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <SortableContainer dndKitId="9ce5ed7e-c983-4606-941e-8a3f3c69feae" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="193" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                      <ShieldCheck className={cn('h-5 w-5', accent)} data-magicpath-id="194" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                      <span className={cn('text-sm font-semibold', beigeText)} data-magicpath-id="195" data-magicpath-path="SuikaMarketplaceLanding.tsx">Verified NGOs</span>
                    </SortableContainer>
                    <p className={cn('mt-2 text-sm', muted)} data-magicpath-id="196" data-magicpath-path="SuikaMarketplaceLanding.tsx">Rigorous checks and evolving reputation scores.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="eac062c2-c4cd-4092-93b4-39d873efc5b2" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="197" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <Award className={cn('h-5 w-5', accent)} data-magicpath-id="198" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="199" data-magicpath-path="SuikaMarketplaceLanding.tsx">Independent Impact</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="200" data-magicpath-path="SuikaMarketplaceLanding.tsx">Journalist attestations for outcome validation.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="3e1af91f-bb20-471a-b4e0-537f8d40163c" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="201" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                    <TrendingUp className={cn('h-5 w-5', accent)} data-magicpath-id="202" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
                    <div className={cn('mt-2 text-sm font-semibold', beigeText)} data-magicpath-id="203" data-magicpath-path="SuikaMarketplaceLanding.tsx">Milestone Funding</div>
                    <p className={cn('text-sm', muted)} data-magicpath-id="204" data-magicpath-path="SuikaMarketplaceLanding.tsx">Targeted support for each project phase.</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="6d7cb4e9-150d-4c69-883c-5ab503e53776" containerType="regular" prevTag="div" className={cn('rounded-xl border p-4', card, cardBorder)} data-magicpath-id="205" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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

      <SortableContainer dndKitId="46fe05f1-bcbc-4d99-b587-66cccfed7517" containerType="regular" prevTag="footer" className="border-t border-[#E4E8F0]" data-magicpath-id="209" data-magicpath-path="SuikaMarketplaceLanding.tsx">
        <Container className="py-8" data-magicpath-id="210" data-magicpath-path="SuikaMarketplaceLanding.tsx">
          <SortableContainer dndKitId="041697dc-63ab-4754-b6d8-b330c1eb14fc" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="211" data-magicpath-path="SuikaMarketplaceLanding.tsx">
            <SortableContainer dndKitId="f91b5d8c-6eb5-4a5c-8b58-2a0375aeea6e" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="212" data-magicpath-path="SuikaMarketplaceLanding.tsx">
              <SortableContainer dndKitId="7cc3b3cb-e46d-49c2-9789-fa9d06bbb470" containerType="regular" prevTag="div" className={cn('h-8 w-8 rounded-lg flex items-center justify-center', softGreenBg)} aria-hidden data-magicpath-id="213" data-magicpath-path="SuikaMarketplaceLanding.tsx">
                <HeartHandshake className={cn('h-4 w-4', accent)} data-magicpath-id="214" data-magicpath-path="SuikaMarketplaceLanding.tsx" />
              </SortableContainer>
              <div className={cn('text-sm', muted)} data-magicpath-id="215" data-magicpath-path="SuikaMarketplaceLanding.tsx">© {new Date().getFullYear()} SUIka. All rights reserved.</div>
            </SortableContainer>
            <SortableContainer dndKitId="e6c67b35-7918-4fe2-9ac0-924f55ca850d" containerType="regular" prevTag="div" className="flex items-center gap-4 text-sm" data-magicpath-id="216" data-magicpath-path="SuikaMarketplaceLanding.tsx">
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