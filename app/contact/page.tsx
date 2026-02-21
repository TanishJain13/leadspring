'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/shubham@leadspring.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', company: '', teamSize: '', inquiryType: '', message: '' });
        }, 5000);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubham@leadspring.in',
      description: 'Send us an email anytime',
      href: 'mailto:shubham@leadspring.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9892305172',
      description: 'Call us during business hours',
      href: 'tel:+919892305172',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: (
        <>
          <p>S-109, Hawre fanastia, Sec-30, Vashi</p>
          <p>Navi Mumbai</p>
        </>
      ),
      description: 'Our headquarters location',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      description: 'We respond to every inquiry',
    },
  ];

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Retry a few times in case of hydration delays
          requestAnimationFrame(() => {
            setTimeout(scrollToElement, 100);
          });
        }
      };

      // Delay slightly to ensure layout is ready
      setTimeout(scrollToElement, 100);
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Book Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Pilot Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
              Our team will reach out to align on system setup and qualification needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isInteractable = method.label === 'Email' || method.label === 'Phone';

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`glass-dark p-6 rounded-xl border border-slate-700/30 flex items-start gap-4 ${isInteractable ? 'cursor-pointer hover:border-blue-400/50 transition-all group' : ''}`}
                  onClick={() => {
                    if (isInteractable) {
                      const textToCopy = method.label === 'Email' ? 'shubham@leadspring.in' : '+91 9892305172';
                      navigator.clipboard.writeText(textToCopy);
                      alert(`${method.label} copied to clipboard!`);
                    }
                  }}
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                    <div className="text-gray-400 leading-relaxed text-sm">
                      {method.value}
                    </div>
                    {/* <p className="text-xs text-gray-500 mt-2">{method.description}</p> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 sm:py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Send us a Message</h2>
            <p className="text-gray-400 text-center mb-12">
              Fill out the form below and we'll get back to you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 sm:p-12 rounded-2xl border border-blue-400/20 glow-blue"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We'll be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Solar Company"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Team Size</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    >
                      <option value="" disabled>Select Team Size</option>
                      <option value="1-5">1-5 Sales Reps</option>
                      <option value="5-10">5-10 Sales Reps</option>
                      <option value="10+">10+ Sales Reps</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    >
                      <option value="" disabled>Select Inquiry Type</option>
                      <option value="Residential">Residential Solar</option>
                      <option value="Commercial">Commercial / C&I</option>
                      <option value="Partnership">Partnership / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your growth and demand needs..."
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:glow-blue transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Pilot Consultation
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-400 text-sm">
                  We respect your privacy. Check out our{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Can't Find the Answer?</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              Check our services, pricing, and process pages for more information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Learn About Our Services',
                description: 'Explore our complete suite of performance marketing solutions',
                link: '/services',
              },
              {
                title: 'View Our Pricing',
                description: 'See our transparent, pay-per-lead pricing model',
                link: '/pricing',
              },
              {
                title: 'Understand Our Process',
                description: 'Learn how we generate and qualify high-intent leads',
                link: '/process',
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-8 rounded-xl border border-slate-700/30 hover:border-blue-400/50 transition-all group cursor-pointer"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <span className="text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                  View Page →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
