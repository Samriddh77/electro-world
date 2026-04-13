import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-6 sm:mb-8 tracking-tighter">TERMS OF SERVICE & CONDITIONS OF SALE</h1>
      <p className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mb-12">Last Updated: April 2026</p>
      
      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Electro World website and purchasing our products, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service or purchase electrical supplies from us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">2. Industrial Products and Compliance</h2>
          <p>
            You agree that all electrical wires, cables, and accessories purchased from Electro World (including but not limited to items from RR KABEL, LAPP, HAVELLS, and RPG) will be installed and utilized strictly up to standard technical safety codes. Electro World holds no responsibility for damages or structural failures caused by improper use, unqualified installation, or deployment of cables outside of their intended industrial parameters.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">3. Limitation of Liability</h2>
          <p>
            In no event shall Electro World, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, downtime, or property damage resulting from electrical failure or the use of our products. All manufacturer warranties are passed through directly to the buyer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">4. Quotes and Custom Orders</h2>
          <p>
            Any quotation provided via email or WhatsApp remains valid for 7 days unless explicitly stated otherwise due to volatile copper and aluminum market pricing. Goods cut to specific lengths at your request cannot be returned unless demonstrably defective upon delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-on-surface mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Madhya Pradesh, India, without regard to its conflict of law provisions. Disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Indore.
          </p>
        </section>
      </div>
    </div>
  );
}
