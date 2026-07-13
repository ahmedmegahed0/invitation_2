import { motion } from 'framer-motion';
import { Heart, Flower2, Sparkles } from 'lucide-react';

export default function FallingPetals() {
  const elements = ['petal', 'heart', 'flower', 'sparkle'];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => {
        const duration = Math.random() * 15 + 15; // 15s to 30s for slow floating
        const delay = Math.random() * -30; // Negative delay so they are already on screen
        const startX = Math.random() * 100;
        const type = elements[Math.floor(Math.random() * elements.length)];
        const scale = Math.random() * 0.6 + 0.4;
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <motion.div
            key={i}
            className="absolute top-[-5%] text-champagne flex items-center justify-center"
            initial={{
              x: `${startX}vw`,
              y: '-10vh',
              rotate: 0,
              scale: scale,
              opacity: opacity
            }}
            animate={{
              y: '110vh',
              x: `${startX + (Math.random() * 30 - 15)}vw`,
              rotate: 360,
              opacity: [opacity, opacity + 0.2, opacity]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          >
            {type === 'petal' && (
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-tl-full rounded-br-full bg-champagne/40 blur-[1px]"></div>
            )}
            {type === 'heart' && (
              <Heart className="w-4 h-4 text-pink-300/40" fill="currentColor" />
            )}
            {type === 'flower' && (
              <Flower2 className="w-5 h-5 text-champagne/40" />
            )}
            {type === 'sparkle' && (
              <Sparkles className="w-4 h-4 text-yellow-500/30" fill="currentColor" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
