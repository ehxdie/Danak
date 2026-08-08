import React from 'react';

interface DanakLogoProps {
  className?: string;
  height?: number;
  color?: string;
  starColor?: string;
  showText?: boolean;
}

export const DanakLogo: React.FC<DanakLogoProps> = ({ 
  className = '', 
  height = 80,
  color = '#D9A441',
  starColor = 'currentColor',
  showText = true
}) => {
  // Viewbox: icon only = 0 0 200 200, with text = 0 0 200 290
  const viewBoxHeight = showText ? 290 : 200;
  const aspectRatio = 200 / viewBoxHeight;
  const width = height * aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 200 ${viewBoxHeight}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Danak Logistics Resource Ltd Logo"
    >
      {/* Rounded Square Border */}
      <rect
        x="10" y="10"
        width="180" height="180"
        rx="20" ry="20"
        fill="none"
        stroke={color}
        strokeWidth="5"
      />

      {/* D-shape: vertical left bar + curved right side + tapered bottom point */}
      <path
        d={`
          M 48 38
          L 90 38
          L 74 58
          L 68 58
          L 68 82
          C 68 60 85 42 110 38
          C 148 32 178 62 174 100
          C 170 138 142 162 112 162
          L 58 162
          L 82 132
          C 72 148 68 140 68 120
          L 68 58
          L 48 38
          Z
        `}
        fill={color}
        fillRule="evenodd"
      />

      {/* Star overlay - punched out of the D to show background */}
      <polygon
        points="110,48 118,72 144,76 124,94 130,120 110,106 90,120 96,94 76,76 102,72"
        fill={starColor}
      />

      {showText && (
        <>
          {/* DANAK Text */}
          <text
            x="100" y="238"
            textAnchor="middle"
            fill={color}
            fontFamily="'Inter', 'Arial Black', 'Helvetica Neue', sans-serif"
            fontWeight="900"
            fontSize="48"
            letterSpacing="2"
          >
            DANAK
          </text>

          {/* Subtitle */}
          <text
            x="100" y="265"
            textAnchor="middle"
            fill={color}
            fontFamily="'Inter', 'Arial', 'Helvetica Neue', sans-serif"
            fontWeight="600"
            fontSize="12.5"
            letterSpacing="3.2"
          >
            LOGISTICS RESOURCE LTD
          </text>
        </>
      )}
    </svg>
  );
};

export default DanakLogo;
