
import React from 'react';
import { Users, UserCircle, Clock, Save, Flag, Calendar, ChevronDown, Monitor } from 'lucide-react';

const SidebarLeft: React.FC = () => {
  return (
    <div className="py-4 space-y-1">
      <SidebarItem icon={<UserCircle size={32} className="text-blue-500" />} label="Privacy Presenter" />
      <SidebarItem icon={<Users size={32} className="text-[#1877f2]" />} label="Friends" />
      <SidebarItem icon={<Clock size={32} className="text-[#1877f2]" />} label="Memories" />
      <SidebarItem icon={<Save size={32} className="text-purple-500" />} label="Saved" />
      <SidebarItem icon={<Flag size={32} className="text-orange-500" />} label="Pages" />
      <SidebarItem icon={<Calendar size={32} className="text-red-500" />} label="Events" />
      <SidebarItem icon={<Monitor size={32} className="text-blue-400" />} label="Watch" />
      <SidebarItem icon={<div className="bg-gray-200 p-1.5 rounded-full"><ChevronDown size={20} /></div>} label="See more" />
      
      <hr className="my-4 mx-2 border-gray-300" />
      
      <div className="px-2 mb-2 flex justify-between items-center group">
        <span className="text-gray-600 font-semibold text-lg">Your Shortcuts</span>
        <button className="text-[#1877f2] text-sm opacity-0 group-hover:opacity-100">Edit</button>
      </div>
      
      <SidebarItem icon={<img src="https://picsum.photos/seed/fb1/32" className="rounded-lg" />} label="Assignments for Rs. 500" />
      <SidebarItem icon={<img src="https://picsum.photos/seed/fb2/32" className="rounded-lg" />} label="KUSOM Students Help Club" />
      <SidebarItem icon={<img src="https://picsum.photos/seed/fb3/32" className="rounded-lg" />} label="Protect my Privacy Forum" />
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors mx-1">
    {icon}
    <span className="font-semibold text-sm">{label}</span>
  </div>
);

export default SidebarLeft;
