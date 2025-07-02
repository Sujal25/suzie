import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'cinematography', label: 'Cinematography' },
    { id: 'skills', label: 'Skills' },
    { id: 'startups', label: 'Startups' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 0.95, scale: 1 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 0.95 : 0, scale: showNav ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-background border-b border-border text-heading px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md"
    >
      <div className="font-bold text-primary text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
        Sujal
      </div>
      <div className="space-x-6 hidden lg:flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-base font-medium transition hover:text-primary hover:underline underline-offset-8 ${activeSection === item.id ? 'text-primary underline' : 'text-heading'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollToSection('contact')}
        className="hidden lg:block btn-primary text-base"
      >
        Hire Me
      </button>
    </motion.nav>
  );
};

export default Navigation; 