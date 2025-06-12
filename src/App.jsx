import { useEffect, useRef, useState } from 'react';

// Importando componentes
import Header from './components/Header';
import Hero from './components/Hero';
import RelationshipDate from './components/RelationshipDate';
import Us from './components/Us';
import Gallery from './components/Gallery';
import LoveSection from './components/LoveSection';
import Musics from './components/Musics';
import LoveLetter from './components/LoveLetter';
import Footer from './components/Footer';

import './index.css';


// Hook para animação ao rolar
const useScrollVisible = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

function App() {
  // Criando refs e visibilidades para cada seção
  const [heroRef, heroVisible] = useScrollVisible();
  const [relationshipRef, relationshipVisible] = useScrollVisible();
  const [usRef, usVisible] = useScrollVisible();
  const [galleryRef, galleryVisible] = useScrollVisible();
  const [MusicsRef, MusicsVisible] = useScrollVisible();
  const [LoveRef, LoveVisible] = useScrollVisible();

  // Retornando os componentes com as refs e visibilidades
  return (
    <>
      <Header />

      <Hero scrollRef={heroRef} isVisible={heroVisible} />
      <RelationshipDate scrollRef={relationshipRef} isVisible={relationshipVisible} />
      <Us scrollRef={usRef} isVisible={usVisible} />  
      <Gallery scrollRef={galleryRef} isVisible={galleryVisible} />
      <LoveSection />
      <Musics scrollRef={MusicsRef} isVisible={MusicsVisible}/>
      <LoveLetter scrollRef={LoveRef} isVisible={LoveVisible} />

      <Footer />
    </>
  );
}

export default App;
