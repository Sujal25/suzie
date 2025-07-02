import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code, Star } from 'lucide-react';
import AnimatedGradientHeading from './AnimatedGradientHeading';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = [
    { id: 'all', label: 'All Projects' }
  ];

  const filteredProjects = data.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'web') return project.technologies.some(tech => 
      ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript'].includes(tech)
    );
    if (filter === 'mobile') return project.technologies.some(tech => 
      ['React Native', 'Flutter', 'Android', 'iOS'].includes(tech)
    );
    if (filter === 'ai') return project.technologies.some(tech => 
      ['Python', 'Machine Learning', 'OpenCV', 'TensorFlow'].includes(tech)
    );
    if (filter === 'startup') return project.title.toLowerCase().includes('igniteu') || 
      project.title.toLowerCase().includes('prescripto');
    return true;
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
            My Projects
          </AnimatedGradientHeading>
          <p className="text-lg text-textMuted max-w-3xl mx-auto">
            A collection of projects that showcase my skills in development, innovation, and problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterOption.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer relative overflow-hidden group
                ${filter === filterOption.id ? 'bg-primary text-white shadow-lg' : 'bg-surface text-primary hover:bg-primary/10'}`}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-200">
                {filterOption.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 justify-center items-center"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image || `https://via.placeholder.com/400x250/0ea5e9/ffffff?text=${project.title}`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x250/0ea5e9/ffffff?text=${project.title}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`p-6 ${filter === 'all' || filter === 'featured' ? 'text-black' : 'text-white'}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary" style={{color: 'inherit'}}>
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{color: 'inherit'}}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${filter === 'all' || filter === 'featured' ? 'bg-primary/10 text-black border border-white/10' : 'bg-primary/20 text-white border border-white/10'}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-3 py-1 bg-surface text-text rounded-full text-xs font-medium ${filter === 'all' || filter === 'featured' ? 'text-black' : 'text-white'}`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 btn-secondary text-sm flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer relative overflow-hidden group ${filter === 'all' || filter === 'featured' ? 'text-black' : 'text-white'} hover:bg-[#C084FC] hover:text-white focus:bg-[#C084FC] focus:text-white`}
                      >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                          <Github className="w-4 h-4" />
                          Code
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 btn-primary text-sm flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer relative overflow-hidden group ${filter === 'all' || filter === 'featured' ? 'text-black' : 'text-white'} hover:bg-[#C084FC] hover:text-white focus:bg-[#C084FC] focus:text-white`}
                      >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                          Live Demo
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try selecting a different filter to see more projects.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/sujalmaurya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects; 