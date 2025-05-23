import React from 'react';

interface CalendarDayProps {
  day: string;
  date: number;
  appointments: { time: string }[];
  isToday?: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, date, appointments, isToday }) => {
  return (
    <div className="text-center">
      <div className="text-sm text-gray-500 mb-1">{day}</div>
      <div className={`inline-flex justify-center items-center w-8 h-8 rounded-full mb-2 ${
        isToday ? 'bg-blue-600 text-white' : 'text-gray-800'
      }`}>
        {date}
      </div>
      
      <div className="space-y-1">
        {appointments.map((appointment, index) => (
          <div 
            key={index} 
            className="text-xs py-1 px-2 rounded bg-gray-100 text-gray-700"
          >
            {appointment.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;