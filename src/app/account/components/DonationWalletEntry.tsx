import { ChevronRight, WalletIcon } from 'lucide-react';
import React from 'react';

const DonationWalletEntry = () => {
  return (
    <div className="flex flex-row items-center space-x-4 p-5 text-slate-700">
      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
        <WalletIcon className="h-5 w-5" />
      </div>
      <div className="flex-1">Kantong Sedekah Saya</div>

      <ChevronRight className="h-5 w-5" />
    </div>
  );
};

export default DonationWalletEntry;
