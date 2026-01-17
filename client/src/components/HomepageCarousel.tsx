import React, { useState, useEffect } from 'react';

interface CarouselSlide {
  image: string;
  title: string;
  content: string;
  theme: 'brand' | 'wellness' | 'tech' | 'inspire';
}

const HomepageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      image: '/images/carousel/rosee_carousel_1.webp',
      title: 'The Heart Behind AskDoGood',
      content: 'Meet RoSeé Moore—thyroid cancer survivor, cloud security engineer, and wellness advocate. After navigating her own health challenges, RoSeé created AskDoGood to bridge the gap between conventional medicine and holistic healing. Her unique perspective combines 20+ years of IT expertise with evidence-based wellness strategies, helping others reclaim their health through plant-based nutrition and sustainable lifestyle changes. RoSeé believes that healing isn\'t just about managing symptoms—it\'s about understanding your body, asking better questions, and making informed decisions that honor your whole self.',
      theme: 'brand'
    },
    {
      image: '/images/carousel/rosee_carousel_3.webp',
      title: 'Growing Wellness From the Ground Up',
      content: 'There\'s something deeply healing about working with your hands in the soil, watching seeds transform into nourishment. For RoSeé, gardening isn\'t just a hobby—it\'s a fundamental part of her thyroid health journey and recovery protocol. Growing her own vegetables ensures access to pesticide-free, nutrient-dense foods that support hormone balance and reduce inflammation. This connection to food from seed to plate embodies the AskDoGood philosophy: true wellness comes from understanding and controlling what fuels your body. Whether you have acres or just a windowsill, cultivating your own food is an act of self-care that pays dividends in both physical health and mental clarity.',
      theme: 'wellness'
    },
    {
      image: '/images/carousel/rosee_carousel_4.webp',
      title: 'Tech Expertise Meets Holistic Wisdom',
      content: 'RoSeé brings the same precision and analytical thinking from her cybersecurity career to the world of wellness. As a Senior Azure Cloud Security Engineer at Microsoft, she solves complex problems and builds secure systems—skills that translate perfectly to navigating the often-confusing landscape of thyroid health. Her technical background means she doesn\'t just accept information at face value; she researches, validates, and tests strategies with the rigor of an engineer. This unique intersection of technology and wellness allows her to break down complicated health concepts into actionable, evidence-based strategies that actually work. When you learn from RoSeé, you\'re getting information that\'s been thoroughly vetted and practically tested.',
      theme: 'tech'
    },
    {
      image: '/images/carousel/rosee_carousel_5.webp',
      title: 'Inspiration in Action',
      content: 'RoSeé lives by the principle that wellness is an active practice, not a passive wish. Every day is an opportunity to inspire yourself and others to choose health, even when it\'s challenging. Her approach to thyroid health isn\'t about perfection—it\'s about consistent, intentional action that moves you closer to feeling like yourself again. Whether she\'s meal prepping for the week, reviewing lab results, or connecting with her community, RoSeé embodies the belief that small daily choices create massive transformation over time. This mindset of "progress, not perfection" has helped hundreds of people stay motivated through their own healing journeys, proving that sustainable change comes from compassion, not criticism.',
      theme: 'inspire'
    },
    {
      image: '/images/carousel/rosee_carousel_6.webp',
      title: 'Breaking Barriers in Tech & Wellness',
      content: 'As a Black woman in cybersecurity and a thyroid health advocate, RoSeé understands what it means to navigate spaces where you\'re often the only one who looks like you. Her mission extends beyond personal wellness—she\'s committed to increasing representation in both technology and holistic health spaces. Through AskDoGood and The Dope Cloud Teacher, RoSeé creates pathways for underrepresented communities to access quality health information and tech education. She proves that you don\'t have to choose between career excellence and personal wellness; you can thrive in both. Her work reminds us that when we heal ourselves and share our knowledge, we create ripples of change that extend far beyond our individual lives.',
      theme: 'brand'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'brand':
        return 'from-sage-600 to-terracotta';
      case 'wellness':
        return 'from-sage-700 to-sage-500';
      case 'tech':
        return 'from-terracotta-dark to-rust-orange';
      case 'inspire':
        return 'from-warm-beige-700 to-sage-600';
      default:
        return 'from-sage-600 to-terracotta';
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-warm-beige-50 to-sage-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Meet RoSeé
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thyroid warrior, tech innovator, and your guide to holistic healing
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Slides */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Side */}
                  <div className="relative h-96 lg:h-auto lg:min-h-[600px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getThemeColors(slide.theme)} opacity-20`}></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`inline-block bg-gradient-to-r ${getThemeColors(slide.theme)} text-white px-4 py-2 rounded-full text-sm font-bold mb-6 self-start`}>
                      {index + 1} of {slides.length}
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
                      {slide.title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {slide.content}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/about"
                        className="inline-block bg-terracotta text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition"
                      >
                        My Journey
                      </a>
                      <a
                        href="/consulting"
                        className="inline-block bg-sage-100 text-sage-700 px-6 py-3 rounded-lg font-semibold hover:bg-sage-200 transition"
                      >
                        Work With Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? 'w-12 bg-terracotta'
                    : 'w-3 bg-white/60 hover:bg-white/80'
                } h-3 rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '20+', label: 'Years in Tech' },
            { number: '500+', label: 'Lives Impacted' },
            { number: '100%', label: 'Plant-Based' },
            { number: '1', label: 'Thyroid Warrior' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6">
              <div className="text-3xl font-bold text-terracotta mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageCarousel;
