'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('data-section', id);
    }
  }, [id]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen w-full ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}

