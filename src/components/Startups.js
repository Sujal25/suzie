import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Award, ExternalLink, Users, TrendingUp, Calendar } from 'lucide-react';

const Startups = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Startup <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="space-y-12 mb-16">
          {data.ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              variants={itemVariants}
              className={`card p-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-8`}
            >
              {/* Venture Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={venture.image || `https://via.placeholder.com/600x400/0ea5e9/ffffff?text=${venture.name}`}
                    alt={venture.name}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/0ea5e9/ffffff?text=${venture.name}`;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      venture.status === 'Active' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {venture.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Venture Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {venture.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {venture.role}
                  </p>
                  <p className="text-white leading-relaxed">
                    {venture.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-heading mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {venture.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-black border border-white/10 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-heading mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {venture.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {venture.website && (
                    <motion.a
                      href={venture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2 hover:bg-[#C084FC] hover:text-white focus:bg-[#C084FC] focus:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Entrepreneurship Stats */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Rocket, value: data.ventures.length, label: 'Startups Founded' },
            { icon: Users, value: '500+', label: 'Users Impacted' },
            { icon: TrendingUp, value: '3+', label: 'Years Experience' },
            { icon: Award, value: data.awards.length, label: 'Awards Won' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-text">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.a
            href="mailto:sujal.maurya@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Let's Build Something Amazing Together
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Startups; 