import React, { useState } from 'react';
import { FAQ_ITEMS } from '../utils/constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-white overflow-hidden">

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our CPR/BLS training courses and certification process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index ? true : false}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
