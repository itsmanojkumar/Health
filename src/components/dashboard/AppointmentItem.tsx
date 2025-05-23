import React from 'react';

interface AppointmentItemProps {
  type: string;
  time: string;
  icon: string;
  color: string;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ type, time, icon, color }) => {
  return (
    <div className={`${color} rounded-lg p-4 flex justify-between items-center`}>
      <div>
        <div className="text-gray-800 font-medium">{type}</div>
        <div className="text-gray-600 text-sm">{time}</div>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default AppointmentItem;