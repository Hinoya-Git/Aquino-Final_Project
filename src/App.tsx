import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div 
      className={`relative min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden bg-fixed bg-cover bg-center transition-all duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-zinc-400'}`}
      style={{ backgroundImage: isLightMode ? `url("${import.meta.env.BASE_URL}light-background.jpg")` : `url("${import.meta.env.BASE_URL}background.jpg")` }}
    >
      {/* Dark/Light Overlay for Readability */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-[1500ms] ${isLightMode ? 'bg-white/60' : 'bg-slate-950/30'}`}></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header section - Frosted Glass */}
        <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-[1500ms] ${isLightMode ? 'border-white/40 bg-white/40' : 'border-white/10 bg-slate-950/10'}`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${isLightMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
              <h1 className={`text-sm font-bold tracking-widest uppercase transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>Ian // NetSec</h1>
            </div>
            <nav className={`text-xs font-medium uppercase tracking-widest transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              <span className={`cursor-pointer transition-colors ${isLightMode ? 'hover:text-zinc-900' : 'hover:text-white'}`}>Portfolio 2026</span>
            </nav>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 md:py-20">
          {/* Frosted Glass Container */}
          <div className={`backdrop-blur-md rounded-3xl border shadow-2xl p-5 sm:p-8 md:p-16 space-y-20 md:space-y-32 transition-colors duration-[1500ms] ${isLightMode ? 'bg-white/30 border-white/40' : 'bg-slate-900/10 border-white/10'}`}>
            <AboutMe isLightMode={isLightMode} />
            <Education isLightMode={isLightMode} />
            <Experience isLightMode={isLightMode} />
            <Skills isLightMode={isLightMode} />
            <Contact isLightMode={isLightMode} />
          </div>
        </main>

        {/* Footer */}
        <footer className={`border-t backdrop-blur-md py-12 text-center text-[10px] uppercase tracking-[0.3em] transition-colors duration-[1500ms] ${isLightMode ? 'border-white/40 bg-white/40 text-zinc-600' : 'border-white/10 bg-slate-950/10 text-zinc-500'}`}>
          <p>&copy; {new Date().getFullYear()} Ian Charles. All systems operational.</p>
        </footer>
      </div>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsLightMode(!isLightMode)}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 z-50 ${isLightMode ? 'bg-white/80 text-zinc-800 border border-zinc-200' : 'bg-zinc-900/80 text-cyan-200 border border-zinc-800'}`}
      >
        {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
}

export default App;
