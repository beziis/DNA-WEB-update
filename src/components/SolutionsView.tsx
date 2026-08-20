import React, { useState } from 'react';
import { PageType } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainerVariants, fadeInUpItemVariants, fastStaggerContainerVariants } from '../utils/animationVariants';
import {
  Building2, Users, Landmark, Rocket, GraduationCap,
  CheckCircle2, ArrowRight, TrendingUp, Layers, LayoutDashboard,
  Cpu, Code, Database, BarChart3, ShieldCheck, Sparkles, FileText,
  Activity, Zap, Compass, RefreshCw, ChevronRight
} from 'lucide-react';
import DataScrollBackground from './DataScrollBackground';
import FlipCard from './FlipCard';
import LazyImage from './LazyImage';
import collabImg from '../assets/images/data_collaboration_1784490822102.jpg';
import agriImg from '../assets/images/agri_telemetry_analytics_1784880228300.jpg';
import techHubImg from '../assets/images/tech_analytics_hub_1784880241845.jpg';

interface SolutionsViewProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function SolutionsView({ setCurrentPage }: SolutionsViewProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const industrySolutions = [
    {
      sector: "Businesses & Enterprises",
      icon: Building2,
      tagline: "Market expansion and consumer intelligence",
      challenge: "Uncertainty when entering new regional markets or launching new products due to unverified consumer preferences.",
      solution: "Empirical market feasibility studies, competitor price benchmarking, and live consumer survey campaigns.",
      results: "Clear target demographic profiling, 40% reduction in market entry risk, and data-backed product pricing."
    },
    {
      sector: "NGOs & Non-Profits",
      icon: Users,
      tagline: "Field survey accuracy and project impact evaluation",
      challenge: "High operational complexity and field bias when surveying remote community needs across multi-lingual regions.",
      solution: "Standardized digital field surveys deployed on mobile hardware with offline sync and GPS verification.",
      results: "Zero response manipulation, 100% verified beneficiary feedback, and rapid baseline impact reporting."
    },
    {
      sector: "Government & Public Institutions",
      icon: Landmark,
      tagline: "Evidence-based public policy and census data",
      challenge: "Static annual public records that delay time-sensitive policy decisions and resource allocation.",
      solution: "Interactive telemetry dashboards and automated survey aggregation for regional administrative departments.",
      results: "Instant visibility into citizen feedback and streamlined data-driven municipal service distribution."
    },
    {
      sector: "Startups & Innovators",
      icon: Rocket,
      tagline: "Rapid idea validation and investor deck metrics",
      challenge: "Limited capital to test product-market fit before investing heavy engineering and operational capital.",
      solution: "Lean market validation surveys and agile MVP user feedback loops.",
      results: "Definitive market validation metrics to convince seed investors and refine core value propositions."
    },
    {
      sector: "Education & Research",
      icon: GraduationCap,
      tagline: "Academic field studies and institutional metrics",
      challenge: "Managing large-scale data collection for socio-economic research without administrative overhead.",
      solution: "End-to-end data collection pipelines with statistical analysis decks and anonymized public datasets.",
      results: "Accelerated research publishing timelines and high-integrity data integrity audits."
    }
  ];

  const caseStudies = [
    {
      title: "Community Impact Research Initiative",
      client: "Development Partner",
      metric: "1,308 Responses",
      highlight: "Gathered authentic community feedback across Addis Ababa neighborhoods to evaluate youth economic opportunities.",
      tag: "Data Collection"
    },
    {
      title: "Commercial Retail Expansion Study",
      client: "Local Retailer",
      metric: "798 Verified Consumers",
      highlight: "Mapped purchasing habits and price sensitivity to guide store location selection and inventory mix.",
      tag: "Market Research"
    },
    {
      title: "NGO Field Monitoring Platform",
      client: "Regional NGO",
      metric: "100% Digital Sync",
      highlight: "Deployed offline-first mobile survey tools for field workers monitoring health and nutrition programs.",
      tag: "Software & AI"
    },
    {
      title: "Startup Feasibility Assessment",
      client: "Tech Startup",
      metric: "4-Week Turnaround",
      highlight: "Delivered comprehensive market size, competitor analysis, and demand validation prior to launch.",
      tag: "Data Analytics"
    }
  ];

  const approachSteps = [
    { step: "01", title: "Discover", desc: "Identify key business questions and defining data requirements." },
    { step: "02", title: "Design", desc: "Craft non-biased survey methodologies and digital architectures." },
    { step: "03", title: "Collect", desc: "Deploy field teams and secure digital forms across target demographics." },
    { step: "04", title: "Analyze", desc: "Apply statistical modeling, correlation algorithms, and AI insights." },
    { step: "05", title: "Deliver", desc: "Build interactive visual dashboards and clear executive decks." },
    { step: "06", title: "Support", desc: "Provide continuous guidance to translate insights into strategic action." }
  ];

  const whyItWorks = [
    { title: "Empirical Foundation", desc: "Decisions backed by verified primary data rather than guesses or outdated assumptions." },
    { title: "Tailored Engineering", desc: "Custom software and analytics built specifically around your local operational environment." },
    { title: "Strict Data Ethics", desc: "Complete transparency, respondent confidentiality, and rigorous quality control." },
    { title: "Rapid Turnaround", desc: "Agile workflows and digital data collection ensure fast insight delivery." },
    { title: "Cross-Sector Expertise", desc: "Proven methodologies adapted across commercial, civic, and startup sectors." },
    { title: "Action-Oriented Output", desc: "Deliverables focused on clear, actionable steps that drive real organization growth." }
  ];

  const handleNavClick = (page: PageType) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="solutions-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      <DataScrollBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto pt-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-14 rounded-3xl bg-[#0B2545]/80 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              Engineered Solutions for Proven Market Results
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-3.5 rounded-[12px] bg-white text-[#0B2442] hover:bg-white/90 font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer flex items-center space-x-2 min-h-[44px]"
              >
                <span>Discuss Your Strategy</span>
                <ArrowRight className="w-4 h-4 text-[#0B2442]" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 1. THE CHALLENGE WE SOLVE */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0B2545] border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
                Targeted Intelligence for Strategic Growth
              </h2>
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
        </section>

        {/* 2. SOLUTIONS BY INDUSTRY */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">Solutions by Industry</h2>
          </div>

          {/* Desktop Industry Tabs (1024px+) */}
          <div className="hidden lg:flex items-center space-x-2 overflow-x-auto pb-4 justify-center">
            {industrySolutions.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedIndustry === idx
                      ? 'bg-white text-[#0B2442] shadow-md'
                      : 'bg-[#0B2442] text-white/80 hover:text-white hover:bg-white/15 border border-white/20'
                  }`}
                >
                  <IndIcon className="w-4 h-4" />
                  <span>{ind.sector}</span>
                </button>
              );
            })}
          </div>

          {/* Tablet 2-Column Industry Selector Grid (768px - 1023px) */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-3 mb-6">
            {industrySolutions.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`flex items-center justify-between p-3.5 rounded-xl font-mono text-xs font-bold transition-all min-h-[44px] cursor-pointer text-left ${
                    selectedIndustry === idx
                      ? 'bg-white text-[#0B2442] shadow-md border-l-4 border-[#0B2442]'
                      : 'bg-[#0B2442] text-white/80 hover:bg-white/10 border border-white/15'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <IndIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-sans font-bold text-xs truncate">{ind.sector}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 ml-2" />
                </button>
              );
            })}
          </div>

          {/* Mobile Vertical Compact Industry Selector (<768px) */}
          <div className="block md:hidden space-y-2 mb-6">
            {industrySolutions.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl font-mono text-xs font-bold transition-all min-h-[44px] cursor-pointer ${
                    selectedIndustry === idx
                      ? 'bg-white text-[#0B2442] shadow-md border-l-4 border-[#0B2442]'
                      : 'bg-[#0B2442] text-white/80 hover:bg-white/10 border border-white/15'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IndIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-sans font-bold text-xs">{ind.sector}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Active Industry Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#0B2545] border border-white/20 shadow-2xl space-y-8"
            >
              <div className="border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {industrySolutions[selectedIndustry].sector}
                  </h3>
                  <p className="font-sans font-extralight text-xs text-white/80 mt-1 tracking-wide">
                    {industrySolutions[selectedIndustry].tagline}
                  </p>
                </div>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-5 py-2.5 rounded-xl bg-white text-[#0B2442] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 self-start sm:self-auto cursor-pointer"
                >
                  Request Proposal
                </button>
              </div>

              {/* Desktop & Tablet 3-Column Card Layout (768px+) */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                <div className="p-6 rounded-2xl bg-[#0B2442] border border-white/20 shadow-xl space-y-2 card-hover-lift">
                  <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest font-bold block">
                    1. The Challenge
                  </span>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B2442] border border-white/20 shadow-xl space-y-2 card-hover-lift">
                  <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest font-bold block">
                    2. DNA TECH Solution
                  </span>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].solution}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B2442] border border-white/20 shadow-xl space-y-2 card-hover-lift">
                  <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest font-bold block">
                    3. Measurable Result
                  </span>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].results}
                  </p>
                </div>
              </div>

              {/* Mobile Editorial Stacked View (<768px) */}
              <div className="block md:hidden space-y-6 divide-y divide-white/10 pt-2">
                <div className="pt-2 space-y-1.5 text-left">
                  <div className="font-mono text-2xl font-extrabold text-white/70">01</div>
                  <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">THE CHALLENGE</div>
                  <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].challenge}
                  </p>
                </div>

                <div className="pt-5 space-y-1.5 text-left">
                  <div className="font-mono text-2xl font-extrabold text-white/40">02</div>
                  <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">DNA TECH SOLUTION</div>
                  <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].solution}
                  </p>
                </div>

                <div className="pt-5 space-y-1.5 text-left">
                  <div className="font-mono text-2xl font-extrabold text-white/40">03</div>
                  <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">MEASURABLE RESULT</div>
                  <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">
                    {industrySolutions[selectedIndustry].results}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* 3. CASE STUDY HIGHLIGHTS (Hover: Dark Navy `#0B2442`, Small Lift) */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">Case Study Highlights</h2>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {caseStudies.map((cs, cIdx) => (
              <motion.div key={cIdx} variants={fadeInUpItemVariants}>
                {/* Desktop/Tablet FlipCard */}
                <div className="hidden md:block">
                  <FlipCard
                    minHeight="h-80"
                    front={
                      <div className="space-y-4 text-left">
                        <span className="px-2.5 py-1 rounded-md bg-[#051329] border border-white/10 font-mono text-[10px] uppercase font-bold text-white inline-block">
                          {cs.tag}
                        </span>
                        <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">
                          {cs.title}
                        </h3>
                        <p className="font-mono text-xs text-white/50">{cs.client}</p>
                        <div className="text-xl font-sans font-extrabold text-white py-2 border-y border-white/10 tracking-tight">
                          {cs.metric}
                        </div>
                      </div>
                    }
                    back={
                      <div className="space-y-4 text-left">
                        <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">KEY HIGHLIGHT</span>
                        <h3 className="font-sans font-extrabold text-lg text-white border-b border-white/10 pb-2 tracking-tight">
                          {cs.title}
                        </h3>
                        <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">
                          {cs.highlight}
                        </p>
                        <div className="pt-2 border-t border-white/10 text-xs text-white/90">
                          <span className="font-mono font-bold block text-[10px] text-white/50 uppercase">Client Profile:</span>
                          <span>{cs.client}</span>
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Mobile Direct Readable Card (No 3D flip required) */}
                <div className="block md:hidden p-5 rounded-2xl bg-[#0B2545] border border-white/20 space-y-3 text-left shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#051329] border border-white/10 font-mono text-[9px] uppercase font-bold text-white inline-block">
                      {cs.tag}
                    </span>
                    <span className="font-mono text-xs font-extrabold text-white">{cs.metric}</span>
                  </div>
                  <h3 className="font-sans font-extrabold text-base text-white tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">
                    {cs.highlight}
                  </p>
                  <p className="font-mono text-[10px] text-white/50 border-t border-white/10 pt-2">
                    Client: {cs.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. DASHBOARD & VISUALIZATION DEMO */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0B2545] border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60 font-bold block">
                Interactive Telemetry
              </span>
              <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight">
                Real-Time Analytics Dashboards
              </h2>
              <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                We design custom web dashboards that turn live survey feeds and operational database records into clean, interactive visualizations.
              </p>
              <ul className="space-y-2 font-sans font-extralight text-xs text-white/85 tracking-wide pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Real-time KPI metrics tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Filtered survey response aggregation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Exportable executive reporting formats</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#010610] border border-white/15 shadow-inner space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-white font-bold flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-white animate-pulse" />
                  <span>LIVE DEMO // DNA TECH Analytics Console</span>
                </span>
                <span className="font-mono text-[10px] text-white/50">SYSTEM OK</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#0B2442] border border-white/10">
                  <div className="text-xs text-white/60 font-mono">Customer Growth</div>
                  <div className="text-xl font-sans font-extrabold text-white mt-1 tracking-tight">+32%</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0B2442] border border-white/10">
                  <div className="text-xs text-white/60 font-mono">Community Responses</div>
                  <div className="text-xl font-sans font-extrabold text-white mt-1 tracking-tight">1,308</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0B2442] border border-white/10">
                  <div className="text-xs text-white/60 font-mono">Accuracy Score</div>
                  <div className="text-xl font-sans font-extrabold text-white mt-1 tracking-tight">99.4%</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0B2442] border border-white/10">
                  <div className="text-xs text-white/60 font-mono">Market Signals</div>
                  <div className="text-xl font-sans font-extrabold text-white mt-1 tracking-tight">17 Found</div>
                </div>
              </div>

              <div className="h-32 rounded-xl bg-[#051329] border border-white/10 p-4 flex items-end justify-between gap-2">
                {[40, 65, 50, 85, 70, 95, 80, 100].map((h, i) => (
                  <div key={i} className="w-full bg-white/20 rounded-t hover:bg-white transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* 7. FINAL CTA */}
        <section className="rounded-3xl bg-[#0B2442] border border-white/15 p-10 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-snug">
            Let's Solve Your Next Challenge Together
          </h2>
          <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 max-w-xl mx-auto leading-relaxed tracking-wide">
            Partner with DNA TECH to transform your complex organizational questions into clear, actionable, data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3.5 rounded-[12px] bg-white text-[#0B2442] hover:bg-white/90 font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer min-h-[44px]"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="px-8 py-3.5 rounded-[12px] border border-white/30 text-white hover:bg-white/10 font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer min-h-[44px]"
            >
              Explore Services
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
