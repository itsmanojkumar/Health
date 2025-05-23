import React from 'react';
import AppointmentItem from './AppointmentItem';

const UpcomingSchedule: React.FC = () => {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-gray-700 font-medium">On Thursday</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppointmentItem 
          type="Health checkup complete" 
          time="11:00 AM"
          icon="✏️"
          color="bg-blue-100"
        />
        
        <AppointmentItem 
          type="Ophthalmologist" 
          time="14:00 PM"
          icon="👁️"
          color="bg-blue-100"
        />
      </div>
      
      <div className="mt-4 mb-2">
        <h3 className="text-gray-700 font-medium">On Saturday</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppointmentItem 
          type="Cardiologist" 
          time="12:00 AM"
          icon="❤️"
          color="bg-blue-100"
        />
        
        <AppointmentItem 
          type="Neurologist" 
          time="16:00 PM"
          icon="🧠"
          color="bg-blue-100"
        />
      </div>
    </div>
  );
};

export default UpcomingSchedule;