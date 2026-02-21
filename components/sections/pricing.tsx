'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PricingSectionProps {
  onPilotClick: () => void;
}

export default function PricingSection({ onPilotClick }: PricingSectionProps) {
  const pricingTiers = [
    {
      title: 'Starter (Pilot)',
      price: 'Pilot Program',
      description: 'Validate lead quality and ROI with a low-risk engagement.',
      features: [
        'Meta campaign setup',
        'Call / AI Verification',
        'Multi-stage qualification',
        'Lead context handover',
      ],
      idealFor: 'Ideal for teams just starting to scale.',
      highlighted: false,
    },
    {
      title: 'Growth',
      price: 'Most Popular',
      description: 'Scale your volume with enhanced nurturing and support.',
      features: [
        'Everything in Starter',
        'Enhanced retargeting',
        'Strategy alignment',
        'Priority support',
        'Organic Marketing inclusion',
      ],
      idealFor: 'Established EPCs ready for consistent volume.',
      highlighted: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom Scale',
      description: 'Full-funnel dominance for large sales teams.',
      features: [
        'Everything in Growth',
        'Custom workflow automation',
        'CRM integration deep-dive',
        'Sales alignment assets',
      ],
      idealFor: 'Large teams needing full-funnel dominance.',
      highlighted: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger for 3 items
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Value-Based Model</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Choose the tier that matches your current growth stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div
                className={`relative rounded-2xl transition-all overflow-hidden group h-full flex flex-col ${tier.highlighted
                  ? 'glass-dark border-2 border-blue-400/50 p-8 md:-mt-4 md:mb-4 shadow-2xl shadow-blue-900/20'
                  : 'glass-dark p-8 hover:border-blue-400/30 border border-slate-700/30'
                  }`}
              >
                {/* Badge */}
                {tier.highlighted && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{tier.description}</p>

                {/* Price Label */}
                <div className="mb-6">
                  <div className="text-xl font-bold text-blue-400 mb-1">
                    {tier.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400 transition-colors'}`} />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Comparison/Ideal For */}
                <div className="mt-auto pt-6 border-t border-slate-700/50 mb-6">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Best For</p>
                  <p className="text-sm text-gray-300 italic">{tier.idealFor}</p>
                </div>

                {/* CTA Button */}
                <Link href="/contact#contact-form" className="block w-full mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group ${tier.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:glow-blue'
                      : 'border border-blue-400/50 text-blue-400 hover:bg-blue-400/10'
                      }`}
                  >
                    Start {tier.title.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm max-w-2xl mx-auto"
        >
          <p>
            All plans include our core "Demand Engine" technology. Scaling is based on volume and support needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
