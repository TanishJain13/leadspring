'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

interface HeroSectionProps {
  onGetLeadsClick: () => void;
}

export default function HeroSection({ onGetLeadsClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Slide from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const highlights = [
    'Intent Screening',
    'Multi-Stage Qualification',
    'Sales-Ready Verified Leads',
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/background/homepage.png)' }}
        />
        {/* Overlay to ensure text readability - made very subtle */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[0.5px]" />
      </motion.div>

      {/* Background gradient - made more transparent */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/40 pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="flex justify-end">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-right"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
            >
              Predictable Demand Engine for
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white mb-8 ml-auto max-w-xl text-balance"
            >
              High-Intent Meta Leads + AI/WhatsApp Nurturing + Multi-Stage Verified Prospects.
            </motion.p>

            {/* Highlight Points */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-end mb-12 flex-wrap"
            >
              {[
                'AI Verified Leads',
                'Ready-to-Close',
                'No Junk Inquiries',
              ].map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-200 justify-end"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-end items-center">
              <Link href="/contact#contact-form">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"              >
                  Start Your Pilot Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-slate-700/30 flex flex-col sm:flex-row justify-end items-center gap-8 text-gray-400 text-sm"
            >
              <div className="text-right">
                <p className="font-medium text-white mb-1">📍 Location</p>
                <p>S-109, Hawre fanastia, Sec-30, Vashi</p>
                <p>Navi Mumbai</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700/30" />
              <div
                className="text-right cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText('shubham@leadspring.in');
                  alert('Email copied to clipboard!');
                }}
              >
                <p className="font-medium text-white mb-1">📧 Email</p>
                <p>shubham@leadspring.in</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700/30" />
              <div
                className="text-right cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText('+91 98923 05172');
                  alert('Phone number copied to clipboard!');
                }}
              >
                <p className="font-medium text-white mb-1">📱 Phone</p>
                <p>+91 9892305172</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
