'use client';

import { motion } from 'framer-motion';
import ProcessSection from '@/components/sections/process';
import Link from 'next/link';

export default function ProcessPage() {
  const detailedSteps = [
    {
      number: '1',
      title: 'Alignment & Goal Setting',
      description: 'We align on your growth goals, sales capacity, and target region.',
      details: [
        'Define success metrics',
        'Analyze sales capacity',
        'Target audience profiling',
        'Regional focus selection',
      ],
    },
    {
      number: '2',
      title: 'Intent-Driven Meta Campaign Setup',
      description: 'We target homeowners showing real buying signals, not just interest.',
      details: [
        'High-intent audience targeting',
        'Creative testing & optimization',
        'Direct response ad copy',
        'Signal-based bid strategies',
      ],
    },
    {
      number: '3',
      title: 'AI/WhatsApp Nurturing',
      description: 'Automated pre-education to warm up prospects before they talk to you.',
      details: [
        'Instant response mechanism',
        'Educational content delivery',
        'Trust-building sequences',
        '24/7 engagement',
      ],
    },
    {
      number: '4',
      title: 'Multi-Stage Qualification System',
      description: 'We rigorously filter out low-intent, price checkers, and junk enquiries.',
      details: [
        'Budget & timeline verification',
        'Homeowner confirmation',
        'Bill size qualification',
        'Intent scoring',
      ],
    },
    {
      number: '5',
      title: 'Retargeting + Conversion Cycle Shortening',
      description: 'We bring interested prospects back to the table quickly.',
      details: [
        'Cross-channel retargeting',
        'Offer reinforcement',
        'Objection handling ads',
        'Frequency management',
      ],
    },
    {
      number: '6',
      title: 'Handover of Sales-Ready Conversations',
      description: 'Your sales team receives only serious, educated prospects ready to buy.',
      details: [
        'Real-time CRM sync',
        'Full lead context',
        'Meeting scheduler integration',
        'Feedback loop implementation',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Demand Engine</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
              A systematic approach to generating predictable solar revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <ProcessSection />

      {/* Detailed Steps */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">The Details</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              Here's what happens at each stage of our partnership
            </p>
          </motion.div>

          <div className="space-y-12">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Number Circle */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="glass-dark p-8 rounded-xl border border-slate-700/30">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-blue-400">What we do:</p>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <p className="text-gray-300 text-sm">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < detailedSteps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Timeline to Results</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              From first conversation to qualified leads in your pipeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { period: 'Week 1-2', milestone: 'Discovery & Strategy', description: 'Understanding your business and market' },
              { period: 'Week 3-4', milestone: 'Campaign Launch', description: 'Ads live and generating leads' },
              { period: 'Week 5-6', milestone: 'First Qualified Leads', description: 'Verified prospects in your pipeline' },
              { period: 'Week 7+', milestone: 'Optimization & Scale', description: 'Improving quality and volume' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-6 rounded-xl border border-slate-700/30 text-center"
              >
                <p className="text-blue-400 font-bold mb-2">{item.period}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{item.milestone}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Transparency Throughout</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              You'll have visibility into every step with clear metrics and reporting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: 'Lead Volume', description: 'Real-time tracking of leads generated' },
              { metric: 'Verification Rate', description: 'Percentage of leads verified as high-intent' },
              { metric: 'Delivery Time', description: 'How quickly leads reach your team' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-8 rounded-xl border border-blue-400/20 glow-blue"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3">{item.metric}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
