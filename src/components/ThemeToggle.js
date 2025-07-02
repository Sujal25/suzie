import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-24 right-4 z-40 w-12 h-12 bg-white dark:bg-dark-200 rounded-full shadow-lg border border-gray-200 dark:border-dark-300 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 