// components/Projects.tsx
'use client'; // Pastikan ini ada di baris paling atas

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// --> PASTIKAN BLOK KODE INI ADA <--
// Anda bisa menyimpan data ini di file terpisah (misal: data/projects.ts)
const myProjects = [
  {
    title: 'Aplikasi E-commerce Modern',
    description: 'Platform e-commerce yang dibangun dengan Next.js, menampilkan produk, keranjang belanja, dan integrasi pembayaran Stripe.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: 'https://github.com/username/project1',
  },
  {
    title: 'Sistem Manajemen Konten (CMS) Blog',
    description: 'Sebuah blog pribadi yang datanya diambil dari Headless CMS seperti Sanity.io, mendukung postingan dalam format Markdown.',
    tags: ['Next.js', 'Sanity.io', 'GROQ', 'SSR'],
    link: 'https://github.com/username/project2',
  },
  {
    title: 'Aplikasi Cuaca Real-time',
    description: 'Aplikasi sederhana untuk menampilkan data cuaca saat ini berdasarkan lokasi, menggunakan API publik.',
    tags: ['React', 'API', 'CSS Modules'],
    link: 'https://github.com/username/project3',
  },
];
// --> SAMPAI SINI <--


const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 /* ... (kode animasi h2) ... */ >
          Proyek Pilihan Saya
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Baris yang error ada di sini */}
          {myProjects.map((project, index) => (
            <motion.div
              key={index} // Pastikan ada 'key' prop di sini
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;