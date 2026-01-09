
import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';

interface GoogleSearchProps {
  onSearch: () => void;
  onBack: () => void;
}

const GoogleSearch: React.FC<GoogleSearchProps> = ({ onSearch, onBack }) => {
  const [query, setQuery] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header className="flex justify-end p-4 space-x-4 text-sm items-center">
        <a href="#" className="hover:underline">Gmail</a>
        <a href="#" className="hover:underline">Images</a>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6,8c1.1,0,2-0.9,2-2s-0.9-2-2-2S4,4.9,4,6S4.9,8,6,8z M12,20c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,20,12,20z M6,20 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,20,6,20z M6,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,14,6,14z M12,14c1.1,0,2-0.9,2-2 s-0.9-2-2-2s-2,0.9-2,2S10.9,14,12,14z M18,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,14,18,14z M18,8c1.1,0,2-0.9,2-2 s-0.9-2-2-2s-2,0.9-2,2S16.9,8,18,8z M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M18,20c1.1,0,2-0.9,2-2s-0.9-2-2-2 s-2,0.9-2,2S16.9,20,18,20z"></path></svg>
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:shadow-md transition">Sign in</button>
      </header>

      <main className="flex-1 flex flex-col items-center pt-24 px-4">
        <div className="mb-8 flex items-center justify-center">
          <span className="text-7xl font-bold tracking-tighter">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>

        <div className="w-full max-w-xl group">
          <div className="flex items-center border border-gray-200 hover:shadow-lg focus-within:shadow-lg transition-shadow rounded-full px-5 py-3 space-x-3">
            <Search className="text-gray-400" size={20} />
            <input 
              type="text" 
              className="flex-1 focus:outline-none text-lg bg-white text-black" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Search Google or type a URL"
            />
            <Mic className="text-[#4285F4] cursor-pointer" size={20} />
            <Camera className="text-[#4285F4] cursor-pointer" size={20} />
          </div>
        </div>

        <div className="mt-8 space-x-3 flex">
          <button onClick={onSearch} className="bg-[#f8f9fa] border border-transparent hover:border-gray-300 hover:shadow-sm px-4 py-2 rounded text-sm text-gray-800">Google Search</button>
          <button className="bg-[#f8f9fa] border border-transparent hover:border-gray-300 hover:shadow-sm px-4 py-2 rounded text-sm text-gray-800">I'm Feeling Lucky</button>
        </div>

        <div className="mt-8 text-sm">
          Google offered in: <a href="#" className="text-blue-800 hover:underline">हिन्दी</a> <a href="#" className="text-blue-800 hover:underline">नेपाली</a>
        </div>
      </main>

      <footer className="bg-[#f2f2f2] text-sm text-gray-600">
        <div className="px-8 py-3 border-b border-gray-300">Nepal</div>
        <div className="px-8 py-3 flex flex-wrap justify-between">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline" onClick={onBack}>Back to Facebook</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleSearch;
