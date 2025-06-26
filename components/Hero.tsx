// components/Hero.tsx
'use client'; // Diperlukan karena framer-motion adalah library sisi klien

import Image from 'next/image';
import { motion } from 'framer-motion'; // 1. Impor motion dari framer-motion

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white text-center md:text-left p-8">
      {/* Bagian teks tidak perlu diubah */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hai, saya <span className="text-blue-400">Reovan Wilfred S.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Mahasiswa Manajemen Data & Informasi dengan spesialisasi dalam pengembangan Web dan Aplikasi Mobile.
        </p>
        <a
          href="/cv-reovan.pdf"
          download
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Unduh CV
        </a>
      </div>

      {/* 2. Ganti 'div' menjadi 'motion.div' dan tambahkan properti animasi */}
      <motion.div
        className="md:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/van.jpg" 
          alt="Foto Profil Reovan Wilfred Sakbana"
          width={400}
          height={400}
          className="rounded-full shadow-2xl shadow-blue-500/20"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;