import React from 'react';
import { PageType } from '../types';
import {
  companyProfile,
  solutionsData,
  partners,
  partnerLogos
} from '../data';
import { motion } from 'motion/react';
import {
  staggerContainerVariants,
  fadeInUpItemVariants,
  scaleInItemVariants
} from '../utils/animationVariants';
import ScrollFadeIn from './ScrollFadeIn';
import DataScrollBackground from './DataScrollBackground';
import ScrollTimelineProcessSection from './ScrollTimelineProcessSection';
import AnimatedCounter from './AnimatedCounter';
import LazyImage from './LazyImage';
import heroImg from '../assets/images/hero_data_visualization_1784490808515.jpg';
import collabImg from '../assets/images/data_collaboration_1784490822102.jpg';
import techHubImg from '../assets/images/tech_analytics_hub_1784880241845.jpg';
import FlipCard from './FlipCard';
import {
  ArrowRight, Database, LayoutDashboard,
  Shield, Phone, Sparkles, AlertCircle,
  Handshake, Mail
} from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: PageType) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  return (
    <div className="bg-transparent text-white overflow-x-hidden font-sans relative">
      <DataScrollBackground />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-[#0B2545]/70 via-[#051329]/90 to-[#010610] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
          <LazyImage
            src={techHubImg}
            alt="Tech Analytics Background"
            className="w-full h-full object-cover scale-105"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/60 via-[#051329]/80 to-[#010610]" />
        </div>

        {/* Deep Navy Gradient Radial Overlay (Replacing white/light overlay) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,37,69,0.55)_0%,rgba(5,19,41,0.85)_50%,#010610_100%)] pointer-events-none" />

        {/* Floating Abstract Data-Blobs (Visible on mobile, tablet, desktop with responsive intensity) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Primary glowing data-blob top-left */}
          <div className="absolute -top-12 -left-12 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#134074]/30 via-[#0B2545]/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-data-blob-1 opacity-20 sm:opacity-30 lg:opacity-40" />

          {/* Secondary glowing data-blob bottom-right */}
          <div className="absolute -bottom-16 -right-16 w-56 h-56 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-gradient-to-bl from-[#0B2545]/30 via-[#134074]/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-data-blob-2 opacity-15 sm:opacity-25 lg:opacity-35" />

          {/* Subtle floating abstract mesh shape center-right */}
          <div className="absolute top-1/4 right-8 w-36 h-36 sm:w-56 sm:h-56 border border-white/10 rounded-full blur-sm animate-data-blob-1 opacity-15 bg-white/5" />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10 my-auto text-center space-y-8">

          {/* One-Column Hero Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 max-w-3xl mx-auto"
          >


            <h1 className="font-sans font-extrabold text-2.5xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.12] sm:leading-[1.08]">
              Turning Data Into Better Decisions.
            </h1>

            <p className="font-sans font-extralight text-xs sm:text-base text-white/85 leading-relaxed tracking-wide max-w-2xl mx-auto px-2 sm:px-0">
              DNA TECH delivers verified market research, field data collection, and AI-driven analytics that eliminate guesswork, de-risk expansion, and accelerate growth for enterprises, NGOs, and public institutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-7 py-3 rounded-[12px] bg-white hover:bg-white/90 text-[#0B2442] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer min-h-[44px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#0B2442]" />
              </motion.button>

              {/* "Explore Services" CTA hidden on mobile, preserved for tablet/desktop */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('services')}
                className="hidden sm:inline-flex w-full sm:w-auto px-7 py-3 rounded-[12px] border border-white/40 bg-white/10 hover:bg-white hover:text-[#0B2442] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all items-center justify-center space-x-2 cursor-pointer min-h-[44px]"
              >
                <span>Explore Services</span>
              </motion.button>
            </div>
          </motion.div>

          {/* One-Column Hero Visual Stacked Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl mx-auto pt-2 sm:pt-4"
          >
            {/* Compact Empirical Highlights Bar */}
            <div className="bg-[#0B2545]/90 border border-white/10 p-3 sm:p-4 rounded-[16px] sm:rounded-[18px] backdrop-blur-md shadow-md">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-base sm:text-2xl font-sans font-extrabold text-white">
                    <AnimatedCounter value="10+" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-white/70 font-mono uppercase tracking-wider mt-0.5">Projects</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-base sm:text-2xl font-sans font-extrabold text-white">
                    <AnimatedCounter value="1,308+" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-white/70 font-mono uppercase tracking-wider mt-0.5">Responses</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-base sm:text-2xl font-sans font-extrabold text-white">
                    <AnimatedCounter value="100%" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-white/70 font-mono uppercase tracking-wider mt-0.5">Ethical Data</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. REPEAT CLIENTS / TRUSTED PARTNERS MARQUEE */}
      <section
        role="region"
        aria-label="Trusted Partners and Clients"
        className="partner-marquee-section partner-marquee-container relative z-10 py-8 sm:py-10 border-y border-white/10 bg-[#0B2442]/30 backdrop-blur-md overflow-hidden my-0"
      >
        <div className="text-center mb-4 sm:mb-5">
          <span className="inline-block font-mono text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.25em] font-bold px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
            TRUSTED BY
          </span>
        </div>

        {/* Subtle Edge Fades */}
        <div className="partner-marquee-edge-left absolute left-0 top-0 bottom-0 w-12 sm:w-32 z-10 pointer-events-none" />
        <div className="partner-marquee-edge-right absolute right-0 top-0 bottom-0 w-12 sm:w-32 z-10 pointer-events-none" />

        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee items-center space-x-10 sm:space-x-16 md:space-x-20 whitespace-nowrap py-2">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div key={idx} className="inline-flex items-center justify-center px-3 sm:px-5 flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 sm:h-12 md:h-14 max-h-[32px] sm:max-h-[48px] w-auto object-contain transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS / VALUE PROPOSITION */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0B2545]/20 to-transparent border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                Drive Decisions with Proven Ground Data
              </h2>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                Replace assumptions with empirical evidence to optimize capital allocation and capture market demand.
              </p>
            </div>
          </ScrollFadeIn>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUpItemVariants}
              className="p-8 rounded-[20px] bg-[#0B2545] border border-white/20 hover:border-white/50 hover:bg-[#0E2E54] shadow-xl space-y-4 text-left group card-hover-lift transition-all duration-300 relative z-10"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#0B2442] border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 transition-all">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Empirical Primary Data</h3>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                Direct community feedback collected on the ground across Ethiopia, bypassing secondary speculation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUpItemVariants}
              className="p-8 rounded-[20px] bg-[#0B2545] border border-white/20 hover:border-white/50 hover:bg-[#0E2E54] shadow-xl space-y-4 text-left group card-hover-lift transition-all duration-300 relative z-10"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#0B2442] border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 transition-all">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Unbiased Data Neutrality</h3>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                Strict audit-ready research protocols that deliver un-manipulated clarity on customer behaviors.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUpItemVariants}
              className="p-8 rounded-[20px] bg-[#0B2545] border border-white/20 hover:border-white/50 hover:bg-[#0E2E54] shadow-xl space-y-4 text-left group card-hover-lift transition-all duration-300 relative z-10"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#0B2442] border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 transition-all">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Actionable Analytics</h3>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                Custom real-time dashboards designed to track KPIs, forecast trends, and accelerate execution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION - SCROLL-DRIVEN INTERACTIVE TIMELINE */}
      <ScrollTimelineProcessSection />

      {/* 5. SOLUTIONS HIGHLIGHTS */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0B2442]/20 to-transparent border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
              <div>
                <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                  Our Core Solutions
                </h2>
              </div>
              <button
                onClick={() => setCurrentPage('solutions')}
                className="mt-4 md:mt-0 font-mono text-xs text-white hover:underline uppercase tracking-wider font-bold flex items-center space-x-2 cursor-pointer"
              >
                <span>View Full Framework</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </ScrollFadeIn>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {solutionsData.items.map((sol, idx) => (
              <motion.div key={idx} variants={fadeInUpItemVariants}>
                {/* Desktop FlipCard */}
                <div className="hidden md:block">
                  <FlipCard
                    minHeight="h-72"
                    onClick={() => setCurrentPage('solutions')}
                    front={
                      <div className="space-y-4 text-left">
                        <div className="w-10 h-10 rounded-[12px] bg-[#0B2545] border border-white/20 flex items-center justify-center text-white font-mono text-xs font-bold">
                          0{idx + 1}
                        </div>
                        <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">SPECIALIZED SOLUTION</span>
                        <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">
                          {sol.title}
                        </h3>
                      </div>
                    }
                    back={
                      <div className="space-y-4 text-left">
                        <h3 className="font-sans font-extrabold text-lg text-white tracking-tight border-b border-white/10 pb-2">
                          {sol.title}
                        </h3>
                        <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                          {sol.description}
                        </p>
                        <div className="pt-2 flex items-center text-xs font-mono text-white font-bold">
                          <span>Explore Solution</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 text-white" />
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Mobile Direct Readable Card (No flip required) */}
                <div
                  onClick={() => setCurrentPage('solutions')}
                  className="block md:hidden p-6 rounded-[20px] bg-[#0B2545] border border-white/20 space-y-3 text-left cursor-pointer active:scale-[0.99] transition-transform"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-[10px] bg-[#0B2442] border border-white/20 flex items-center justify-center text-white font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">SPECIALIZED SOLUTION</span>
                  </div>
                  <h3 className="font-sans font-extrabold text-lg text-white tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="font-sans font-extralight text-xs text-white/80 leading-relaxed tracking-wide">
                    {sol.description}
                  </p>
                  <div className="pt-1 flex items-center text-xs font-mono text-white font-bold">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. WORLD BANK GAP SPOTLIGHT */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-[#0B2442]/20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-[#0B2545]/80 via-[#051329]/80 to-[#010610]/80 rounded-[20px] p-8 sm:p-12 border border-white/10 text-left relative overflow-hidden shadow-xl">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Solving the 75% SME Failure Rate in Ethiopia
                </h3>

                <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                  World Bank benchmarks show <strong className="text-white font-bold underline">75% of Ethiopian SMEs fail</strong> due to unverified market intelligence and misdirected investments.
                </p>

                <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                  DNA TECH directly resolves this challenge with verified ground feedback, feasibility metrics, and custom technology that secure long-term operational survival.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="px-5 py-2.5 rounded-[12px] bg-white hover:bg-white/90 text-[#0B2442] font-sans text-xs uppercase tracking-wider font-bold transition-all inline-flex items-center space-x-2 cursor-pointer min-h-[44px]"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="w-4 h-4 text-[#0B2442]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="w-full h-full rounded-[18px] overflow-hidden border border-white/10 relative min-h-[220px]">
                  <LazyImage
                    src={collabImg}
                    alt="DNA TECH Team Market Research Collaboration"
                    className="w-full h-full object-cover opacity-60 rounded-[18px]"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051329]/80 via-[#051329]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[14px] bg-[#0B2545]/90 border border-white/10">
                    <div className="font-sans font-extrabold text-2xl text-white tracking-tight">December 18, 2024</div>
                    <div className="font-mono text-[10px] text-white/70 uppercase tracking-wider mt-1">Officially Founded & Licensed</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 6.9 STRATEGIC ALLIANCES & KEY PARTNERS */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0B2545]/20 to-transparent border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                KEY PARTNERS & ALLIANCES
              </h2>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                Collaborating with specialized leaders in marketing, tax advisory, and social impact across Ethiopia.
              </p>
            </div>
          </ScrollFadeIn>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {partners.map((partner, pIdx) => (
              <motion.div
                key={pIdx}
                variants={fadeInUpItemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-[20px] bg-[#0B2545] border border-white/20 hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl flex flex-col justify-between text-left group relative z-10"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-[12px] bg-[#0B2442] border border-white/20 flex items-center justify-center text-white font-mono text-xs font-bold group-hover:scale-110 transition-transform">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">{partner.name}</h3>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-white/80 space-y-2">
                  {partner.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-white flex-shrink-0" />
                      <a href={`mailto:${partner.email}`} className="hover:underline truncate text-white/90">{partner.email}</a>
                    </div>
                  )}
                  {partner.phone && partner.phone.map((ph, phIdx) => (
                    <div key={phIdx} className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-white flex-shrink-0" />
                      <a href={`tel:${ph}`} className="hover:underline text-white/90">{ph}</a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0B2442]/25 to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollFadeIn>
            <div className="space-y-6">
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-snug">
                LET'S WORK TOGETHER
              </h2>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide max-w-xl mx-auto">
                {companyProfile.address}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-3.5 rounded-[12px] bg-white text-[#0B2442] hover:bg-white/90 font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer min-h-[44px]"
                >
                  Get In Touch
                </button>
                <a
                  href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`}
                  className="px-8 py-3.5 rounded-[12px] border border-white/20 hover:border-white text-white font-sans text-xs uppercase tracking-wider font-bold transition-all hover:bg-white/5 flex items-center space-x-2 cursor-pointer min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>CALL US</span>
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

    </div>
  );
}
