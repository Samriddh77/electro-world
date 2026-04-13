import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, ShieldCheck } from 'lucide-react';
import { productCategories } from '../data/productData';
import { Helmet } from 'react-helmet-async';

export default function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = productCategories.find(c => c.id === categoryId);
  const whatsappNumber = "9826037055";

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-32 text-center">
        <h2 className="text-3xl font-black mb-4">Category Not Found</h2>
        <Link to="/products" className="text-primary hover:underline">Return to Products</Link>
      </div>
    );
  }

  const handleWhatsapp = (variantName: string, sizes?: string) => {
    let msg = `Hello, I want to enquire about ${variantName}.`;
    if (sizes) msg += ` (Sizes: ${sizes})`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <Helmet>
        <title>{category.title} – Electro World | Authorized Dealer Indore</title>
        <meta name="description" content={`Buy ${category.title} in Indore from Electro World. Authorized distributor for ${category.variants.map(v => v.brands).flat().filter((b,i,a)=>a.indexOf(b)===i).join(', ')}. ${category.desc}`} />
        <meta name="keywords" content={`${category.title} Indore, buy ${category.title} MP, ${category.title} supplier, ${category.variants.map(v=>v.name).join(', ')}`} />
        <link rel="canonical" href={`https://electro-world.in/products/${categoryId}`} />
      </Helmet>
      <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to All Products
      </Link>

      <header className="mb-16 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">{category.tag}</span>
          <h1 className="text-5xl font-black text-primary tracking-tighter leading-none mb-6">{category.title}</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {category.desc}
          </p>
        </div>
      </header>

      {/* Grid format similar to the Products overview page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.variants.map((variant, i) => (
          <motion.div 
            key={variant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col bg-surface-container-lowest border border-transparent hover:border-outline-variant transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Image section */}
            <div className="aspect-[4/3] overflow-hidden bg-surface-container relative">
              <img 
                src={variant.img} 
                alt={variant.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {variant.brands.map(brand => (
                  <span key={brand} className="bg-primary-container text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-black text-on-surface tracking-tight mb-3 group-hover:text-primary transition-colors">{variant.name}</h3>

              {variant.description && (
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3">{variant.description}</p>
              )}

              {/* Data specifications */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {variant.sizes && (
                  <div className="col-span-2">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Available Sizes</span>
                    <span className="text-sm font-medium text-on-surface">{variant.sizes}</span>
                  </div>
                )}
                {variant.packing && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Packing Length</span>
                    <span className="text-xs font-medium text-on-surface">{variant.packing}</span>
                  </div>
                )}
                {variant.colors && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Colors</span>
                    <span className="text-xs font-medium text-on-surface">{variant.colors}</span>
                  </div>
                )}
              </div>

              {/* Footer action */}
              <div className="mt-auto pt-6 border-t border-outline-variant/30">
                <button 
                  onClick={() => handleWhatsapp(variant.name, variant.sizes)}
                  className="w-full bg-[#25D366] text-white py-4 px-6 shadow-sm flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest hover:bg-[#128C7E] transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Enquire Now
                </button>
                <div className="flex items-center gap-2 mt-4 justify-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  Authorized Retailer
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
