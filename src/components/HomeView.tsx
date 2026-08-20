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
import agriImg from '../assets/images/agri_telemetry_analytics_1784880228300.jpg';
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
      <section className="hero-section relative min-h-0 sm:min-h-[85vh] lg:min-h-screen flex flex-col justify-center pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#010610] overflow-hidden">
        {/* Background Image - High Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-85 sm:opacity-95 overflow-hidden">
          <LazyImage
            src={techHubImg}
            alt="Tech Analytics Background"
            className="w-full h-full object-cover object-center md:object-[center_30%] scale-105"
            containerClassName="w-full h-full"
          />
        </div>

        {/* Floating Abstract Data-Blobs (Visible across mobile, tablet, desktop) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Primary glowing data-blob top-left - positioned out of main text path */}
          <div className="absolute -top-16 -left-16 w-36 h-36 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#134074]/25 via-[#0B2545]/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-data-blob-1 opacity-20 sm:opacity-30 lg:opacity-40" />

          {/* Secondary glowing data-blob bottom-right */}
          <div className="absolute -bottom-16 -right-16 w-44 h-44 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] bg-gradient-to-bl from-[#0B2545]/25 via-[#134074]/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-data-blob-2 opacity-15 sm:opacity-25 lg:opacity-35" />

          {/* Subtle floating abstract mesh shape center-right */}
          <div className="absolute top-1/4 right-4 sm:right-8 w-28 h-28 sm:w-56 sm:h-56 border border-white/10 rounded-full blur-sm animate-data-blob-1 opacity-15 bg-white/5" />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10 my-auto text-center space-y-5 sm:space-y-8">

          {/* LOCALIZED READABILITY ZONE (Soft Elliptical Navy Zone directly behind text content) */}
          <div className="absolute -inset-x-6 sm:-inset-x-12 -inset-y-6 sm:-inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(5,19,41,0.85)_0%,rgba(5,19,41,0.45)_55%,transparent_100%)] pointer-events-none -z-10 rounded-full blur-sm" aria-hidden="true" />

          {/* One-Column Hero Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3.5 sm:space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="font-sans font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
              Turning Data Into Better Decisions.
            </h1>

            <p className="font-sans font-normal text-xs xs:text-sm sm:text-base text-white/95 leading-relaxed sm:leading-relaxed tracking-wide max-w-2xl mx-auto px-1 sm:px-0 [text-shadow:_0_1px_8px_rgba(0,0,0,0.85)]">
              DNA TECH delivers verified market research, field data collection, and AI-driven analytics that eliminate guesswork, de-risk expansion, and accelerate growth for enterprises, NGOs, and public institutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full max-w-xs sm:max-w-none mx-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('contact')}
                className="hero-primary-btn w-full sm:w-auto px-7 py-3.5 rounded-[12px] bg-white hover:bg-white/90 text-[#0B2442] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer min-h-[48px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#0B2442]" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('services')}
                className="hero-secondary-btn w-full sm:w-auto px-7 py-3.5 rounded-[12px] border border-white/40 bg-white/10 hover:bg-white hover:text-[#0B2442] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer min-h-[48px]"
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
            {/* Compact Empirical Highlights Bar (Foreground Hero Card) */}
            <div className="hero-card bg-[#0B2545]/90 border border-white/10 p-2.5 sm:p-4 rounded-[16px] sm:rounded-[18px] backdrop-blur-md shadow-md">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="hero-card-subitem p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-sm xs:text-base sm:text-2xl font-sans font-extrabold text-white">
                    <AnimatedCounter value="10+" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-white/70 font-mono uppercase tracking-wider mt-0.5">Projects</div>
                </div>
                <div className="hero-card-subitem p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-sm xs:text-base sm:text-2xl font-sans font-extrabold text-white">
                    <AnimatedCounter value="1,308+" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-white/70 font-mono uppercase tracking-wider mt-0.5">Responses</div>
                </div>
                <div className="hero-card-subitem p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[#051329]/70 border border-white/10">
                  <div className="text-sm xs:text-base sm:text-2xl font-sans font-extrabold text-white">
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
        className="partner-marquee-section partner-marquee-container relative z-10 py-4 sm:py-6 border-y border-white/10 bg-[#0B2442]/30 backdrop-blur-md overflow-hidden my-0"
      >
        {/* Subtle Edge Fades */}
        <div className="partner-marquee-edge-left absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 z-10 pointer-events-none" />
        <div className="partner-marquee-edge-right absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 z-10 pointer-events-none" />

        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee items-center space-x-8 sm:space-x-14 md:space-x-18 whitespace-nowrap py-1">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div key={idx} className="inline-flex items-center justify-center px-2.5 sm:px-4 flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 sm:h-10 md:h-12 max-h-[28px] sm:max-h-[40px] md:max-h-[48px] w-auto object-contain transition-opacity duration-300 opacity-80 hover:opacity-100"
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
                        <span className="font-mono text-[10px] text-white/75 uppercase tracking-widest block">SPECIALIZED SOLUTION</span>
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
                    <span className="font-mono text-[9px] text-white/75 uppercase tracking-widest">SPECIALIZED SOLUTION</span>
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

      {/* 6. TARGETED INTELLIGENCE SPOTLIGHT */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-[#0B2442]/20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0B2545]/80 via-[#051329]/80 to-[#010610]/80 rounded-[20px] p-8 sm:p-12 border border-white/10 text-left relative overflow-hidden shadow-xl">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Targeted Intelligence for Strategic Growth
                </h3>

                <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed tracking-wide">
                  Decisions made on unverified assumptions waste capital and stall progress. Without ground-level intelligence, enterprises miscalculate market demand, NGOs struggle to quantify impact, and startups risk launching without product-market fit.
                </p>

                <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                  DNA TECH replaces guesswork with audit-ready primary research, interactive telemetry dashboards, and scalable custom technology.
                </p>
              </div>

              <div className="lg:col-span-5 relative group">
                <LazyImage
                  src={agriImg}
                  alt="DNA TECH Field Analytics"
                  clipRevealMode="center"
                  containerClassName="rounded-2xl border border-white/20 shadow-2xl h-56 sm:h-64 w-full object-cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent opacity-60 rounded-2xl pointer-events-none" />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white uppercase font-bold tracking-wider bg-[#0B2442]/95 px-2.5 py-1 rounded border border-white/20">
                  Empirical Research & Telemetry
                </span>
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
