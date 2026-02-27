'use client';

import { motion } from 'framer-motion';
import ProcessSection from '@/components/sections/process';
<<<<<<< HEAD
=======
import { Target, MessageSquare, Filter, Repeat, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
>>>>>>> 86af8bc (Final Updates)
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

<<<<<<< HEAD
=======
      {/* Short Guarantee/Expectations Block */}
      <section className="py-12 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-dark p-8 rounded-2xl border border-blue-500/30 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Our Core Promise</h3>
              <p className="text-gray-300">We don't promise random volume — we deliver high-intent, expectation-aligned prospects for your solar team to act on.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Demand Engine Flow</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {[
              { icon: Target, title: "Intent Meta Ads" },
              { icon: MessageSquare, title: "AI/WhatsApp Nurture" },
              { icon: Filter, title: "Multi-Stage Qualification" },
              { icon: Repeat, title: "Retargeting Loop" },
              { icon: PhoneCall, title: "Sales Handover" }
            ].map((step, idx, arr) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-dark p-4 rounded-xl border border-blue-500/30 text-center w-40 relative z-10"
                  >
                    <div className="w-10 h-10 mx-auto bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold text-xs">{step.title}</h4>
                  </motion.div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block text-slate-700 mx-[-0.5rem] z-0">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                  {idx < arr.length - 1 && (
                    <div className="block lg:hidden text-slate-700 my-2">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

>>>>>>> 86af8bc (Final Updates)
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
<<<<<<< HEAD
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
=======
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Timeline to Predictable Demand</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              From alignment to sales-ready solar conversations
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                period: 'Week 1',
                milestone: 'Alignment & System Setup',
                subtitle: 'Demand Blueprint & Sales Alignment',
                details: ['Define ICP (Residential / C&I)', 'Align on sales capacity & regions', 'Setup Meta tracking & funnels', 'Build AI/WhatsApp nurture logic'],
                outcome: 'System foundation ready for intent-based demand.'
              },
              {
                period: 'Week 2',
                milestone: 'Intent Campaign Activation',
                subtitle: 'High-Intent Traffic Begins',
                details: ['Launch Meta campaigns focused on buying signals', 'Early data collection & audience refinement', 'WhatsApp AI begins first prospect interactions'],
                outcome: 'First wave of warm, nurtured prospects entering funnel.'
              },
              {
                period: 'Week 3–4',
                milestone: 'Multi-Stage Qualification Live',
                subtitle: 'Sales-Ready Prospects Begin Flowing',
                details: ['AI/WhatsApp filters low-intent prospects', 'Qualified prospects move to sales handover', 'Retargeting loop activated for warm leads'],
                outcome: 'Your team starts receiving informed, expectation-aligned enquiries.'
              },
              {
                period: 'Week 5–6',
                milestone: 'Conversion Acceleration',
                subtitle: 'Stronger Recall + Shorter Sales Cycle',
                details: ['Retargeting improves recall', 'Drop-offs re-engaged', 'Lead quality refined using feedback'],
                outcome: 'Faster engagement and more productive site visit conversations.'
              },
              {
                period: 'Week 7+',
                milestone: 'Optimization & Predictable Scale',
                subtitle: 'Quality First, Then Volume',
                details: ['Scaling best-performing campaigns', 'Tightening qualification rules', 'Improving sales alignment'],
                outcome: 'Stable, predictable high-intent demand — not random spikes.'
              },
>>>>>>> 86af8bc (Final Updates)
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
<<<<<<< HEAD
                className="glass-dark p-6 rounded-xl border border-slate-700/30 text-center"
              >
                <p className="text-blue-400 font-bold mb-2">{item.period}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{item.milestone}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
=======
                className="glass-dark p-8 rounded-xl border border-blue-500/20 relative"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold text-xl mb-2">{item.period}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{item.milestone}</h3>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  </div>
                  <div className="md:w-3/4 border-l border-slate-700/50 pl-0 md:pl-8 pt-4 md:pt-0 mt-4 md:mt-0">
                    <ul className="space-y-2 mb-6">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/10">
                      <p className="text-blue-400"><span className="font-bold mr-2">👉 Outcome:</span> {item.outcome}</p>
                    </div>
                  </div>
                </div>
>>>>>>> 86af8bc (Final Updates)
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
