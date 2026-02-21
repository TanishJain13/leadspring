'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, MessageCircle, ShieldCheck, RefreshCw, PhoneCall } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'High-Intent Meta Demand Gen',
      description: 'Targeted campaigns that attract real solar buying signals, not just clicks.',
      icon: Target,
    },
    {
      title: 'AI/WhatsApp Prospect Nurturing',
      description: 'Warm prospects before your team contacts them. Instant engagement.',
      icon: MessageCircle,
    },
    {
      title: 'Multi-Stage Lead Verification',
      description: 'Junk, price shoppers & low intent filtered out early by AI.',
      icon: ShieldCheck,
    },
    {
      title: 'Retargeting + Conversion',
      description: 'Bring back interested users to shorten the sales cycle.',
      icon: RefreshCw,
    },
    {
      title: 'Sales-Ready Conversations',
      description: 'Only serious prospects who want solar now, delivered to your team.',
      icon: PhoneCall,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Our Performance Marketing System</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            We don't just generate leads. We generate <span className="text-blue-400 font-semibold">revenue opportunities.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <Link key={index} href="/contact" className="block h-full">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="glass-dark p-8 rounded-xl group hover:border-blue-400/50 transition-all relative h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.description}</p>

                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Start Pilot <span className="ml-1">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
