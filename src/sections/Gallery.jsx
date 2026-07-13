import { motion } from 'framer-motion';
import FallingPetals from '../components/FallingPetals';

const images = [
  { id: 1, src: '/rings.png', className: 'col-span-2 row-span-2' },
  { id: 2, src: '/bouquet.png', className: 'col-span-1 row-span-1' },
  { id: 3, src: '/hall.png', className: 'col-span-1 row-span-2' },
  { id: 4, src: '/hero.png', className: 'col-span-1 row-span-1' },
  { id: 5, src: '/bouquet.png', className: 'col-span-2 row-span-1' },
  { id: 6, src: '/rings.png', className: 'col-span-1 row-span-1' }
];

export default function Gallery() {
  return (
    <section className="relative py-24 bg-white px-4 md:px-8 overflow-hidden">
      <FallingPetals />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl text-gray-800 mb-4">Captured Moments</h2>
          <div className="w-16 h-[1px] bg-champagne mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt="Wedding Gallery" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
