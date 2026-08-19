import React from 'react';
import { PageType } from '../types';
import { companyProfile } from '../data';
import {
  Mail, Phone, MapPin, Linkedin, Send,
  Instagram, Facebook, Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import { LogoIcon } from './Logo';

interface FooterProps {
  currentView: PageType;
  setView: (view: PageType) => void;
}

export default function Footer({ currentView, setView }: FooterProps) {

  const handleNavClick = (view: PageType) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; view: PageType }[] = [
    { label: "Home", view: "home" },
    { label: "About", view: "about" },
    { label: "Services", view: "services" },
    { label: "Solutions", view: "solutions" },
    { label: "Contact", view: "contact" }
  ];

  const servicesList = [
    "Market Research",
    "Data Collection",
    "Data Analytics",
    "Dashboard Development",
    "AI Solutions",
    "Software Development"
  ];

  const addressText = companyProfile.address;
  const phoneNumbers = [companyProfile.phone, companyProfile.phone2].filter(Boolean) as string[];
  const emailText = companyProfile.email;
  const websiteText = companyProfile.website && (companyProfile.website.startsWith('http') ? companyProfile.website : `https://${companyProfile.website}`);

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-[#0B2442] border-t border-white/10 text-white/80 font-sans pt-16 pb-12 relative z-20 overflow-hidden"
    >
      {/* Visually hidden heading for landmark outline navigation */}
      <h2 id="footer-heading" className="sr-only">
        Footer Overview and Navigation
      </h2>

      {/* 1. Absolute overlay grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Centered ambient soft white accent (Desktop & Tablet only to prevent mobile clutter) */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-white/5 to-transparent rounded-full pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* DESKTOP FOOTER LAYOUT (1024px+) */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 mb-12">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-4 space-y-6 text-left">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="inline-flex items-center space-x-3 cursor-pointer group text-left rounded-lg p-1 -m-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] transition-transform"
              aria-label="DNA TECH - Return to Home Page"
            >
              <div className="w-10 h-10 rounded-[12px] bg-white text-[#0B2442] p-2 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
                <LogoIcon className="w-full h-full" />
              </div>
              <span className="font-sans text-lg font-extrabold tracking-tight text-white">
                DNA <span className="font-sans font-extrabold text-white">TECH</span>
              </span>
            </button>

            <p className="text-xs text-white/70 leading-relaxed font-normal">
              DNA TECH helps organizations transform data into actionable insights through research, analytics, AI-powered solutions, and technology innovation.
            </p>

            {/* Social Icons */}
            <div
              className="flex items-center space-x-2.5 pt-1"
              role="group"
              aria-label="Social Media Channels"
            >
              {[
                { icon: Linkedin, href: companyProfile.socials.linkedin, title: "LinkedIn" },
                { icon: Send, href: companyProfile.socials.telegram, title: "Telegram" },
                { icon: Instagram, href: companyProfile.socials.instagram, title: "Instagram" },
                { icon: Facebook, href: companyProfile.socials.facebook, title: "Facebook" }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <motion.a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-[12px] bg-white/5 border border-white/15 hover:border-white text-white/70 hover:text-[#0B2442] hover:bg-white flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                    aria-label={`Follow DNA TECH on ${soc.title} (opens in a new tab)`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">{soc.title}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav
            aria-labelledby="footer-quick-links-heading-desktop"
            className="col-span-2 space-y-4 text-left"
          >
            <h3
              id="footer-quick-links-heading-desktop"
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2"
            >
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs" role="list">
              {navLinks.map((link) => {
                const isCurrent = currentView === link.view;
                return (
                  <li key={link.view}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.view)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`transition-all duration-200 cursor-pointer text-left py-1.5 px-2 -mx-2 rounded inline-flex items-center space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] min-h-[36px] ${
                        isCurrent
                          ? 'text-white font-bold underline decoration-white decoration-2 underline-offset-4'
                          : 'text-white/70 hover:text-white hover:translate-x-1'
                      }`}
                    >
                      <span>{link.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Column 3: Our Services */}
          <nav
            aria-labelledby="footer-services-heading-desktop"
            className="col-span-3 space-y-4 text-left"
          >
            <h3
              id="footer-services-heading-desktop"
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2"
            >
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-xs text-white/70" role="list">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('services')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1.5 px-2 -mx-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] min-h-[36px]"
                    aria-label={`Learn more about our ${srv} service`}
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact Us */}
          <section
            aria-labelledby="footer-contact-heading-desktop"
            className="col-span-3 space-y-4 text-left text-xs"
          >
            <h3
              id="footer-contact-heading-desktop"
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2"
            >
              CONTACT US
            </h3>

            <address className="not-italic space-y-3 text-white/70 leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs">{addressText}</span>
              </div>
              <div className="flex items-center space-x-3 border-t border-white/10 pt-2">
                <Phone className="w-4 h-4 text-white/80 flex-shrink-0" aria-hidden="true" />
                <div className="flex flex-col items-start">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-mono text-xs text-white/80 hover:text-white hover:underline transition-colors rounded py-0.5 px-1.5 -mx-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                      aria-label={`Call DNA TECH at ${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3 border-t border-white/10 pt-2">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${emailText}`}
                  className="font-mono text-xs lowercase text-white/80 hover:text-white hover:underline transition-colors rounded py-0.5 px-1.5 -mx-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] break-all"
                  aria-label={`Email DNA TECH at ${emailText}`}
                >
                  {emailText}
                </a>
              </div>
            </address>
          </section>

        </div>

        {/* ========================================================================= */}
        {/* TABLET FOOTER LAYOUT (768px - 1023px) - BALANCED 3-COLUMN COMPOSITION */}
        {/* ========================================================================= */}
        <div className="hidden md:grid lg:hidden grid-cols-12 gap-8 mb-10 text-left">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="inline-flex items-center space-x-3 cursor-pointer group text-left"
            >
              <div className="w-9 h-9 rounded-[12px] bg-white text-[#0B2442] p-2 flex items-center justify-center shadow-md">
                <LogoIcon className="w-full h-full" />
              </div>
              <span className="font-sans text-base font-extrabold tracking-tight text-white">
                DNA <span className="font-sans font-extrabold text-white">TECH</span>
              </span>
            </button>

            <p className="text-xs text-white/75 leading-relaxed font-normal">
              Empowering organizations with ethical market research, predictive analytics, and custom software across Africa.
            </p>

            <div className="flex items-center space-x-2.5 pt-1">
              {[
                { icon: Linkedin, href: companyProfile.socials.linkedin, title: "LinkedIn" },
                { icon: Send, href: companyProfile.socials.telegram, title: "Telegram" },
                { icon: Instagram, href: companyProfile.socials.instagram, title: "Instagram" },
                { icon: Facebook, href: companyProfile.socials.facebook, title: "Facebook" }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[12px] bg-white/5 border border-white/15 hover:border-white text-white/80 hover:text-[#0B2442] hover:bg-white flex items-center justify-center transition-all min-h-[40px] min-w-[40px]"
                    aria-label={`Follow DNA TECH on ${soc.title}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Tablet Quick Links" className="col-span-3 space-y-3">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.view}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.view)}
                    className={`text-left py-1 transition-colors cursor-pointer min-h-[36px] flex items-center ${
                      currentView === link.view ? 'text-white font-bold underline' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info & CTA */}
          <section aria-label="Tablet Contact Information" className="col-span-4 space-y-3 text-xs">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              CONTACT
            </h3>
            <address className="not-italic space-y-2.5 text-white/75">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{addressText}</span>
              </div>
              <div className="flex flex-col space-y-1 border-t border-white/10 pt-2">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="font-mono text-[11px] text-white/80 hover:text-white hover:underline min-h-[32px] flex items-center"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div className="border-t border-white/10 pt-2">
                <a
                  href={`mailto:${emailText}`}
                  className="font-mono text-[11px] lowercase text-white/80 hover:text-white hover:underline break-all min-h-[32px] flex items-center"
                >
                  {emailText}
                </a>
              </div>
            </address>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full px-4 py-2.5 rounded-xl bg-white text-[#0B2442] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 cursor-pointer min-h-[40px] flex items-center justify-center"
              >
                Get Started
              </button>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* PHONE FOOTER LAYOUT (<768px) - CLEAN SINGLE-COLUMN HIERARCHY */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-8 text-left">
          {/* 1. Logo & Brand */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="inline-flex items-center space-x-3 cursor-pointer group min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-[12px] bg-white text-[#0B2442] p-2 flex items-center justify-center shadow-md">
                <LogoIcon className="w-full h-full" />
              </div>
              <span className="font-sans text-lg font-extrabold tracking-tight text-white">
                DNA <span className="font-sans font-extrabold text-white">TECH</span>
              </span>
            </button>

            <p className="text-xs text-white/80 leading-relaxed font-normal">
              DNA TECH helps organizations transform data into actionable insights through research, analytics, AI-powered solutions, and technology innovation.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Linkedin, href: companyProfile.socials.linkedin, title: "LinkedIn" },
                { icon: Send, href: companyProfile.socials.telegram, title: "Telegram" },
                { icon: Instagram, href: companyProfile.socials.instagram, title: "Instagram" },
                { icon: Facebook, href: companyProfile.socials.facebook, title: "Facebook" }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                    aria-label={`Follow DNA TECH on ${soc.title}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <nav aria-label="Mobile Quick Links" className="space-y-2 border-t border-white/10 pt-6">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white mb-2">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  type="button"
                  onClick={() => handleNavClick(link.view)}
                  className={`text-left py-2.5 px-2 rounded min-h-[44px] flex items-center cursor-pointer transition-colors ${
                    currentView === link.view
                      ? 'text-white font-bold bg-white/10 border-l-2 border-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>

          {/* 3. Contact Info */}
          <section aria-label="Mobile Contact Info" className="space-y-3 border-t border-white/10 pt-6 text-xs">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white mb-2">
              CONTACT
            </h3>
            <address className="not-italic space-y-3 text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{addressText}</span>
              </div>

              <div className="flex items-start space-x-3 border-t border-white/10 pt-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-mono text-xs text-white hover:underline min-h-[36px] flex items-center"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3 border-t border-white/10 pt-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href={`mailto:${emailText}`}
                  className="font-mono text-xs lowercase text-white hover:underline break-all min-h-[44px] flex items-center"
                >
                  {emailText}
                </a>
              </div>
            </address>
          </section>

          {/* 4. Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full min-h-[44px] py-3 rounded-xl bg-white text-[#0B2442] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 mt-12 text-[11px] font-mono text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; 2026 DNA TECH. All Rights Reserved.
          </div>
          <div>
            Data Neutral Analysis Technology | Addis Ababa, Ethiopia
          </div>
        </div>

      </div>
    </footer>
  );
}
