// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFlutter, SiJavascript, SiN8N, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="h-12 w-12" />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript className="h-12 w-12" />, color: '#3178C6' },
  { name: 'Next.js', icon: <SiNextdotjs className="h-12 w-12" />, color: '#FFFFFF' },
  { name: 'React', icon: <FaReact className="h-12 w-12" />, color: '#61DAFB' },
  { name: 'Vue.js', icon: <FaVuejs className="h-12 w-12" />, color: '#4FC08D' },
  { name: 'Flutter', icon: <SiFlutter className="h-12 w-12" />, color: '#02569B' },
  { name: 'Java', icon: <FaJava className="h-12 w-12" />, color: '#007396' },
  { name: 'Python', icon: <FaPython className="h-12 w-12" />, color: '#3776AB' },
  { name: 'Node.js', icon: <FaNodeJs className="h-12 w-12" />, color: '#339933' },
  { name: 'Firebase', icon: <SiFirebase className="h-12 w-12" />, color: '#FFCA28' },
  { name: 'n8n', icon: <SiN8N className="h-12 w-12" />, color: '#EA4B71' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-12 w-12" />, color: '#06B6D4' },
  { name: 'HTML5', icon: <FaHtml5 className="h-12 w-12" />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt className="h-12 w-12" />, color: '#1572B6' },
  { name: 'Git', icon: <FaGitAlt className="h-12 w-12" />, color: '#F05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Keahlian & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Teknologi</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-[#112240] rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, borderColor: skill.color, boxShadow: `0px 0px 15px ${skill.color}40` }}
              viewport={{ once: false, amount: 0.2 }}
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