import React, { useState } from 'react';

const Contact = ({ isLightMode }: { isLightMode: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Message transmitted successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="animate-fade-in">
      <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-12 ${isLightMode ? 'text-blue-600' : 'text-blue-500'}`}>Secure Communication</h2>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-4 backdrop-blur-sm border rounded-xl focus:outline-none transition-all duration-[1500ms] text-sm ${isLightMode ? 'bg-white/50 border-white/50 focus:border-blue-500/50 text-zinc-800 placeholder-zinc-400' : 'bg-zinc-900/10 border-zinc-800 focus:border-cyan-500/50 text-cyan-200 placeholder-zinc-500'}`}
            placeholder="NAME"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-4 backdrop-blur-sm border rounded-xl focus:outline-none transition-all duration-[1500ms] text-sm ${isLightMode ? 'bg-white/50 border-white/50 focus:border-blue-500/50 text-zinc-800 placeholder-zinc-400' : 'bg-zinc-900/10 border-zinc-800 focus:border-cyan-500/50 text-cyan-200 placeholder-zinc-500'}`}
            placeholder="EMAIL"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full p-4 backdrop-blur-sm border rounded-xl focus:outline-none transition-all duration-[1500ms] text-sm ${isLightMode ? 'bg-white/50 border-white/50 focus:border-blue-500/50 text-zinc-800 placeholder-zinc-400' : 'bg-zinc-900/10 border-zinc-800 focus:border-cyan-500/50 text-cyan-200 placeholder-zinc-500'}`}
          placeholder="MESSAGE"
        ></textarea>
        <button
          type="submit"
          className={`w-full px-8 py-4 rounded-xl font-bold transition-all duration-[1500ms] text-xs uppercase tracking-widest active:scale-[0.98] ${isLightMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-cyan-200 text-black hover:bg-cyan-100'}`}
        >
          Send Transmission
        </button>
        {status && (
          <p className={`mt-4 text-[10px] font-bold uppercase tracking-widest text-center ${status.includes('successfully') ? (isLightMode ? 'text-blue-600' : 'text-blue-500') : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
