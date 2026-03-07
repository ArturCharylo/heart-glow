import React, { useState } from 'react';
import '../styles/heartNeon.css';
import heartImg from '../assets/heartNeon.png';

interface HeartNeonProps {
  onActivated: () => void;
}

const HeartNeon: React.FC<HeartNeonProps> = ({ onActivated }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHeartClick = () => {
    if (!isActive) {
      setIsActive(true);
      // Wait for the clip-path animation to finish before revealing the page
      setTimeout(() => {
        onActivated();
      }, 1500); 
    }
  };

  return (
    <div className={`heart-wrapper ${isActive ? 'active' : ''}`} onClick={handleHeartClick}>
      {/* Base layer - the "dimmed" state */}
      <img src={heartImg} className="heart-image base" alt="Heart Off" />
      
      {/* Top layer - the "glowing" state that gets revealed */}
      <div className="glow-container">
        <img src={heartImg} className="heart-image neon" alt="Heart On" />
      </div>

      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;