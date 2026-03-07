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
      // Notify parent component to show the rest of the page
      setTimeout(() => {
        onActivated();
      }, 2000); // Matches the animation duration
    }
  };

  return (
    <div className={`heart-container ${isActive ? 'active' : ''}`} onClick={handleHeartClick}>
      <svg
        viewBox="0 0 100 100"
        className="heart-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Heart Path */}
        <path
          className="heart-outline"
          d="M50,88 L45,83 C25,65 10,50 10,33 C10,20 20,10 33,10 C41,10 47,14 50,19 C53,14 59,10 67,10 C80,10 90,20 90,33 C90,50 75,65 55,83 L50,88 Z"
        />
      </svg>
      {!isActive && <p className="hint-text">Click to ignite</p>}
    </div>
  );
};

export default HeartNeon;