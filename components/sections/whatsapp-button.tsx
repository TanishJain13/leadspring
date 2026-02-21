'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919892305172';
  const message = encodeURIComponent('Hi LeadSpring! I\'m interested in learning more about your High-Intent Demand Engine.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 group"
      >
        {/* Background Glow */}
        <motion.div
          animate={{ scale: isHovered ? 1.2 : 1 }}
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-lg opacity-40 -z-10"
        />

        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-slate-700/50"
        >
          <div className="flex items-center gap-2">
            <span>Start a chat</span>
            <div className="w-1 h-1 bg-green-400 rounded-full" />
          </div>
        </motion.div>
      </motion.a>

      {/* Mobile-optimized WhatsApp Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 right-8 md:hidden z-30"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl touch-action-none"
            style={{ WebkitTouchCallout: 'none' }}
          >
            <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}
