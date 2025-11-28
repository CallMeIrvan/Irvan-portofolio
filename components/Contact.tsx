// components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Saya</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=reovanwilfredsakbana@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-[#112240] rounded-2xl border border-gray-800 w-full md:w-1/2 group hover:border-blue-400 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(96, 165, 250, 0.3)' }}
          >
            <div className="p-4 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FaEnvelope className="text-4xl text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors break-all">reovanwilfredsakbana@gmail.com</p>
            <span className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              Kirim Pesan &rarr;
            </span>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/6282135146105"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-[#112240] rounded-2xl border border-gray-800 w-full md:w-1/2 group hover:border-green-400 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(74, 222, 128, 0.3)' }}
          >
            <div className="p-4 bg-green-500/10 rounded-full mb-4 group-hover:bg-green-500/20 transition-colors">
              <FaWhatsapp className="text-4xl text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 group-hover:text-green-300 transition-colors">+62 821-3514-6105</p>
            <span className="mt-4 text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              Chat Sekarang &rarr;
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;