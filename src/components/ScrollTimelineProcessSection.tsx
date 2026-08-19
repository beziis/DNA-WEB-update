import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  FileText, Database, Filter, Cpu, BarChart3, LayoutDashboard,
  CheckCircle2, Sparkles, ArrowDown, Zap, ChevronRight, Activity
} from 'lucide-react';

export interface PipelineStage {
  id: string;
  stageNum: string;
  stageName: string;
  title: string;
  icon: React.ElementType;
  deliverables: string[];
}

const pipelineStages: PipelineStage[] = [
  {
    id: 'stage-01',
    stageNum: '01',
    stageName: 'FORMULATION',
    title: 'Understand',
    icon: FileText,
    deliverables: ['We listen to your objectives, challenges, and core questions.'],
  },
  {
    id: 'stage-02',
    stageNum: '02',
    stageName: 'FIELDWORK',
    title: 'Research',
    icon: Database,
    deliverables: ['We design tailored research methodologies and survey tools.']
  },
  {
    id: 'stage-03',
    stageNum: '03',
    stageName: 'NEUTRALIZATION',
    title: 'Collect',
    icon: Filter,
    deliverables: ['We gather reliable primary data ethically from verified sources.']
  },
  {
    id: 'stage-04',
    stageNum: '04',
    stageName: 'INTELLIGENCE',
    title: 'Analyze',
    icon: Cpu,
    deliverables: ['We apply statistical analytics to identify key patterns and trends.']
  },
  {
    id: 'stage-05',
    stageNum: '05',
    stageName: 'SYNTHESIS',
    title: 'Visualize',
    icon: BarChart3,
    deliverables: ['We build interactive dashboards and executive reports.']
  },
  {
    id: 'stage-06',
    stageNum: '06',
    stageName: 'DELIVERY',
    title: 'Support',
    icon: LayoutDashboard,
    deliverables: ['We remain available for post-delivery guidance and strategic iteration.']
  }
];

