import React from 'react';
import Header from '../dashboard/Header';
import BodyVisualization from '../visualization/BodyVisualization';
import CalendarView from '../calendar/CalendarView';
import UpcomingSchedule from '../dashboard/UpcomingSchedule';
import ActivityChart from '../dashboard/ActivityChart';
import ChatBot from '../chat/ChatBot';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <BodyVisualization />
          </div>
          <ChatBot />
        </div>
        
        <div className="lg:col-span-3">
          <CalendarView />
          
          <div className="mt-6">
            <UpcomingSchedule />
          </div>
          
          <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
            <ActivityChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;