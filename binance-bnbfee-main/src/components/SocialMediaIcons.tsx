
import React from 'react';

export const SocialMediaIcons: React.FC = () => {
  const socialLinks = [
    { 
      icon: '🔵', 
      name: 'Facebook', 
      url: 'https://www.facebook.com/BinanceOfficial',
      bgColor: 'bg-blue-600'
    },
    { 
      icon: '🐦', 
      name: 'Twitter', 
      url: 'https://twitter.com/binance',
      bgColor: 'bg-blue-400'
    },
    { 
      icon: '📸', 
      name: 'Instagram', 
      url: 'https://www.instagram.com/binance/',
      bgColor: 'bg-pink-500'
    },
    { 
      icon: '📱', 
      name: 'Telegram', 
      url: 'https://t.me/binanceexchange',
      bgColor: 'bg-blue-500'
    },
    { 
      icon: '🎥', 
      name: 'YouTube', 
      url: 'https://www.youtube.com/c/BinanceOfficial',
      bgColor: 'bg-red-600'
    },
    { 
      icon: '💼', 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/binance/',
      bgColor: 'bg-blue-700'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {socialLinks.map((social, index) => (
        <button
          key={index}
          onClick={() => window.open(social.url, '_blank')}
          className={`flex flex-col items-center gap-2 p-3 ${social.bgColor} rounded-lg hover:opacity-80 transition-all transform hover:scale-105`}
        >
          <span className="text-2xl">{social.icon}</span>
          <span className="text-white text-xs font-medium">{social.name}</span>
        </button>
      ))}
    </div>
  );
};
