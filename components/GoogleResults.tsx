
import React from 'react';
import { Search, Mic, Camera, Settings, LayoutGrid, MoreVertical, ChevronRight } from 'lucide-react';
import { slides } from '../slidesData';

interface GoogleResultsProps {
  onBackToSearch: () => void;
  onToBlog: () => void;
}

const GoogleResults: React.FC<GoogleResultsProps> = ({ onBackToSearch, onToBlog }) => {
  // Only show slides 11-20 (indices 10-19)
  const googleSlides = slides.slice(10, 20);

  return (
    <div className="min-h-screen bg-white font-sans text-[#202124]">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center px-4 py-3 sm:px-8 space-x-4 sm:space-x-8">
          <div className="cursor-pointer" onClick={onBackToSearch}>
            <span className="text-3xl font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </div>
          
          <div className="flex-1 max-w-2xl hidden sm:flex items-center border border-gray-200 shadow-md rounded-full px-5 py-2 space-x-3 bg-white text-black">
            <input 
              type="text" 
              className="flex-1 focus:outline-none" 
              defaultValue="Google Data Privacy Impact Presentation"
            />
            <XIcon />
            <div className="h-6 border-l border-gray-300 mx-1"></div>
            <Mic className="text-[#4285F4] cursor-pointer" size={18} />
            <Camera className="text-[#4285F4] cursor-pointer" size={18} />
            <Search className="text-[#4285F4] cursor-pointer ml-1" size={18} />
          </div>

          <div className="flex items-center space-x-4 ml-auto">
             <Settings size={20} className="text-gray-600 cursor-pointer hidden sm:block" />
             <LayoutGrid size={20} className="text-gray-600 cursor-pointer" />
             <div className="w-8 h-8 bg-[#4285F4] text-white rounded-full flex items-center justify-center font-bold">P</div>
          </div>
        </div>

        {/* Search Tabs */}
        <div className="flex px-4 sm:px-[140px] text-sm text-gray-600 space-x-6 mt-2 overflow-x-auto whitespace-nowrap">
           <div className="border-b-4 border-blue-500 text-blue-500 pb-2 px-1 font-medium flex items-center space-x-1 cursor-pointer">
              <Search size={14} /> <span>All</span>
           </div>
           <TabItem label="News" />
           <TabItem label="Videos" />
           <TabItem label="Images" />
           <TabItem label="Books" />
           <TabItem label="More" />
        </div>
      </header>

      {/* Results Content */}
      <main className="px-4 sm:pl-[140px] pt-4 max-w-3xl pb-20">
         <div className="text-gray-600 text-sm mb-6">About 10 results (0.35 seconds)</div>

         {/* Featured Snippet (Slide 11) */}
         <div className="mb-8 p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer" onClick={onToBlog}>
            <div className="flex justify-between items-start mb-2">
               <div>
                  <div className="text-xs text-gray-600 mb-1">Featured Tech Blog Analysis</div>
                  <h2 className="text-2xl text-[#1a0dab] hover:underline font-medium mb-1">{googleSlides[0].title}</h2>
               </div>
               <img src={googleSlides[0].image} className="w-24 h-24 object-cover rounded-lg border border-gray-200" />
            </div>
            <p className="text-[#4d5156] mb-4">
              {googleSlides[0].points.join('. ')}
            </p>
            <div className="text-sm font-semibold text-blue-600 flex items-center">
              Read more on TechInsights Blog <ChevronRight size={14} />
            </div>
         </div>

         {/* Results List */}
         <div className="space-y-8">
            {googleSlides.slice(1).map((slide) => (
               <div key={slide.id} className="group cursor-pointer" onClick={onToBlog}>
                  <div className="flex items-center space-x-1 text-sm text-[#202124] mb-1">
                     <span className="bg-gray-100 p-0.5 rounded-full"><GlobeIcon /></span>
                     <span>https://www.techprivacyblog.com › articles › presentation-slide-{slide.id}</span>
                     <MoreVertical size={14} className="text-gray-400 opacity-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-xl text-[#1a0dab] group-hover:underline mb-1">
                     {slide.title} | Deep Dive Analysis
                  </h3>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                     <div className="flex-1 text-[#4d5156] text-sm leading-relaxed">
                        <span className="text-gray-500">Recently published — </span>
                        {slide.points.slice(0, 2).join('. ')}... {slide.funLine || ""}
                     </div>
                     <img src={slide.image} className="w-24 h-16 object-cover rounded border border-gray-100" />
                  </div>
               </div>
            ))}
         </div>

         {/* People Also Ask Section */}
         <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-medium mb-4">People also ask</h3>
            <div className="space-y-0 border-b border-gray-200">
               <QuestionItem question="How does Google's combined data profile affect user autonomy?" />
               <QuestionItem question="Is there a way to opt-out of Google Street View?" />
               <QuestionItem question="What are the ethical implications of the Google data ecosystem?" />
            </div>
         </div>
      </main>
    </div>
  );
};

const TabItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="pb-2 px-1 hover:text-blue-500 cursor-pointer transition-colors">
    {label}
  </div>
);

const QuestionItem: React.FC<{ question: string }> = ({ question }) => (
  <div className="border-t border-gray-200 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 px-1">
    <span className="text-md text-[#202124]">{question}</span>
    <ChevronRight size={18} className="text-gray-400 rotate-90" />
  </div>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

const GlobeIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
);

export default GoogleResults;
