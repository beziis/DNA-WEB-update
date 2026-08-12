/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import SolutionsView from './components/SolutionsView';
import TractionView from './components/TractionView';
import ContactView from './components/ContactView';
import PageTransitionOverlay from './components/PageTransitionOverlay';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('dna-tech-theme') as 'light' | 'dark' | null;
    if (stored) return stored;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Scroll to top on page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Handle setting/removing light class on html element
  useEffect(() => {
    localStorage.setItem('dna-tech-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Respect system theme changes when user hasn't set a preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const syncWithSystem = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('dna-tech-theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    if (mq.addEventListener) mq.addEventListener('change', syncWithSystem);
    else mq.addListener(syncWithSystem);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', syncWithSystem);
      else mq.removeListener(syncWithSystem);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // View router selection helper
  const renderView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesView setCurrentPage={setCurrentPage} />;
      case 'solutions':
        return <SolutionsView setCurrentPage={setCurrentPage} />;
      case 'traction':
        return <TractionView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-[#051329] min-h-screen text-white flex flex-col justify-between selection:bg-white selection:text-[#0B2442] font-sans antialiased">
      <div>
        {/* Navigation bar Header */}
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          theme={theme}
          toggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        />
        
        {/* Primary Main Content Canvas with Animated Transition Overlay */}
        <main id="main-canvas" className="overflow-hidden">
          <PageTransitionOverlay currentPage={currentPage}>
            {renderView()}
          </PageTransitionOverlay>
        </main>
      </div>

      {/* Global Footer component */}
      <Footer currentView={currentPage} setView={setCurrentPage} />
    </div>
  );
}
