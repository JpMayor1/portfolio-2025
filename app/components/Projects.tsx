'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { ExternalLink, Github } from 'lucide-react';

const projectGroups = [
  {
    category: 'Personal Projects',
    projects: [
      {
        title: 'AI-Powered Task Manager',
        description:
          'A smart task management system with AI-driven prioritization and automated scheduling.',
        tech: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
      {
        title: 'Real-Time Collaboration Platform',
        description:
          'A collaborative workspace with real-time updates, video conferencing, and file sharing.',
        tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
      {
        title: 'DevOps Dashboard',
        description:
          'Centralized monitoring and management dashboard for cloud infrastructure and deployments.',
        tech: ['Next.js', 'Docker', 'Kubernetes', 'Grafana'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    category: 'Freelance Projects',
    projects: [
      {
        title: 'E-Commerce Platform',
        description:
          'Full-featured e-commerce solution with payment integration, inventory management, and analytics.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
      {
        title: 'SaaS Analytics Tool',
        description:
          'Business intelligence platform with custom dashboards, data visualization, and reporting.',
        tech: ['React', 'Python', 'FastAPI', 'MongoDB'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    category: 'Work Projects',
    projects: [
      {
        title: 'Enterprise API Gateway',
        description:
          'Scalable API management system with rate limiting, authentication, and monitoring.',
        tech: ['Node.js', 'Express', 'Redis', 'Nginx'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
      {
        title: 'Microservices Architecture',
        description:
          'Containerized microservices platform with service mesh and automated scaling.',
        tech: ['Docker', 'Kubernetes', 'gRPC', 'Prometheus'],
        image: '/api/placeholder/600/400',
        live: '#',
        github: '#',
      },
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent mx-auto" />
        </motion.div>

        {projectGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[var(--color-accent-400)] mb-8">
              {group.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 3D tilt effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-500)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 rounded-2xl bg-[var(--color-accent-500)]/20 blur-xl" />
                  </div>

                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>

                  <div className="p-6 relative z-10">
                    <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-full text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent-500)]/10 border border-[var(--color-accent-500)]/50 rounded-lg text-[var(--color-accent-400)] text-sm hover:bg-[var(--color-accent-500)]/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-muted)] text-sm hover:border-[var(--color-accent-500)] hover:text-[var(--color-accent-400)] transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

