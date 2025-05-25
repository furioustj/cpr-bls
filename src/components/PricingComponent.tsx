import React from "react";
import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mr-2 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.75 12.87L8.34 16.41C9.15 17.53 10.82 17.5 11.6 16.37L18.25 6.75"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg className="ml-auto w-5 h-5" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75"
    />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }
  }),
};

const PricingComponent: React.FC = () => {
  const plans = [
    {
      title: "Basic",
      price: "₹499",
      features: [
        "2-3 Hours of CPR/BLS Training",
        "Target Audience: Non-medical individuals",
        "Objective : To teach basic CPR and BLS skills",
        "Training Style: Hands-on practice with manikins",
        "Key Skills Covered: CPR, Choking Management",
        "Certification: Basic CPR/BLS certification upon successful completion",
      ],
    },
    {
      title: "Standard",
      price: "₹999",
      features: [
        "This is a 4–6 hour certification program",
        "Medical students, First responders, and fitness trainers",
        "Covers in-depth knowledge of CPR and Basic Life Support (BLS)",
        "Hands-on training for adult, infant, and child CPR",
        "Includes choking management techniques",
        "Teaches post-resuscitation care procedures",
      ],
    },
    {
      title: "Comprehensive",
      price: "₹1499",
      features: [
        "This is a 6–8 hour training program",
        "Ideal for: Nursing students, emergency volunteers, and clinical staff",
        "Includes detailed instruction and hands-on practice in:",
        "Adult, child, and infant CPR",
        "Choking management",
        "AED (Automated External Defibrillator) use",
        "Learn to assess vital signs and perform rapid scene assessments",
        "Includes airway and breathing management before professional help arrives",
      ],
    },
    {
      title: "Advanced",
      price: "₹2499",
      features: [
        "This is a 8–10 hour advanced-level program.",
        "Crafted for doctors, paramedics, critical care nurses, and emergency medical professionals",
        "Includes airway management using advanced equipment.",
        "Teaches ECG rhythm recognition and emergency drug administration.",
        "Features realistic scenarios and post-resuscitation protocols.",
        "Covers advanced resuscitation techniques and high-performance CPR",
        "Offers leadership training for handling code blue situations.",
      ],
    },
  ];

  return (
    <div className="relative bg-white min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="public/images/doodle.jpg"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-10">
        <h1 className="text-4xl font-semibold text-black mb-3 text-center">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-900 mb-12 text-center">
          Choose the plan that suits your needs. All plans include hands-on training and certification.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              className="flex flex-col justify-between h-full w-full border border-bluegray-800 rounded-lg p-6 bg-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div>
                <div className="text-m text-black mb-2">{plan.title}</div>
                <h2 className="text-5xl text-black font-semibold mb-4">
                  {plan.price}
                </h2>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-900">
                      <CheckIcon /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a href="#contact">
                  <button className="w-full py-2 px-4 bg-teal-200 rounded-md flex items-center hover:bg-teal-400 transition">
                    Enroll Now
                    <ArrowIcon />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
