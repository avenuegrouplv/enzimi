import React from 'react';

interface BottleGraphicProps {
  colorGradient: string;
  bottleAccent: string;
  subName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BottleGraphic: React.FC<BottleGraphicProps> = ({
  colorGradient,
  bottleAccent,
  subName,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-24 h-40',
    md: 'w-32 h-52',
    lg: 'w-44 h-72',
  }[size];

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses} select-none transition-transform duration-300 hover:scale-105`}>
      {/* Soft Glow behind bottle */}
      <div
        className="absolute inset-4 rounded-full blur-xl opacity-30 pointer-events-none"
        style={{ backgroundColor: bottleAccent }}
      />

      {/* SVG Bottle Silhouette */}
      <svg
        viewBox="0 0 100 200"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glass Gradient */}
          <linearGradient id={`liquidGrad-${bottleAccent.replace('#', '')}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={bottleAccent} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3D2C22" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="glassShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wooden / Natural Cork Cap */}
        <rect x="42" y="10" width="16" height="12" rx="3" fill="#B08968" stroke="#7F5539" strokeWidth="1.5" />
        <rect x="40" y="20" width="20" height="4" rx="1" fill="#7F5539" />

        {/* Bottle Neck */}
        <path d="M 43 24 L 43 50 Q 43 65 30 75 L 20 85 L 20 180 Q 20 190 30 190 L 70 190 Q 80 190 80 180 L 80 85 L 70 75 Q 57 65 57 50 L 57 24 Z" fill={`url(#liquidGrad-${bottleAccent.replace('#', '')})`} />

        {/* Glass Outline */}
        <path d="M 43 24 L 43 50 Q 43 65 30 75 L 20 85 L 20 180 Q 20 190 30 190 L 70 190 Q 80 190 80 180 L 80 85 L 70 75 Q 57 65 57 50 L 57 24 Z" stroke="#E6CCB2" strokeWidth="2" strokeOpacity="0.8" />

        {/* Glass Reflection Highlight */}
        <path d="M 24 90 L 24 175 C 24 182 28 185 30 185" stroke="url(#glassShine)" strokeWidth="3" strokeLinecap="round" />

        {/* Paper Label */}
        <rect x="25" y="95" width="50" height="65" rx="4" fill="#FAF7F2" stroke="#E6CCB2" strokeWidth="1" />
        
        {/* Label Content */}
        {/* Leaf Icon */}
        <path d="M 50 102 C 53 105 53 109 50 112 C 47 109 47 105 50 102 Z" fill={bottleAccent} />
        
        {/* Enzimi Text */}
        <text x="50" y="122" textAnchor="middle" fill="#3D2C22" fontSize="7" fontWeight="bold" fontFamily="sans-serif">ENZĪMI</text>
        <text x="50" y="128" textAnchor="middle" fill="#7F5539" fontSize="3.5" fontFamily="sans-serif">FERMENTĒTS DZĒRIENS</text>
        
        <line x1="32" y1="132" x2="68" y2="132" stroke="#E6CCB2" strokeWidth="0.5" />

        <text x="50" y="140" textAnchor="middle" fill="#3D2C22" fontSize="4" fontWeight="600" fontFamily="sans-serif">100% RAW</text>
        <text x="50" y="146" textAnchor="middle" fill="#6D584C" fontSize="3.5" fontFamily="sans-serif">750 ml • €12.99</text>

        {/* Fermentation Bubbles Animation inside bottle */}
        <circle cx="35" cy="160" r="1.5" fill="#FFFFFF" opacity="0.6" />
        <circle cx="48" cy="170" r="2" fill="#FFFFFF" opacity="0.5" />
        <circle cx="62" cy="155" r="1.2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="40" cy="140" r="1" fill="#FFFFFF" opacity="0.4" />
      </svg>

      {/* Optional Tag floating badge */}
      {subName && (
        <span className="absolute -bottom-2 bg-[#FAF7F2] text-[#7F5539] text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#E6CCB2] shadow-xs whitespace-nowrap">
          {subName}
        </span>
      )}
    </div>
  );
};
