export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export interface CourseDate {
  id: number;
  date: string;
  time: string;
  location: string;
  spotsAvailable: number;
  price: string;
}

export interface Instructor {
  id: number;
  name: string;
  credentials: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}