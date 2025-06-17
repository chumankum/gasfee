
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const TransactionSettings: React.FC = () => {
  const [speed, setSpeed] = useState<'economy' | 'standard' | 'fast'>('standard');

  return (
    <Card className="bg-gray-800 border-gray-700 p-4 mb-6">
      <h3 className="text-white font-semibold mb-4">Transaction Speed</h3>
      
      <div className="space-y-2">
        <Button
          onClick={() => setSpeed('economy')}
          variant={speed === 'economy' ? 'default' : 'outline'}
          className={`w-full justify-between ${
            speed === 'economy' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
          }`}
        >
          <div className="text-left">
            <div className="font-semibold">Economy</div>
            <div className="text-sm opacity-75">Lower cost, slower</div>
          </div>
        </Button>

        <Button
          onClick={() => setSpeed('standard')}
          variant={speed === 'standard' ? 'default' : 'outline'}
          className={`w-full justify-between ${
            speed === 'standard' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
          }`}
        >
          <div className="text-left">
            <div className="font-semibold">Standard</div>
            <div className="text-sm opacity-75">Balanced option</div>
          </div>
        </Button>

        <Button
          onClick={() => setSpeed('fast')}
          variant={speed === 'fast' ? 'default' : 'outline'}
          className={`w-full justify-between ${
            speed === 'fast' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
          }`}
        >
          <div className="text-left">
            <div className="font-semibold">Fast</div>
            <div className="text-sm opacity-75">Higher cost, faster</div>
          </div>
        </Button>
      </div>
    </Card>
  );
};
