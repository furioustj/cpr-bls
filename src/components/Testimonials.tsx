import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../utils/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    triggerFade(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
      );
    });
  };

  const handleNext = () => {
    triggerFade(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    });
  };

  const triggerFade = (callback: () => void) => {
    setFade(false);
    setTimeout(() => {
      callback();
      setFade(true);
    }, 300); // Matches transition duration
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Hear from individuals who have prior experience with Rescue Federation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`relative bg-white/10 backdrop-blur-sm rounded-lg p-9 md:p-12 transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-300 opacity-40" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic text-blue-100 mb-8 ml-4 mr-4">
                "{TESTIMONIALS[activeIndex].comment}"
              </p>

              <div className="flex items-center">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                  <p className="text-blue-200">{TESTIMONIALS[activeIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => triggerFade(() => setActiveIndex(index))}
                className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white scale-110' : 'bg-blue-300 bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
