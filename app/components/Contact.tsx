'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form submission not yet configured)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JpMayor1',
      icon: Github,
      color: 'hover:text-[var(--color-accent-400)]',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/james-phillip-mayor/',
      icon: Linkedin,
      color: 'hover:text-[var(--color-accent-400)]',
    },
    {
      name: 'Email',
      url: 'mailto:jamesphillipmayor1@gmail.com',
      icon: Mail,
      color: 'hover:text-[var(--color-accent-400)]',
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent mx-auto mb-8" />
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect and build something
            amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-2 focus:ring-[var(--color-accent-500)]/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-2 focus:ring-[var(--color-accent-500)]/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-2 focus:ring-[var(--color-accent-500)]/20 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--color-accent-500)]/10 border border-[var(--color-accent-500)]/50 rounded-lg text-[var(--color-accent-400)] font-medium flex items-center justify-center gap-2 hover:bg-[var(--color-accent-500)]/20 hover:shadow-[0_0_30px_var(--color-accent-500)] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent-500)]/50 transition-all group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 bg-[var(--color-bg-soft)] rounded-lg group-hover:bg-[var(--color-accent-500)]/10 transition-colors">
                        <Icon className={`w-6 h-6 text-[var(--color-text-muted)] ${social.color} transition-colors`} />
                      </div>
                      <div>
                        <div className="text-[var(--color-text)] font-medium">{social.name}</div>
                        <div className="text-sm text-[var(--color-text-muted)]">
                          {social.name === 'Email'
                            ? 'jamesphillipmayor1@gmail.com'
                            : social.url}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Glowing accent line */}
            <div className="relative h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent rounded-full" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

