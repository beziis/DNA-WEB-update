import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, className = '', duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    const stringVal = String(value);
    // Match numeric digits (with commas/decimals)
    const match = stringVal.match(/([\D]*)([\d,.]+)([\D]*)/);

    if (!match) {
      setDisplayValue(stringVal);
      return;
    }

    const prefix = match[1] || '';
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNum = parseFloat(numStr);

    if (isNaN(targetNum)) {
      setDisplayValue(stringVal);
      return;
    }

    const hasComma = match[2].includes(',');
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentNum = Math.floor(easedProgress * targetNum);

      const formattedNum = hasComma ? currentNum.toLocaleString() : currentNum.toString();
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(stringVal);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}
