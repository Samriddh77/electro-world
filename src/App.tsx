import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Globe, ChevronRight, Clock, MessageSquare, CloudUpload, Send, Factory, Cable, Cpu, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import ProductCategory from './pages/ProductCategory';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Brands', path: '/brands' },
    { name: 'Request a Quote', path: '/quote' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-4">
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter text-primary-container">
            Electro World
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center font-headline font-bold tracking-tight text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors hover:text-primary-container ${
                  location.pathname === link.path 
                    ? 'text-primary-container border-b-2 border-primary-container pb-1' 
                    : 'text-gray-600 font-medium'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Direct Support</span>
              <span className="text-sm font-black text-primary">9826037055</span>
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-surface border-t border-outline-variant/10"
            >
              <div className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-3 px-4 font-bold text-sm uppercase tracking-widest rounded transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-container/10 text-primary-container'
                        : 'text-gray-700 hover:bg-surface-container'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:9826037055"
                  className="mt-3 py-3 px-4 bg-primary text-white font-black text-sm uppercase tracking-widest text-center rounded"
                >
                  Call: 9826037055
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-gray-100">
        <div className="w-full py-10 px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-bold text-gray-900 mb-4">Electro World</div>
            <p className="text-xs text-gray-500 font-body uppercase tracking-widest leading-relaxed">
              Trusted industrial distribution partners for leading electrical brands in Central India.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Location</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">New Siyaganj, Indore</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Madhya Pradesh</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Communication</span>
            <a href="mailto:electroworldindore03@gmail.com" className="text-xs text-gray-500 hover:text-gray-900 transition-colors break-all lowercase tracking-widest">
              electroworldindore03@gmail.com
            </a>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Support: 9826037055</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Legal</span>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <span className="text-[10px] font-body uppercase tracking-widest text-gray-400">© 2024 Electro World. GST: 23AAFFE6403N1ZH</span>
            <div className="flex gap-4 items-center">
              <Globe className="w-4 h-4 text-gray-400 cursor-pointer hover:text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Indore Division</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<ProductCategory />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
    </HelmetProvider>
  );
}
