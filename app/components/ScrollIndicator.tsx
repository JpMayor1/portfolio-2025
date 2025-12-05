'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-0 top-0 w-1 h-full z-30 bg-[var(--color-bg-card)]/20">
      <motion.div
        className="w-full bg-gradient-to-b from-[var(--color-accent-500)] to-[var(--color-primary-500)]"
        style={{
          height: `${scrollProgress}%`,
        }}
        initial={{ height: 0 }}
        animate={{ height: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

