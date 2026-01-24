import { useEffect, useState } from 'react';

const personalImages = [
  {
    src: '/images/personal/food/muhammad-dishes-1.jpg',
    alt: 'RoSeé Muhammad preparing healthy thyroid meals',
    caption: 'Healing in the Kitchen'
  },
  {
    src: '/images/personal/food/muhammad-dishes-2.jpg',
    alt: 'RoSeé with fresh prepared meals',
    caption: 'Real Food, Real Healing'
  },
  {
    src: '/images/personal/food/muhammad-dishes-3.jpg',
    alt: 'RoSeé Muhammad cooking nutritious dishes',
    caption: 'Made with Love'
  },
  {
    src: '/images/personal/food/muhammad-dishes-4.jpg',
    alt: 'RoSeé showing healthy meal preparation',
    caption: 'Your Thyroid Chef'
  }
];

export default function PersonalSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % personalImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
        {personalImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl md:text-2xl font-bold drop-shadow-lg">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {personalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
