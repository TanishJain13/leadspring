'use client';

import { motion } from 'framer-motion';
import PricingSection from '@/components/sections/pricing';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Simple, Transparent <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
              Transparent value-based tiers. Choose the plan that fits your growth goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof for Pricing */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-blue-900/10 p-8 rounded-2xl border border-blue-500/20 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 italic mb-6">
                "LeadSpring's structured demand engine prepared prospects so well that our sales team closed deals faster with less wasted time."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  EPC
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Solar EPC Owner</p>
                  <p className="text-blue-400 text-xs">Gujarat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection onPilotClick={() => { }} />

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-center mb-16">
              Clear answers to help you understand our pricing model
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is a "verified lead"?',
                answer:
                  'A verified lead is a prospect who has been confirmed by our team to have genuine intent to install solar. They\'ve been contacted, qualified, and confirmed they\'re serious about moving forward.',
              },
              {
                question: 'Are there any setup or onboarding fees?',
                answer:
                  'No. We don\'t charge setup fees or monthly minimums. You only pay per lead delivered. This means zero risk to get started.',
              },
              {
                question: 'How are leads delivered?',
                answer:
                  'Leads are delivered in real-time via CRM integration, email, or your preferred method. Each lead includes full qualification context so your team can follow up immediately.',
              },
              {
                question: 'Can I start with a pilot program?',
                answer:
                  'Absolutely. Our pilot programs are designed to prove ROI before you commit to larger volumes. Most pilots run 30-60 days.',
              },
              {
                question: 'What if I\'m not satisfied with lead quality?',
                answer:
                  'We guarantee lead quality. If leads don\'t meet our quality standards, we\'ll replace them at no cost. Your success is our success.',
              },
              {
                question: 'How does pricing scale as I grow?',
                answer:
                  'As your volume increases, we\'ll discuss volume pricing options. Most growing companies find better economics at scale without sacrificing lead quality.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-dark p-8 rounded-xl border border-slate-700/30 hover:border-blue-400/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Why LeadSpring Makes Sense</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              See how our pricing and service model compares to other options
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">LeadSpring</th>
                  <th className="px-6 py-4 text-center text-gray-400">Traditional Agencies</th>
                  <th className="px-6 py-4 text-center text-gray-400">DIY Marketing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Verified Leads', '✓', '✗', '✗'],
                  ['Solar Expertise', '✓', '~', '✗'],
                  ['No Setup Fees', '✓', '✗', '~'],
                  ['Performance Focused', '✓', '✗', 'N/A'],
                  ['Quick Time-to-Value', '✓', '✗', '✗'],
                  ['Dedicated Support', '✓', '~', '✗'],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-900/30 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{row[0]}</td>
                    <td className="px-6 py-4 text-center text-blue-400 font-semibold">{row[1]}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{row[2]}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-12 rounded-2xl border border-blue-400/20 glow-blue text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">
              Schedule a demo to see how our pricing and service model can transform your pipeline
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:glow-blue transition-all">
                Book Your Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
