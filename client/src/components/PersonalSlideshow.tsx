const personalImages = [
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/Zay-and-KRock.jpg',
    alt: 'Partnership & Love',
    title: 'Finding Love After Loss'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/MGMCurlsAndTits.JPG',
    alt: 'Body Confidence & Self-Acceptance',
    title: 'Loving My Body Through Chronic Illness'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/NCAT1997ZAYWallabees.jpeg',
    alt: 'College Days & Identity',
    title: 'HBCU Pride & Finding My Voice'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/sillyPoseNYC.jpg',
    alt: 'Joy & Resilience',
    title: 'Choosing Joy Despite the Struggle'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/skiinnyBrownDressZay.jpg',
    alt: 'Transformation & Growth',
    title: 'My Healing Journey: Before & After'
  },
  {
    src: 'https://askdogoodassets.blob.core.windows.net/images/zays40th.jpeg',
    alt: 'Milestone & Celebration',
    title: 'Turning 40: Thriving Not Just Surviving'
  }
];

export default function PersonalSlideshow() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex flex-row gap-6 justify-center flex-wrap">
        {personalImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            <p className="text-sm font-semibold text-center text-foreground max-w-[140px]">
              {image.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
