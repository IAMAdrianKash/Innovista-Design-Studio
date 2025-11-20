'use client'


import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: October 24, 2023</p>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <p>
              This Cookie Policy explains what cookies are, how Innovista Design Studio uses them on our website, and your choices regarding their use.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">How we use cookies</h2>
            <p className="mb-4">We use cookies for several reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</li>
              <li><strong>Analytics Cookies:</strong> We use tools like Google Analytics to understand how visitors interact with our website. This helps us improve the user experience and content.</li>
              <li><strong>Marketing Cookies:</strong> These cookies may be used to track visitors across websites to display ads that are relevant and engaging.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
            </p>
          </section>

           <section>
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at hello@innovista.design.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
