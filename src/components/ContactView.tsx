import React, { useState } from 'react';
import { companyProfile } from '../data';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainerVariants, fadeInUpItemVariants, slideInLeftItemVariants } from '../utils/animationVariants';
import DataScrollBackground from './DataScrollBackground';
import MapSection from './MapSection';

export default function ContactView() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name.trim() === '' || formState.email.trim() === '' || formState.message.trim() === '') {
      setFormError('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setFormError(result?.message || 'We could not send your message right now. Please try again later.');
        return;
      }

      setFormSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch {
      setFormError('We could not send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      {/* Background Interactive Particle Network & Data Nodes */}
      <DataScrollBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="contact-card relative p-8 sm:p-12 rounded-2xl bg-[#0B2545] border border-white/20 shadow-xl text-center mb-16 overflow-hidden"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <motion.h1 variants={fadeInUpItemVariants} className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              Let's Start a Conversation
            </motion.h1>
            <motion.p variants={fadeInUpItemVariants} className="max-w-xl mx-auto text-white/85 mt-3 text-xs sm:text-sm font-sans font-extralight leading-relaxed tracking-wide">
            </motion.p>
          </div>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="contact-card p-8 rounded-2xl bg-[#0B2545] border border-white/20 space-y-6 shadow-xl">
              <h2 className="font-sans font-extrabold text-2xl text-white border-b border-white/10 pb-4 tracking-tight">
                LET'S WORK TOGETHER
              </h2>

              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 text-sm"
              >

                {/* Address */}
                <motion.div variants={fadeInUpItemVariants} className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-white/80 leading-relaxed">
                    <p className="font-bold text-white uppercase font-mono text-[11px] mb-1">ADDIS ABABA</p>
                    <p className="text-white/90 font-medium">Bambis &rarr; Kazanchis</p>
                    <p className="text-white/80">Eyobed Apartment, 1st Floor</p>
                    <a
                      href={companyProfile.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:underline font-mono text-[11px] mt-2 block font-semibold min-h-[44px] flex items-center"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </motion.div>

                {/* Telephone */}
                <motion.div variants={fadeInUpItemVariants} className="flex items-start space-x-4 border-t border-white/10 pt-5">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-white/80">
                    <p className="font-bold text-white uppercase font-mono text-[11px] mb-1">Telephone</p>
                    <div className="space-y-1">
                      <a href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`} className="font-mono text-sm font-bold text-white hover:text-white/80 transition-colors">
                        {companyProfile.phone}
                      </a>
                      {companyProfile.phone2 && (
                        <a href={`tel:${companyProfile.phone2.replace(/\s+/g, '')}`} className="font-mono text-sm font-bold text-white hover:text-white/80 transition-colors block">
                          {companyProfile.phone2}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUpItemVariants} className="flex items-start space-x-4 border-t border-white/10 pt-5">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-white/80">
                    <p className="font-bold text-white uppercase font-mono text-[11px] mb-1">Email</p>
                    <a href={`mailto:${companyProfile.email}`} className="font-mono text-xs text-white hover:underline">
                      {companyProfile.email}
                    </a>
                  </div>
                </motion.div>



                {/* Social Media */}
                <motion.div variants={fadeInUpItemVariants} className="border-t border-white/10 pt-5">
                  <p className="font-bold text-white uppercase font-mono text-[11px] mb-3">SOCIAL MEDIA</p>
                  <div className="flex items-center space-x-3">
                    <a href={companyProfile.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#0B2442] border border-white/10 text-white hover:bg-white hover:text-[#0B2442] transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={companyProfile.socials.telegram} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#0B2442] border border-white/10 text-white hover:bg-white hover:text-[#0B2442] transition-all">
                      <Send className="w-4 h-4" />
                    </a>
                    <a href={companyProfile.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#0B2442] border border-white/10 text-white hover:bg-white hover:text-[#0B2442] transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href={companyProfile.socials.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#0B2442] border border-white/10 text-white hover:bg-white hover:text-[#0B2442] transition-all">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="contact-card p-8 sm:p-10 rounded-2xl bg-[#0B2545]/40 border border-white/10 shadow-xl">
              <h2 className="font-sans font-extrabold text-2xl text-white mb-2 tracking-tight">Send Us a Message</h2>
              <p className="text-xs text-white/80 mb-8 font-sans font-extralight tracking-wide">
                Fill out the form below and our team will get back to you promptly.
              </p>

              {formSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-xl bg-white/10 border border-white/20 text-white text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-white mx-auto" />
                  <p className="font-sans font-extrabold text-lg text-white tracking-tight">Thank You!</p>
                  <p className="text-xs text-white/80">Your message has been received. We will be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <p role="alert" className="text-xs text-white/80">
                      {formError}
                    </p>
                  )}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B2442] border border-white/20 text-white placeholder-white/30 text-base focus:outline-none focus:border-white min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B2442] border border-white/20 text-white placeholder-white/30 text-base focus:outline-none focus:border-white min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project or data needs..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B2442] border border-white/20 text-white placeholder-white/30 text-base focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-3.5 rounded-xl bg-white text-[#0B2442] hover:bg-white/90 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

        {/* Interactive Location Map Section */}
        <MapSection />

      </div>
    </div>
  );
}
