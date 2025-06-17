
import React from 'react';
import { Card } from '@/components/ui/card';

export const NetworkStatus: React.FC = () => {
  return (
    <div className="space-y-4 mb-6">
      <Card className="bg-gray-800 border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            📶
          </div>
          <div>
            <p className="text-gray-400 text-sm">Network Status</p>
            <p className="text-white font-semibold">Operational</p>
          </div>
        </div>
      </Card>

      <Card className="bg-gray-800 border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            ⏱️
          </div>
          <div>
            <p className="text-gray-400 text-sm">Network Load</p>
            <p className="text-white font-semibold">Normal</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
