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
  const phoneText = companyProfile.phone;
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

      {/* 2. Centered ambient soft white accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-white/5 to-transparent rounded-full pointer-events-none opacity-40" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand & Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
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

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
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
                    className="w-9 h-9 rounded-[12px] bg-white/5 border border-white/15 hover:border-white text-white/70 hover:text-[#0B2442] hover:bg-white flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                    aria-label={`Follow DNA TECH on ${soc.title} (opens in a new tab)`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">{soc.title}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <nav 
            aria-labelledby="footer-quick-links-heading" 
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h3 
              id="footer-quick-links-heading" 
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2"
            >
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm" role="list">
              {navLinks.map((link) => {
                const isCurrent = currentView === link.view;
                return (
                  <li key={link.view}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.view)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`transition-all duration-200 cursor-pointer text-left py-1 px-2 -mx-2 rounded inline-flex items-center space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] ${
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

          {/* Column 3: Our Services (lg:col-span-3) */}
          <nav 
            aria-labelledby="footer-services-heading" 
            className="lg:col-span-3 space-y-4 text-left"
          >
            <h3 
              id="footer-services-heading" 
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2"
            >
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70" role="list">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('services')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 px-2 -mx-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                    aria-label={`Learn more about our ${srv} service`}
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <section 
            aria-labelledby="footer-contact-heading" 
            className="lg:col-span-3 space-y-4 text-left text-xs sm:text-sm"
          >
            <h3 
              id="footer-contact-heading" 
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
                <a 
                  href={`tel:${phoneText.replace(/\s+/g, '')}`} 
                  className="font-mono text-xs text-white/80 hover:text-white hover:underline transition-colors rounded py-0.5 px-1.5 -mx-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                  aria-label={`Call DNA TECH at ${phoneText}`}
                >
                  {phoneText}
                </a>
              </div>
              <div className="flex items-center space-x-3 border-t border-white/10 pt-2">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" aria-hidden="true" />
                <a 
                  href={`mailto:${emailText}`} 
                  className="font-mono text-xs lowercase text-white/80 hover:text-white hover:underline transition-colors rounded py-0.5 px-1.5 -mx-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                  aria-label={`Email DNA TECH at ${emailText}`}
                >
                  {emailText}
                </a>
              </div>
              <div className="flex items-center space-x-3 border-t border-white/10 pt-2">

              </div>
            </address>
          </section>

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

