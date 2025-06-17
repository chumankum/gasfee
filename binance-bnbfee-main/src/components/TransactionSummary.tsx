
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

export const TransactionSummary: React.FC = () => {
  const [gasPrice, setGasPrice] = useState(20);
  
  const calculateEstimatedTime = (price: number) => {
    if (price <= 15) return '~5 minutes';
    if (price <= 25) return '~2 minutes';
    if (price <= 35) return '~1 minute';
    return '~30 seconds';
  };

  const calculateCost = (price: number) => {
    return (price * 0.000021).toFixed(4);
  };

  return (
    <div className="space-y-4 mb-6">
      {/* Gas Fee Slider */}
      <Card className="bg-gray-800 border-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-semibold">Gas Fee (Gwei):</h3>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Network Avg: <span className="text-yellow-500">35</span></p>
            <p className="text-gray-400 text-sm">Gwei</p>
          </div>
        </div>
        
        <div className="relative mb-4">
          <input
            type="range"
            min="1"
            max="100"
            value={gasPrice}
            onChange={(e) => setGasPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-gray-400 text-sm mt-2">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-yellow-500 text-2xl font-bold mb-2">{gasPrice} Gwei</p>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">⏱️ {calculateEstimatedTime(gasPrice)}</span>
            <span className="text-yellow-500">💰 ${calculateCost(gasPrice)}</span>
          </div>
        </div>
      </Card>

      {/* Transaction Summary */}
      <Card className="bg-gray-800 border-gray-700 p-4">
        <h3 className="text-white font-semibold mb-4">Transaction Summary</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Base Fee:</span>
            <span className="text-white">{Math.floor(gasPrice * 0.75)} Gwei</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Priority Fee:</span>
            <span className="text-white">{Math.floor(gasPrice * 0.25)} Gwei</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Max Fee:</span>
            <span className="text-white">{gasPrice} Gwei</span>
          </div>
          <div className="flex justify-between border-t border-gray-700 pt-2">
            <span className="text-white font-semibold">Estimated Cost:</span>
            <span className="text-yellow-500 font-semibold">${calculateCost(gasPrice)}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
