import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ActivityChart: React.FC = () => {
  const data = [
    { day: 'Mon', value1: 30, value2: 10, value3: 40 },
    { day: 'Tues', value1: 20, value2: 50, value3: 15 },
    { day: 'Wed', value1: 45, value2: 20, value3: 35 },
    { day: 'Thurs', value1: 25, value2: 60, value3: 20 },
    { day: 'Fri', value1: 50, value2: 15, value3: 40 },
    { day: 'Sat', value1: 35, value2: 30, value3: 25 },
    { day: 'Sun', value1: 15, value2: 40, value3: 10 }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Activity</h3>
        <div className="text-sm text-gray-500">3 appointment on this week</div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide={true} />
            <Bar dataKey="value1" fill="#38BDF8" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="value2" fill="#3B4CB8" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="value3" fill="#22C55E" radius={[4, 4, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;