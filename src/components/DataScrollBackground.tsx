import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ParticleNetworkCanvas from './ParticleNetworkCanvas';

export default function DataScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Gentle motion transforms based on global scroll position
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.65, 0.95, 0.65]);

  // Floating subtle background badges
  const nodes = [
    { top: '15%', left: '6%', label: 'RAW_SURVEY // ADDIS ABABA' },
    { top: '35%', left: '88%', label: '798_VERIFIED_RESPONSES' },
    { top: '65%', left: '5%', label: 'UNBIASED_INDEX' },
    { top: '85%', left: '85%', label: '75%_SME_MARKET_GAP' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#051329]">
      {/* Interactive Particle Network Canvas representing Data & AI flow */}
      <ParticleNetworkCanvas className="opacity-100" />

      {/* Ambient gradient spotlights using dark navy #0B2442 / #0B2545 */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-radial from-[#0B2545]/20 to-transparent rounded-full pointer-events-none opacity-40" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-radial from-[#0B2442]/20 to-transparent rounded-full pointer-events-none opacity-30" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-radial from-[#0B2545]/20 to-transparent rounded-full pointer-events-none opacity-40" />

      {/* Global overlay for crisp readability */}
      <div className="absolute inset-0 bg-[#051329]/20 pointer-events-none" />

      {/* Technical Grid overlay for high contrast */}
      <div className="technical-grid absolute inset-0 pointer-events-none" />

      {/* Background Data Node Badges */}
      <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => (
          <div
            key={i}
            style={{ top: node.top, left: node.left }}
            className="absolute font-mono text-[9px] tracking-widest text-white/80 bg-[#0B2545]/90 px-3 py-1.5 rounded-[12px] border border-white/20 hidden md:block shadow-md"
          >
            <span className="w-1.5 h-1.5 inline-block rounded-full bg-white mr-2 animate-pulse" />
            {node.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
