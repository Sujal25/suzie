import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Github, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: data.email,
      link: `mailto:${data.email}`,
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: data.phone,
      link: `tel:${data.phone}`,
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: data.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(data.location)}`,
      color: 'red'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: data.socialLinks.github, color: 'gray' },
    { name: 'LinkedIn', icon: Linkedin, url: data.socialLinks.linkedin, color: 'blue' },
    { name: 'Instagram', icon: Instagram, url: data.socialLinks.instagram, color: 'pink' },
    { name: 'YouTube', icon: Youtube, url: data.socialLinks.youtube, color: 'red' },
    { name: 'WhatsApp', icon: MessageCircle, url: data.socialLinks.whatsapp, color: 'green' }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Contact Info */}
            <div className="card p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg group transition-colors duration-200 hover:bg-white hover:text-black hover:shadow-lg"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${info.label === 'Email' ? 'bg-primary/20' : info.label === 'Phone' ? 'bg-green-100' : 'bg-red-100'} group-hover:bg-white`}>
                      <info.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-black transition-colors duration-200">
                        {info.label}
                      </div>
                      <div className="text-white group-hover:text-black transition-colors duration-200">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow me
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center rounded-full transition-colors duration-200 bg-transparent"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-primary">
                      <social.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {data.availability}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {data.responseTime}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <motion.a
            href={`mailto:${data.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Start a Conversation
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;