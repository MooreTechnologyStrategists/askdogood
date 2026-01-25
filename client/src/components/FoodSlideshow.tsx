import { useEffect, useState } from 'react';

const foodImages = [
  {
    src: '/images/personal/food/smoothie-green-goddess.jpg',
    alt: 'Green Goddess Thyroid Smoothie',
    caption: ''
  },
  {
    src: '/images/personal/food/smoothie-purple.jpg',
    alt: 'Purple Berry Power Smoothie',
    caption: ''
  },
  {
    src: '/images/personal/food/burgers-plated.jpg',
    alt: 'Black Bean & Quinoa Power Burgers',
    caption: ''
  },
  {
    src: '/images/personal/food/vegetables-roasted.jpg',
    alt: 'Roasted vegetables with anti-inflammatory spices',
    caption: ''
  },
  {
    src: '/images/personal/food/meal-complete.jpg',
    alt: 'Complete thyroid-friendly balanced meal',
    caption: ''
  },
  {
    src: '/images/personal/food/veggies-bowl.jpg',
    alt: 'Colorful veggie bowl with healing ingredients',
    caption: ''
  }
];

export default function FoodSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
        {foodImages.map((image, index) => (
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
        {foodImages.map((_, index) => (
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
