import { motion } from 'framer-motion';

const frames = [
  { id: 1, img: '/rings.png', title: 'Luxury Wedding Rings' },
  { id: 2, img: '/bouquet.png', title: 'Elegant Bouquet' },
  { id: 3, img: '/hero.png', title: 'Bride & Groom Portrait' },
  { id: 4, img: '/hall.png', title: 'Wedding Hall' },
  { id: 5, img: '/rings.png', title: 'First Dance' },
  { id: 6, img: '/bouquet.png', title: 'Wedding Cake' },
  { id: 7, img: '/hall.png', title: 'Celebration' },
  { id: 8, img: '/hero.png', title: 'Ali & Nourhan - 17 July 2026' }
];

// Duplicate frames for seamless infinite scrolling
const duplicatedFrames = [...frames, ...frames];

export default function MemoryFilm() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col justify-center">
      {/* Top Cinematic Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black z-30 flex items-center justify-between px-8 text-white/20 font-mono text-xs">
        <span>FILM 500T</span>
        <span>4309 82</span>
      </div>

      <div className="flex w-max">
        <motion.div 
          className="flex gap-4 md:gap-16 px-4 md:px-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 // Adjust speed here
          }}
        >
          {duplicatedFrames.map((frame, index) => (
            <div 
              key={`${frame.id}-${index}`} 
              className="relative w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[60vh] shrink-0 border-[16px] border-black shadow-2xl rounded-sm overflow-hidden group"
              style={{
                boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)'
              }}
            >
              {/* Film Grain Effect over image */}
              <div className="absolute inset-0 z-10 grain-overlay mix-blend-overlay opacity-30"></div>
              
              <img 
                src={frame.img} 
                alt={frame.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter sepia-[0.2] brightness-90"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>

              {/* Text Reveal */}
              <div className="absolute bottom-8 left-8 right-8 z-20 overflow-hidden">
                <motion.h3 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-white font-cinzel text-xl md:text-2xl text-glow"
                >
                  {frame.title}
                </motion.h3>
                <div className="w-12 h-1 bg-champagne mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Cinematic Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-30 flex items-center justify-between px-8 text-white/20 font-mono text-xs">
        <span>A&N</span>
        <span>SCENE 84</span>
      </div>
    </section>
  );
}
