'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import PartnerMarquee from '@/components/sections/partner-marquee';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Transforming the solar industry by making demand generation predictable and scalable.',
    },
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description: 'Your success is our success. We focus entirely on helping you grow.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly improving our lead quality and verification process.',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Expert team dedicated to delivering premium performance marketing solutions.',
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
    <main>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-center">
              We Build <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Predictable Demand Engines</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8">
              Stop chasing junk leads. Start closing sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">We Engineer Demand for Solar EPCs</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                LeadSpring is a specialized growth partner for Solar EPCs. We don’t just run ads; we build predictable demand engines that filter out noise and deliver revenue-ready conversations.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Most agencies focus on "cost per lead." We focus on "cost per acquired customer."
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our systems are designed to help established Solar EPCs move away from "call every lead" chaos and toward a structured, intent-driven qualification funnel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-12 rounded-2xl border border-blue-400/20 glow-blue"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-blue-400 font-bold mb-2">Industry Experience</h3>
                  <p className="text-gray-300">15+ years combined experience in solar and renewable energy</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold mb-2">Verified Leads</h3>
                  <p className="text-gray-300">Multi-Stage Verified, high-intent prospects from day one</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold mb-2">Proven Process</h3>
                  <p className="text-gray-300">Data-driven methodology to find and qualify perfect-fit customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Our Values</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">What guides every decision we make</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-dark p-8 rounded-xl group hover:border-blue-400/50 border border-slate-700/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Meet the Founder</h2>

            <div className="glass-dark p-8 rounded-2xl border border-slate-700/30 inline-block max-w-2xl w-full hover:border-blue-400/50 transition-all">
              <h3 className="text-3xl font-bold text-white mb-2">Shubham Kamerkar</h3>
              <p className="text-blue-400 font-medium text-lg mb-8">Founder</p>

              <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300">
                <div
                  className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText('+91 98923 05172');
                    alert('Mobile number copied to clipboard!');
                  }}
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                    <p className="font-medium">+91 98923 05172</p>
                    <p
                      className="font-medium hover:text-blue-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText('022 4569 8639');
                        alert('Landline number copied to clipboard!');
                      }}
                    >
                      022 4569 8639
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-px bg-slate-700/50"></div>

                <div
                  className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText('shubham@leadspring.in');
                    alert('Email copied to clipboard!');
                  }}
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <span className="font-medium">shubham@leadspring.in</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Why Choose LeadSpring?</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">We're not just another generic agency</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lead Readiness',
                description: 'We don’t count a lead until they are educated and ready to speak.',
              },
              {
                title: 'Automated Nurture',
                description: 'Our AI works 24/7 to answer questions and qualify intent so you don\'t have to.',
              },
              {
                title: 'Strict Filtering',
                description: 'We reject ~60% of low-intent form fills so your team only gets the best.',
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-8 rounded-xl border border-slate-700/30"
              >
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Trusted by Solar EPCs</h3>
            <p className="text-gray-400 mb-8">Join forward-thinking EPCs across India who have switched to the LeadSpring Demand Engine.</p>
            <div className="mt-8">
              <PartnerMarquee />
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/contact#contact-form" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-block hover:glow-blue">
              Ready to Stop Chasing Junk Leads? Start Your Pilot Consultation.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
