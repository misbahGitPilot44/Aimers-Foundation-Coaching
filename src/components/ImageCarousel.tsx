/**
 * A reusable carousel component for displaying images with navigation controls.
 * Uses Embla Carousel for smooth sliding and touch support.
 */
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselGalleryProps {
  images: string[];
}

const CarouselGallery: React.FC<CarouselGalleryProps> = ({ images }) => {
  // Initialize Embla Carousel with loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Navigation handlers
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-56 sm:h-72 md:h-[500px] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CarouselGallery;