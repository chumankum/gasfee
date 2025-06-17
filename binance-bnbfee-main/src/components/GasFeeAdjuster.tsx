
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinanceLogo } from '@/components/BinanceLogo';
import { SSLTransactionLogo } from '@/components/SSLTransactionLogo';
import { WalletIcon } from '@/components/WalletIcon';
import { NetworkStatus } from '@/components/NetworkStatus';
import { TransactionSettings } from '@/components/TransactionSettings';
import { TransactionSummary } from '@/components/TransactionSummary';

interface GasFeeAdjusterProps {
  onGetStarted: () => void;
  onNetworkClick: () => void;
  onResourcesClick: () => void;
}

export const GasFeeAdjuster: React.FC<GasFeeAdjusterProps> = ({
  onGetStarted,
  onNetworkClick,
  onResourcesClick
}) => {
  const handleGetStarted = async () => {
    console.log('Switching to BNB Smart Chain...');
    onGetStarted();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      {/* Binance DEX Header Image */}
      <div className="text-center mb-6">
        <img 
          src="/lovable-uploads/66089ba3-4478-4e01-9292-7f347e92156e.png" 
          alt="Binance DEX"
          className="w-full max-w-sm mx-auto object-contain mb-4"
        />
      </div>

      {/* Binance Header Logo */}
      <div className="text-center mb-6">
        <BinanceLogo size={60} showText={true} />
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold">
            🛡️ Official Binance Wallet dApp
          </div>
          <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
            ✓ Verified
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">Gas Fee Adjuster</h1>
        <p className="text-gray-300 text-lg">
          Optimize your transaction speed and cost
        </p>
      </div>

      {/* Connected Wallet */}
      <Card className="bg-gray-800 border-gray-700 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <WalletIcon />
          <div>
            <p className="text-gray-400 text-sm">Connected Wallet</p>
            <p className="text-white font-mono">0x1a2...3b4c</p>
          </div>
        </div>
        
        <div>
          <p className="text-gray-400 text-sm mb-1">Balance</p>
          <p className="text-green-400 text-xl font-bold">0.245 BNB</p>
        </div>
      </Card>

      {/* Security Notice */}
      <div className="text-center mb-6">
        <p className="text-yellow-500 font-semibold">Secured by Binance Wallet</p>
      </div>

      {/* Get Started Button */}
      <Button 
        onClick={handleGetStarted}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-6 mb-6"
      >
        Get Started →
      </Button>

      {/* Security Protocol */}
      <div className="flex items-center justify-center gap-2 mb-6 text-gray-400 text-sm">
        <SSLTransactionLogo />
        This transaction is protected by Binance Wallet's security protocols
      </div>

      {/* Network Selection */}
      <Card className="bg-gray-800 border-gray-700 p-4 mb-6">
        <p className="text-white mb-3">Network:</p>
        <Button 
          onClick={onNetworkClick}
          variant="outline" 
          className="w-full justify-between bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
        >
          <div className="flex items-center gap-2">
            <BinanceLogo size={20} />
            BNB Smart Chain
          </div>
          <span>▼</span>
        </Button>
      </Card>

      {/* Network Status */}
      <NetworkStatus />

      {/* Transaction Settings */}
      <TransactionSettings />

      {/* Transaction Summary */}
      <TransactionSummary />

      {/* Resources Button */}
      <Button 
        onClick={onResourcesClick}
        variant="outline"
        className="w-full mt-6 bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
      >
        Binance Wallet Resources
      </Button>
    </div>
  );
};
