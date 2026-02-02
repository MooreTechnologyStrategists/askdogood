import { useEffect, useState } from 'react';
import { Link } from 'wouter';

const foodImages = [
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/chickpea%20burgers.JPEG',
    alt: 'Chickpea Burgers',
    caption: 'Chickpea Burgers',
    link: '/recipe/chickpea-burgers'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/green-smoothie-avocado-oatmeal.JPG',
    alt: 'Green Smoothie with Avocado & Oatmeal',
    caption: 'Green Smoothie with Avocado & Oatmeal',
    link: '/recipe/green-smoothie-bowl'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/growingMintInGrowBags.JPEG',
    alt: 'Growing Fresh Mint in Grow Bags',
    caption: 'Growing Fresh Mint',
    link: '/recipe/growing-fresh-mint'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/homemade%20pizza.JPEG',
    alt: 'Homemade Pizza',
    caption: 'Homemade Pizza',
    link: '/recipe/homemade-pizza'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/jarSalad2.JPEG',
    alt: 'Mason Jar Salad',
    caption: 'Mason Jar Salad',
    link: '/recipe/mason-jar-salad'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/foods/jarSalads.JPEG',
    alt: 'Mason Jar Salads',
    caption: 'Mason Jar Salads',
    link: '/recipe/mason-jar-salad'
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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        {foodImages.map((image, index) => (
          <Link key={index} href={image.link}>
            <div
              className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer group ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl md:text-3xl font-bold drop-shadow-lg mb-2">
                  {image.caption}
                </p>
                <p className="text-sm md:text-base text-white/90 drop-shadow-lg group-hover:text-primary transition-colors">
                  Click to view recipe →
                </p>
              </div>
            </div>
          </Link>
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
