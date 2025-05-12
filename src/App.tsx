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
      favicon.href = "https://rescuefederation.com/wp-content/uploads/elementor/thumbs/cropped-Untitled-design-r3mn3nuaiqukd8ycb3jvlti2d9drwoa8z9wkw92c34.png";
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