'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" className="flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent mx-auto mb-8" />
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            I'm a forward-thinking developer and systems architect specializing in full-stack
            development, DevOps automation, and AI-driven solutions. With a passion for creating
            elegant, scalable systems, I bridge the gap between complex infrastructure and
            intuitive user experiences. My work focuses on building robust applications that
            leverage cutting-edge technology while maintaining clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Web Development',
              description:
                'Building modern, responsive web applications with React, Next.js, and TypeScript. Creating seamless user experiences with performance and accessibility in mind.',
              icon: '🌐',
            },
            {
              title: 'Automation & System Integration',
              description:
                'Designing and implementing automated workflows, API integrations, and system orchestration solutions that streamline operations and reduce manual overhead.',
              icon: '⚙️',
            },
            {
              title: 'IT Infrastructure / DevOps',
              description:
                'Managing cloud infrastructure, containerization with Docker, CI/CD pipelines, and ensuring scalable, secure, and reliable system deployments.',
              icon: '🚀',
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent-500)]/50 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glassy effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-500)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-2xl bg-[var(--color-accent-500)]/20 blur-xl" />
              </div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

