import React, { useState } from 'react';
import {
  companyProfile,
  aboutUs,
  visionMission,
  keyFactors,
  founders,
  advisors,
  achievementImages,
  galleryImages
} from '../data';
import { Target, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainerVariants, fadeInUpItemVariants } from '../utils/animationVariants';
import DataScrollBackground from './DataScrollBackground';
import FlipCard from './FlipCard';
import LazyImage from './LazyImage';
import { PageType } from '../types';

interface AboutViewProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const [founderIdx, setFounderIdx] = useState(0);
  const [advisorIdx, setAdvisorIdx] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    (e.target as HTMLElement).style.display = 'none';
  };

  return (
    <div id="about-page" className="bg-transparent text-white min-h-screen py-10 sm:py-16 relative overflow-hidden font-sans text-left">
      <DataScrollBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-20">

        {/* 1. ABOUT DNA TECH */}
        <section>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
          >
            <motion.h1
              variants={fadeInUpItemVariants}
              className="font-sans font-extrabold text-2.5xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
            >
              Empowering Growth Through Unbiased Intelligence
            </motion.h1>
            <motion.p
              variants={fadeInUpItemVariants}
              className="font-sans font-extralight text-xs sm:text-lg text-white/85 leading-relaxed tracking-wide pt-1 sm:pt-2"
            >
              DNA TECH bridges organizations with real-world market intelligence. We replace speculation with verified primary field research, predictive analytics, and custom enterprise technology.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. WHY WE EXIST */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-12 rounded-2xl bg-[#0B2545] border border-white/20 relative overflow-hidden shadow-xl"
        >
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="font-sans font-extrabold text-lg sm:text-3xl text-white tracking-tight border-b border-white/10 pb-3 sm:pb-4">
              Why DNA TECH Exists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
              <div className="space-y-2 sm:space-y-4">
                <h3 className="font-sans font-extrabold text-base sm:text-xl text-white tracking-tight">Closing the Local Decision Gap</h3>
                <p>
                  DNA TECH was founded to make empirical field data accessible, providing decision-makers with the exact evidence needed to launch, scale, and de-risk operations.
                </p>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h3 className="font-sans font-extrabold text-base sm:text-xl text-white tracking-tight">Industrial & Academic Rigor</h3>
                <p>
                  Having audited over 1,300 community responses across 10+ completed projects, we guarantee audit-ready data neutrality for every client.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. VISION & MISSION */}
        <section>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-8 sm:py-12 px-4 sm:px-12 border border-white/20 bg-[#0B2545] rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
              {/* Vision */}
              <motion.div variants={fadeInUpItemVariants} className="p-5 sm:p-6 rounded-xl bg-[#0B2442] border border-white/20 flex space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-sans font-extrabold text-base sm:text-xl text-white tracking-tight">VISION</h3>
                  <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                    {visionMission.vision}
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div variants={fadeInUpItemVariants} className="p-5 sm:p-6 rounded-xl bg-[#0B2442] border border-white/20 flex space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-sans font-extrabold text-base sm:text-xl text-white tracking-tight">MISSION</h3>
                  <ul className="space-y-2 font-sans font-extralight text-xs sm:text-sm text-white/85 tracking-wide">
                    {visionMission.missionItems.map((item) => (
                      <li key={item.id} className="flex items-start space-x-2">
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

        {/* 4. FOUNDERS */}
        <section id="founders">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              Founders
            </h2>
          </div>

          {/* Desktop & Tablet Grid */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {founders.map((f, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 sm:p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl group card-hover-lift cursor-pointer"
              >
                <div>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 sm:mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

          {/* Mobile 1-at-a-time Carousel */}
          <div className="block md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-[#0B2545] border border-white/20 text-center relative shadow-lg"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-3 flex items-center justify-center bg-[#0B2442]">
                <LazyImage
                  src={founders[founderIdx].image}
                  alt={founders[founderIdx].name}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full rounded-full"
                  onError={handleImageError}
                />
              </div>
              <h3 className="font-sans font-extrabold text-base text-white tracking-tight">{founders[founderIdx].name}</h3>
              <p className="text-white/80 font-mono text-[10px] uppercase tracking-widest font-bold mb-2">{founders[founderIdx].role}</p>
              <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide px-2">
                {founders[founderIdx].bio}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 px-2">
                <button
                  onClick={() => setFounderIdx((prev) => (prev === 0 ? founders.length - 1 : prev - 1))}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Previous founder"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-1.5">
                  {founders.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setFounderIdx(dotIdx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${founderIdx === dotIdx ? 'w-6 bg-white' : 'w-2.5 bg-white/30'
                        }`}
                      aria-label={`Go to founder ${dotIdx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setFounderIdx((prev) => (prev === founders.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Next founder"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. ADVISORS */}
        <section id="advisors">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              Advisors
            </h2>
          </div>

          {/* Desktop & Tablet Grid */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {advisors.map((ad, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpItemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 sm:p-6 rounded-xl bg-[#0B2545] border border-white/20 text-center flex flex-col justify-between hover:border-white/50 hover:bg-[#0E2E54] transition-all duration-300 shadow-xl group card-hover-lift cursor-pointer"
              >
                <div>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 sm:mb-6 flex items-center justify-center bg-[#0B2442] font-sans font-extrabold text-xl text-white/40">
                    <LazyImage
                      src={ad.image}
                      alt={ad.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

          {/* Mobile 1-at-a-time Carousel */}
          <div className="block md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-[#0B2545] border border-white/20 text-center relative shadow-lg"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-3 flex items-center justify-center bg-[#0B2442]">
                <LazyImage
                  src={advisors[advisorIdx].image}
                  alt={advisors[advisorIdx].name}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full rounded-full"
                  onError={handleImageError}
                />
              </div>
              <h3 className="font-sans font-extrabold text-base text-white tracking-tight">{advisors[advisorIdx].name}</h3>
              <p className="text-white/80 font-mono text-[10px] uppercase tracking-widest font-bold mb-2">{advisors[advisorIdx].role}</p>
              <p className="font-sans font-extralight text-white/80 leading-relaxed text-xs tracking-wide px-2">
                {advisors[advisorIdx].bio}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 px-2">
                <button
                  onClick={() => setAdvisorIdx((prev) => (prev === 0 ? advisors.length - 1 : prev - 1))}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Previous advisor"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-1.5">
                  {advisors.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setAdvisorIdx(dotIdx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${advisorIdx === dotIdx ? 'w-6 bg-white' : 'w-2.5 bg-white/30'
                        }`}
                      aria-label={`Go to advisor ${dotIdx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setAdvisorIdx((prev) => (prev === advisors.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Next advisor"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. GALLERY */}
        <section id="gallery">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              ACHIEVEMENTS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
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
                <div className="p-2.5 sm:p-4 relative z-10 space-y-0.5 sm:space-y-1">
                  {item.category && (
                    <span className="font-mono text-[8px] sm:text-[10px] text-white/50 uppercase tracking-widest block truncate">
                      {item.category}
                    </span>
                  )}
                  <h3 className="font-sans font-bold text-[11px] sm:text-xs text-white tracking-tight truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements - Visually Driven Masonry Gallery */}
        <div id="achievements" className="pt-8 border-t border-white/10">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              GALLERY
            </h2>
          </div>

          {/* Masonry Image Gallery without text/captions */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5">
            {/* Row 1: Two medium images */}
            <div className="col-span-1 md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[0]}
                alt="DNA TECH Achievement 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="col-span-1 md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[1]}
                alt="DNA TECH Achievement 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Row 2: Large featured center image */}
            <div className="col-span-2 md:col-span-12 relative aspect-[21/9] sm:aspect-[21/8] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[2]}
                alt="DNA TECH Achievement Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Row 3: Three distinct column images */}
            <div className="col-span-1 md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[3]}
                alt="DNA TECH Achievement 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="col-span-1 md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[4]}
                alt="DNA TECH Achievement 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="col-span-2 md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[5]}
                alt="DNA TECH Achievement 6"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Row 4: Two wide images */}
            <div className="col-span-1 md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[6]}
                alt="DNA TECH Achievement 7"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="col-span-1 md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#010610] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl group card-hover-lift">
              <LazyImage
                src={achievementImages[7]}
                alt="DNA TECH Achievement 8"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
