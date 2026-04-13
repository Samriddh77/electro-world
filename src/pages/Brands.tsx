import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Brands() {
  const brands = [
    { 
      name: 'RR KABEL', 
      desc: 'Global leader in wire and cable technology, known for safety and innovation.',
      logo: 'RR',
      color: '#000000',
      category: 'Wires & Cables'
    },
    { 
      name: 'HAVELLS', 
      desc: 'A leading Fast Moving Electrical Goods (FMEG) Company and a major power distribution equipment manufacturer.',
      logo: 'H',
      color: '#de1d26',
      category: 'Wires & Cables'
    },
    { 
      name: 'LAPP', 
      desc: 'German precision engineering for highly flexible cables, industrial connectors, and cable entry systems.',
      logo: 'L',
      color: '#f39200',
      category: 'Wires & Cables'
    },
    { 
      name: 'RPG', 
      desc: 'Trusted name in electrical and telecommunication cables with a focus on durability.',
      logo: 'F',
      color: '#0054a6',
      category: 'Electrical Cables'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <Helmet>
        <title>Our Brand Portfolio – RR Kabel, LAPP, Havells | Electro World</title>
        <meta name="description" content="Electro World is an authorized dealer for RR Kabel, LAPP, Havells and RPG in Indore, MP. Trusted brand partners for all industrial and domestic electrical needs." />
        <link rel="canonical" href="https://electro-world.in/brands" />
      </Helmet>
      <header className="mb-12 sm:mb-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">Authorized Distribution Partner</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase">Our Brand Portfolio</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant mt-4 sm:mt-6 text-sm sm:text-base px-4">
          We partner with the world's leading electrical manufacturers to bring you certified, high-performance products for every industrial and domestic requirement.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {brands.map((brand, i) => (
          <motion.div 
            key={brand.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 sm:p-12 border border-outline-variant/20 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
          >
            <div 
              className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center text-2xl sm:text-4xl font-black mb-6 sm:mb-8 rounded-full border-4 group-hover:bg-white group-hover:border-white transition-all"
              style={{ color: brand.color, borderColor: brand.color }}
            >
              {brand.logo}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface group-hover:text-white mb-2 tracking-tight">{brand.name}</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-white/80 mb-4 sm:mb-6">{brand.category}</span>
            <p className="text-sm text-on-surface-variant group-hover:text-white/70 leading-relaxed">{brand.desc}</p>
          </motion.div>
        ))}
      </div>

      <section className="mt-16 sm:mt-24 bg-surface-container p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4 sm:mb-6 tracking-tight">CAN'T FIND A SPECIFIC BRAND?</h2>
        <p className="text-on-surface-variant mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base">
          Our sourcing network extends beyond our primary partners. Contact our procurement team for specific brand requirements.
        </p>
        <button 
          onClick={() => window.open(`https://wa.me/9826037055?text=${encodeURIComponent('Hello, I am looking for a specific brand and need to consult the procurement team.')}`, '_blank')}
          className="bg-primary text-on-primary px-8 sm:px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-95 transition-transform"
        >
          Consult Procurement Team
        </button>
      </section>
    </div>
  );
}
