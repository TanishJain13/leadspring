'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-dark p-12 rounded-2xl relative"
                >
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/20" />

                    <div className="text-center relative z-10">
                        <p className="text-xl sm:text-2xl text-gray-200 italic mb-8 leading-relaxed">
                            "LeadSpring changed our sales flow — now we speak only to informed solar buyers."
                        </p>

                        <div>
                            <h4 className="text-white font-bold text-lg">Suryadnyani Solar</h4>
                            <p className="text-blue-400 text-sm">Maharashtra</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
