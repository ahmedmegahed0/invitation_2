import { motion } from 'framer-motion';
import { useState } from 'react';
import FallingPetals from '../components/FallingPetals';

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }
    const subject = encodeURIComponent(`Wedding Wish from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}`);
    window.location.href = `mailto:ahmedmegahed580@gmail.com?subject=${subject}&body=${body}`;
    
    // Clear form
    setName('');
    setMessage('');
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <FallingPetals />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-gray-800 italic mb-4">Guest Book</h2>
          <p className="font-poppins text-gray-600 mb-12">Leave a wish for the happy couple</p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card rounded-xl p-8 relative shadow-2xl"
        >
          <div className="flex flex-col gap-6 text-left relative z-10">
            <div>
              <label className="font-poppins text-sm uppercase tracking-wider text-gray-700 block mb-2">Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/50 border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-champagne focus:bg-white transition-all font-poppins"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="font-poppins text-sm uppercase tracking-wider text-gray-700 block mb-2">Message</label>
              <textarea 
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-white/50 border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-champagne focus:bg-white transition-all font-poppins"
                placeholder="Your Wishes..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white font-poppins uppercase tracking-widest text-sm py-4 rounded-md hover:bg-champagne transition-colors"
            >
              Send Wish
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
