import React, { useEffect, useState } from 'react';
import { supabase, QuoteRequest, ContactMessage } from '../lib/supabase';
import * as XLSX from 'xlsx';
import { Download, Table as TableIcon, Lock, Eye, EyeOff, RefreshCw } from 'lucide-react';

const ADMIN_PASSWORD = 'ElectroWorld@2026';

export default function Admin() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const isAuth = sessionStorage.getItem('ew_admin_auth');
    if (isAuth === 'true') {
      setAuthenticated(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem('ew_admin_auth', 'true');
      setAuthError('');
      fetchData();
    } else {
      setAuthError('Incorrect password. Access denied.');
      setPassword('');
    }
  };

  async function fetchData() {
    setLoading(true);
    try {
      const { data: quotesData, error: quotesError } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });
      if (quotesError) console.error('Error fetching quotes:', quotesError);

      const { data: contactsData, error: contactsError } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (contactsError) console.error('Error fetching contacts:', contactsError);

      if (quotesData) setQuotes(quotesData);
      if (contactsData) setContacts(contactsData);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    if (quotes.length > 0) {
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(quotes), "Quote Requests");
    } else {
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([{ Notice: "No Quote Requests yet" }]), "Quote Requests");
    }
    if (contacts.length > 0) {
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(contacts), "General Enquiries");
    } else {
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([{ Notice: "No General Enquiries yet" }]), "General Enquiries");
    }
    XLSX.writeFile(workbook, `ElectroWorld_Enquiries_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  // Login Gate
  if (!authenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-surface-container-lowest p-8 sm:p-10 border border-outline-variant/30 shadow-lg">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Lock className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-black tracking-tighter">Admin Access</h1>
          </div>
          <p className="text-sm text-on-surface-variant mb-6 sm:mb-8">This area is restricted. Enter the admin password to view enquiry data.</p>
          <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-3 text-sm pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {authError && (
              <p className="text-red-600 text-xs font-bold uppercase tracking-wider">{authError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 font-black uppercase tracking-widest text-sm hover:scale-[0.98] transition-transform"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12 border-b border-outline-variant/30 pb-5 sm:pb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Secure Area</span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tighter">Database Dashboard</h1>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <button
            onClick={fetchData}
            className="border border-outline-variant text-on-surface-variant flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-surface-container transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button 
            onClick={exportToExcel}
            className="bg-[#1D6F42] hover:bg-[#155331] text-white flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-sm"
          >
            <TableIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            Export Excel
          </button>
          <button
            onClick={() => { sessionStorage.removeItem('ew_admin_auth'); setAuthenticated(false); }}
            className="border border-outline-variant text-on-surface-variant px-4 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-surface-container transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-on-surface-variant animate-pulse">Connecting to Database...</div>
      ) : (
        <div className="space-y-12 sm:space-y-16">
          {/* Quotes Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">Recent Quote Enquiries ({quotes.length})</h2>
            {/* Mobile cards view */}
            <div className="sm:hidden space-y-4">
              {quotes.length === 0 ? (
                <p className="text-center text-on-surface-variant italic py-8 text-sm">No data found. Wait for a submission.</p>
              ) : quotes.map(q => (
                <div key={q.id} className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-sm space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-black text-on-surface">{q.full_name}</span>
                    <span className="text-xs text-on-surface-variant">{new Date(q.created_at || '').toLocaleDateString()}</span>
                  </div>
                  {q.company_name && <p className="text-sm text-on-surface-variant">{q.company_name}</p>}
                  <p className="text-sm font-medium">{q.mobile_number}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.product_category && <span className="text-[10px] bg-surface-container px-2 py-1 font-bold uppercase tracking-wider">{q.product_category}</span>}
                    {q.quantity_required && <span className="text-[10px] bg-secondary-fixed px-2 py-1 font-bold uppercase tracking-wider">{q.quantity_required}</span>}
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop table view */}
            <div className="hidden sm:block bg-surface-container-lowest border border-outline-variant/30 overflow-x-auto rounded-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface-container text-xs uppercase tracking-widest text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Mobile</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {quotes.map(q => (
                    <tr key={q.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">{new Date(q.created_at || '').toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold">{q.full_name}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{q.company_name}</td>
                      <td className="px-6 py-4">{q.mobile_number}</td>
                      <td className="px-6 py-4">{q.product_category}</td>
                      <td className="px-6 py-4">{q.quantity_required}</td>
                    </tr>
                  ))}
                  {quotes.length === 0 && (
                    <tr><td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant italic">No data found in Supabase. Check credentials or wait for a submission.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contacts Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">General Messages ({contacts.length})</h2>
            {/* Mobile cards view */}
            <div className="sm:hidden space-y-4">
              {contacts.length === 0 ? (
                <p className="text-center text-on-surface-variant italic py-8 text-sm">No data found.</p>
              ) : contacts.map(c => (
                <div key={c.id} className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-sm space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-black text-on-surface">{c.full_name}</span>
                    <span className="text-xs text-on-surface-variant">{new Date(c.created_at || '').toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-primary">{c.business_email}</p>
                  <span className="text-[10px] bg-surface-container px-2 py-1 font-bold uppercase tracking-wider inline-block">{c.requirement_type}</span>
                  <p className="text-sm text-on-surface-variant line-clamp-2">{c.message}</p>
                </div>
              ))}
            </div>
            {/* Desktop table view */}
            <div className="hidden sm:block bg-surface-container-lowest border border-outline-variant/30 overflow-x-auto rounded-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface-container text-xs uppercase tracking-widest text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Message Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {contacts.map(c => (
                    <tr key={c.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">{new Date(c.created_at || '').toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold">{c.full_name}</td>
                      <td className="px-6 py-4">{c.business_email}</td>
                      <td className="px-6 py-4">{c.requirement_type}</td>
                      <td className="px-6 py-4 text-on-surface-variant truncate max-w-xs">{c.message}</td>
                    </tr>
                  ))}
                  {contacts.length === 0 && (
                    <tr><td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant italic">No data found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
