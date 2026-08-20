import React, { useState } from 'react';
import { motion } from 'motion/react';

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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
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
          className="solution-card absolute inset-0 w-full h-full rounded-[20px] bg-[#0B2545] border border-white/20 p-6 flex flex-col justify-between shadow-xl group-hover:border-white/50 group-hover:bg-[#0E2E54] transition-all overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="w-full flex-1 flex flex-col justify-center">
            {front}
          </div>


        </div>

        {/* BACK SIDE */}
        <div
          className="solution-card absolute inset-0 w-full h-full rounded-[20px] bg-[#0B2442] border border-white/25 p-6 flex flex-col justify-between shadow-xl overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full flex-1 flex flex-col justify-center">
            {back}
          </div>


        </div>
      </motion.div>
    </div>
  );
}
