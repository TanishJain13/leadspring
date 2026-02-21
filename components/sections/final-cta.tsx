'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FinalCtaSectionProps {
  onContactClick: () => void;
}

export default function FinalCtaSection({ onContactClick }: FinalCtaSectionProps) {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Stop Wasting Time on Junk Leads
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Start receiving high-intent, AI-verified solar enquiries that actually convert.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact#contact-form">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Start Your Pilot Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-sm"
          >
            <div>✓ No long-term contracts</div>
            <div className="hidden sm:block w-px h-6 bg-slate-700/30" />
            <div>✓ Results-driven approach</div>
            <div className="hidden sm:block w-px h-6 bg-slate-700/30" />
            <div>✓ Dedicated support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
