
import React from 'react';

export const WalletIcon: React.FC = () => {
  return (
    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 6H6C4.89 6 4 6.89 4 8V16C4 17.11 4.89 18 6 18H18C19.11 18 20 17.11 20 16V8C20 6.89 19.11 6 18 6Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="black"
        />
        <circle cx="16" cy="12" r="2" fill="white"/>
      </svg>
    </div>
  );
};
