import React, { useState } from 'react';
import { PageType } from '../types';
import { testimonialsData } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainerVariants, fadeInUpItemVariants, fastStaggerContainerVariants } from '../utils/animationVariants';
import {
  TrendingUp, FileText, BarChart3, LayoutDashboard, Cpu, Code,
  CheckCircle2, ArrowRight, ChevronRight, ChevronLeft, Quote,
  ShieldCheck, Lightbulb, Smartphone, Users2, Award, Headset
} from 'lucide-react';
import DataScrollBackground from './DataScrollBackground';
import LazyImage from './LazyImage';
import techHubImg from '../assets/images/tech_analytics_hub_1784880241845.jpg';
import collabImg from '../assets/images/data_collaboration_1784490822102.jpg';

interface ServicesViewProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function ServicesView({ setCurrentPage }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);

  const coreServices = [
    {
      id: "market-research",
      title: "Market Research",
      icon: TrendingUp,
      description: "Understand your customers, competitors, and market opportunities with reliable research that supports smarter business decisions.",
      deliverables: ["Customer Research", "Competitor Analysis", "Industry Reports", "Consumer Insights", "Opportunity Analysis"],
      whatWeDo: "DNA TECH conducts structured market research that helps organizations understand customer behavior, identify opportunities, and reduce uncertainty before making strategic decisions.",
      whyItMatters: "Better information leads to better decisions. Empirical research reduces business risks, improves resource allocation, and increases market confidence.",
      typicalDeliverables: ["Research Plan & Methodology", "Survey Design", "Data Collection", "Statistical Analysis", "Comprehensive Final Report"]
    },
    {
      id: "data-collection",
      title: "Data Collection",
      icon: FileText,
      description: "Collect high-quality information through digital surveys, field research, interviews, and community engagement using ethical and reliable methods.",
      deliverables: ["Surveys", "Interviews", "Focus Groups", "Field Data Collection", "Digital Forms"],
      whatWeDo: "We deploy trained field researchers and secure digital tools across urban and rural regions in Ethiopia to capture authentic community and market feedback.",
      whyItMatters: "Quality insights require reliable primary source data. Our ethical collection methods guarantee high response integrity and zero data manipulation.",
      typicalDeliverables: ["Custom Digital Questionnaires", "Field Sampling Operations", "Cleaned & Validated Datasets", "Raw Response Archives", "Collection Compliance Audit"]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: BarChart3,
      description: "Turn raw information into meaningful insights through modern analytical techniques, visualization, and professional reporting.",
      deliverables: ["Statistical Analysis", "Performance Reports", "Data Visualization", "Insight Reports", "Recommendations"],
      whatWeDo: "We transform complex datasets into clear statistical patterns, correlation matrices, and digestible trend analyses tailored for executive decision-makers.",
      whyItMatters: "Unorganized raw data creates confusion. Proper analytics highlights operational bottlenecks and uncovers hidden revenue or impact opportunities.",
      typicalDeliverables: ["Executive Summary Reports", "Statistical Modeling Output", "Visual Data Deck", "Trend Correlation Charts", "Actionable Recommendation Matrix"]
    },
    {
      id: "dashboard-development",
      title: "Dashboard Development",
      icon: LayoutDashboard,
      description: "Monitor your organization with interactive dashboards that display real-time data and key performance indicators in one place.",
      deliverables: ["KPI Dashboards", "Business Dashboards", "Executive Reports", "Interactive Charts", "Performance Tracking"],
      whatWeDo: "We build intuitive, responsive web and mobile analytics dashboards that aggregate live data feeds into clean visual metrics and charts.",
      whyItMatters: "Instant visibility speeds up response times. Real-time dashboards allow leaders to track metrics and adjust strategies without waiting for monthly static reports.",
      typicalDeliverables: ["Custom Web/Mobile Dashboard", "Live Data Feed Integration", "Role-Based Access Control", "Exportable PDF/Excel Reports", "User Training & Documentation"]
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      icon: Cpu,
      description: "Leverage artificial intelligence to automate processes, identify trends, and improve operational efficiency.",
      deliverables: ["AI Automation", "Smart Analytics", "Intelligent Reporting", "Workflow Optimization", "Predictive Insights"],
      whatWeDo: "We integrate machine learning models and intelligent automation algorithms to forecast market behavior, parse unstructured feedback, and optimize business workflows.",
      whyItMatters: "Automated intelligence frees up human time and predicts market shifts before they happen, giving early-adopting organizations a distinct competitive edge.",
      typicalDeliverables: ["Predictive Analytics Models", "Automated Survey Processing", "Smart Sentiment Categorization", "Custom AI Prompts/Workflows", "Integration APIs"]
    },
    {
      id: "software-development",
      title: "Software Development",
      icon: Code,
      description: "Develop secure and scalable digital solutions that simplify operations and support organizational growth.",
      deliverables: ["Business Applications", "Web Platforms", "Internal Systems", "Custom Software", "Maintenance & Support"],
      whatWeDo: "We build modern, secure, and responsive web platforms, mobile applications, and internal enterprise management systems designed specifically for your operational needs.",
      whyItMatters: "Off-the-shelf software often fails to address local operational realities. Custom technology streamlines workflows and scales smoothly with company growth.",
      typicalDeliverables: ["Fully Tested Web/Mobile Software", "Database & API Architecture", "Source Code Ownership", "Cloud Deployment Configuration", "Ongoing SLA Maintenance"]
    }
  ];


  const diffFactors = [
    { icon: ShieldCheck, title: "Ethical Data", desc: "Reliable information collected responsibly with strict privacy compliance." },
    { icon: Lightbulb, title: "Practical Insights", desc: "Clear recommendations you can actually use to make decisions immediately." },
    { icon: Smartphone, title: "Technology Driven", desc: "Modern digital survey tools and cloud analytics improve accuracy and speed." },
    { icon: Users2, title: "Customized Solutions", desc: "Every organization is different; we tailor our framework to your goals." },
    { icon: Award, title: "Experienced Team", desc: "Combining statistics, economics, and 20+ years of enterprise building." },
    { icon: Headset, title: "Long-Term Support", desc: "We remain fully available after project delivery to ensure smooth implementation." }
  ];

  const handleNavClick = (page: PageType) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="services-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      <DataScrollBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* 1. PAGE HERO */}
        <section className="text-center max-w-4xl mx-auto pt-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-14 rounded-3xl bg-[#0B2545]/80 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              Our Capabilities & Services
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-3.5 rounded-[12px] bg-white text-[#0B2442] hover:bg-white/90 font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer flex items-center space-x-2 min-h-[44px]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B2442]" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. SERVICES OVERVIEW */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
            End-to-End Data & Technology Engine
          </h2>
        </section>

        {/* 4. EXPANDABLE SERVICE DETAIL SECTION */}
        <section className="service-card p-8 sm:p-12 rounded-3xl bg-[#0B2545] border border-white/20 shadow-2xl">
          <div className="border-b border-white/15 pb-6 mb-8 text-center sm:text-left">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Detailed Service Breakdown
            </h2>
          </div>

          {/* Desktop Selector Tabs (1024px+) */}
          <div className="hidden lg:flex items-center space-x-2 overflow-x-auto pb-4 mb-8">
            {coreServices.map((srv, idx) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white text-[#0B2442] shadow-md'
                    : 'bg-[#0B2442] text-white/80 hover:text-white hover:bg-white/15 border border-white/20'
                }`}
              >
                {srv.title}
              </button>
            ))}
          </div>

          {/* Tablet 2-Column Compact Selector Grid (768px - 1023px) */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-3 mb-6">
            {coreServices.map((srv, idx) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-between p-3.5 rounded-xl font-mono text-xs font-bold transition-all min-h-[44px] cursor-pointer text-left ${
                  activeTab === idx
                    ? 'bg-white text-[#0B2442] shadow-md border-l-4 border-[#0B2442]'
                    : 'bg-[#0B2442] text-white/80 hover:bg-white/10 border border-white/15'
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <span className="text-[10px] opacity-60 flex-shrink-0">0{idx + 1}</span>
                  <span className="font-sans font-bold text-xs truncate">{srv.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 flex-shrink-0 ml-2" />
              </button>
            ))}
          </div>

          {/* Mobile Vertical Compact Selector List (<768px) */}
          <div className="block md:hidden space-y-2 mb-6">
            {coreServices.map((srv, idx) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl font-mono text-xs font-bold transition-all min-h-[44px] cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white text-[#0B2442] shadow-md border-l-4 border-[#0B2442]'
                    : 'bg-[#0B2442] text-white/80 hover:bg-white/10 border border-white/15'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] opacity-60">0{idx + 1}</span>
                  <span className="font-sans font-bold text-xs">{srv.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight mb-2">
                    {coreServices[activeTab].title}
                  </h3>
                  <p className="font-sans font-extralight text-sm text-white/90 leading-relaxed tracking-wide mb-4">
                    {coreServices[activeTab].whatWeDo}
                  </p>

                  {/* Image Reveal with CSS Clip Path */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                    <LazyImage
                      src={activeTab % 2 === 0 ? techHubImg : collabImg}
                      alt={coreServices[activeTab].title}
                      clipRevealMode={activeTab % 2 === 0 ? 'center' : 'polygon'}
                      containerClassName="h-44 sm:h-52 w-full object-cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-wider text-white font-bold bg-[#0B2442]/95 px-2.5 py-1 rounded-md border border-white/20">
                      {coreServices[activeTab].title} Infrastructure
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B2442] border border-white/20 shadow-xl space-y-2">
                  <h4 className="font-mono text-xs text-white uppercase font-bold tracking-wider">
                    Why It Matters
                  </h4>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed tracking-wide">
                    {coreServices[activeTab].whyItMatters}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B2442] border border-white/20 shadow-xl space-y-4">
                <h4 className="font-sans font-extrabold text-lg text-white border-b border-white/15 pb-3 tracking-tight">
                  Typical Deliverables
                </h4>
                <ul className="space-y-3 font-sans font-extralight text-xs text-white/90 tracking-wide">
                  {coreServices[activeTab].typicalDeliverables.map((del, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* 5. HOW WE DELIVER (REMOVED) */}

        {/* 6. INDUSTRIES SERVED (removed) */}

        {/* 7. WHY OUR SERVICES ARE DIFFERENT */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">Why Our Services Are Different</h2>
          </div>

          <motion.div
            variants={fastStaggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {diffFactors.map((df, dIdx) => {
              const DfIcon = df.icon;
              return (
                <motion.div
                  key={dIdx}
                  variants={fadeInUpItemVariants}
                  className="service-card p-6 rounded-2xl bg-[#0B2545] border border-white/20 hover:border-white/50 hover:bg-[#0E2E54] space-y-3 card-hover-lift shadow-xl transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B2442] border border-white/25 flex items-center justify-center text-white shadow-md">
                    <DfIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-extrabold text-lg text-white tracking-tight">{df.title}</h3>
                  <p className="font-sans font-extralight text-xs text-white/85 leading-relaxed tracking-wide">{df.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 8. CLIENT TESTIMONIALS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          {/* Desktop & Tablet 3-Column Layout (768px+) */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="testimonial-card p-5 lg:p-6 rounded-2xl bg-[#0B2545] border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl flex flex-col justify-between h-full"
              >
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-white/40" />
                    <span className="font-mono text-[10px] text-white/40 font-bold">{item.id}</span>
                  </div>
                  <p className="font-sans font-extralight text-xs lg:text-sm text-white/90 leading-relaxed italic tracking-wide">
                    “{item.quote}”
                  </p>
                </div>
                <div className="pt-4 lg:pt-5 mt-4 border-t border-white/10">
                  <h3 className="font-sans font-extrabold text-xs lg:text-sm text-white tracking-wider uppercase">
                    {item.client}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile 1-at-a-time Carousel (<768px) */}
          <div className="block md:hidden max-w-2xl mx-auto">
            <div className="testimonial-card p-5 sm:p-7 rounded-2xl bg-[#0B2545] border border-white/20 relative shadow-xl flex flex-col justify-between min-h-[200px]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Quote className="w-5 h-5 text-white/50" />
                  <span className="font-mono text-[10px] text-white/50 font-bold">{testimonialsData[testimonialIdx].id}</span>
                </div>
                <p className="font-sans font-extralight text-xs text-white/90 leading-relaxed italic tracking-wide">
                  “{testimonialsData[testimonialIdx].quote}”
                </p>
              </div>

              <div>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <h3 className="font-sans font-extrabold text-xs text-white tracking-wider uppercase">
                    {testimonialsData[testimonialIdx].client}
                  </h3>
                </div>

                {/* Carousel Navigation */}
                <div className="flex items-center justify-between pt-3 mt-1">
                  <button
                    onClick={() => setTestimonialIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))}
                    className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {testimonialsData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setTestimonialIdx(dotIdx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          testimonialIdx === dotIdx ? 'w-6 bg-white' : 'w-2.5 bg-white/30'
                        }`}
                        aria-label={`Go to testimonial ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setTestimonialIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))}
                    className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="rounded-3xl bg-[#0B2442] border border-white/15 p-10 sm:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-snug">
              Ready to Transform Your Data Into Action?
            </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3.5 rounded-[12px] bg-white text-[#0B2442] hover:bg-white/90 font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer min-h-[44px]"
            >
              Book Consultation
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3.5 rounded-[12px] border border-white/30 text-white hover:bg-white/10 font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer min-h-[44px]"
            >
              Contact Us
            </button>
          </div>
        </div>
        </section>

      </div>
    </div>
  );
}
