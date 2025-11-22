'use client'

import React, { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      href: shareLinks.twitter,
      color: 'hover:bg-[#1DA1F2] hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: shareLinks.linkedin,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      href: shareLinks.facebook,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-600">Share:</span>
      <div className="flex items-center gap-2">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all ${button.color}`}
            aria-label={`Share on ${button.name}`}
          >
            {button.icon}
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all"
          aria-label="Copy link"
        >
          {copied ? <Check size={18} /> : <Link2 size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
