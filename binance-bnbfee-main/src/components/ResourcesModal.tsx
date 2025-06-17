
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinanceLogo } from '@/components/BinanceLogo';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';

interface ResourcesModalProps {
  onClose: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({ onClose }) => {
  const resources = [
    {
      icon: '💰',
      title: 'Binance Earn',
      description: 'Stake your assets and earn passive income'
    },
    {
      icon: '🌐',
      title: 'DApp Browser',
      description: 'Explore decentralized applications'
    },
    {
      icon: '💼',
      title: 'Supported Assets',
      description: 'View all supported cryptocurrencies'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-gray-800 border-gray-700 p-6 w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-bold">Binance Resources</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-gray-400 hover:text-white p-2"
          >
            ✕
          </Button>
        </div>

        <div className="space-y-4 mb-6">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600 p-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{resource.icon}</div>
                <div>
                  <h3 className="text-white font-semibold">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-6">
          <BinanceLogo size={48} showText={true} />
          <h3 className="text-yellow-500 text-3xl font-bold mt-4 mb-2">WEB3</h3>
          <p className="text-gray-400 mb-4">The most trusted & secure crypto wallet</p>
        </div>

        {/* Social Media Icons */}
        <SocialMediaIcons />

        <div className="space-y-3 text-center text-gray-400">
          <button 
            onClick={() => window.open('https://www.binance.com', '_blank')}
            className="flex items-center justify-center gap-2 w-full text-white hover:text-yellow-500"
          >
            🌐 Official Website
          </button>
          <button 
            onClick={() => window.open('https://www.binance.com/en/support', '_blank')}
            className="flex items-center justify-center gap-2 w-full text-white hover:text-yellow-500"
          >
            ❓ Support
          </button>
          <button 
            onClick={() => window.open('https://www.binance.com/en/terms', '_blank')}
            className="flex items-center justify-center gap-2 w-full text-white hover:text-yellow-500"
          >
            📄 Terms of Service
          </button>
          <button 
            onClick={() => window.open('https://www.binance.com/en/privacy', '_blank')}
            className="flex items-center justify-center gap-2 w-full text-white hover:text-yellow-500"
          >
            🛡️ Privacy Policy
          </button>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-sm">© 2025 Binance. All rights reserved.</p>
        </div>
      </Card>
    </div>
  );
};
