'use client'


import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: October 24, 2023</p>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the innovista.design website (the "Service") operated by Innovista Design Studio ("us", "we", or "our").
            </p>
            <p className="mt-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">1. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Innovista Design Studio and its licensors. The Service is protected by copyright, trademark, and other laws of both Canada and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Innovista Design Studio.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">2. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Innovista Design Studio.
            </p>
            <p className="mt-4">
              Innovista Design Studio has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Innovista Design Studio shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">3. Limitation of Liability</h2>
            <p>
              In no event shall Innovista Design Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">4. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Alberta, Canada, without regard to its conflict of law provisions.
            </p>
            <p className="mt-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">5. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at hello@innovista.design.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
