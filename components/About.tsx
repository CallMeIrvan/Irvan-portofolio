// components/About.tsx
'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Tentang Saya</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4">
          <p>
            Perkenalkan, saya Reovan Wilfred Sakbana, seorang mahasiswa Manajemen Data dan Informasi di 
            <span className="text-blue-400 font-semibold"> Institut Bisnis dan Teknologi Indonesia (INSTIKI)</span> yang berdomisili di Denpasar.
          </p>
          <p>
            Saya memiliki ketertarikan mendalam pada teknologi, khususnya di bidang pengembangan aplikasi web dan mobile. Sebagai individu yang aktif dan berorientasi pada pertumbuhan, saya terus mengasah kemampuan melalui berbagai proyek dan pembelajaran mandiri untuk menciptakan solusi digital yang fungsional, efisien, dan ramah pengguna.
          </p>
          <p>
            Dengan latar belakang akademis yang kuat di bidang data dan minat besar pada pengembangan perangkat lunak, saya siap untuk berkontribusi dan membawa dampak positif di dunia industri digital.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;