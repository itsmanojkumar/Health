import React from 'react';

interface HealthStatusProps {
  part: {
    id: string;
    name: string;
    status: 'good' | 'warning' | 'critical';
    lastChecked: string;
  };
}

const HealthStatus: React.FC<HealthStatusProps> = ({ part }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'good': return 'bg-cyan-400';
      case 'warning': return 'bg-yellow-400';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };
  
  const getStatusPercentage = (status: string) => {
    switch(status) {
      case 'good': return '80%';
      case 'warning': return '50%';
      case 'critical': return '30%';
      default: return '0%';
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-3 h-3 rounded-full ${getStatusColor(part.status)}`}></div>
        <div className="text-sm text-gray-700">
          {part.name}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-2">
        Date: {part.lastChecked}
      </div>
      
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getStatusColor(part.status)}`}
          style={{ width: getStatusPercentage(part.status) }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatus;