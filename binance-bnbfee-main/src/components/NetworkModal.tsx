
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinanceLogo } from '@/components/BinanceLogo';

interface NetworkModalProps {
  onClose: () => void;
}

export const NetworkModal: React.FC<NetworkModalProps> = ({ onClose }) => {
  const networks = [
    { name: 'BNB Smart Chain', icon: <BinanceLogo />, selected: true },
    { name: 'Ethereum', icon: '⟠', selected: false },
    { name: 'Polygon', icon: '⬢', selected: false },
    { name: 'Arbitrum', icon: '🔷', selected: false },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-gray-800 border-gray-700 p-6 w-full max-w-md animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-bold">Select Network</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-gray-400 hover:text-white p-2"
          >
            ✕
          </Button>
        </div>

        <div className="space-y-3">
          {networks.map((network) => (
            <Button
              key={network.name}
              onClick={onClose}
              variant="outline"
              className={`w-full justify-start gap-3 p-4 ${
                network.selected 
                  ? 'bg-yellow-500 text-black border-yellow-500' 
                  : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
              }`}
            >
              <span className="text-xl">{network.icon}</span>
              {network.name}
              {network.selected && <span className="ml-auto">✓</span>}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};
