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

          {/* Curve path along which the text "PIĘKNY SYF" will bend. 
              Lifted higher and smoothed to match the original logo */}
          <path id="text-curve" d="M 170,540 Q 400,450 630,540" />
        </defs>

        {/* Main heart outline - refined to be smoother and better proportioned */}
        <path
          className="heart-path"
          d="M 400,680 
             C 400,680 150,450 150,280 
             C 150,150 350,150 400,300 
             C 450,150 650,150 650,280 
             C 650,450 400,680 400,680 Z"
        />

        {/* Top flames (unified crown, organic and sweeping upward) */}
        <path
          className="flame"
          d="M 220,250 
             C 200,120 250,50 250,50 
             C 260,110 270,160 290,160 
             C 320,70 340,30 340,30 
             C 350,110 360,140 380,140 
             C 410,40 450,10 450,10 
             C 450,110 460,160 480,160 
             C 520,60 550,50 550,50 
             C 530,130 540,170 560,170 
             C 590,90 620,120 620,120 
             C 580,190 600,240 600,240"
        />
        
        {/* Inner details for upper flames for depth */}
        <path className="flame" d="M 310,140 Q 330,60 350,100" />
        <path className="flame" d="M 420,140 Q 440,50 470,90" />

        {/* Curved and elevated text */}
        <text className="neon-text">
          <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
            PIĘKNY SYF
          </textPath>
        </text>

        {/* Lower flames wrapping gracefully around and under the text */}
        <path
          className="flame"
          d="M 120,580 
             C 150,480 180,480 200,560 
             C 230,460 280,460 310,550 
             C 340,470 390,470 420,560 
             C 450,460 500,460 530,550 
             C 560,480 600,480 620,560 
             C 640,500 670,500 690,580"
        />

        <path
          className="flame"
          d="M 140,630 
             C 180,550 220,550 250,620 
             C 290,560 340,560 380,630 
             C 420,560 470,560 510,630 
             C 550,570 600,570 630,640"
        />
        
        <path
          className="flame"
          d="M 200,670 Q 280,600 350,660 T 500,620 T 600,680"
        />
      </svg>

      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;