import React, { useState } from 'react';
import '../styles/heartNeon.css';

interface HeartNeonProps {
  onActivated: () => void;
  onIgnite?: () => void;
}

const HeartNeon: React.FC<HeartNeonProps> = ({ onActivated, onIgnite }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHeartClick = () => {
    if (!isActive) {
      setIsActive(true);
      // Trigger the ignition effect immediately
      if (onIgnite) {
        onIgnite();
      }
      // Wait for the ignition animation to finish before revealing the page
      setTimeout(() => {
        onActivated();
      }, 1500); 
    }
  };

  return (
    <div className="heart-wrapper" onClick={handleHeartClick}>
      <svg
        viewBox="0 0 800 800"
        className={`heart-svg ${isActive ? 'ignited' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Filter for the neon glow effect */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Top main flame */}
        <path
          className="flame"
          d="M 220,320 Q 200,200 280,100 Q 270,180 320,220 Q 320,120 380,50 Q 390,150 430,180 Q 450,80 500,100 Q 480,180 540,200 Q 520,280 580,320 Z"
        />

        {/* Inner top flame details */}
        <path className="flame" d="M 320,250 Q 340,180 350,150" />
        <path className="flame" d="M 460,260 Q 450,200 480,160" />

        {/* Main heart outline */}
        <path
          className="heart-path"
          d="M 400, 350
             A 120,120 0 0,0 160,350
             C 160,500 400,650 400,750
             C 400,650 640,500 640,350
             A 120,120 0 0,0 400,350 z"
        />

        {/* Text element - perfectly animatable with stroke */}
        <text
          x="400"
          y="580"
          textAnchor="middle"
          className="neon-text"
        >
          PIĘKNY SYF
        </text>

        {/* Lower flames crossing the text */}
        <path
          className="flame"
          d="M 120,550 Q 180,480 240,550 T 360,520 T 480,580 T 600,500 T 680,560"
        />
        <path
          className="flame"
          d="M 150,600 Q 200,530 280,600 T 400,550 T 520,620 T 650,550"
        />
      </svg>

      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;