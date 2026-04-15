const Education = ({ isLightMode }: { isLightMode: boolean }) => {
  return (
    <section className="animate-fade-in">
      <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-12 ${isLightMode ? 'text-blue-600' : 'text-blue-500'}`}>Education</h2>
      <div className={`group border backdrop-blur-sm p-5 sm:p-8 rounded-2xl transition-all duration-[1500ms] hover:-translate-y-1 ${isLightMode ? 'bg-white/40 border-white/50 hover:border-blue-500/50' : 'bg-zinc-900/10 border-zinc-800 hover:border-cyan-500/50'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-cyan-200'}`}>University of the Cordilleras</h3>
            <p className={`transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-600' : 'text-zinc-400'}`}>Bachelor of Science in Information Technology</p>
            <p className={`text-sm font-medium mt-1 ${isLightMode ? 'text-blue-600' : 'text-blue-500/80'}`}>Major in Network Security</p>
          </div>
          <div className={`text-sm font-mono transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            EST. 2024 — PRESENT
          </div>
        </div>
        <p className={`mt-6 leading-relaxed max-w-2xl transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-600' : 'text-zinc-500'}`}>
          Focused on cybersecurity, network administration, and systems analysis. 
          Maintaining high standards in technical implementation and theoretical security frameworks.
        </p>
      </div>
    </section>
  );
};

export default Education;
