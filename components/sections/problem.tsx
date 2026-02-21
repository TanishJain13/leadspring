'use client';

import { motion } from 'framer-motion';
import { Search, Clock, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Low recall leads',
      description: 'Leads who don\'t remember filling out a form or lose interest immediately.',
      icon: Search,
    },
    {
      title: 'Price shoppers, not buyers',
      description: 'Prospects only looking for the cheapest option with no intent to buy quality.',
      icon: Search,
    },
    {
      title: 'Time wasted on unqualified calls',
      description: 'Your team spends hours chasing dead ends instead of closing deals.',
      icon: Clock,
    },
    {
      title: 'Loss of follow-up momentum',
      description: 'Leads ghosting you after the first interaction due to slow response.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background via-slate-900/20 to-background">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Most Solar Lead Sources Don’t Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This sets up the need for your system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
