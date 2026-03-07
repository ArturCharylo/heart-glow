import React, { useState } from 'react';
import '../styles/heartNeon.css';

interface HeartNeonProps {
  onActivated: () => void;
}

const HeartNeon: React.FC<HeartNeonProps> = ({ onActivated }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHeartClick = () => {
    if (!isActive) {
      setIsActive(true);
      // Wait for the edge-drawing and fill animation to finish
      setTimeout(() => {
        onActivated();
      }, 2500); 
    }
  };

  return (
    <div className={`heart-wrapper ${isActive ? 'active' : ''}`} onClick={handleHeartClick}>
      
      {/* Inline SVG enables stroke and fill animations */}
      <svg 
        viewBox="0 0 200 200" 
        className={`heart-svg ${isActive ? 'ignited' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Flame shapes */}
        <path 
          className="flame" 
          d="M100,60 Q85,25 90,5 Q110,20 100,50 Q115,10 120,5 Q115,35 100,60 Z" 
        />
        <path 
          className="flame" 
          d="M80,80 Q60,40 65,15 Q85,40 80,80 Z" 
        />
        <path 
          className="flame" 
          d="M120,80 Q140,40 135,15 Q115,40 120,80 Z" 
        />

        {/* Heart shape */}
        <path 
          className="heart-path" 
          d="M100,170 C100,170 20,110 20,65 C20,35 60,25 100,65 C140,25 180,35 180,65 C180,110 100,170 100,170 Z"
        />
      </svg>

      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;