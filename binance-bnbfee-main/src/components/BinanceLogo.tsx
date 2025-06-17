
import React from 'react';

interface BinanceLogoProps {
  size?: number;
  showText?: boolean;
}

export const BinanceLogo: React.FC<BinanceLogoProps> = ({ size = 24, showText = false }) => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/95625ff4-d97c-47a6-af1e-9183947c949d.png" 
        alt="Binance"
        width={size}
        height={size}
        className="object-contain"
      />
      {showText && (
        <img 
          src="/lovable-uploads/055f5cfb-c325-4c62-8385-4ad4d472cb98.png" 
          alt="Binance"
          height={size * 0.6}
          className="object-contain"
        />
      )}
    </div>
  );
};
