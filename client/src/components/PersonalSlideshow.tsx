const personalImages = [
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/zays40th.jpeg',
    alt: 'Before finding peace — early season of rebuilding'
  },
  {
    src: 'https://photos.google.com/photo/AF1QipN7wRX1MXUeaoFKWtakJgGqk7xUh4CRJeCLo1mo',
    alt: 'During the rebuild — learning to slow down and heal'
  },
  {
    src: 'https://photos.google.com/photo/AF1QipMcpNmmdGNymFhkzevg2Q_0Lm7a3UyYmMlyWY_-',
    alt: 'After finding peace — a steadier, lighter chapter'
  },
  {
    src: 'https://photos.google.com/photo/AF1QipMUou_cixQkcJuEwVHRr8oBUvZl6DrRtqOl-4y1',
    alt: 'New beginnings — grounded, grateful, and growing'
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
