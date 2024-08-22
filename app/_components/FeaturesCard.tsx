import React, { useState } from "react";

const FeaturesCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'how_to_use.webp',
    'compare.webp',
    'ask-to-cv.webp',
    'get-in-touch.jpeg',
    'Scam.jpeg',
    'pay_the_fees.jpeg',
    'your-security.jpeg',
    'Post-Admission.webp',
    
  ];

  const slidesToShow = 3;
  const totalSlides = images.length - slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides));
  };

  return (
    <div className="features-carousel">
      <div
        className="features-carousel-inner"
        style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="features-carousel-slide">
            <img src={src} alt={`Feature ${index + 1}`} className="feature-image" />
          </div>
        ))}
      </div>
      <button className="features-carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="features-carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default FeaturesCard;
