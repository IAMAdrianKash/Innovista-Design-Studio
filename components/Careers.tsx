import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Globe, Coffee } from 'lucide-react';

const Careers: React.FC = () => {
  const roles = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote (Canada)",
      dept: "Engineering"
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Edmonton / Hybrid",
      dept: "Design"
    },
    {
      title: "Digital Strategist",
      type: "Full-time",
      location: "Remote",
      dept: "Strategy"
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Do the best work <br />
            of your <span className="italic font-light text-[#8C8C8C]">life.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            We're building a team of obsession-level craftspeople. No politics. No busy work. Just world-class digital products for clients who trust us.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#1A1A1A]" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">People First</h3>
              <p className="text-gray-600">We don't burn people out. 4-day work weeks in summer, unlimited PTO, and respect for your life outside of work.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-[#1A1A1A]" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Work From Anywhere</h3>
              <p className="text-gray-600">We are remote-first. As long as you have a good internet connection and overlap with Mountain Time, we don't care where you are.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="text-[#1A1A1A]" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Mastery Over Management</h3>
              <p className="text-gray-600">We value makers. You won't be stuck in meetings all day. We protect your flow state so you can build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12">Open Positions</h2>
        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div key={idx} className="group flex items-center justify-between p-8 bg-white border border-gray-100 rounded-2xl hover:border-dark hover:shadow-lg transition-all cursor-pointer">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-1 group-hover:text-gray-600 transition-colors">{role.title}</h3>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{role.dept}</span>
                  <span>•</span>
                  <span>{role.type}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-8 bg-gray-50 rounded-2xl text-center">
             <h3 className="font-bold text-xl mb-2">Don't see your role?</h3>
             <p className="text-gray-600 mb-6">We're always looking for talent. Send your portfolio to <a href="mailto:hello@innovista.design" className="text-dark font-bold underline">hello@innovista.design</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;