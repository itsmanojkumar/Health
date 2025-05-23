import React from 'react';

interface AppointmentCardProps {
  type: string;
  icon: string;
  time: string;
  doctor: string;
  color: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ type, icon, time, doctor, color }) => {
  return (
    <div className={`${color} text-white rounded-lg p-4 flex-1`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{type}</h4>
          <div className="text-sm opacity-90 mt-1">{time}</div>
          <div className="text-sm opacity-90">{doctor}</div>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  );
};

export default AppointmentCard;