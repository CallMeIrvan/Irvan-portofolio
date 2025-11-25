// components/ProjectCard.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// Mendefinisikan tipe data untuk props
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index?: number;
}

const ProjectCard = ({ title, description, tags, link, index = 0 }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-[#112240] rounded-xl p-6 flex flex-col h-full border border-gray-800 group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Animasi ulang setiap kali masuk/keluar viewport
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, borderColor: '#64ffda' }}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaExternalLinkAlt />
            </Link>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              aria-label="Show project status"
            >
              <FaExternalLinkAlt />
            </button>
          )}
        </div>

        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-teal-300 bg-teal-400/10 py-1 px-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-[#112240] p-8 rounded-2xl border border-gray-700 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaExternalLinkAlt className="text-2xl text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Project Under Update</h4>
                <p className="text-gray-300 mb-6">
                  Mohon maaf, link untuk proyek <span className="text-blue-400 font-semibold">{title}</span> saat ini belum tersedia atau sedang dalam proses pembaruan.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors"
                >
                  Mengerti
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;