import { motion } from 'framer-motion';
import { Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white/70 py-12 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-champagne mb-4"></div>
          
          <h3 className="font-cinzel text-xl md:text-2xl text-champagne mb-2">Create Your Dream Invitation</h3>
          <p className="font-poppins text-sm md:text-base max-w-lg leading-relaxed mb-6">
            If you want to craft a luxury cinematic invitation just like this for your special day, feel free to reach out.
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-8">
            <a 
              href="https://www.instagram.com/ahmedmegahed_.1/?next=%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-champagne transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-champagne transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="font-poppins text-sm tracking-widest uppercase">@ahmedmegahed_.1</span>
            </a>

            <a 
              href="tel:01067688524" 
              className="flex items-center gap-3 hover:text-champagne transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-champagne transition-colors">
                <Phone size={18} />
              </div>
              <span className="font-poppins text-sm tracking-widest uppercase">0106 768 8524</span>
            </a>
          </div>

          <p className="font-poppins text-xs tracking-[0.2em] uppercase text-white/40 flex items-center gap-2 mt-4">
            Designed & Developed with <Heart size={12} className="text-red-500" /> by
          </p>
          <p className="font-cinzel text-lg text-white mt-1">Ahmed Megahed</p>

        </motion.div>
      </div>

      {/* Cinematic subtle gradient in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-champagne/5 blur-[100px] pointer-events-none"></div>
    </footer>
  );
}
