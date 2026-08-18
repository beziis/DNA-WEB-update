import React from 'react';
import {
  companyProfile,
  aboutUs,
  visionMission,
  keyFactors,
  founders,
  advisors,
  achievementsList,
  testimonialsData,
  galleryImages
} from '../data';
import { Target, Shield, Award, Quote } from 'lucide-react';
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

  const handleImageError = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    (e.target as HTMLElement).style.display = 'none';
  };

  return (
    <div id="about-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      {/* Background Interactive Particle Network & Data Nodes */}
      <DataScrollBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. ABOUT US OVERVIEW */}
        <section className="mb-10 sm:mb-20">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12"
          >
            <motion.h1
              variants={fadeInUpItemVariants}
              className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
            >
              Empowering Growth Through Unbiased Intelligence
            </motion.h1>
            <motion.p
              variants={fadeInUpItemVariants}
              className="font-sans font-extralight text-sm sm:text-lg text-white/85 leading-relaxed tracking-wide pt-2"
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
          className="mb-10 sm:mb-20 p-6 sm:p-12 rounded-2xl bg-[#0B2545] border border-white/20 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight border-b border-white/10 pb-4">
              Why DNA TECH Exists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight">Closing the Local Decision Gap</h3>
                <p>
                  DNA TECH was founded to make empirical field data accessible, providing decision-makers with the exact evidence needed to launch, scale, and de-risk operations.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight">Industrial & Academic Rigor</h3>
                <p>
                  Having audited over 1,300 community responses across 10+ completed projects, we guarantee audit-ready data neutrality for every client.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. KEY FACTORS */}
        <section className="mb-10 sm:mb-20" id="key-factors">
          <div className="text-center mb-8 sm:mb-12">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {keyFactors.map((val) => (
              <motion.div key={val.id} variants={fadeInUpItemVariants}>
                {/* Desktop FlipCard */}
                <div className="hidden md:block">
                  <FlipCard
                    minHeight="h-64"
                    front={
                      <div className="space-y-3 text-left">
                        <div className="font-mono text-2xl font-bold text-white/50">
                          {val.id}
                        </div>
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
                </div>

                {/* Mobile Compact Direct Card (No flip required) */}
                <div className="block md:hidden p-5 rounded-[16px] bg-[#0B2545] border border-white/20 space-y-2 text-left shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-white/40">{val.id}</span>
                    <h3 className="font-sans font-extrabold text-base text-white tracking-tight">{val.title}</h3>
                  </div>
                  <p className="font-sans font-extralight text-xs text-white/80 leading-relaxed tracking-wide pt-1">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>


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

        {/* 5. FOUNDERS & ADVISORS */}
        <section className="mb-10 sm:mb-20" id="team">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Founders
            </h2>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16"
          >
            {founders.map((f, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItemVariants}
                className="p-5 sm:p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 sm:mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover transition-all duration-300"
                      containerClassName="w-full h-full rounded-full"
                      onError={handleImageError}
                    />
                  </div>

                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-white mb-0.5 tracking-tight">{f.name}</h3>
                  <p className="text-white/80 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3 sm:mb-4">{f.role}</p>

                  <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide">
                    {f.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Advisors
            </h2>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {advisors.map((ad, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItemVariants}
                className="p-5 sm:p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 sm:mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage
                      src={ad.image}
                      alt={ad.name}
                      className="w-full h-full object-cover transition-all duration-300"
                      containerClassName="w-full h-full rounded-full"
                      onError={handleImageError}
                    />
                  </div>

                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-white mb-0.5 tracking-tight">{ad.name}</h3>
                  <p className="text-white/80 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3 sm:mb-4">{ad.role}</p>

                  <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide">
                    {ad.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="mb-10 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              DNA TECH GALLERY
            </h2>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-2">
              Empirical market research, pitching forums, & field operations
            </p>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {galleryImages.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUpItemVariants}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0B2545] border border-white/15 hover:border-white/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#010610]">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-3 sm:p-5 relative z-10 space-y-1">
                  {item.category && (
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest block">
                      {item.category}
                    </span>
                  )}
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight truncate">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="mb-10 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-2">
              Feedback from our partners & data service clients
            </p>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonialsData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUpItemVariants}
                className="p-6 rounded-2xl bg-[#0B2545]/60 border border-white/15 hover:border-white/40 transition-all duration-300 shadow-lg flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-6 h-6 text-white/40" />
                    <span className="font-mono text-[10px] text-white/40 font-bold">{item.id}</span>
                  </div>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/90 leading-relaxed italic tracking-wide">
                    {item.quote}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/10">
                  <h3 className="font-sans font-extrabold text-xs sm:text-sm text-white tracking-wider uppercase">
                    {item.client}
                  </h3>
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
