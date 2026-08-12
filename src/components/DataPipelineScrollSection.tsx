import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Database, Filter, Cpu, BarChart3, LayoutDashboard, 
  CheckCircle2, Sparkles, Play, Pause, ChevronRight, Activity, Zap
} from 'lucide-react';

export interface StepData {
  num: string;
  stage: string;
  title: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  metricLabel: string;
  metricValue: string;
}

export const pipelineData: StepData[] = [
  {
    num: '01',
    stage: 'Formulation',
    title: 'Questionnaire Development',
    description: 'Engineering context-aware primary survey instruments tailored specifically to market dynamics and target demographics.',
    icon: FileText,
    deliverables: [
      'Contextual questions',
      'Bilingual translation',
      'Pre-field pilot test'
    ],
    metricLabel: 'Survey Instrument',
    metricValue: 'Amharic & English Aligned'
  },
  {
    num: '02',
    stage: 'Fieldwork',
    title: 'Data Collection',
    description: 'Multi-channel ground survey gathering conducted by trained field enumerators across key commercial hubs in Ethiopia.',
    icon: Database,
    deliverables: [
      'Geotagged enumerations',
      'Offline digital capture',
      'Quality assurance checks'
    ],
    metricLabel: 'Field Throughput',
    metricValue: 'Real-time Ground Ingestion'
  },
  {
    num: '03',
    stage: 'Neutralization',
    title: 'Data Cleaning & Auditing',
    description: 'Automated auditing algorithms remove duplicate entries, isolate statistical outliers, and scrub subjective bias for maximum integrity.',
    icon: Filter,
    deliverables: [
      'Outlier filtering',
      'Cross-verification audit',
      'Standardized schema'
    ],
    metricLabel: 'Sanitization Engine',
    metricValue: 'Zero Bias Margin'
  },
  {
    num: '04',
    stage: 'Intelligence',
    title: 'Data Analysis & Modeling',
    description: 'Advanced cross-variable modeling and sector profiling converting raw datasets into statistical market indicators and growth levers.',
    icon: Cpu,
    deliverables: [
      'Regression analysis',
      'Sector clustering',
      'Predictive modeling'
    ],
    metricLabel: 'Correlation Matrix',
    metricValue: 'Benchmarked Analytics'
  },
  {
    num: '05',
    stage: 'Synthesis',
    title: 'Data Visualization & Mapping',
    description: 'Transforming complex data tables into intuitive graphics, dynamic bar charts, and geospatial telemetry heatmaps.',
    icon: BarChart3,
    deliverables: [
      'Custom chart suites',
      'Geospatial mapping',
      'Executive summaries'
    ],
    metricLabel: 'Render Engine',
    metricValue: 'Geospatial & Heatmap Suite'
  },
  {
    num: '06',
    stage: 'Delivery',
    title: 'Personalized Dashboard',
    description: 'Delivering secure, tailor-made client portals for data-backed strategic leadership and executive decision making.',
    icon: LayoutDashboard,
    deliverables: [
      'Role-based access',
      'Exportable raw datasets',
      'Live metric widgets'
    ],
    metricLabel: 'Portal Deployment',
    metricValue: 'Live Enterprise Sync'
  }
];

export default function DataPipelineScrollSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-advance through stages every 4.5 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStep = pipelineData[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#051329] border-b border-white/5 relative overflow-hidden text-left">
      {/* Background Ambient Glow & Light Beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#0B2545]/25 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            How DNA TECH Works In Real-Time
          </h2>

          <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed tracking-wide">
            Experience our 6-stage analytical pipeline converting raw ground data into live empirical intelligence.
          </p>
        </div>

        {/* Animated Connected Pipeline Bar */}
        <div className="relative mb-10">
          {/* Connector Line behind nodes */}
          <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-white/40 via-white to-white/40 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStep + 1) / pipelineData.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Stage Node Indicators */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 relative z-10">
            {pipelineData.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;
              const NodeIcon = step.icon;

              return (
                <button
                  key={step.num}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-between min-h-[90px] border ${
                    isActive
                      ? 'bg-white text-[#0B2442] border-white shadow-xl scale-105 z-20'
                      : isPassed
                      ? 'bg-[#0B2545] text-white/90 border-white/30 hover:border-white/60'
                      : 'bg-[#051329]/90 text-white/50 border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {/* Top Node Header */}
                  <div className="flex items-center justify-between w-full">
                    <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#0B2442]' : 'text-white/80'}`}>
                      {step.num}
                    </span>
                    <NodeIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0B2442]' : 'text-white/70'}`} />
                  </div>

                  {/* Stage Label */}
                  <div className="font-sans font-extrabold text-xs text-center my-1 line-clamp-1 tracking-tight">
                    {step.stage}
                  </div>

                  {/* Animated Progress Bar under the active node */}
                  {isActive && isPlaying && (
                    <motion.div
                      key={`step-progress-${idx}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.5, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-1 bg-[#0B2442] rounded-b-xl"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Spotlight Showcase Card */}
        <div className="relative mb-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.num}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B2545]/90 border border-white/20 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6 text-left relative overflow-hidden"
            >
              {/* Left Column: Icon, Description & Deliverables */}
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-start space-x-4 pt-1">
                  <motion.div
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-12 h-12 rounded-xl bg-white text-[#0B2442] flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>

                  <div>
                    <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight mb-1">
                      {currentStep.title}
                    </h3>
                    <p className="font-sans font-extralight text-xs sm:text-sm text-white/85 leading-relaxed tracking-wide">
                      {currentStep.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentStep.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs font-sans font-extralight text-white/90 bg-white/5 px-2.5 py-1 rounded border border-white/10 tracking-wide">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Stage Metric & Fast Navigation */}
              <div className="md:col-span-4 bg-[#051329]/80 border border-white/10 p-5 rounded-xl flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 flex items-center space-x-1">
                    <Activity className="w-3 h-3 text-white" />
                    <span>{currentStep.metricLabel}</span>
                  </div>
                  <div className="font-sans font-extrabold text-base text-white tracking-tight">
                    {currentStep.metricValue}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10">
                  <span className="text-white/50">Stage {currentStep.num} / 06</span>
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % pipelineData.length);
                      setIsPlaying(false);
                    }}
                    className="text-white hover:text-white/80 font-bold flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pipelineData.map((step, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <motion.div
                key={step.num}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-xl border text-left cursor-pointer transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0B2545] border-white text-white shadow-xl ring-2 ring-white/40'
                    : 'bg-[#0B2545]/40 border-white/10 text-white/70 hover:bg-[#0B2545]/70 hover:border-white/25 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white animate-ping" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-white/80">
                    STAGE {step.num}: {step.stage.toUpperCase()}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-white/60'}`} />
                </div>

                <h4 className="font-sans font-extrabold text-base text-white tracking-tight mb-2">
                  {step.title}
                </h4>

                <div className="space-y-1">
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-1.5 text-[11px] text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-white/50 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