export default function ScrollTimelineProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [lineFillProgress, setLineFillProgress] = useState<number>(0);
  const [isLight, setIsLight] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('light')
  );

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsLight(root.classList.contains('light'));
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    syncTheme();
    return () => observer.disconnect();
  }, []);

  // Intersection Observer + RAF Scroll Detection
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    // Viewport target line at ~45% height
    const targetY = window.innerHeight * 0.45;
    let closestIndex = 0;
    let minDistance = Infinity;

    stageCardRefs.current.forEach((card, idx) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenterY - targetY);

        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = idx;
        }
      }
    });

    setActiveStageIndex(closestIndex);

    // Calculate vertical fill progress for timeline axis
    const firstCard = stageCardRefs.current[0];
    const lastCard = stageCardRefs.current[pipelineStages.length - 1];

    if (firstCard && lastCard) {
      const firstRect = firstCard.getBoundingClientRect();
      const lastRect = lastCard.getBoundingClientRect();
      const startY = firstRect.top + firstRect.height / 2;
      const endY = lastRect.top + lastRect.height / 2;
      const totalDistance = endY - startY;

      if (totalDistance > 0) {
        const currentDistance = targetY - startY;
        const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
        setLineFillProgress(progress);
      }
    }
  }, []);

  useEffect(() => {
    let animId: number;

    const onScroll = () => {
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [handleScroll]);

  const scrollToStage = (index: number) => {
    const targetCard = stageCardRefs.current[index];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#051329]/20 border-b border-white/10 relative overflow-hidden text-left"
      id="process-timeline-section"
    >
      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#0B2545]/20 to-transparent rounded-full pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-5xl text-white tracking-tight leading-tight">
            How DNA TECH Works In Real-Time
          </h2>

          <p className="font-sans font-extralight text-xs sm:text-base text-white/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Explore our 6-stage end-to-end analytical pipeline transforming raw ground feedback into decision-ready executive intelligence.
          </p>
        </div>

        {/* Timeline Main Container */}
        <div className="relative">

          {/* Central Vertical Timeline Axis Line (Desktop: center, Mobile: left aligned) */}
          <div className={`timeline-axis hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2 rounded-full overflow-hidden pointer-events-none z-0 ${isLight ? 'bg-[#0A2546]/20' : 'bg-white/10'}`}>
            <div
              style={{ height: `${lineFillProgress * 100}%` }}
              className={`timeline-axis-fill w-full transition-all duration-150 ease-out rounded-full ${isLight ? 'bg-gradient-to-b from-[#0A2546]/40 via-[#0A2546]/75 to-[#0A2546] shadow-[0_0_18px_rgba(10,37,70,0.35)]' : 'bg-gradient-to-b from-white/70 via-white to-white shadow-[0_0_18px_rgba(255,255,255,0.9)]'}`}
            />
          </div>

          {/* Mobile Vertical Timeline Axis Line */}
          <div className={`timeline-axis lg:hidden absolute left-6 top-10 bottom-10 w-1 rounded-full overflow-hidden pointer-events-none z-0 ${isLight ? 'bg-[#0A2546]/20' : 'bg-white/10'}`}>
            <div
              style={{ height: `${lineFillProgress * 100}%` }}
              className={`timeline-axis-fill w-full transition-all duration-150 ease-out rounded-full ${isLight ? 'bg-gradient-to-b from-[#0A2546]/40 via-[#0A2546]/75 to-[#0A2546] shadow-[0_0_18px_rgba(10,37,70,0.35)]' : 'bg-gradient-to-b from-white/70 via-white to-white shadow-[0_0_18px_rgba(255,255,255,0.9)]'}`}
            />
          </div>

          {/* 6 Sequential Stage Nodes Loop */}
          <div className="space-y-16 lg:space-y-24 relative z-10">
            {pipelineStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isCurrent = activeStageIndex === idx;
              const isPassed = idx < activeStageIndex;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.id}
                  ref={(el: HTMLDivElement | null) => { stageCardRefs.current[idx] = el; }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pl-14 lg:pl-0"
                >

                  {/* Desktop Left Content (for even stages) / Desktop Right Content (for odd stages) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:text-right lg:order-1' : 'lg:order-3'}`}>
                    <motion.div
                      animate={{
                        scale: isCurrent ? 1.02 : 1,
                        borderColor: isLight
                          ? isCurrent ? 'rgba(10, 37, 70, 0.45)' : isPassed ? 'rgba(10, 37, 70, 0.28)' : 'rgba(10, 37, 70, 0.16)'
                          : isCurrent ? 'rgba(255, 255, 255, 0.9)' : isPassed ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: isLight
                          ? isCurrent ? 'rgba(255, 255, 255, 0.96)' : isPassed ? 'rgba(248, 250, 252, 0.9)' : 'rgba(241, 245, 249, 0.82)'
                          : isCurrent ? 'rgba(11, 37, 69, 0.75)' : isPassed ? 'rgba(11, 37, 69, 0.35)' : 'rgba(11, 37, 69, 0.15)'
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      onClick={() => scrollToStage(idx)}
                      className={`process-stage-card p-6 sm:p-7 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden ${
                        isCurrent
                          ? isLight
                            ? 'shadow-[0_10px_30px_rgba(10,37,70,0.16)] ring-1 ring-[#0A2546]/20'
                            : 'shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/30'
                          : isLight ? 'hover:border-[#0A2546]/40' : 'hover:border-white/40'
                      }`}
                    >
                      {/* Active Background Glow Bar */}
                      {isCurrent && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
                      )}

                      {/* Title */}
                      <h3 className={`font-sans font-extrabold text-xl sm:text-2xl tracking-tight mb-3 ${isLight ? 'text-[#0A2546]' : 'text-white'}`}>
                        {stage.title}
                      </h3>

                      {/* Deliverables List */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-white/85'} ${isEven ? 'lg:text-right' : ''}`}>
                          {Array.isArray(stage.deliverables) ? stage.deliverables.join(', ') : stage.deliverables}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Circle Icon (Desktop: Center Grid, Mobile: Absolute Left Axis) */}
                  {/* Desktop Grid Center Column */}
                  <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center items-center z-20">
                    <button
                      onClick={() => scrollToStage(idx)}
                      className="cursor-pointer focus:outline-none"
                    >
                      <motion.div
                        animate={{
                          scale: isCurrent ? 1.25 : 0.95,
                          borderColor: isLight
                            ? isCurrent ? '#0A2546' : 'rgba(10,37,70,0.35)'
                            : isCurrent ? '#FFFFFF' : isPassed ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)',
                          backgroundColor: isLight
                            ? isCurrent ? '#FFFFFF' : isPassed ? '#EAF0F7' : '#F1F5F9'
                            : isCurrent ? '#FFFFFF' : isPassed ? '#0B2545' : '#051329',
                          boxShadow: isCurrent ? (isLight ? '0 0 24px rgba(10,37,70,0.2)' : '0 0 30px rgba(255,255,255,0.6)') : 'none'
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all relative ${
                          isCurrent ? 'ring-4 ring-white/30 text-[#0B2442]' : isLight ? 'text-[#0A2546]' : 'text-white'
                        }`}
                      >
                        <StageIcon className={`w-6 h-6 ${isCurrent ? 'text-[#0B2442]' : isLight ? 'text-[#0A2546]' : 'text-white/70'}`} />
                      </motion.div>
                    </button>
                  </div>

                  {/* Mobile Absolute Left Axis Node Circle */}
                  <div className="lg:hidden absolute left-0 top-6 -translate-x-1/2 z-20">
                    <button
                      onClick={() => scrollToStage(idx)}
                      className="cursor-pointer focus:outline-none"
                    >
                      <motion.div
                        animate={{
                          scale: isCurrent ? 1.15 : 0.9,
                          borderColor: isLight ? '#0A2546' : isCurrent ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
                          backgroundColor: isLight ? (isCurrent ? '#FFFFFF' : '#EAF0F7') : isCurrent ? '#FFFFFF' : '#0B2545'
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center ${isLight ? 'text-[#0A2546]' : 'text-white'}`}
                      >
                        <StageIcon className={`w-5 h-5 ${isCurrent ? 'text-[#0B2442]' : isLight ? 'text-[#0A2546]' : 'text-white/70'}`} />
                      </motion.div>
                    </button>
                  </div>

                  {/* Empty Spacer Column for Desktop Grid Symmetry */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`} />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
