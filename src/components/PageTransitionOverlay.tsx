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
            duration: 1.5,  
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Gradient background */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,#020817_0%,#061A35_45%,#0B315A_100%)]
            "
          />

          {/* Subtle grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.07]
              bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />

          {/* Center transition card */}
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
             duration: 1.5,  
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
            }}
            className="
              relative
              flex
              items-center
              justify-center
              mx-6
              px-10
              py-6
              rounded-[18px]
              border
              border-white/25
              bg-white/[0.035]
              backdrop-blur-sm
              shadow-[0_20px_80px_rgba(0,0,0,0.4)]
            "
          >
            {/* Inner border */}
            <div
              className="
                absolute
                inset-[1px]
                rounded-[17px]
                border
                border-white/[0.07]
                pointer-events-none
              "
            />

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
                duration: 1.5,  
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
              }}
              className="
                relative
                z-10
                text-center
                text-white
                font-sans
                font-semibold
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.25em]
                whitespace-nowrap
              "
            >
              {title}
            </motion.span>
          </motion.div>
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
           duration: 1.5,  
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