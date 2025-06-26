"use client";
import { useEffect, useRef } from 'react';

const LottieAnimation = ({ 
  animationData, 
  loop = true, 
  autoplay = true, 
  width = '100%', 
  height = '100%',
  className = '' 
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!animationData || !containerRef.current) return;

    // Importar lottie-web dinámicamente
    const loadLottie = async () => {
      try {
        const lottie = (await import('lottie-web')).default;
        
        // Limpiar animación anterior si existe
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // Crear nueva animación
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: loop,
          autoplay: autoplay,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: true,
            progressiveLoad: true
          }
        });

        // Manejar errores de la animación
        animationRef.current.addEventListener('error', (error) => {
          console.warn('Lottie animation error:', error);
        });

      } catch (error) {
        console.error('Error loading lottie-web:', error);
      }
    };

    loadLottie();

    // Cleanup
    return () => {
      if (animationRef.current) {
        try {
          animationRef.current.destroy();
          animationRef.current = null;
        } catch (error) {
          console.warn('Error destroying lottie animation:', error);
        }
      }
    };
  }, [animationData, loop, autoplay]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: '100%'
      }}
    />
  );
};

export default LottieAnimation;