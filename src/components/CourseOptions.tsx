'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Globe, UserCheck, Clock, BadgeCheck } from 'lucide-react';

const CourseOptions: React.FC = () => {
  return (
    <section id="course-options" className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
            CPR/BLS Training That Comes To You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience life-saving training like never before — immersive, hands-on, and fully customizable for any institution or individual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }}
            className="bg-green-100 rounded-2xl shadow-md p-8 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">On-Site Training, Anywhere in India</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We bring CPR/BLS training right to your school, college, hospital, or office — fully equipped with CPR manikins, training materials, and certified instructors.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                No travel required — we come to you
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Hassle-free setup with expert trainers
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }}
            className="bg-green-100 rounded-2xl shadow-md p-8 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Learn from Certified Experts</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Every session is led by certified BLS/ACLS instructors from bodies like AHA, Red Cross, or ERC — including real doctors and first responders.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Real-world experience, life-saving skills
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Expert guidance tailored to your audience
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: true }}
            className="bg-green-100 rounded-2xl shadow-md p-8 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <BadgeCheck className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Real-Life Emergency Simulations</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Go beyond the books — engage in high-stakes CPR drills, trauma scenarios, and team-based simulations designed to test your response.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Choking rescue and trauma response
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Simulate emergencies before they happen
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: true }}
            className="bg-green-100 rounded-2xl shadow-md p-8 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Flexible Program Durations</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Choose a training module that fits your time and goals. We offer tailored sessions for every need.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                2–3 Hour Awareness Sessions
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                4–6 Hour Certification Programs
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                1–2 Day Advanced Courses
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
          className="bg-blue-100 p-10 rounded-xl shadow-md"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Institutional Recognition & Upskilling
              </h3>
              <p className="text-gray-700 mb-4 max-w-2xl">
                Elevate your institution’s profile and empower participants:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Boost NAAC/CSR eligibility with certified training
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Digital certificate & badge for every participant
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Optional Train-the-Trainer module for faculty
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a href='#contact'>
                  <button className="btn-primary text-white bg-red-600 hover:bg-red-500 transition-colors px-6 py-3 rounded-lg text-lg shadow-md">
                    Get Started with Training
                  </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOptions;
