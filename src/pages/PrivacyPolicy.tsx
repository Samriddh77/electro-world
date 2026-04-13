import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-black text-primary mb-6 sm:mb-8 tracking-tighter">PRIVACY POLICY</h1>
      <p className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mb-12">Last Updated: April 2026</p>
      
      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">1. Information We Collect</h2>
          <p>
            Electro World collects information that you provide directly to us, such as when you request a quote, inquire about bulk industrial cables, or contact our support team. 
            This information may include your name, email address, phone number (including WhatsApp contact details), business name, and shipping address.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Process and fulfill your orders for electrical supplies and cables.</li>
            <li>Respond to your technical inquiries and provide requested product catalogues.</li>
            <li>Send you technical updates, safety certifications, and industry-related notices.</li>
            <li>Improve our website and customer service operations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">3. Data Sharing and Third Parties</h2>
          <p>
            We respect your privacy under all circumstances. We do not sell your personal information. We may share necessary details with trusted logistics partners strictly for the purpose of ensuring same-day dispatch and delivery of your requested industrial materials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">4. Security</h2>
          <p>
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <strong>electroworldindore03@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
