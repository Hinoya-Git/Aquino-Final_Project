const Skills = ({ isLightMode }: { isLightMode: boolean }) => {
  const skillList = [
    { name: "Cisco Networking", detail: "ACL, OSPF, Routing" },
    { name: "Tailwind CSS", detail: "Modern UI Architecture" },
    { name: "React JS", detail: "Component Logic" },
    { name: "Network Security", detail: "Threat Mitigation" },
    { name: "Troubleshooting", detail: "System Diagnostics" },
    { name: "Web Dev", detail: "Frontend Engineering" }
  ];

  return (
    <section className="animate-fade-in">
      <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-12 ${isLightMode ? 'text-blue-600' : 'text-blue-500'}`}>Technical Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillList.map((skill, index) => (
          <div 
            key={index} 
            className={`group border backdrop-blur-sm p-5 sm:p-6 rounded-2xl transition-all duration-[1500ms] hover:-translate-y-1 ${isLightMode ? 'bg-white/40 border-white/50 hover:border-blue-500/50' : 'bg-zinc-900/10 border-zinc-800 hover:border-cyan-500/50'}`}
          >
            <h3 className={`font-bold text-sm mb-1 transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-800' : 'text-cyan-200'}`}>{skill.name}</h3>
            <p className={`text-[10px] uppercase tracking-wider transition-colors duration-[1500ms] ${isLightMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{skill.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
