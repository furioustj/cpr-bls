import { NavItem, Testimonial, CourseDate, Instructor, FAQItem, Feature } from '../types';

export const APP_NAME = "Rescue Federation";
export const APP_DESCRIPTION = "Professional CPR/BLS Training & Certification";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#course-options" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const COURSE_FEATURES: Feature[] = [
  {
    title: "American Heart Association Certified",
    description: "Our courses are fully certified by the American Heart Association, meeting all current guidelines and standards.",
    icon: "Award"
  },
  {
    title: "Hands-on Training",
    description: "Practical, hands-on experience with the latest CPR equipment and techniques for maximum skill retention.",
    icon: "HeartPulse"
  },
  {
    title: "2-Year Certification",
    description: "Receive a nationally recognized CPR/BLS certification valid for 2 years upon successful course completion.",
    icon: "CheckCircle"
  },
  {
    title: "Interactive Classes",
    description: "Limited participants per class for personalized attention and optimal learning experience.",
    icon: "Users"
  },
  {
    title: "Comprehensive Curriculum",
    description: "Learn adult, child, and infant CPR, AED use, choking response, and basic life support techniques.",
    icon: "BookOpen"
  },
  {
    title: "Fast-Track Options",
    description: "Flexible course formats including standard (8 hours) and accelerated (4 hours) for healthcare professionals.",
    icon: "Clock"
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    credentials: "MD, FACS, BLS Instructor",
    bio: "Emergency physician with over 15 years of experience in critical care. Lead CPR instructor for major hospital systems.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    credentials: "Paramedic, AHA Training Coordinator",
    bio: "Senior paramedic and AHA Training Coordinator with extensive field experience in emergency medical services.",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Rebecca Torres",
    credentials: "RN, BSN, ACLS Instructor",
    bio: "Cardiac care nurse specialized in advanced cardiac life support protocols and emergency response training.",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const UPCOMING_COURSES: CourseDate[] = [
  {
    id: 1,
    date: "June 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Rescue Federation Training Center, 123 Main St.",
    spotsAvailable: 8,
    price: "$129"
  },
  {
    id: 2,
    date: "June 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Memorial Hospital Conference Room, 456 Health Dr.",
    spotsAvailable: 5,
    price: "$129"
  },
  {
    id: 3,
    date: "June 29, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Rescue Federation Training Center, 123 Main St.",
    spotsAvailable: 10,
    price: "$149"
  },
  {
    id: 4,
    date: "July 6, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Community Health Center, 789 Wellness Ave.",
    spotsAvailable: 12,
    price: "$129"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Vidhya Boomiraj",
    role: "Doctor",
    comment: "The Rescue Federation Paramedics and Doctors makes it happen completely hassle free without causing much stress about formalities or paper works and focusing on patient’s safety and treatment while transferring. Kudos to the Team and I highly recommend their service to all.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWyDKi9wIZYl7S3wEvkHxwFHyqxe479XRIM706sv3J3gOH67H8J=w72-h72-p-rp-mo-ba1-br100"
  },
  {
    id: 2,
    name: "Lalit Tupe",
    role: "Experienced with Rescue Federation",
    comment: "I have known Dr. Amit since childhood. He is highly ambitious, hardworking, and consistent in his work. I pray for his abundant success.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWlxQOl3j2a3CeucEWYH_NvKOEF5_Pnhrbc06rVlu5rQRvqESc=w36-h36-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Ishika Gautam",
    role: "Youth Sports Coach",
    comment: "Excellent service and truly caring professionals! The Rescue Federation® went above and beyond during our emergency. Their quick response and compassionate team made a difficult situation much easier. Highly recommended for anyone needing reliable and efficient medical transport.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUy1sKUPzTXwLFkH57YSp8uQ9h51KX8TzN9ymrRus3weKpBlPAcPg=w72-h72-p-rp-mo-br100"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does the certification last?",
    answer: "Your CPR/BLS certification is valid for two years from the date of course completion. We offer renewal courses that are shorter in duration for those needing to recertify."
  },
  {
    question: "Do I need any prior medical knowledge to take this course?",
    answer: "No, our courses are designed for all skill levels, including complete beginners. The instructions are clear and our instructors provide step-by-step guidance throughout the training."
  },
  {
    question: "What should I wear to the training?",
    answer: "Comfortable, casual clothing is recommended. You will be practicing CPR techniques on manikins, which may involve kneeling on the floor, so pants or longer shorts are advised."
  },
  {
    question: "Is this certification recognized nationwide?",
    answer: "Yes, our American Heart Association certified CPR/BLS training is recognized nationwide by employers, healthcare facilities, and educational institutions."
  },
  {
    question: "What if I can't pass the skills assessment?",
    answer: "Our instructors are dedicated to your success. If you struggle with any aspect of the training, they will provide additional guidance and practice opportunities to ensure you can successfully complete the course."
  },
  {
    question: "Can I get a refund if I need to cancel my registration?",
    answer: "We offer full refunds for cancellations made at least 72 hours before the scheduled course. For cancellations within 72 hours, we can transfer your registration to a future course date."
  }
];