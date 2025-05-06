import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CourseFeatures from './components/CourseFeatures';
import CourseOptions from './components/CourseOptions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "CPR/BLS Training | Rescue Federation";
    
    // Find and update the favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://cdn-icons-png.flaticon.com/512/2785/2785544.png";
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CourseFeatures />
      <CourseOptions />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;