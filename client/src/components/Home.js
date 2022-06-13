import React from 'react';
// import HeroSection from './HeroSection';
// import { homeObjOne } from './pages/HomePage/Data';
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Hero from './pages/Hero/Hero'
import Hero2 from './pages/Hero/Hero2'
import Pricing from './pages/Pricing/Pricing';
import Gallery from './pages/Gallery/Gallery'
import Location from './pages/Location/Location'
import Contact from './pages/Contact/Contact'
import MyCarousel from './pages/Carousel/MyCarousel'

function Home() {
  return (
    <>
      <MyCarousel />
      {/* <ModalForm /> */}
      <Hero />
      <Services />
      <Hero2 />
      <About />
      <Pricing />
      <Gallery />
      <Location />
      <Contact />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} /> */}
      {/* <HeroSection {...homeObjTwo} /> */}
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
