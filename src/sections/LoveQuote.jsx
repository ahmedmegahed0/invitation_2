import { motion } from 'framer-motion';
import FallingPetals from '../components/FallingPetals';

export default function LoveQuote() {
  return (
    <section className="relative w-full py-32 bg-ivory flex items-center justify-center px-4 overflow-hidden">
      <FallingPetals />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-champagne rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="text-6xl text-champagne font-cormorant leading-none opacity-50 block mb-4">"</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight italic">
            Every love story is beautiful, <br className="hidden md:block" />
            <span className="text-champagne">but ours is our favorite.</span>
          </h2>
          <div className="w-24 h-[1px] bg-champagne mx-auto mt-12"></div>
        </motion.div>
      </div>
    </section>
  );
}
