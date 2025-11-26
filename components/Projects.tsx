// components/Projects.tsx
'use client';

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const myProjects = [
  {
    title: 'Website Sumba Culture',
    description: 'Sebuah Platfrom Website yang bukan hanya sekedar informasi tentang Pulau Sumba tetapi juga memperkenalkan Budaya, Keindahan alam, dan Potensi Pariwisata yang akan sangat maju beberapa tahun ke depan',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    link: 'https://sumbaculture.netlify.app/',
  },
  {
    title: 'Aplikasi Mobile Listify App',
    description: 'Sebuah Aplikasi Mobile yang dapat membantu pengguna untuk membuat daftar tugas dan memudahkan pengguna untuk mengelola tugasnya',
    tags: ['Flutter', 'Dart', 'Firebase', 'SSR'],
    link: '',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather App Aplikasi cuaca interaktif berbasis web yang dibangun dengan Vue 3 dan Vite. Menampilkan data cuaca real-time dengan desain Glassmorphism yang elegan, dukungan mode gelap/terang, serta fitur dwibahasa (Indonesia/Inggris)',
    tags: ['Vue.js', 'Vite', 'API', 'Tailwind CSS'],
    link: 'https://perkiraancuacabyirvan.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Pilihan Saya</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;