'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '/process' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Navi Mumbai, Maharashtra',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shubham@leadspring.in',
      href: 'mailto:shubham@leadspring.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9892305172',
      href: 'tel:+919892305172',
    },
  ];

  return (
    <footer className="border-t border-slate-700/30 bg-gradient-to-b from-slate-900/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Lead</span>
                <span className="text-white">Spring</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2">Performance Marketing for Solar EPC</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future of Predictable Demand Engines with Multi-Stage Verified Prospects.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isInteractable = item.label === 'Phone' || item.label === 'Email';
                // Only render as 'a' if it has an href AND it's NOT interactable (so existing links work, but phone/email are handled by onClick)
                // Actually, for this request, we want Phone AND Email to be 'div's that copy.
                const Component = item.href && !isInteractable ? 'a' : 'div';

                return (
                  <li key={item.label}>
                    <Component
                      href={!isInteractable ? item.href : undefined}
                      onClick={(e) => {
                        if (isInteractable) {
                          e.preventDefault(); // Just in case
                          navigator.clipboard.writeText(item.value);
                          alert(`${item.label} copied to clipboard!`);
                        }
                      }}
                      className={`text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-3 group ${isInteractable ? 'cursor-pointer' : ''}`}
                    >
                      <Icon className="w-4 h-4 mt-1 flex-shrink-0 group-hover:text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                        <p className="text-sm">
                          {item.label === 'Address' ? (
                            <>
                              S-109, Hawre fanastia, Sec-30, Vashi<br />
                              Navi Mumbai
                            </>
                          ) : (
                            item.value
                          )}
                        </p>
                      </div>
                    </Component>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/30 pt-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>&copy; {currentYear} LeadSpring. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
