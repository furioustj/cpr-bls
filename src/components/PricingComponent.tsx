import React from 'react';
import { motion } from 'framer-motion';

type Tier = {
  title: string;
  duration: string;
  description: string;
  price: string;
  color: string;
};

const tiers: Tier[] = [
  {
    title: 'Basic',
    duration: '1–2 hours',
    description: 'Intro to CPR/BLS essentials',
    price: '$49',
    color: 'from-blue-500 to-green-600',
  },
  {
    title: 'Standard',
    duration: '3–4 hours',
    description: 'CPR/BLS with hands-on practice',
    price: '$89',
    color: 'from-green-500 to-yellow-300',
  },
  {
    title: 'Pro',
    duration: '6–8 hours',
    description: 'CPR/BLS + AED + Emergency Scenarios',
    price: '$129',
    color: 'from-purple-500 to-blue-300',
  },
  {
    title: 'Elite',
    duration: '1–2 days',
    description: 'Full certification + Testing + Extras',
    price: '$199',
    color: 'from-red-500 to-purple-600',
  },
];

const PricingComponent: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="pricing">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Choose Your Certification Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${tier.color} text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-sm mb-4">{tier.duration}</p>
              <p className="mb-4">{tier.description}</p>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <p className="text-sm opacity-80 mb-6">Valid for 2 years</p>
              <a
                href="#contact"
                className="inline-block bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
