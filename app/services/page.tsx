'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Target, TrendingUp, MessageSquare, BarChart3, XCircle, ArrowRight, Filter, Repeat, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import ServicesSection from '@/components/sections/services';

export default function ServicesPage() {
  const serviceDetails = [
    {
      icon: Target,
      title: 'High-Intent Meta Demand Engine',
      description: 'Campaigns designed to capture real solar buying intent.',
      features: ['Precision targeting', 'Intent-based signals', 'Quality focus'],
    },
    {
      icon: MessageSquare,
      title: 'AI/WhatsApp Prospect Nurturing',
      description: 'Automated nurturing that educates prospects before your team speaks to them.',
      features: ['Instant education', '24/7 engagement', 'Trust building'],
    },
    {
      icon: Users,
      title: 'Multi-Stage Lead Qualification',
      description: 'Filters out low-intent, price checkers & junk enquiries.',
      features: ['Strict filtering', 'Budget verification', 'Decision maker checks'],
    },
    {
      icon: Zap,
      title: 'Retargeting + Conversion Acceleration',
      description: 'Re-engages interested viewers to shorten sales cycle.',
      features: ['Stay top-of-mind', 'Offer reinforcement', 'Faster closing'],
    },
    {
      icon: TrendingUp,
      title: 'Sales-Ready Conversations',
      description: 'Your team receives only serious, educated prospects.',
      features: ['High conversion rate', 'Educated leads', 'No time wasting'],
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
              Performance <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Marketing System</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
              A full-funnel approach designed to deliver predictable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-dark p-8 rounded-xl border border-slate-700/30 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Why Most Solar EPCs Fail With Generic Lead Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Leads who never remember filling the form",
                "Price shoppers shared with 5+ installers",
                "Sales team time wasted on unqualified calls",
                "No prospect education = longer close cycles"
              ].map((point, idx) => (
                <div key={idx} className="glass-dark p-6 rounded-xl border border-red-500/20 flex flex-col items-center text-center">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <p className="text-gray-300 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Process Block */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How The System Works End-to-End</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A seamless flow from first click to sales-ready conversation.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {[
              { icon: Target, title: "Intent-based Meta Ad", desc: "Capture real buying intent" },
              { icon: MessageSquare, title: "WhatsApp AI nurture", desc: "Instant automated education" },
              { icon: Filter, title: "Multi-stage filters", desc: "Qualify and verify" },
              { icon: Repeat, title: "Retargeting loop", desc: "Re-engage warm prospects" },
              { icon: PhoneCall, title: "Handover to Sales", desc: "Close educated buyers" }
            ].map((step, idx, arr) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-dark p-6 rounded-xl border border-blue-500/30 text-center w-full lg:w-48 relative z-10"
                  >
                    <div className="w-12 h-12 mx-auto bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-sm">{step.title}</h4>
                    <p className="text-gray-400 text-xs">{step.desc}</p>
                  </motion.div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block text-slate-700 mx-[-0.5rem] z-0">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  {idx < arr.length - 1 && (
                    <div className="block lg:hidden text-slate-700 my-4">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative overflow-hidden bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="glass-dark p-10 rounded-2xl border border-blue-500/20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 p-4 rounded-full backdrop-blur-md border border-blue-500/20">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 italic mb-8 mt-4">
                "LeadSpring brought prospects who understood the solar buying process before call — saving us hours."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                  EPC
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">Solar EPC</p>
                  <p className="text-blue-400 text-sm">Hyderabad</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Integrated Service Delivery</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              All services work together to create a seamless High-Intent Demand Engine
            </p>
          </motion.div>

          <motion.div className="glass-dark p-12 rounded-2xl border border-blue-400/20 glow-blue">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Our Service Stack Works</h3>
                <div className="space-y-4">
                  {[
                    'Unified strategy across all channels for maximum efficiency',
                    'Data flows seamlessly between qualification and nurturing',
                    'Continuous optimization based on real performance metrics',
                    'Your team gets exactly what they need to close deals',
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700/30">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Service Benefits</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> One partner for your Predictable Demand Engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Holistic performance visibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Verified Sales-Ready Conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Faster ROI and scale potential
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-12 rounded-2xl border border-blue-400/20 glow-blue text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your Demand Engine?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with a free consultation to discuss which services are right for your business
            </p>
            <Link href="/contact#contact-form" scroll={false} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:glow-blue transition-all inline-block">
              Start Your Pilot Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
