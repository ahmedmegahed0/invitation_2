import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Envelope from './components/Envelope';
import AudioPlayer from './components/AudioPlayer';
import Hero from './sections/Hero';
import LoveQuote from './sections/LoveQuote';
import MemoryFilm from './sections/MemoryFilm';
import Gallery from './sections/Gallery';
import Details from './sections/Details';
import Countdown from './sections/Countdown';
import FinalScene from './sections/FinalScene';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setIsPlaying(true);
  };

  return (
    <div className="bg-ivory min-h-screen text-gray-900 overflow-x-hidden selection:bg-champagne selection:text-white">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && !hasEntered && (
        <Envelope onOpen={handleEnter} />
      )}

      {!isLoading && hasEntered && (
        <>
          <AudioPlayer isPlaying={isPlaying} />
          <Hero />
          <LoveQuote />
          <MemoryFilm />
          <Gallery />
          <Details />
          <Countdown />
          <FinalScene />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
