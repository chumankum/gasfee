
import React, { useState } from 'react';
import { GasFeeAdjuster } from '@/components/GasFeeAdjuster';
import { NetworkModal } from '@/components/NetworkModal';
import { TransactionModal } from '@/components/TransactionModal';
import { ResourcesModal } from '@/components/ResourcesModal';

const Index = () => {
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [transactionState, setTransactionState] = useState<'loading' | 'confirming' | 'success'>('loading');

  const handleGetStarted = () => {
    setTransactionState('loading');
    setShowTransactionModal(true);
    
    // Simulate transaction flow
    setTimeout(() => {
      setTransactionState('confirming');
    }, 2000);
    
    setTimeout(() => {
      setTransactionState('success');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <GasFeeAdjuster 
        onGetStarted={handleGetStarted}
        onNetworkClick={() => setShowNetworkModal(true)}
        onResourcesClick={() => setShowResourcesModal(true)}
      />
      
      {showNetworkModal && (
        <NetworkModal onClose={() => setShowNetworkModal(false)} />
      )}
      
      {showTransactionModal && (
        <TransactionModal 
          state={transactionState}
          onClose={() => setShowTransactionModal(false)} 
        />
      )}
      
      {showResourcesModal && (
        <ResourcesModal onClose={() => setShowResourcesModal(false)} />
      )}
    </div>
  );
};

export default Index;
