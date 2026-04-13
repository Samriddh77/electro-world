import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Globe, ChevronRight, Clock, MessageSquare, CloudUpload, Send, Factory, Cable, Cpu } from 'lucide-react';
import React, { useEffect } from 'react';
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
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Brands', path: '/brands' },
    { name: 'Request a Quote', path: '/quote' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto py-4">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary-container">
            Electro World
          </Link>
          <div className="hidden md:flex gap-8 items-center font-headline font-bold tracking-tight text-sm">
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
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Direct Support</span>
              <span className="text-sm font-black text-primary">9826037055</span>
            </div>
          </div>
        </div>
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
        <div className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-1">
            <div className="text-lg font-bold text-gray-900 mb-6">Electro World</div>
            <p className="text-xs text-gray-500 font-body uppercase tracking-widest leading-relaxed">
              Trusted industrial distribution partners for leading electrical brands in Central India.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Location</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">New Siyaganj, Indore</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Madhya Pradesh</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Communication</span>
            <a href="mailto:electroworldindore03@gmail.com" className="text-xs text-gray-500 hover:text-gray-900 transition-colors lowercase tracking-widest">
              electroworldindore03@gmail.com
            </a>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Support: 9826037055</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Legal</span>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] font-body uppercase tracking-widest text-gray-400">© 2024 Electro World. GST: 23AAFFE6403N1ZH</span>
            <div className="flex gap-6">
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
