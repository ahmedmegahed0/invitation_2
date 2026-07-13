import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FallingPetals from '../components/FallingPetals';

export default function Countdown() {
  const targetDate = new Date('2026-07-17T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCelebration, setIsCelebration] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCelebration(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6">
      <div className="w-16 h-20 md:w-24 md:h-32 glass-card rounded-lg flex items-center justify-center bg-white/20 border border-white/50 backdrop-blur-lg mb-2 relative overflow-hidden">
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent"></div>
        <span className="font-cinzel text-3xl md:text-5xl text-gray-800">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="font-poppins text-xs md:text-sm uppercase tracking-widest text-gray-600">{label}</span>
    </div>
  );

  return (
    <section className="relative py-24 bg-ivory flex items-center justify-center overflow-hidden">
      <FallingPetals />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cormorant text-4xl md:text-5xl text-gray-800 italic mb-12"
        >
          Counting Down The Days
        </motion.h2>

        {isCelebration ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl text-champagne font-cinzel text-glow"
          >
            Today Is Our Special Day ❤️
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center"
          >
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
