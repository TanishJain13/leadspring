import { motion } from 'framer-motion';
import { Target, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export default function SolutionSection() {
  const steps = [
    {
      number: '01',
      title: 'Only high-intent enquiries reach your team',
      description: 'We filter out non-serious leads so you only talk to decision makers.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Less time calling price checkers',
      description: 'Stop wasting hours on people who just want the cheapest quote.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Warm prospects educated before your team calls',
      description: 'Leads are nurtured via AI & WhatsApp so they know your value.',
      icon: MessageCircle,
    },
    {
      number: '04',
      title: 'Faster engagement cycles',
      description: 'Speed to lead is maximized, ensuring you get there first.',
      icon: Zap,
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
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            A simple, transparent process to quality solar leads.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-dark p-8 rounded-xl h-full hover:border-blue-400/50 transition-all group relative">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}

                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>

                <div className="text-sm font-bold text-blue-500 mb-2">Step {step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark border-2 border-blue-400/30 p-8 rounded-xl text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-200">
            Systematic outcome: <span className="text-blue-300 font-semibold">Predictable Revenue Growth.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
