import { Clock, Phone, MessageSquare, ChevronRight, CloudUpload, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    whatsappNumber: '',
    customerType: 'Retail',
    city: '',
    productCategory: '',
    brandPreference: '',
    quantityRequired: '',
    requirementDetails: ''
  });

  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const sanitize = (val: string) => val.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      alert('Please wait a few seconds before submitting again.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('quote_requests').insert([
      {
        full_name: sanitize(formData.fullName),
        company_name: sanitize(formData.companyName),
        mobile_number: sanitize(formData.mobileNumber),
        whatsapp_number: sanitize(formData.whatsappNumber),
        customer_type: formData.customerType,
        city: sanitize(formData.city),
        product_category: sanitize(formData.productCategory),
        brand_preference: sanitize(formData.brandPreference),
        quantity_required: sanitize(formData.quantityRequired),
        requirement_details: sanitize(formData.requirementDetails)
      }
    ]);
    setLoading(false);
    setLastSubmitTime(Date.now());
    if (error) {
      console.error('Quote submission error:', error);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
    } else {
      alert('Quote Request Submitted Successfully! Our team will contact you shortly.');
      setFormData({ fullName: '', companyName: '', mobileNumber: '', whatsappNumber: '', customerType: 'Retail', city: '', productCategory: '', brandPreference: '', quantityRequired: '', requirementDetails: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <Helmet>
        <title>Request a Quote – Electro World | Bulk Electrical Orders Indore</title>
        <meta name="description" content="Get precise, competitive pricing for bulk electrical orders from Electro World. Submit your BOQ for RR Kabel, LAPP, Havells cables and wires. Authorized distributor in Indore, MP." />
        <link rel="canonical" href="https://electro-world.in/quote" />
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Info Panel */}
        <section className="lg:col-span-4 space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Quote Inquiry</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none">Precise Pricing for Industrial Projects.</h1>
            <p className="text-on-surface-variant text-base sm:text-lg font-normal leading-relaxed">
              Authorized distributor for premium electrical brands. Submit your Bill of Quantities (BOQ) or product lists for an official, verified quote.
            </p>
          </div>

          <div className="bg-surface-container p-6 sm:p-8 space-y-6 sm:space-y-8 rounded-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary-container text-on-primary w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-sm flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm uppercase tracking-wider">Fast Turnaround</h3>
                <p className="text-sm text-on-surface-variant">Get a response within 24 hours.</p>
              </div>
            </div>
            <div className="pt-6 border-t border-outline-variant/30 space-y-4 sm:space-y-6">
              <h3 className="font-bold text-on-surface text-xs uppercase tracking-[0.2em]">Immediate Assistance</h3>
              <a className="group flex items-center justify-between hover:bg-white p-3 -mx-3 transition-colors duration-200 rounded" href="tel:9826037055">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">9826037055</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline-variant group-hover:text-primary transition-colors" />
              </a>
              <a className="group flex items-center justify-between hover:bg-white p-3 -mx-3 transition-colors duration-200 rounded" href="https://wa.me/919826037055" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-5 h-5 text-green-700" />
                  <span className="text-sm font-bold">Chat on WhatsApp</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline-variant group-hover:text-green-700 transition-colors" />
              </a>
            </div>
          </div>

          <div className="relative aspect-video bg-surface-container overflow-hidden rounded-sm hidden sm:block">
            <img 
              alt="Industrial Electrical Components" 
              className="object-cover w-full h-full mix-blend-multiply opacity-60" 
              src="https://picsum.photos/seed/industrial/800/600"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Right Form Section */}
        <section className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-8 lg:p-12 shadow-[0_12px_32px_rgba(26,28,28,0.06)] border border-outline-variant/20">
          <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-7 sm:gap-y-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name *</label>
                <input required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Company Name</label>
                <input value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="Industrial Solutions Pvt Ltd" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Mobile Number *</label>
                <input required value={formData.mobileNumber} onChange={e => setFormData({...formData, mobileNumber: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="+91 00000 00000" type="tel" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">WhatsApp Number</label>
                <input value={formData.whatsappNumber} onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="+91 00000 00000" type="tel" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Customer Type</label>
                <select value={formData.customerType} onChange={e => setFormData({...formData, customerType: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm appearance-none">
                  <option>Retail</option>
                  <option>Contractor</option>
                  <option>Builder</option>
                  <option>Industrial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">City *</label>
                <input required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="Indore, MP" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Product Category *</label>
                <input required value={formData.productCategory} onChange={e => setFormData({...formData, productCategory: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="Switchgear, Cables, Lighting, etc." type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Brand Preference</label>
                <input value={formData.brandPreference} onChange={e => setFormData({...formData, brandPreference: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="Havells, Schneider, L&T, etc." type="text" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Quantity Required</label>
                <input required value={formData.quantityRequired} onChange={e => setFormData({...formData, quantityRequired: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm" placeholder="e.g. 500 Meters / 20 Units" type="text" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Requirement Details</label>
                <textarea value={formData.requirementDetails} onChange={e => setFormData({...formData, requirementDetails: e.target.value})} className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 transition-all px-4 py-3 text-sm resize-none" placeholder="Please provide specific models, ratings, or project constraints..." rows={4}></textarea>
              </div>
              <div className="sm:col-span-2 space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Upload BOQ or Product List (PDF/Excel/Image)</label>
                <label className="border-2 border-dashed border-outline-variant/50 p-6 sm:p-8 text-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group cursor-pointer block">
                  <input type="file" className="hidden" />
                  <CloudUpload className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-outline-variant group-hover:text-primary transition-colors" />
                  <p className="mt-2 text-sm font-medium text-on-surface-variant">Click to browse or drag and drop files here</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Maximum file size: 10MB</p>
                </label>
              </div>
            </div>
            <div className="pt-4 sm:pt-6">
              <button disabled={loading} className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 sm:px-12 py-4 font-black uppercase tracking-[0.2em] text-sm hover:scale-95 duration-150 ease-in-out flex items-center justify-center gap-2" type="submit">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
