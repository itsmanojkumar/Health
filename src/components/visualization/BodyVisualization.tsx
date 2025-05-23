import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import bodyImage from '../../assets/body-model.png';
import HealthIndicator from './HealthIndicator';
import HealthStatus from './HealthStatus';

interface BodyPart {
  id: string;
  name: string;
  position: { x: number; y: number };
  status: 'good' | 'warning' | 'critical';
  lastChecked: string;
}

const BodyVisualization: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>('heart');
  
  const bodyParts: BodyPart[] = [
    {
      id: 'heart',
      name: 'Heart',
      position: { x: 48, y: 30 },
      status: 'good',
      lastChecked: '26 Oct 2021'
    },
    {
      id: 'lungs',
      name: 'Lungs',
      position: { x: 55, y: 27 },
      status: 'critical',
      lastChecked: '26 Oct 2021'
    },
    {
      id: 'teeth',
      name: 'Teeth',
      position: { x: 52, y: 17},
      status: 'warning',
      lastChecked: '26 Oct 2021'
    },
    {
      id: 'leg',
      name: 'Leg',
      position: { x: 42, y: 78 },
      status: 'good',
      lastChecked: '26 Oct 2021'
    },
    {
      id: 'bone',
      name: 'Bone',
      position: { x: 58, y: 65 },
      status: 'critical',
      lastChecked: '26 Oct 2021'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'good': return 'bg-cyan-400';
      case 'warning': return 'bg-yellow-400';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="relative h-full">
      <div className="flex justify-end mb-4">
        <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
          <Plus size={18} className="text-gray-600" />
        </div>
      </div>
      
      <div className="relative flex justify-center">
        <img 
          src="https://media.istockphoto.com/id/182043494/photo/human-heart-and-vascular-system.webp?s=2048x2048&w=is&k=20&c=PmZP3inUuG9uD_rqoFRzhnSlTCehHAu9_zCEj9nBytE=" 
          alt="Human body model" 
          className="h-96 object-contain"
        />
        
        {bodyParts.map((part) => (
          <HealthIndicator
            key={part.id}
            position={part.position}
            color={getStatusColor(part.status)}
            isActive={selectedPart === part.id}
            label={`Healthy ${part.name}`}
            onClick={() => setSelectedPart(part.id)}
          />
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
      
      <div className="mt-6">
        {selectedPart && (
          <HealthStatus
            part={bodyParts.find(part => part.id === selectedPart)!}
          />
        )}
      </div>
    </div>
  );
};

export default BodyVisualization;