import React from 'react';

interface ParallaxLayerProps {
  speed: number;
  offset: number;
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  speed,
  offset,
  imageUrl,
  className = '',
  children
}) => {
  const transform = `translateY(${offset * speed}px) translateZ(0)`;
  
  const style: React.CSSProperties = {
    transform,
    willChange: 'transform',
    transition: 'transform 0.1s linear',
    ...(imageUrl ? {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    } : {})
  };

  return (
    <div 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};