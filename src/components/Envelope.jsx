import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2500); // slightly longer to let paper slide out completely
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-champagne opacity-10 blur-[100px] rounded-full scale-150 pointer-events-none"></div>
      
      {/* Soft Particles Simulation (simple CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-champagne rounded-full blur-[1px]"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * 100 + "vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative w-[340px] md:w-[420px] h-[220px] md:h-[280px] cursor-pointer perspective-[1000px] z-10"
        onClick={handleOpen}
        initial={{ y: 20, opacity: 0 }}
        animate={isOpen ? { scale: 1.1, opacity: 0, y: -50 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Floating animation wrapper before opening */}
        <motion.div 
          className="w-full h-full relative"
          animate={!isOpen ? { y: [-5, 5, -5] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Back of Envelope */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4c1a0] to-[#b39b72] shadow-2xl rounded-sm border border-[#e5d3b3]/30"></div>

          {/* Paper inside (sliding out) */}
          <motion.div 
            className="absolute top-2 left-2 right-2 bottom-2 bg-white/95 shadow-inner flex items-center justify-center border border-gray-100 z-10"
            initial={{ y: 0, opacity: 0 }}
            animate={isOpen ? { y: -120, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center p-6 border border-champagne/20 m-2 w-full h-full flex flex-col items-center justify-center bg-ivory/50">
              <h2 className="font-cormorant text-2xl md:text-3xl text-gray-800 italic">You're Invited</h2>
              <div className="w-12 h-[1px] bg-champagne my-3"></div>
              <p className="font-cinzel text-sm md:text-base text-gray-700">Ali & Norhan</p>
              <p className="font-poppins text-xs text-gray-500 mt-2 tracking-widest">17 July 2026</p>
            </div>
          </motion.div>

          {/* Envelope Bottom Flap */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none drop-shadow-xl"
            style={{
              clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 55%)',
              background: 'linear-gradient(to top, #E5D3B3 0%, #c4a97f 100%)'
            }}
          >
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
          </div>

          {/* Envelope Top Flap (Opens) */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[60%] origin-top z-30 drop-shadow-2xl"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
            }}
            animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#E5D3B3] to-[#d4c1a0]">
               <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* 3D Wax Seal */}
          <motion.div 
            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-40 drop-shadow-2xl"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #a82e2e 0%, #7f1818 60%, #4a0c0c 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.5)'
            }}
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-1 rounded-full border border-red-900/50 flex items-center justify-center">
              <span className="text-champagne font-cinzel text-xl text-shadow-sm opacity-90" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.5)' }}>A&N</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tap to open text */}
      <motion.div
        className="absolute bottom-20 font-poppins text-sm uppercase tracking-[0.3em] text-champagne/80 z-10 pointer-events-none"
        animate={isOpen ? { opacity: 0 } : { opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Tap to Open
      </motion.div>
    </div>
  );
}
