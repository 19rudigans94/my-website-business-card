import { useParallax } from './useParallax';
import { ParallaxLayer } from './ParallaxLayer';

export const ParallaxBackground = () => {
  const offset = useParallax();

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Основной фоновый слой */}
      <ParallaxLayer
        speed={0.5}
        offset={offset}
        imageUrl="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d"
        className="scale-110" // Увеличиваем размер фона
      />

      {/* Слой затемнения */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/75 to-gray-900/60" />

      {/* Слой размытия */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
};