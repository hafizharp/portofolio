import React, { useState } from 'react';

interface ImageCarouselProps {
  images?: string[];
  image?: string;
  alt?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, image, alt = 'Photo' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize images list from either images array or single image string
  const imageList: string[] = React.useMemo(() => {
    if (images && images.length > 0) return images;
    if (image) return [image];
    return [];
  }, [images, image]);

  if (imageList.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const activeImage = imageList[currentIndex];

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-highest/60 border border-outline-variant/30 shadow-md transition-all duration-300">
      {/* Flexible aspect-ratio container */}
      <div className="relative w-full max-h-[380px] md:max-h-[440px] min-h-[200px] flex items-center justify-center overflow-hidden bg-neutral-900/10 dark:bg-neutral-950/40">
        {/* Clean subtle ambient backdrop without expensive blur filter */}
        <div className="absolute inset-0 bg-radial from-primary/10 via-surface-container/30 to-surface-container-highest/50 pointer-events-none" />

        {/* Main Displayed Image */}
        <img
          key={activeImage}
          src={activeImage}
          alt={`${alt} ${imageList.length > 1 ? `(${currentIndex + 1} of ${imageList.length})` : ''}`}
          className="relative z-10 max-h-[380px] md:max-h-[440px] w-auto max-w-full object-contain mx-auto animate-[fadeIn_0.25s_ease-out] shadow-sm"
          loading="lazy"
        />
      </div>

      {/* Slide controls shown when multiple images exist */}
      {imageList.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-surface/90 dark:bg-surface-container-high/90 text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-200 cursor-pointer shadow-md focus:outline-none hover:scale-110 active:scale-95"
            aria-label="Previous photo"
          >
            <span className="material-symbols-outlined text-lg flex items-center justify-center">chevron_left</span>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-surface/90 dark:bg-surface-container-high/90 text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-200 cursor-pointer shadow-md focus:outline-none hover:scale-110 active:scale-95"
            aria-label="Next photo"
          >
            <span className="material-symbols-outlined text-lg flex items-center justify-center">chevron_right</span>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-inverse-surface/80 shadow-md">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-5 bg-primary' : 'w-2 bg-on-inverse-surface/40 hover:bg-on-inverse-surface/70'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>

          {/* Counter Badge */}
          <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-inverse-surface/85 text-on-inverse-surface text-xs font-mono font-semibold shadow-md">
            {currentIndex + 1} / {imageList.length}
          </div>
        </>
      )}
    </div>
  );
};
