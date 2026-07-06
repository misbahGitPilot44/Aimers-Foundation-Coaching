import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle to improve performance
      if (!handleMouseMove.throttleTimeout) {
        handleMouseMove.throttleTimeout = setTimeout(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          handleMouseMove.throttleTimeout = null;
        }, 30);
      }
    };
    
    // Define the throttle property for TypeScript
    handleMouseMove.throttleTimeout = null as NodeJS.Timeout | null;
    
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (handleMouseMove.throttleTimeout) {
        clearTimeout(handleMouseMove.throttleTimeout);
      }
    };
  }, []);

  // Calculate the position and transform values based on mouse position
  const calculateBackgroundTransform = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Normalize mouse position to be between -10 and 10
    const moveX = (mousePosition.x / windowWidth - 0.5) * 20;
    const moveY = (mousePosition.y / windowHeight - 0.5) * 20;
    
    return `translate(${moveX}px, ${moveY}px)`;
  };

  // Calculate color that changes subtly based on mouse position
  const calculateBackgroundColor = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate hue shift for a subtle color change (0-10 degrees)
    const hueShift = (mousePosition.x / windowWidth * 10).toFixed(0);
    const opacityShift = 0.05 + (mousePosition.y / windowHeight * 0.05);
    
    // Determine if we need to use a different hue based on the current page
    const baseHue = document.body.getAttribute('data-page') === 'home' ? 220 : 
                  document.body.getAttribute('data-page') === 'events' ? 45 :
                  document.body.getAttribute('data-page') === 'blog' ? 0 :
                  document.body.getAttribute('data-page') === 'about' ? 120 :
                  document.body.getAttribute('data-page') === 'membership' ? 280 :
                  document.body.getAttribute('data-page') === 'resources' ? 30 :
                  document.body.getAttribute('data-page') === 'contact' ? 190 : 220;
    
    return {
      background: `hsla(${baseHue + Number(hueShift)}, 70%, 50%, ${opacityShift})`,
      opacity: opacityShift,
    };
  };

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none transition-transform duration-300 ease-out"
      style={{ transform: calculateBackgroundTransform() }}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ 
          backgroundImage: `linear-gradient(currentColor 1.5px, transparent 1.5px), linear-gradient(90deg, currentColor 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          color: calculateBackgroundColor().background,
          opacity: calculateBackgroundColor().opacity,
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;