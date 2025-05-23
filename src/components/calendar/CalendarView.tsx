import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import CalendarDay from './CalendarDay';
import AppointmentCard from './AppointmentCard';

const CalendarView: React.FC = () => {
  const [currentDate] = useState(new Date(2021, 9, 28)); // October 28, 2021
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    return {
      day: format(date, 'EEE'),
      date: parseInt(format(date, 'd')),
      appointments: [
        { time: '10:00' },
        { time: format(addDays(date, 1), 'HH:00') },
        { time: format(addDays(date, 2), 'HH:00') }
      ],
      isToday: isSameDay(date, currentDate)
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm">
            This Week
          </div>
          <ChevronLeft size={16} className="text-gray-400 cursor-pointer" />
        </div>
        
        <div className="text-gray-800 font-medium">
          {format(currentDate, 'MMMM yyyy')}
        </div>
        
        <div className="flex items-center space-x-2">
          <ChevronLeft size={16} className="text-gray-400 cursor-pointer" />
          <ChevronRight size={16} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, index) => (
          <CalendarDay 
            key={index}
            day={day.day} 
            date={day.date} 
            appointments={day.appointments}
            isToday={day.isToday}
          />
        ))}
      </div>
      
      <div className="mt-6 flex space-x-4">
        <AppointmentCard 
          type="Dentist"
          icon="🦷"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          color="bg-blue-600"
        />
        
        <AppointmentCard 
          type="Physiotherapy Appointment"
          icon="🏊‍♂️"
          time="11:00-12:00"
          doctor="Dr. Kevin Davies"
          color="bg-indigo-400"
        />
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-lg">The Upcoming Schedule</h3>
          <div className="flex items-center text-blue-600 text-sm cursor-pointer">
            <span>Details</span>
            <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;