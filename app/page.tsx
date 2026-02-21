'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import SolutionSection from '@/components/sections/solution';
import ServicesSection from '@/components/sections/services';
import IdealClientsSection from '@/components/sections/ideal-clients';
import TestimonialsSection from '@/components/sections/testimonials';
import FinalCtaSection from '@/components/sections/final-cta';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection onGetLeadsClick={() => { }} />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <IdealClientsSection />
      <TestimonialsSection />
      <FinalCtaSection onContactClick={() => { }} />
    </motion.div>
  );
}
