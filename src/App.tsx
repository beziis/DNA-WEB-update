/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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

// App component with theme & routing support
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const stored = localStorage.getItem('dna-tech-theme');
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          return 'light';
        }
      }
    } catch {
      // Fallback if localStorage or matchMedia is restricted
    }
    return 'dark';
  });

  // Scroll to top on page changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }, [currentPage]);

  // Handle setting/removing light class on html element
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        localStorage.setItem('dna-tech-theme', theme);
      }
    } catch {
      // Ignore localStorage write failures
    }

    if (typeof document !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  }, [theme]);

  // Respect system theme changes when user hasn't set a preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    try {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const syncWithSystem = (e: MediaQueryListEvent | MediaQueryList) => {
        try {
          const stored = localStorage.getItem('dna-tech-theme');
          if (!stored) {
            setTheme(e.matches ? 'light' : 'dark');
          }
        } catch {
          setTheme(e.matches ? 'light' : 'dark');
        }
      };

      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', syncWithSystem);
      } else if (typeof (mq as any).addListener === 'function') {
        (mq as any).addListener(syncWithSystem);
      }

      return () => {
        if (typeof mq.removeEventListener === 'function') {
          mq.removeEventListener('change', syncWithSystem);
        } else if (typeof (mq as any).removeListener === 'function') {
          (mq as any).removeListener(syncWithSystem);
        }
      };
    } catch {
      // Ignore media query listener failures
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev: 'light' | 'dark') => (prev === 'light' ? 'dark' : 'light'));
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
          toggleTheme={toggleTheme}
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
