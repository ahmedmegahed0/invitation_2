import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img 
          src="/hero.png" 
          alt="Luxury Wedding Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Cinematic Vignette - Darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </motion.div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 z-10 grain-overlay"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center drop-shadow-2xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-poppins tracking-[0.2em] text-sm md:text-base uppercase text-champagne mb-4"
        >
          Together with their families
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="font-cinzel text-5xl md:text-6xl lg:text-8xl text-glow mb-6 flex items-center justify-center flex-wrap gap-2 md:gap-4"
        >
          <span>Ali</span>
          <span className="text-champagne font-light text-4xl md:text-6xl lg:text-7xl">|</span>
          <span>Nourhan</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-cormorant text-xl md:text-2xl italic font-light mb-8 max-w-lg"
        >
          request the pleasure of your company to celebrate their wedding
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="font-poppins uppercase tracking-widest text-sm md:text-base">Friday</p>
          <p className="font-cinzel text-3xl md:text-4xl text-champagne mb-2">17 July 2026</p>
          <p className="font-poppins uppercase tracking-[0.2em] text-xs md:text-sm text-white/80">Al Qasr, Ashmoun</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-poppins text-xs uppercase tracking-widest text-white/70">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-champagne to-transparent"></div>
      </motion.div>
    </section>
  );
}
