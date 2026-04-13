import { motion } from 'motion/react';
import { Phone, MessageSquare, Send, MapPin, ArrowUpRight, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    requirementType: 'Bulk Order Quote',
    message: ''
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

    const { error } = await supabase.from('contact_messages').insert([
      {
        full_name: sanitize(formData.fullName),
        business_email: sanitize(formData.businessEmail),
        requirement_type: formData.requirementType,
        message: sanitize(formData.message)
      }
    ]);

    setLoading(false);
    setLastSubmitTime(Date.now());
    if (error) {
      console.error('Contact submission error:', error);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
    } else {
      alert('Message successfully sent to our Technical Team!');
      setFormData({ fullName: '', businessEmail: '', requirementType: 'Bulk Order Quote', message: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <Helmet>
        <title>Contact Electro World – Electrical Distributor | Indore, MP</title>
        <meta name="description" content="Contact Electro World, Indore's authorized electrical distributor. Call 9826037055, visit us at New Siyaganj, or WhatsApp for instant quotes on cables and wires." />
        <link rel="canonical" href="https://electro-world.in/contact" />
      </Helmet>
      <div className="mb-12 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Get In Touch</span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-primary leading-none mb-4 sm:mb-6 uppercase">CONNECT WITH AUTHORITY.</h1>
        <p className="max-w-2xl text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Authorized Industrial Distributor providing precision electrical components. Visit our Indore headquarters or reach out via our direct priority lines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Left column */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Direct Calls */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-primary-container hover:text-white">
            <div>
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-4 sm:mb-6 group-hover:text-white" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Priority Sales Lines</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-white/70 mb-6 sm:mb-8">Click to dial our authorized representatives</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <a className="flex items-center justify-between font-bold border-b border-outline-variant pb-2 group-hover:border-white/20 text-sm sm:text-base" href="tel:9826037055">
                <span>9826037055</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </a>
              <a className="flex items-center justify-between font-bold border-b border-outline-variant pb-2 group-hover:border-white/20 text-sm sm:text-base" href="tel:9826037056">
                <span>9826037056</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </a>
              <a className="flex items-center justify-between font-bold border-b border-outline-variant pb-2 group-hover:border-white/20 text-sm sm:text-base" href="tel:0731245678">
                <span>0731-245678</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* WhatsApp Enquiry */}
          <div className="bg-secondary-container p-6 sm:p-8 flex flex-col justify-between text-on-secondary-container">
            <div>
              <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">WhatsApp Direct</h3>
              <p className="text-sm opacity-80 mb-6 sm:mb-8">Send technical specs or product images for instant quotes.</p>
            </div>
            <a className="bg-primary text-white py-4 px-6 font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors" href="https://wa.me/919826037055">
              START ENQUIRY
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Office Address */}
          <div className="bg-surface-container p-6 sm:p-8 sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-on-surface-variant mb-3 sm:mb-4">Indore Headquarters</h3>
                <p className="text-lg sm:text-xl font-bold leading-tight mb-3 sm:mb-4">
                  New Siyaganj, Indore,<br />Madhya Pradesh, 452007
                </p>
                <p className="text-on-surface-variant text-sm mb-4 sm:mb-6">Authorized distribution hub for central India.</p>
                <div className="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full">
                  <span className="text-xs font-bold uppercase tracking-tighter">GST: 23AAFFE6403N1ZH</span>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-sm uppercase tracking-widest font-bold text-on-surface-variant mb-3 sm:mb-4">Business Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-outline-variant pb-1">
                    <span className="font-medium">Monday - Saturday</span>
                    <span className="font-bold">10 AM – 8 PM</span>
                  </li>
                  <li className="flex justify-between text-on-surface-variant italic">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="sm:col-span-2 h-48 sm:h-64 bg-surface-dim relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/indoremap/1200/600?grayscale" 
              alt="Location Map" 
              className="w-full h-full object-cover opacity-50 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=New+Siyaganj+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-4 text-white flex flex-col items-center shadow-xl hover:bg-primary-container transition-colors"
              >
                <MapPin className="w-6 h-6" />
                <span className="text-xs font-bold mt-1">OPEN IN MAPS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:col-span-5 bg-surface-container-low p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary mb-2">QUICK MESSAGE</h2>
          <p className="text-on-surface-variant text-sm mb-8 sm:mb-10">Our technical team will respond within 2 business hours.</p>
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Full Name *</label>
              <input required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3 text-on-surface font-medium transition-all" placeholder="John Doe" type="text" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Business Email *</label>
              <input required value={formData.businessEmail} onChange={e => setFormData({...formData, businessEmail: e.target.value})} className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3 text-on-surface font-medium transition-all" placeholder="john@company.com" type="email" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Requirement Type</label>
              <select value={formData.requirementType} onChange={e => setFormData({...formData, requirementType: e.target.value})} className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3 text-on-surface font-medium transition-all">
                <option>Bulk Order Quote</option>
                <option>Technical Specification Query</option>
                <option>Order Status</option>
                <option>After-Sales Support</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message *</label>
              <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3 text-on-surface font-medium transition-all" placeholder="How can we help your business today?" rows={4}></textarea>
            </div>
            <button disabled={loading} className="w-full bg-primary text-white font-bold py-4 sm:py-5 hover:bg-primary-container transition-colors flex items-center justify-center gap-3 disabled:opacity-70" type="submit">
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'SUBMITTING...' : 'SUBMIT TECHNICAL ENQUIRY'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
