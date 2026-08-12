import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw } from 'lucide-react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  minHeight?: string;
  onClick?: () => void;
}

export default function FlipCard({
  front,
  back,
  className = '',
  minHeight = 'min-h-[260px]',
  onClick
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`relative cursor-pointer group w-full card-hover-lift ${minHeight} ${className}`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label="Interactive flip card"
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] bg-[#0B2545] border border-white/20 p-6 flex flex-col justify-between shadow-xl group-hover:border-white/50 group-hover:bg-[#0E2E54] transition-all overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="w-full flex-1 flex flex-col justify-center">
            {front}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-white/70 flex-shrink-0">
            <span className="flex items-center space-x-1.5">
              <RotateCw className="w-3 h-3 text-white/80" />
              <span>Hover or tap to reveal</span>
            </span>
            <span className="text-white font-bold">&rarr;</span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] bg-[#0B2442] border border-white/25 p-6 flex flex-col justify-between shadow-xl overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full flex-1 flex flex-col justify-center">
            {back}
          </div>

          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-white/70 flex-shrink-0">
            <span className="flex items-center space-x-1.5">
              <RotateCw className="w-3 h-3 text-white/80" />
              <span>Return to header</span>
            </span>
            <span className="text-white font-bold">&larr;</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
