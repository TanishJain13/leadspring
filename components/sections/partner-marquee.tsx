'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Purewatts', logo: '/partners/Purewatts.jpeg' },
  { name: 'Apex Property', logo: '/partners/apexproperty.png' },
  { name: 'Omnia Yard', logo: '/partners/omniayard.PNG' },
  { name: 'Xpress Solar', logo: '/partners/xpresssolar.jpeg' },
  { name: 'Suryadnyani', logo: '/partners/suryadnyani.png' },
];

export default function PartnerMarquee() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-4 relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center mx-4 sm:mx-2 w-56 h-32 relative grayscale-0 opacity-100 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tailwind Custom Animation (Inline for simplicity if not in global css) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
