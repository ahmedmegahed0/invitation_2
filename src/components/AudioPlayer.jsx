import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import song from '../assets/song.mp3';

export default function AudioPlayer({ isPlaying }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  return (
    <>
      <audio 
        ref={audioRef} 
        src={song} 
        loop 
        preload="auto"
      />
      
      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsMuted(!isMuted)}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-champagne border border-white/40 shadow-lg hover:bg-white/50 transition-colors"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      )}
    </>
  );
}
