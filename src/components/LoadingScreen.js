import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen min-h-screen flex items-center justify-center">
      <div className="text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500 mx-auto mb-6 animate-float">
            <motion.img
              src={portfolioData.loadingImage}
              alt="Sujal Maurya"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/96x96/0ea5e9/ffffff?text=SM';
              }}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Sujal Maurya
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 dark:text-gray-400 mb-8"
        >
          Loading Portfolio...
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-64 mx-auto mb-6"
        >
          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Preparing amazing content...</span>
        </motion.div>

        {/* Loading Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-8 text-xs text-gray-400 dark:text-gray-500"
        >
          <p>💡 Tip: Check out my cinematography section for some amazing videos!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen; 