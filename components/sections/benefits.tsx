'use client';

import { motion } from 'framer-motion';
import { Award, Zap, Users, TrendingUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Intent-driven Meta demand generation',
      description: 'We don’t just generate leads — we generate demand. Our Meta campaigns are designed to attract homeowners who are actively researching solar solutions, ensuring every lead has a baseline level of interest and intent.',
    },
    {
      icon: TrendingUp,
      title: 'Multi-stage prospect qualification',
      description: 'Our proprietary qualification framework ensures that only the most promising leads reach your sales team. We filter out low-intent prospects early, saving you time and resources.',
    },
    {
      icon: Users,
      title: 'Educated and expecation-aligned enquiries',
      description: 'Our multi-stage qualification process ensures that every lead that reaches your sales team is educated about the value of solar and has realistic expectations about the installation process.',
    },
    {
      icon: Award,
      title: 'Optional support assests (cripts, CRM, structure)',
      description: 'We provide optional support assets to help you close more deals. These assets include scripts, CRM, and structure.',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            What Working With LeadSpring Looks Like
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Tangible benefits that directly impact your bottom line</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(96, 165, 250, 0.5)' }}
                className="glass-dark p-8 rounded-xl group hover:border-blue-400/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
