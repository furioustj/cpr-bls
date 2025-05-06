import React from 'react';
import { INSTRUCTORS } from '../utils/constants';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Instructors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our instructors are certified professionals with extensive experience in emergency medicine and life support training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <div 
              key={instructor.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{instructor.name}</h3>
                <p className="text-red-600 font-medium text-sm mb-3">{instructor.credentials}</p>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            All our instructors are American Heart Association certified and maintain current medical credentials.
          </p>
          <a 
            href="#schedule" 
            className="btn-primary inline-flex"
          >
            Book Your Training
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instructors;