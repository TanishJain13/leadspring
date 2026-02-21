'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Alignment Discussion',
      description: 'Understand your goals, team capacity, and business requirements',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Pilot Phase',
      description: 'Small-scale test for quality verification and fit assessment',
      icon: '🧪',
    },
    {
      number: '03',
      title: 'Scale Phase',
      description: 'Expand only if quality aligns with your expectations and needs',
      icon: '📈',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">How Engagement Works</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">A structured approach to ensuring mutual fit and success</p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-8 last:mb-0">
              <div className="flex gap-6 sm:gap-8">
                {/* Timeline Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass-dark border-2 border-blue-400/50 flex items-center justify-center text-2xl font-bold bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex-shrink-0">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="w-1 h-24 sm:h-32 bg-gradient-to-b from-blue-400 to-transparent mt-4 origin-top"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 pb-8 sm:pt-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-bold text-blue-400">Step {step.number}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 max-w-lg">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-dark p-10 rounded-xl text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-200">
            Our process is designed around <span className="text-blue-300 font-semibold">mutual success</span> — we only scale what works for your team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
