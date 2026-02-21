'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function IdealClientsSection() {
  const goodFit = [
    'Established Solar EPC teams',
    'Teams that can handle site visits',
    'Companies focusing on quality',
  ];

  const notIdeal = [
    'Solo operators with no sales team',
    'People chasing volume over quality',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Who This Works For</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            We partner with EPCs ready to scale with high-intent demand.
          </p>
        </motion.div>

        {/* Good Fit and Not Ideal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-dark p-10 rounded-xl border-2 border-green-400/30 h-full">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Who This Is For</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {goodFit.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Not Ideal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-dark p-10 rounded-xl border-2 border-red-400/30 h-full">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Who This Is NOT For</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {notIdeal.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
