// components/Footer.tsx
'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/CallMeIrvan", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/username", color: "hover:text-blue-400" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/irvansakbana29____/?__pwa=1#", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-[#0a192f] border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 text-center">

        {/* Social Icons with Animation */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 text-3xl transition-colors ${social.color}`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright Text */}
        <motion.div
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="mb-2">
            &copy; {currentYear} <span className="text-white font-semibold">Van</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 font-bold">.Dev</span>
          </p>
          <p>
            Dibuat dengan menggunakan Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;