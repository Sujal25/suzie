import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ChevronDown, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Hero = ({ data }) => {
  const particlesRef = useRef();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    particlesRef.current = container;
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#A66CFF",
            },
            links: {
              color: "#A66CFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="relative inline-block animate-float">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-primary via-primaryHover to-surface p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <img
                    src={data.image || "/img/hero.jpeg"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/img/hero.jpeg";
                    }}
                  />
                </div>
              </div>
              {/* Name Overlay */}
             
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-heading mb-4"
          >
            {data.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-primary"
          >
            {data.tagline}
          </motion.h2>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-text mb-8"
          >
            <TypeAnimation
              sequence={[
                data.subtitle,
                2000,
                "Passionate about innovation",
                2000,
                "Building the future",
                2000,
                "Creating impact",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-base md:text-lg text-text max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href={data.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Download Resume
            </motion.a>

            <motion.a
              href={`mailto:${data.email || 'sujalmaurya08@gmail.com'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center items-center gap-6 mb-12"
          >
            {Object.entries(data.socialLinks).map(([platform, url]) => {
              const icons = {
                github: Github,
                linkedin: Linkedin,
                instagram: Instagram,
                youtube: Youtube,
              };
              const Icon = icons[platform];
              if (!Icon) return null;
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text hover:text-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 