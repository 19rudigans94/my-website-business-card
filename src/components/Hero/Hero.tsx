import { ParallaxBackground } from '../ParallaxBackground/ParallaxBackground';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <ParallaxBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};