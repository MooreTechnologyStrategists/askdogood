const personalImages = [
  {
    src: "/images/personal/rosee-hero-1.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/Zay-and-KRock.jpg",
    alt: "RoSeé Murphy outdoors in nature",
    title: "Grounded in nature"
  },
  {
    src: "/images/personal/rosee-hero-2.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/MGMCurlsAndTits.JPG",
    alt: "RoSeé Murphy in motion and on mission",
    title: "On the move"
  },
  {
    src: "/images/personal/rosee-hero-3.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/NCAT1997ZAYWallabees.jpeg",
    alt: "RoSeé Murphy in a bold everyday look",
    title: "Everyday confidence"
  },
  {
    src: "/images/personal/rosee-hero-4.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/sillyPoseNYC.jpg",
    alt: "RoSeé Murphy in a bright red top",
    title: "Healing with style"
  },
  {
    src: "/images/personal/rosee-hero-5.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/skiinnyBrownDressZay.jpg",
    alt: "RoSeé Murphy with family and community",
    title: "Community first"
  },
  {
    src: "/images/personal/rosee-hero-6.jpg",
    fallback: "https://askdogoodassets.blob.core.windows.net/images/zays40th.jpeg",
    alt: "RoSeé Murphy in a cap and relaxed fit",
    title: "Real-life glow"
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
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = image.fallback;
                }}
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
