// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="h-12 w-12" />, color: '#3178C6' },
  { name: 'Next.js', icon: <SiNextdotjs className="h-12 w-12" />, color: '#FFFFFF' },
  { name: 'React', icon: <FaReact className="h-12 w-12" />, color: '#61DAFB' },
  { name: 'Java', icon: <FaJava className="h-12 w-12" />, color: '#007396' },
  { name: 'Python', icon: <FaPython className="h-12 w-12" />, color: '#3776AB' },
  { name: 'Node.js', icon: <FaNodeJs className="h-12 w-12" />, color: '#339933' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-12 w-12" />, color: '#06B6D4' },
  { name: 'HTML5', icon: <FaHtml5 className="h-12 w-12" />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt className="h-12 w-12" />, color: '#1572B6' },
  { name: 'Git', icon: <FaGitAlt className="h-12 w-12" />, color: '#F05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Keahlian & Teknologi</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, boxShadow: `0px 0px 15px ${skill.color}` }}
              viewport={{ once: true }}
            >
              <div style={{ color: skill.color }}>{skill.icon}</div>
              <p className="mt-4 font-semibold text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;