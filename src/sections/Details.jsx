import { motion } from 'framer-motion';
import { CalendarHeart, MapPin, Heart } from 'lucide-react';

export default function Details() {
  return (
    <section className="relative py-24 bg-beige overflow-hidden">
      {/* Background image subtle overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/hall.png" alt="Hall Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-card rounded-xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Subtle gradient inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20"></div>

          <div className="relative z-20 text-center">
            <h2 className="font-cinzel text-3xl md:text-5xl text-gray-800 mb-12">The Wedding</h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-center justify-center">
              {/* Bride & Groom */}
              <div className="flex flex-col items-center">
                <Heart className="w-8 h-8 text-champagne mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-gray-800">Bride & Groom</h3>
                <p className="font-poppins text-gray-600 mt-2">Nourhan <br/> & <br/> Ali</p>
              </div>

              {/* Date */}
              <div className="flex flex-col items-center">
                <CalendarHeart className="w-8 h-8 text-champagne mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-gray-800">When</h3>
                <p className="font-poppins text-gray-600 mt-2">Friday<br/>17 July 2026<br/>9:00 PM</p>
              </div>

              {/* Venue */}
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-champagne mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-gray-800">Where</h3>
                <p className="font-poppins text-gray-600 mt-2">القصر Hall<br/>Ashmoun<br/>Egypt</p>
                <a 
                  href="https://maps.app.goo.gl/nVx9PfJvHZ11pxcY8?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-poppins uppercase tracking-widest text-champagne hover:text-yellow-600 border-b border-champagne/50 hover:border-yellow-600 pb-1 transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
