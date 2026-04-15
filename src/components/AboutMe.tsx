const AboutMe = ({ isLightMode }: { isLightMode: boolean }) => {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center space-x-3 mb-6">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLightMode ? 'bg-blue-500' : 'bg-blue-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isLightMode ? 'bg-blue-600' : 'bg-blue-500'}`}></span>
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isLightMode ? 'text-blue-600' : 'text-blue-500'}`}>Status: Online</span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-cyan-200'}`}>
            Ian Charles M. Aquino <span className={isLightMode ? 'text-zinc-500' : 'text-zinc-500'}>/ Network Security</span>
          </h2>
          
          <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-700' : 'text-zinc-400'}`}>
            IT student at the University of the Cordilleras. Specialized in managing complex network infrastructures 
            and implementing robust security protocols. Bridging the gap between secure architecture and 
            performant web interfaces.
          </p>
        </div>
        
        <div className="w-48 sm:w-64 md:w-72 shrink-0 group mx-auto md:mx-0">
          <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden border shadow-2xl transition-all duration-[1500ms] group-hover:-translate-y-2 ${isLightMode ? 'border-white/50 bg-white/50 group-hover:border-blue-500/50' : 'border-zinc-800 bg-zinc-900/50 group-hover:border-blue-500/50'}`}>
            {/* Profile Picture */}
             <img 
               src="./profile.jpg" 
               alt="Ian Charles M. Aquino" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
               // Keep this just in case, but hopefully we won't need it!
               e.currentTarget.src = "https://images.unsplash.com/photo-1506869640319-fe1a24fd06dc?auto=format&fit=crop&q=80&w=400&h=533";
               }}
             />
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] pointer-events-none"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
