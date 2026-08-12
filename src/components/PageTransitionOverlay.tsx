import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageType } from '../types';

interface PageTransitionOverlayProps {
  currentPage: PageType;
  children: React.ReactNode;
}

const pageTitles: Record<PageType, string> = {
  home: 'DATA NEUTRAL ANALYSIS TECHNOLOGY',
  about: 'ABOUT US',
  services: 'OUR SERVICES',
  traction: 'TRACTION',
  solutions: 'OUR SOLUTIONS',
  contact: 'CONTACT US',
};

export default function PageTransitionOverlay({
  currentPage,
  children,
}: PageTransitionOverlayProps) {
  const title = pageTitles[currentPage];
  const isLight = typeof document !== 'undefined' && document.documentElement.classList.contains('light');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        className="relative z-10 w-full min-h-screen overflow-hidden"
      >
        {/* =========================================
            VIDEO-STYLE PAGE TRANSITION
        ========================================== */}

        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            pointer-events-none
            flex
            items-center
            justify-center
            overflow-hidden
          "
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 1,  
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${isLight ? 'bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_45%,#E6EEF9_100%)]' : 'bg-[linear-gradient(135deg,#020817_0%,#061A35_45%,#0B315A_100%)]'}`}
          />

          {/* Subtle grid removed as requested */}

          {/* Center transition card - aligned to page grid */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={`relative flex items-center justify-center mx-auto px-10 py-6 rounded-lg overflow-hidden ${isLight ? 'bg-white border border-slate-200 shadow-lg text-slate-900' : 'bg-white/[0.035] backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.4)] text-white'}`}
              >
                {/* Inner border */}
                <div className={`absolute inset-[1px] rounded-md pointer-events-none ${isLight ? 'border border-slate-100/60' : ''}`} />

                {/* Page title */}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 8,
                    letterSpacing: '0.4em',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    letterSpacing: '0.25em',
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`relative z-10 text-center font-sans font-semibold text-sm sm:text-lg md:text-xl uppercase tracking-[0.25em] whitespace-nowrap ${isLight ? 'text-slate-900' : 'text-white'}`}
                >
                  {title}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            NEW PAGE CONTENT
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
           duration: 1,  
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}