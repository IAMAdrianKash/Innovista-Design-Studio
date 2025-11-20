'use client'


import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: October 24, 2023</p>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <p className="mb-4">
              Innovista Design Studio ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
            </p>
            <p>
              This policy describes the types of information we may collect from you or that you may provide when you visit the website innovista.design (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our Website, including information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
              <li><strong>Usage Details:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">3. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">4. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">5. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <p className="mt-4 font-medium text-[#1A1A1A]">
              hello@innovista.design
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
