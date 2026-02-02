const personalImages = [
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/Zay-and-KRock.jpg',
    alt: 'Navigating heartbreak, stress, and relationship challenges'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/MGMCurlsAndTits.JPG',
    alt: 'Finding confidence while managing thyroid, GERD, and IBS'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/NCAT1997ZAYWallabees.jpeg',
    alt: 'Young, navigating heredity hearing loss and self-discovery'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/sillyPoseNYC.jpg',
    alt: 'Learning joy despite high blood pressure and chronic stress'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/skiinnyBrownDressZay.jpg',
    alt: 'After finding peace — grounded, grateful, and growing'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/zays40th.jpeg',
    alt: 'New beginnings — thriving through it all'
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
