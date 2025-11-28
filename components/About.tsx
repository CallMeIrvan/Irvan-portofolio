// components/About.tsx

'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Saya</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;