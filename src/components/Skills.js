import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Settings } from 'lucide-react';
import AnimatedGradientHeading from './AnimatedGradientHeading';

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: data.programming,
      color: "primary"
    },
    {
      title: "Creative Tools",
      icon: Palette,
      skills: data.tools,
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: Settings,
      skills: data.frameworks,
      color: "primary"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: data.databases,
      color: "primary"
    }
  ];

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <AnimatedGradientHeading className="mb-4 text-black">
            My Skills
          </AnimatedGradientHeading>
          <p className="text-lg text-black max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative tools that I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories
            .filter(category => category.title !== 'Frameworks & Libraries' && category.title !== 'Databases & Cloud')
            .map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-white/10">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-heading text-black">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-white">{skill.icon}</span>
                          <span className="font-medium text-heading text-black">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-primary text-black">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-border rounded-full">
                        <motion.div
                          className="h-3 rounded-full bg-primary/80"
                          variants={progressVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-heading mb-8 text-center">
              Additional Skills & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Git & Version Control",
                "RESTful APIs",
                "Agile/Scrum",
                "UI/UX Design",
                "Problem Solving",
                "Team Leadership",
                "Project Management",
                "Technical Writing",
                "Data Analysis",
                "Cloud Computing",
                "DevOps",
                "Testing & QA"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-surface rounded-lg p-4 text-center hover:bg-primary/10 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-heading">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-text">Programming Languages</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-text">Frameworks & Tools</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-text">Years of Experience</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Code className="w-5 h-5" />
            Download Detailed Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 