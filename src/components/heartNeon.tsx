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

          {/* Curve path along which the text "PIĘKNY SYF" will bend */}
          <path id="text-curve" d="M 150,520 Q 400,470 650,520" />
        </defs>

        {/* Main heart outline (classic, smooth shape) */}
        <path
          className="heart-path"
          d="M 400, 300
             C 400, 300 320, 180 200, 180
             C 80, 180 80, 380 200, 480
             L 400, 680
             L 600, 480
             C 720, 380 720, 180 600, 180
             C 480, 180 400, 300 400, 300 Z"
        />

        {/* Top flames (sharp, organic) */}
        <path
          className="flame"
          d="M 240,210
             Q 210,120 250,40
             Q 280,100 290,140
             Q 310,70 340,30
             Q 360,110 370,140
             Q 390,40 430,10
             Q 440,100 450,150
             Q 480,80 510,50
             Q 510,130 530,160
             Q 560,100 580,80
             Q 550,160 560,210"
        />
        {/* Inner details for upper flames for depth */}
        <path className="flame" d="M 330,160 Q 340,90 370,60 Q 380,120 400,150" />
        <path className="flame" d="M 420,160 Q 440,80 480,60 Q 470,130 490,170" />

        {/* Curved and elevated text */}
        <text className="neon-text">
          <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
            PIĘKNY SYF
          </textPath>
        </text>

        {/* Lower, sharper flames surrounding the text */}
        <path
          className="flame"
          d="M 160,530
             Q 180,460 190,460 Q 200,500 220,510
             Q 240,440 250,440 Q 260,490 280,510
             Q 300,450 310,450 Q 320,500 340,520
             Q 360,430 370,430 Q 380,480 400,500
             Q 420,440 430,440 Q 440,490 460,510
             Q 480,450 490,450 Q 500,500 520,520
             Q 540,460 550,460 Q 560,500 580,510
             Q 600,450 610,450 Q 620,520 640,540"
        />

        <path
          className="flame"
          d="M 140,580
             Q 170,520 180,520 Q 210,560 230,570
             Q 260,510 270,510 Q 290,550 310,570
             Q 340,500 350,500 Q 380,550 410,570
             Q 440,510 450,510 Q 480,560 510,570
             Q 540,500 550,500 Q 580,560 600,580
             Q 630,520 640,520 Q 660,570 670,600"
        />
      </svg>

      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;