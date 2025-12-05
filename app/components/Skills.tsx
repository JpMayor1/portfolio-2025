'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const skills = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'HTML5', icon: 'HTML' },
  { name: 'CSS3', icon: 'CSS' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TailwindCSS', icon: 'TW' },
  { name: 'Zustand', icon: '🐻' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: 'E' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Redis', icon: '🔴' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'VSCode', icon: '💻' },
  { name: 'npm', icon: '📦' },
  { name: 'Git', icon: '📝' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Photoshop', icon: '🖼️' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Ubuntu', icon: '🟠' },
  { name: 'Nginx', icon: '🌐' },
  { name: 'Cloudflare', icon: '☁️' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent-500)]/50 transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-xl bg-[var(--color-accent-500)]/20 blur-lg" />
              </div>

              <div className="relative z-10 text-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-400)] transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

