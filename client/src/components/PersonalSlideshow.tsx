const personalImages = [
  {
    src: '/images/personal/food/muhammad-dishes-1.jpg',
    alt: 'RoSeé Muhammad preparing healthy meals'
  },
  {
    src: '/images/personal/food/muhammad-dishes-2.jpg',
    alt: 'RoSeé with fresh prepared meals'
  },
  {
    src: '/images/personal/food/muhammad-dishes-3.jpg',
    alt: 'RoSeé Muhammad cooking nutritious dishes'
  },
  {
    src: '/images/personal/food/muhammad-dishes-4.jpg',
    alt: 'RoSeé showing healthy meal preparation'
  }
];

export default function PersonalSlideshow() {
  return (
    <div className="flex flex-row gap-6 max-w-5xl mx-auto justify-center">
      {personalImages.map((image, index) => (
        <div key={index} className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"></div>
          <img
            src={image.src}
            alt={image.alt}
            className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  );
}
