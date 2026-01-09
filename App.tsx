
import React, { useState } from 'react';
import { AppState } from './types';
import Login from './components/Login';
import Terms from './components/Terms';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import GoogleSearch from './components/GoogleSearch';
import GoogleResults from './components/GoogleResults';
import GoogleBlog from './components/GoogleBlog';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOGIN);

  const handleLogin = () => setAppState(AppState.TERMS);
  const handleAcceptTerms = () => setAppState(AppState.FEED);
  const handleToGoogle = () => setAppState(AppState.GOOGLE_SEARCH);
  const handleExecuteSearch = () => setAppState(AppState.GOOGLE_RESULTS);
  const handleBackToFB = () => setAppState(AppState.LOGIN);
  const handleToBlog = () => setAppState(AppState.GOOGLE_BLOG);

  if (appState === AppState.LOGIN) {
    return <Login onLogin={handleLogin} onToGoogle={handleToGoogle} />;
  }

  if (appState === AppState.TERMS) {
    return <Terms onAccept={handleAcceptTerms} />;
  }

  if (appState === AppState.GOOGLE_SEARCH) {
    return <GoogleSearch onSearch={handleExecuteSearch} onBack={handleBackToFB} />;
  }

  if (appState === AppState.GOOGLE_RESULTS) {
    return <GoogleResults 
      onBackToSearch={() => setAppState(AppState.GOOGLE_SEARCH)} 
      onToBlog={handleToBlog} 
    />;
  }

  if (appState === AppState.GOOGLE_BLOG) {
    return <GoogleBlog 
      onBackToSearch={() => setAppState(AppState.GOOGLE_RESULTS)} 
      onToFB={() => setAppState(AppState.LOGIN)} 
    />;
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      <Navbar onLogout={() => setAppState(AppState.LOGIN)} />
      
      <div className="flex flex-1 pt-[56px]">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-[360px] sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto px-2 bg-white text-black">
          <SidebarLeft />
        </div>

        {/* Main Feed - Centered */}
        <div className="flex-1 max-w-[100%] lg:max-w-[700px] mx-auto p-4">
          <Feed />
        </div>

        {/* Right Sidebar - Hidden on larger screens depending on space, or just hidden on mobile */}
        <div className="hidden xl:block w-[360px] sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto px-4 border-l border-gray-200 bg-white text-black">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default App;
