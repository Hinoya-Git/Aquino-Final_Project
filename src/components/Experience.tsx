const Experience = ({ isLightMode }: { isLightMode: boolean }) => {
  return (
    <section className="animate-fade-in">
      <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-12 ${isLightMode ? 'text-blue-600' : 'text-blue-500'}`}>Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`group border backdrop-blur-sm p-5 sm:p-8 rounded-2xl transition-all duration-[1500ms] hover:-translate-y-1 ${isLightMode ? 'bg-white/40 border-white/50 hover:border-blue-500/50' : 'bg-zinc-900/10 border-zinc-800 hover:border-cyan-500/50'}`}>
          <div className="flex items-center space-x-2 mb-4">
            <div className={`w-1.5 h-1.5 rounded-full ${isLightMode ? 'bg-blue-600' : 'bg-cyan-400'}`}></div>
            <h3 className={`text-lg font-bold transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-cyan-200'}`}>Cisco Packet Tracer Labs</h3>
          </div>
          <p className={`text-sm leading-relaxed transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-600' : 'text-zinc-500'}`}>
            Completed advanced networking simulations. Configured routers and switches, 
            implemented ACLs for security, and optimized OSPF routing protocols for 
            enterprise-level network efficiency.
          </p>
        </div>
        
        <div className={`group border backdrop-blur-sm p-5 sm:p-8 rounded-2xl transition-all duration-[1500ms] hover:-translate-y-1 ${isLightMode ? 'bg-white/40 border-white/50 hover:border-blue-500/50' : 'bg-zinc-900/10 border-zinc-800 hover:border-cyan-500/50'}`}>
          <div className="flex items-center space-x-2 mb-4">
            <div className={`w-1.5 h-1.5 rounded-full ${isLightMode ? 'bg-blue-600' : 'bg-cyan-400'}`}></div>
            <h3 className={`text-lg font-bold transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-cyan-200'}`}>Portfolio Architecture</h3>
          </div>
          <p className={`text-sm leading-relaxed transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-600' : 'text-zinc-500'}`}>
            Architected a high-performance portfolio using React and Tailwind CSS. 
            Focused on clean component architecture, responsive design, and 
            optimized user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
