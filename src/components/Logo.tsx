import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

/**
 * Official DNA TECH Logo Mark SVG
 * Matches the stylized 'A' with connected data trend nodes.
 */
export const LogoIcon: React.FC<LogoProps> = ({
  className = "w-8 h-8",
  size,
  color,
}) => {
  const primaryColor = color || "currentColor";

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DNA TECH Logo"
    >
      {/* 'A' Outer Structure */}
      <path
        d="M 250 50 L 105 440 L 165 440 L 250 200 L 335 440 L 395 440 Z"
        fill={primaryColor}
      />

      {/* Connecting Chart Trend Line */}
      <path
        d="M 170 350 L 205 395 L 245 335 L 285 365 L 375 260"
        stroke={primaryColor}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Ring Node on Left Leg (with transparent hollow center using evenodd) */}
      <path
        d="M 170 320 A 30 30 0 1 1 169.9 320 Z M 170 336 A 14 14 0 1 0 170.1 336 Z"
        fill={primaryColor}
        fillRule="evenodd"
      />

      {/* Filled Node 2 (bottom left) */}
      <circle cx="205" cy="395" r="20" fill={primaryColor} />

      {/* Filled Node 3 (center peak) */}
      <circle cx="245" cy="335" r="20" fill={primaryColor} />

      {/* Filled Node 4 (right dip) */}
      <circle cx="285" cy="365" r="20" fill={primaryColor} />

      {/* Filled Node 5 (top-right terminal) */}
      <circle cx="375" cy="260" r="22" fill={primaryColor} />
    </svg>
  );
};

interface LogoBrandProps {
  isLight?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  onClick?: () => void;
  className?: string;
}

export const LogoBrand: React.FC<LogoBrandProps> = ({
  isLight = false,
  size = 'md',
  showSubtitle = true,
  onClick,
  className = "",
}) => {
  const iconSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textSizeClass = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSizeClass = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center space-x-3 cursor-pointer group ${className}`}
      id="brand-logo"
    >
      <div className={`flex items-center justify-center ${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}>
        <LogoIcon
          className={`${iconSizeClass} ${isLight ? 'text-[#0B2442]' : 'text-white'}`}
        />
      </div>

      <div>
        <div className="flex items-baseline space-x-1">
          <span className={`font-sans font-extrabold ${textSizeClass} tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            DNA
          </span>
          <span className={`font-sans font-extrabold ${textSizeClass} tracking-tight ${isLight ? 'text-[#0B2442]' : 'text-white'}`}>
            TECH
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-mono tracking-widest uppercase block -mt-1 ${subtitleSizeClass} ${isLight ? 'text-slate-500' : 'text-white/60'}`}>
            Data Neutral Analysis
          </span>
        )}
      </div>
    </div>
  );
};

export default LogoIcon;
