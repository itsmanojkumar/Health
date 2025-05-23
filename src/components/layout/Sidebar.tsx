import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  CalendarClock, 
  BarChart2, 
  MessageSquare,
  PhoneCall,
  Settings
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-48 bg-white border-r h-full p-4 flex flex-col">
      <div className="flex items-center mb-8">
        <span className="text-cyan-400 font-bold text-xl">Health</span>
        <span className="text-gray-700 font-bold text-xl">care.</span>
      </div>
      
      <div className="text-xs text-gray-400 mb-2">General</div>
      <nav className="flex-1">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <SidebarItem icon={<History size={18} />} label="History" />
        <SidebarItem icon={<Calendar size={18} />} label="Calendar" />
        <SidebarItem icon={<CalendarClock size={18} />} label="Appointments" />
        <SidebarItem icon={<BarChart2 size={18} />} label="Statistics" />
        
        <div className="text-xs text-gray-400 mt-6 mb-2">Tools</div>
        <SidebarItem icon={<MessageSquare size={18} />} label="Chat" />
        <SidebarItem icon={<PhoneCall size={18} />} label="Support" />
      </nav>
      
      <div className="mt-auto">
        <SidebarItem icon={<Settings size={18} />} label="Setting" />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => {
  return (
    <div 
      className={`flex items-center gap-3 py-2 px-3 mb-1 rounded-md cursor-pointer transition-colors ${
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      <div className="text-current">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default Sidebar;