import React from 'react';

const AnimatedGradientHeading = ({ children, className = '' }) => {
  const isBlack = className.includes('text-black');
  return (
    <h1
      className={`
        text-5xl md:text-7xl font-extrabold tracking-tight
        ${
          isBlack
            ? ''
            : 'bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move'
        }
        ${className}
      `}
    >
      {children}
    </h1>
  );
};

export default AnimatedGradientHeading; 