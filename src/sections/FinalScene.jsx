import { motion } from 'framer-motion';

export default function FinalScene() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Ending Background" 
          className="w-full h-full object-cover opacity-40 filter sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Floating flower petals simulation using simple CSS/Framer Motion */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/30 rounded-full blur-[2px]"
            initial={{
              x: Math.random() * 100 + "vw",
              y: -20,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: "110vh",
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="font-cormorant text-5xl md:text-7xl text-white italic mb-6">Thank You</h2>
          <p className="font-poppins text-white/80 tracking-widest uppercase text-sm md:text-base mb-12">
            We Can't Wait To Celebrate With You
          </p>
          <div className="font-cinzel text-3xl md:text-5xl text-champagne text-glow">
            Ali & Norhan
          </div>
        </motion.div>
      </div>
    </section>
  );
}
