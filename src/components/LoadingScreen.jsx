import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Background Image with blur and Ken Burns */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <img 
          src="/hero.png" 
          alt="Loading Background" 
          className="w-full h-full object-cover opacity-30 filter blur-md sepia-[0.2]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80"></div>
      </motion.div>

      {/* Elegant Spinner */}
      <div className="relative z-10 flex flex-col items-center drop-shadow-2xl">
        <motion.div 
          className="relative w-32 h-32 flex items-center justify-center mb-10"
        >
          {/* Outer rotating rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border-[1px] border-champagne/20 border-t-champagne"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-2 rounded-full border-[1px] border-champagne/10 border-b-champagne"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-[-8px] rounded-full border-[1px] border-white/5 border-l-white/20"
            animate={{ rotate: 180 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner pulsating monogram */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-cinzel text-3xl text-champagne text-glow"
          >
            A&N
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cinzel text-4xl md:text-5xl text-white tracking-[0.1em] mb-6"
        >
          Ali <span className="text-champagne font-sans mx-2">♥</span> Norhan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="font-poppins text-xs md:text-sm uppercase tracking-[0.4em] text-champagne/80">
            Unveiling Memories
          </p>
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-champagne"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
