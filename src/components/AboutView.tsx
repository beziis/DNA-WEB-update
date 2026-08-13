import React from 'react';
import { companyProfile, aboutUs, visionMission, keyFactors, founders, advisors, achievementsList } from '../data';
import { Target, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainerVariants, fadeInUpItemVariants, fastStaggerContainerVariants } from '../utils/animationVariants';
import DataScrollBackground from './DataScrollBackground';
import FlipCard from './FlipCard';
import LazyImage from './LazyImage';

import { PageType } from '../types';

interface AboutViewProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <div id="about-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      {/* Background Interactive Particle Network & Data Nodes */}
      <DataScrollBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. ABOUT US OVERVIEW */}
        <section className="mb-20">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-12"
          >
            <motion.h1 
              variants={fadeInUpItemVariants} 
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
            >
              Empowering Growth Through Unbiased Intelligence
            </motion.h1>
            <motion.p 
              variants={fadeInUpItemVariants} 
              className="font-sans font-extralight text-base sm:text-lg text-white/85 leading-relaxed tracking-wide pt-2"
            >
              DNA TECH bridges organizations with real-world market intelligence. We replace speculation with verified primary field research, predictive analytics, and custom enterprise technology.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. WHY WE EXIST & OUR FOUNDING STORY */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 sm:p-12 rounded-2xl bg-[#0B2545] border border-white/20 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight border-b border-white/10 pb-4">
              Why DNA TECH Exists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
              <div className="space-y-4">
                <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Closing the Local Decision Gap</h3>
                <p>
                  DNA TECH was founded to make empirical field data accessible, providing decision-makers with the exact evidence needed to launch, scale, and de-risk operations.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Industrial & Academic Rigor</h3>      
                <p>
                  Having audited over 1,300 community responses across 10+ completed projects, we guarantee audit-ready data neutrality for every client.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. VISION & MISSION */}
        <section className="mb-20">
          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-12 px-6 sm:px-12 border border-white/20 bg-[#0B2545] rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
              {/* Vision */}
              <motion.div variants={fadeInUpItemVariants} className="p-6 rounded-xl bg-[#0B2442] border border-white/20 flex space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">VISION</h3>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                    {visionMission.vision}
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div variants={fadeInUpItemVariants} className="p-6 rounded-xl bg-[#0B2442] border border-white/20 flex space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">MISSION</h3>
                  <ul className="space-y-2.5 font-sans font-extralight text-xs sm:text-sm text-white/85 tracking-wide">
                    {visionMission.missionItems.map((item) => (
                      <li key={item.id} className="flex items-start space-x-2.5">
                        <span className="font-mono text-white font-bold text-xs mt-0.5">{item.id}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* 4. KEY FACTORS */}
        <section className="mb-20" id="key-factors">
          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Key Factors
            </h2>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-2">
              Guiding principles behind our research and insights
            </p>
          </div>

          <motion.div 
            variants={fastStaggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {keyFactors.map((val) => (
              <motion.div key={val.id} variants={fadeInUpItemVariants}>
                <FlipCard
                  minHeight="h-64"
                  front={
                    <div className="space-y-3 text-left">
                      <div className="font-mono text-2xl font-bold text-white/50">
                        {val.id}
                      </div>
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block"></span>
                      <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight">{val.title}</h3>
                    </div>
                  }
                  back={
                    <div className="space-y-3 text-left">
                      <h3 className="font-sans font-extrabold text-lg text-white tracking-tight border-b border-white/10 pb-2">{val.title}</h3>
                      <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                        {val.description}
                      </p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 5. FOUNDERS & ADVISORS */}
        <section className="mb-20" id="team">
          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Founders
            </h2>
          </div>

          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {founders.map((f, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUpItemVariants}
                className="p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-white/20 shadow-sm mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage 
                      src={f.image} 
                      alt={f.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      containerClassName="w-full h-full rounded-full"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute">{getInitials(f.name)}</span>
                  </div>

                  <h3 className="font-sans font-extrabold text-lg text-white mb-0.5 tracking-tight">{f.name}</h3>
                  <p className="text-white/80 font-mono text-xs uppercase tracking-widest font-bold mb-4">{f.role}</p>
                  
                  <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide">
                    {f.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Advisors
            </h2>
          </div>

          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {advisors.map((ad, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUpItemVariants}
                className="p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-white/20 shadow-sm mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage 
                      src={ad.image} 
                      alt={ad.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      containerClassName="w-full h-full rounded-full"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute">{getInitials(ad.name)}</span>
                  </div>

                  <h3 className="font-sans font-extrabold text-lg text-white mb-0.5 tracking-tight">{ad.name}</h3>
                  <p className="text-white/80 font-mono text-xs uppercase tracking-widest font-bold mb-4">{ad.role}</p>
                  
                  <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide">
                    {ad.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 6. ACHIEVEMENTS */}
        <section id="achievements" className="py-12 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              ACHIEVEMENTS — DNA TECH
            </h2>
          </div>

          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievementsList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItemVariants}
                className="bg-[#0B2545]/40 border border-white/10 rounded-xl overflow-hidden group hover:border-white transition-all duration-300 shadow-xl"
              >
                <div className="relative h-44 overflow-hidden bg-[#010610]">
                  <LazyImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-sans font-extrabold text-base text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-white/80 font-sans font-extralight leading-relaxed tracking-wide">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
}
