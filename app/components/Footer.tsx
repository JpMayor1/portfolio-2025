'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          className="text-[var(--color-text-muted)] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © 2025{' '}
          <span className="text-[var(--color-accent-400)] font-semibold">JP.M</span> — All rights
          reserved.
        </motion.p>
      </div>

      {/* Soft glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent" />
    </footer>
  );
}

