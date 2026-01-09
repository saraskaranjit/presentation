
import React from 'react';
import { 
  Search, 
  Home, 
  Tv, 
  Store, 
  Users, 
  LayoutGrid, 
  MessageCircle, 
  Bell, 
  User,
  LogOut
} from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <nav className="fixed top-0 w-full h-[56px] bg-white shadow-sm flex items-center justify-between px-4 z-40">
      {/* Left */}
      <div className="flex items-center space-x-2">
        <div className="text-[#1877f2] font-bold text-4xl cursor-pointer">f</div>
        <div className="hidden sm:flex items-center bg-[#f0f2f5] px-3 py-2 rounded-full space-x-2">
          <Search size={18} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="bg-transparent focus:outline-none text-sm w-48"
          />
        </div>
      </div>

      {/* Center - Icons */}
      <div className="hidden md:flex flex-1 justify-center max-w-xl h-full space-x-4">
        <NavItem icon={<Home size={28} />} active />
        <NavItem icon={<Tv size={28} />} />
        <NavItem icon={<Store size={28} />} />
        <NavItem icon={<Users size={28} />} />
        <NavItem icon={<LayoutGrid size={28} />} />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2">
        <div className="hidden lg:flex items-center space-x-2 mr-2 p-1 px-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="font-semibold text-sm">Privacy Pro</span>
        </div>
        <IconButton icon={<MessageCircle size={20} />} />
        <IconButton icon={<Bell size={20} />} />
        <IconButton icon={<LogOut size={20} />} onClick={onLogout} />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; active?: boolean }> = ({ icon, active }) => (
  <div className={`flex items-center justify-center px-8 border-b-4 cursor-pointer transition-colors ${active ? 'border-[#1877f2] text-[#1877f2]' : 'border-transparent text-gray-500 hover:bg-gray-100 rounded-lg h-[90%] my-auto'}`}>
    {icon}
  </div>
);

const IconButton: React.FC<{ icon: React.ReactNode; onClick?: () => void }> = ({ icon, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer text-black"
  >
    {icon}
  </div>
);

export default Navbar;
