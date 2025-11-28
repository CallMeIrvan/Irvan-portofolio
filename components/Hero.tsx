// components/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white text-center md:text-left p-8 overflow-hidden">
      {/* Text Content */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }} // Animasi ulang setiap kali masuk viewport
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hai, saya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            Reovan Wilfred S.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
          Mahasiswa Manajemen Data & Informasi dengan spesialisasi dalam pengembangan Web dan Aplikasi Mobile.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/cv-reovan.pdf"
            download
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Unduh CV
          </a>
        </motion.div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="md:w-1/3 relative"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.5 }} // Animasi ulang setiap kali masuk viewport
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Decorative Circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-2xl opacity-20 animate-pulse"></div>

          <Image
            src="/van.jpg"
            alt="Foto Profil Reovan Wilfred Sakbana"
            fill
            className="rounded-full object-cover border-4 border-gray-800 shadow-2xl relative z-10"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;