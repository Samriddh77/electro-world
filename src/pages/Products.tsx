import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/productData';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <Helmet>
        <title>Electrical Products &amp; Cables – Electro World | Indore Distributor</title>
        <meta name="description" content="Browse Electro World's full range of electrical products in Indore: house wires, armoured cables, fire alarm cables, submersible cables, HVAC cables & more. Authorized RR Kabel, LAPP, Havells dealer." />
        <link rel="canonical" href="https://electro-world.in/products" />
      </Helmet>
      <header className="mb-10 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">Authorized Industrial Distributor</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none mb-4 sm:mb-6">Electrical Solutions &amp; Cables</h1>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-xl">
              Explore our comprehensive range of high-conductivity wires and heavy-duty industrial cables. Select a category below to view our specific products and size availability.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="bg-surface-container p-5 sm:p-6 rounded-sm border-l-4 border-secondary w-full md:max-w-xs">
              <p className="text-sm font-medium text-on-surface mb-2">Technical Documentation</p>
              <p className="text-xs text-on-surface-variant mb-4 leading-snug">Access the full 2024 product line specifications and safety certifications.</p>
              <button 
                onClick={() => window.open(`https://wa.me/9826037055?text=${encodeURIComponent('Hello! I would like to request the latest Electro World technical product catalogue.')}`, '_blank')}
                className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
              >
                Download Full Catalogue
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {productCategories.map((product, i) => (
          <Link to={`/products/${product.id}`} key={product.id} className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col bg-surface-container-lowest border border-transparent hover:border-outline-variant transition-all duration-300 h-full cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-container relative">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-primary-container text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">{product.tag}</span>
                </div>
              </div>
              <div className="p-5 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed line-clamp-3">{product.desc}</p>
                <div className="mt-auto">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 sm:mb-3">Available Variants</span>
                  <p className="text-xs font-medium text-on-surface-variant mb-4">{product.variants.length} products inside</p>
                  <div className="w-full bg-secondary-container text-on-secondary-container py-3 sm:py-4 flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest group-hover:bg-secondary transition-colors">
                    View Specifications
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <section className="mt-16 sm:mt-24 bg-primary p-8 sm:p-12 md:p-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-center">
          <Download className="w-40 h-40 sm:w-64 sm:h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">Bulk Order Requirements?</h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            As an authorized distributor, we offer specialized pricing and logistical support for large-scale industrial projects and retail partners across Central India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote" className="bg-secondary-container flex items-center justify-center text-on-secondary-container px-8 sm:px-10 py-4 font-black text-sm uppercase tracking-[0.1em] hover:bg-secondary transition-all text-center">Request a Bulk Quote</Link>
            <button 
              onClick={() => window.open(`https://wa.me/9826037055?text=${encodeURIComponent('Hello, I need to speak to a technical expert regarding some electrical requirements.')}`, '_blank')}
              className="border-2 border-white text-white px-8 sm:px-10 py-4 font-black text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-primary transition-all"
            >
              Speak to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
