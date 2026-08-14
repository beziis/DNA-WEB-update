import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainerVariants, fastStaggerContainerVariants, slideInRightItemVariants } from '../utils/animationVariants';
import { companyProfile } from '../data';
import { LogoIcon } from './Logo';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, theme = 'dark', toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  const navClass = scrolled
    ? isLight
      ? 'sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md text-slate-800 transition-all duration-300'
      : 'sticky top-0 z-50 bg-[#051329] border-b border-white/15 shadow-lg shadow-black/20 text-white transition-all duration-300'
    : `sticky top-0 z-50 bg-transparent border-b border-transparent shadow-none ${
        isLight ? 'text-slate-800' : 'text-white'
      } transition-all duration-300`;

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo Section */}
          <div 
            onClick={() => { setCurrentPage('home'); setIsOpen(false); }} 
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo"
          >
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-[12px] p-2 shadow-md overflow-hidden transition-colors ${
                isLight ? 'bg-[#0B2442] text-white' : 'bg-white text-[#0B2442]'
              }`}
            >
              <LogoIcon className="w-full h-full relative z-10" />
            </motion.div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className={`font-sans font-extrabold text-lg tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>DNA</span>
                <span className={`font-sans font-extrabold text-lg tracking-tight ${isLight ? 'text-[#0B2442]' : 'text-white'}`}>TECH</span>
              </div>
              <span className={`text-[9px] font-mono tracking-widest uppercase block -mt-1 ${isLight ? 'text-slate-500' : 'text-white/60'}`}>
                Data Neutral Analysis
              </span>
            </div>
          </div>

          {/* Desktop Nav Items (animated slide-in from right) */}
          <AnimatePresence>
            <motion.ul
              key={currentPage}
              className="hidden md:flex items-center space-x-2 lg:space-x-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainerVariants}
              role="list"
            >
              {navItems.map((item) => (
                <motion.li key={item.page} variants={slideInRightItemVariants} className="list-none">
                  <motion.button
                    id={`nav-${item.page}`}
                    onClick={() => setCurrentPage(item.page)}
                    className={`px-3 py-2 text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-250 cursor-pointer relative ${
                      currentPage === item.page
                        ? isLight ? 'text-[#0B2442] font-bold' : 'text-white font-bold'
                        : isLight
                          ? 'text-slate-600 hover:text-slate-900'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.page && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-3 right-3 h-0.5 ${isLight ? 'bg-[#0B2442]' : 'bg-white'}`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          {/* Action Area (Get Started CTA) */}
          <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => toggleTheme?.()}
              aria-label="Toggle theme"
              className={`p-2 rounded-md transition-colors focus:outline-none ${isLight ? 'text-slate-700 hover:bg-slate-100' : 'text-white/80 hover:bg-white/5'}`}
            >
              {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-[12px] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md keep-dark-cta ${
                isLight 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-[#0B2442] hover:bg-white/90 hover:shadow-lg'
              }`}
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => toggleTheme?.()}
              aria-label="Toggle theme"
              className={`p-2 rounded-md transition-colors focus:outline-none ${isLight ? 'text-slate-700 hover:bg-slate-100' : 'text-white/80 hover:bg-white/5'}`}
            >
              {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded hover:bg-white/5 focus:outline-none cursor-pointer ${isLight ? 'text-slate-800' : 'text-white/70 hover:text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`md:hidden border-b px-4 pt-2 pb-6 space-y-2 overflow-hidden ${
              isLight
                ? 'bg-white border-slate-200'
                : 'bg-[#0B2442] border-white/10'
            }`}
          >
            <motion.div initial="hidden" animate="visible" variants={fastStaggerContainerVariants} className="space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  variants={slideInRightItemVariants}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded text-sm font-semibold tracking-wider uppercase transition-all ${
                    currentPage === item.page
                      ? isLight
                        ? 'text-[#0A2546] bg-slate-100 border-l-4 border-[#0A2546]'
                        : 'text-white bg-white/10 border-l-4 border-white'
                      : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
            <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-3">
              <a
                href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded text-sm font-bold uppercase tracking-wider bg-white text-[#0B2442] hover:bg-white/90 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0B2442]" />
                <span>CALL US</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
