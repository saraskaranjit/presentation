
import React from 'react';
import { Search, MoreHorizontal, Video } from 'lucide-react';

const SidebarRight: React.FC = () => {
  const contacts = [
    { name: "Mark Zuckerberg", online: true },
    { name: "Elon Musk", online: false },
    { name: "KP Oli", online: true },
    { name: "Bramha", online: true },
    { name: "Bishnu", online: true },
    { name: "Maheshwor", online: true },
    { name: "Parmatma", online: false },
  ];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center text-gray-600 px-2 mb-4">
        <span className="font-semibold">Contacts</span>
        <div className="flex space-x-4">
          <Video size={18} className="cursor-pointer hover:text-black" />
          <Search size={18} className="cursor-pointer hover:text-black" />
          <MoreHorizontal size={18} className="cursor-pointer hover:text-black" />
        </div>
      </div>

      <div className="space-y-1">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors relative">
            <div className="relative">
              <img 
                src={`https://i.pravatar.cc/150?u=${contact.name}`} 
                className="w-8 h-8 rounded-full border border-gray-200"
                alt={contact.name}
              />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <span className="text-sm font-semibold">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
