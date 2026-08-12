import React, { useEffect, useState } from 'react';
import { motion, MotionProps } from 'motion/react';

interface ScrollFadeInProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  scale?: number;
  staggerIndex?: number;
  staggerDelay?: number;
  id?: string;
}

export default function ScrollFadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.5,
  scale = 1,
  staggerIndex,
  staggerDelay = 0.08,
  id,
  ...props
}: ScrollFadeInProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getOffset = () => {
    if (isMobile) {
      return { y: 10, x: 0, scale: 1 };
    }

    switch (direction) {
      case 'up':
        return { y: distance, x: 0, scale };
      case 'down':
        return { y: -distance, x: 0, scale };
      case 'left':
        return { x: distance, y: 0, scale };
      case 'right':
        return { x: -distance, y: 0, scale };
      case 'none':
        return { x: 0, y: 0, scale };
      default:
        return { y: distance, x: 0, scale };
    }
  };

  const offset = getOffset();
  const computedDelay = delay + (staggerIndex !== undefined ? staggerIndex * staggerDelay : 0);

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.05, margin: '0px 0px 60px 0px' }}
      transition={{
        duration,
        delay: computedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
