import React from 'react';

interface HealthIndicatorProps {
  position: { x: number; y: number };
  color: string;
  isActive: boolean;
  label: string;
  onClick: () => void;
}

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ 
  position, 
  color, 
  isActive, 
  label,
  onClick 
}) => {
  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`, 
        transform: 'translate(-50%, -50%)' 
      }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
          <div className={`px-3 py-1 ${color} text-white text-xs font-medium rounded-md`}>
            {label}
          </div>
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 ${color} w-2 h-2 rotate-45`}></div>
        </div>
      )}
      
      <div className={`w-4 h-4 rounded-full ${color} ${isActive ? 'ring-4 ring-opacity-50' : ''} ring-${color}`}></div>
    </div>
  );
};

export default HealthIndicator;