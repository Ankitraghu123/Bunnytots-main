import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import slider1 from "../assets/slider/superbunny.png";
import slider2 from "../assets/slider/franchise.png";
import slider3 from "../assets/img/slider3.jpg";

const ImageSlider = () => {
  // Theme configuration
  const theme = {
    primaryColor: '#E91E63',       // Primary brand color (red)
    secondaryColor: '#6C63FF',     // Secondary color (purple)
    textColor: '#FFFFFF',          // Main text color
    accentTextColor: '#F3F4F6',    // Secondary text color
    buttonHoverColor: '#C5112E',   // Darker red for button hover
    dotActiveColor: '#EE2341',     // Active dot color
    dotInactiveColor: 'rgba(255, 255, 255, 0.5)', // Inactive dot color
    overlayColor: 'rgba(0, 0, 0, 0.5)', // Image overlay
    navButtonBg: 'rgba(255, 255, 255, 0.8)', // Navigation button background
    navButtonHoverBg: 'rgba(255, 255, 255, 1)', // Navigation button hover
  };

  const slides = [
    {
      id: 1,
      title: "Presenting  BunnyLearn",
      description: "A systematic method of education based upon careful scientific study",
      image: slider1,
      cta: "Admission Open",
      textPosition: "left" // Options: left, center, right
    },
    {
      id: 2,
      title: "Open Your Own Preschool Franchise ",
      description: [
        "Become A Partner", <br />,
        "Become A Successful Entrepreneur In Just 2 months"
      ],
      points: [
        " An Investment of (15-20 lakh) offer price 5-10 lakh only",
        "A Successful Businessperson",
        "Minimum 1200 Sqft Space Is Required"
      ],
      image: slider2,
      cta: "Apply Now",
      textPosition: "left"
    },
   
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  useEffect(() => {
    let interval;
    if (autoPlay && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, slides.length, isHovering]);

  // Get text alignment class based on slide configuration
  const getTextAlignment = (position) => {
    switch (position) {
      case 'left': return 'text-left items-start';
      case 'center': return 'text-center items-center';
      case 'right': return 'text-right items-end';
      default: return 'text-left items-start';
    }
  };

  return (
    <div
      className="relative w-full max-h-[500px]  h-screen  md:max-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full relative bg-cover"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center center',
              backgroundSize: isMobile ? 'cover' : 'cover'
            }}
          >
            <div
              className="w-full h-full"
              style={{ 
                backgroundColor: theme.overlayColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isMobile ? 'flex-end' : 'center'
              }}
            >
              <div className={`container bg-contain mx-auto flex flex-col px-6 md:px-12 lg:px-24  ${getTextAlignment(slide.textPosition)} ${isMobile ? 'mb-8' : ''}`}>
                <div className={`max-w-2xl z-10 p-4 md:p-8 lg:p-10 space-y-2 md:space-y-4 ${isMobile ? ' relative right-[30px] bg-opacity-60 rounded-lg' : ''}`}>
                  <h2
                    className={`text-2xl md:text-4xl lg:text-5xl  font-bold leading-tight ${isMobile ? 'text-[18px]' : ''}`}
                    style={{ color: theme.textColor }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`text-sm md:text-xl lg:text-2xl font-medium ${isMobile ? 'text-xs' : ''}`}
                    style={{ color: theme.accentTextColor }}
                  >
                    {slide.description}
                  </p>

                  {slide.points && (
                    <ul className={`space-y-1 md:space-y-2 ${isMobile ? 'text-xs' : ''}`}>
                      {slide.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-sm md:text-lg"
                          style={{ color: theme.accentTextColor }}
                        >
                          ★ {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    className={`px-4 py-2 md:px-8 md:py-3 mt-2 md:mt-6 rounded-full font-bold hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] ${isMobile ? 'text-sm' : ''}`}
                    style={{
                      color: theme.textColor,
                      ':hover': {
                        backgroundColor: theme.buttonHoverColor
                      }
                    }}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 md:top-1/2 top-1/3 -translate-y-1/2 p-2 rounded-full shadow-md transition-all duration-300 ${isHovering || isMobile ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundColor: theme.navButtonBg,
          ':hover': {
            backgroundColor: theme.navButtonHoverBg
          }
        }}
      >
        <FiChevronLeft className="w-6 h-6" style={{ color: theme.primaryColor }} />
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-2 md:top-1/2 top-1/3 -translate-y-1/2 p-2 rounded-full shadow-md transition-all duration-300 ${isHovering || isMobile ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundColor: theme.navButtonBg,
          ':hover': {
            backgroundColor: theme.navButtonHoverBg
          }
        }}
      >
        <FiChevronRight className="w-6 h-6" style={{ color: theme.primaryColor }} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6' : ''}`}
            style={{
              backgroundColor: currentIndex === index ? theme.dotActiveColor : theme.dotInactiveColor
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;