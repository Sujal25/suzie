import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Cinematography from './components/Cinematography';
import Skills from './components/Skills';
import Startups from './components/Startups';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

// Data
import { portfolioData } from './data/portfolioData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App dark">
      <Helmet>
        <title>{portfolioData.name} - Portfolio</title>
        <meta name="description" content={portfolioData.description} />
        <meta name="keywords" content={portfolioData.keywords.join(', ')} />
        <meta name="author" content={portfolioData.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${portfolioData.name} - Portfolio`} />
        <meta property="og:description" content={portfolioData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-dark-900 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {['home', 'about', 'projects', 'cinematography', 'skills', 'startups', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(section)}
                  className={`text-2xl font-semibold capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <Hero data={portfolioData.hero} />
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <About data={portfolioData.about} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
          <Projects data={portfolioData.projects} />
        </section>

        {/* Cinematography Section */}
        <section id="cinematography" className="section-padding">
          <Cinematography data={portfolioData.cinematography} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
          <Skills data={portfolioData.skills} />
        </section>

        {/* Startups Section */}
        <section id="startups" className="section-padding">
          <Startups data={portfolioData.startups} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
          <Contact data={portfolioData.contact} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 