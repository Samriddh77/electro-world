import { motion } from 'motion/react';
import { ShieldCheck, Package, Truck, Handshake, ArrowRight, Home as HomeIcon, Factory, Cable, Cpu, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const categories = [
    {
      title: 'House Wires',
      desc: 'Flame retardant, low smoke domestic wiring solutions.',
      icon: <HomeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
      link: '/products'
    },
    {
      title: 'Industrial Cables',
      desc: 'High-performance power delivery for heavy machinery.',
      icon: <Factory className="w-10 h-10 sm:w-12 sm:h-12" />,
      link: '/products'
    },
    {
      title: 'Armoured Cables',
      desc: 'Underground protection with steel wire/tape armoring.',
      icon: <Cable className="w-10 h-10 sm:w-12 sm:h-12" />,
      link: '/products'
    },
    {
      title: 'Flexible Wires',
      desc: 'Multi-core flexible cables for control and circuitry.',
      icon: <Cpu className="w-10 h-10 sm:w-12 sm:h-12" />,
      link: '/products'
    }
  ];

  const brands = [
    { name: 'RR KABEL', sub: 'Global Power', color: '#000000' },
    { name: 'HAVELLS', sub: 'Authorized Partner', color: '#de1d26' },
    { name: 'RPG', sub: 'Industrial Heavy', color: '#004a99' },
    { name: 'LAPP', sub: 'German Precision', color: '#f39200' }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Electro World – Authorized Electrical Distributor | Indore, MP</title>
        <meta name="description" content="Electro World is Indore's premier authorized distributor for RR Kabel, LAPP, Havells & more. House wires, industrial cables, armoured cables, fire alarm cables & all electrical products across Central India." />
        <link rel="canonical" href="https://electro-world.in/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center z-10"
          >
            <div className="inline-block bg-secondary-fixed px-3 py-1 mb-4 sm:mb-6 w-fit">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-fixed">Authorized Industrial Distributor</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-primary leading-[0.9] mb-4 sm:mb-6">
              TRUSTED WIRES &amp; CABLES FOR EVERY REQUIREMENT.
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl mb-6 sm:mb-10 leading-relaxed">
              Based in Indore, we are a legacy institution providing high-precision electrical solutions. From domestic wiring to heavy-duty industrial armored cables.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link to="/quote" className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm uppercase tracking-widest hover:scale-95 transition-transform duration-150">
                Enquire Now
              </Link>
              <Link to="/products" className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm uppercase tracking-widest hover:bg-surface-container-low transition-colors">
                View Products
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group hidden sm:block"
          >
            <div className="absolute -inset-4 bg-surface-container transform rotate-3 -z-10 group-hover:rotate-0 transition-transform"></div>
            <img 
              className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
              src="https://picsum.photos/seed/electrical/800/1000" 
              alt="Industrial Cables"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-primary-container p-4 sm:p-6 text-on-primary max-w-[160px] sm:max-w-[200px]">
              <span className="block text-3xl sm:text-4xl font-black mb-1">25+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Years of Engineering Trust</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-container-low py-12 sm:py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-on-surface">Authorized Distributor</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Factory className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-on-surface">Genuine Products</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-on-surface">Same-Day Dispatch</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-on-surface">Trusted Supply Partner</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-primary">PRODUCT CATEGORIES</h2>
              <div className="h-1 w-20 bg-secondary mt-3 sm:mt-4"></div>
            </div>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-6 sm:p-8 flex flex-col group hover:bg-primary-container transition-colors duration-300"
              >
                <div className="text-primary group-hover:text-on-primary transition-colors">
                  {cat.icon}
                </div>
                <h4 className="mt-6 sm:mt-8 font-black text-lg sm:text-xl tracking-tight text-on-surface group-hover:text-on-primary transition-colors">{cat.title}</h4>
                <p className="mt-3 sm:mt-4 text-sm text-on-surface-variant group-hover:text-on-primary/80 transition-colors">{cat.desc}</p>
                <Link to={cat.link} className="mt-6 sm:mt-8 text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-white">Learn More</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-surface-container py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">Trusted Partnerships</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-primary">OUR BRANDS</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-outline-variant/30">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-surface-container-lowest py-10 sm:py-16 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer px-2">
                <span className="text-xl sm:text-3xl font-black tracking-tighter text-center" style={{ color: brand.color }}>{brand.name}</span>
                <span className="text-[10px] mt-2 font-bold uppercase tracking-widest opacity-50 text-center">{brand.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-16 sm:py-24 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[80px] sm:text-[120px] font-black text-surface-container-high -z-10 select-none opacity-20">ELECTRO</div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-primary mb-8 sm:mb-12">THE INDUSTRIAL ARCHITECT</h2>
            <div className="space-y-8 sm:space-y-10">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary flex items-center justify-center">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-on-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 uppercase">EXTENSIVE READY STOCK</h4>
                  <p className="text-sm text-on-surface-variant">We maintain a vast inventory to ensure your project timelines are never compromised by supply delays.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-on-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 uppercase">UNCOMPROMISED QUALITY</h4>
                  <p className="text-sm text-on-surface-variant">Direct sourcing from manufacturers guarantees 100% genuine industrial-grade electrical components.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-on-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 uppercase">TECHNICAL ADVISORY</h4>
                  <p className="text-sm text-on-surface-variant">Our team provides expert consultation on cable sizing and specification requirements for complex layouts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 sm:p-12 text-on-primary">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">READY TO POWER YOUR NEXT PROJECT?</h3>
            <p className="mb-6 sm:mb-10 text-on-primary/80">Get our latest technical catalogue and price lists directly in your inbox.</p>
            <div className="space-y-4">
              <input 
                className="w-full bg-white/10 border-none focus:ring-2 focus:ring-secondary text-white placeholder:text-white/50 py-4 px-6" 
                placeholder="Your Email Address" 
                type="email"
              />
              <button 
                onClick={() => window.open(`https://wa.me/9826037055?text=${encodeURIComponent('Hello! I would like to request the latest Electro World technical product catalogue.')}`, '_blank')}
                className="w-full bg-secondary-container text-on-secondary-container py-4 font-black uppercase tracking-widest hover:scale-[0.98] transition-transform"
              >
                Download Catalogue
              </button>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 flex items-center gap-4">
              <MessageSquare className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-bold uppercase tracking-widest">WhatsApp Quote: 9826037055</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
