import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Youtube, ExternalLink, Eye, Users, Calendar } from 'lucide-react';
import AnimatedGradientHeading from './AnimatedGradientHeading';

const Cinematography = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
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
          <AnimatedGradientHeading className="mb-4">
            {data.title}
          </AnimatedGradientHeading>
          <p className="text-lg text-textMuted max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Reels Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              variants={itemVariants}
              className="card p-4 flex flex-col items-center"
            >
              <div className="w-full aspect-[9/16] bg-black rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <video
                  src={reel.video}
                  poster={reel.thumbnail}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {reel.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {reel.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedVideo.title}
                  </h3>
                  <button
                    onClick={closeVideo}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <div className="aspect-video bg-gray-100 dark:bg-dark-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Youtube className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Video will open in YouTube
                    </p>
                    <motion.a
                      href={selectedVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch on YouTube
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedVideo.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedVideo.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Youtube className="w-4 h-4" />
                      YouTube
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVideo.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cinematography; 