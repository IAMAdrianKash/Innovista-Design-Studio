import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { PageType } from '../../App';

interface Props {
  onNavigate: (page: PageType) => void;
}

const MobileStickyBar: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 p-4 z-40 md:hidden flex gap-4 items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-safe">
      <a 
        href="mailto:hello@innovista.design"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark font-bold text-sm active:bg-gray-50 transition-colors"
      >
        <Mail size={16} />
        Email Us
      </a>
      <button 
        onClick={() => onNavigate('audit')}
        className="flex-[1.5] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-forest text-white font-bold text-sm shadow-lg shadow-forest/20 active:scale-[0.98] transition-all"
      >
        Get Free Audit
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default MobileStickyBar;