import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Download, Award } from 'lucide-react';
import AnimatedGradientHeading from './AnimatedGradientHeading';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = data.timeline;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <AnimatedGradientHeading className="mb-4">
            About Me
          </AnimatedGradientHeading>
          <p className="text-lg text-textMuted max-w-3xl mx-auto">
            Get to know me better - my journey, education, and what drives me to create amazing things.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-textMuted leading-relaxed">
                {data.bio}
              </p>
            </div>

            {/* Education */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-textMain">
                      {data.education.degree}
                    </h4>
                    <p className="text-primary font-medium">
                      {data.education.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-textMuted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {data.education.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                What I Love
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Roadmap Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-8 text-primary">
                My Roadmap
              </h3>
              <div className="relative">
                {/* Roadmap Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>
                {/* Roadmap Steps */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
                      className="flex items-start relative"
                    >
                      <div className="absolute left-0 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl border-4 border-background shadow-glow" style={{ marginLeft: '-12px' }}>
                        {item.year}
                      </div>
                      <div className="ml-24">
                        <h4 className="font-semibold text-primary text-lg mb-2">
                          {item.title}
                        </h4>
                        <p className="text-textMuted">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href={data.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;