import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_FEATURES } from '../utils/constants';
import { HeartPulse, Award, Clock, Users, BookOpen, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CourseFeatures: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8 text-red-500" };
    
    switch(iconName) {
      case 'HeartPulse': return <HeartPulse {...iconProps} />;
      case 'Award': return <Award {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'CheckCircle': return <CheckCircle {...iconProps} />;
      default: return <HeartPulse {...iconProps} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our CPR/BLS Training?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive course provides you with the knowledge, skills, and confidence to respond effectively in emergency situations.
          </p>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {COURSE_FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card group"
              variants={itemVariants}
            >
              <motion.div 
                className="mb-4 bg-red-50 p-3 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {renderIcon(feature.icon)}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mt-16" delay={0.4}>
          <div className="bg-red-600 text-white p-8 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Course Curriculum Highlights</h3>
                <motion.ul 
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Adult, child, and infant CPR techniques",
                    "AED (automated external defibrillator) operation",
                    "Choking response protocols for all age groups",
                    "Identification of cardiac arrest and heart attack symptoms",
                    "Team-based emergency response coordination",
                    "Legal considerations and Good Samaritan laws"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div 
                className="relative h-64 lg:h-auto overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="CPR Training Session" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CourseFeatures;