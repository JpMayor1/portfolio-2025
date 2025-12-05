'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Home,
  User,
  FolderKanban,
  Code,
  Mail,
} from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const reversedSections = [...navItems].reverse();
      for (const item of reversedSections) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      // Scroll to very top for hero section
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed right-0 md:right-6 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-3 md:gap-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-[var(--color-accent-500)]/20 border-2 border-[var(--color-accent-500)]/50'
                  : 'bg-[var(--color-bg-card)]/90 backdrop-blur-xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent-500)]/50'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.1 : isActive ? 1.05 : 1,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator glow */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[var(--color-accent-500)]/20 blur-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent-400)]'
                    : 'text-[var(--color-text-muted)]'
                } ${isHovered && !isActive ? 'text-[var(--color-accent-400)]' : ''}`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Hover glow effect */}
              {isHovered && !isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[var(--color-accent-500)]/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Tooltip on hover */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute right-full mr-3 px-2 py-1 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-xs text-[var(--color-text)] whitespace-nowrap pointer-events-none"
                >
                  {item.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-[var(--color-border)] border-b-4 border-b-transparent" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
