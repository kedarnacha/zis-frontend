import React from 'react';

import { cn } from '@/lib/utils';

const ErrorScreen = ({ className = '' }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className="prose">
        <h3 className="text-red-500">Terjadi Kesalahan, Silahakan Coba Lagi</h3>
      </div>
    </div>
  );
};

export default ErrorScreen;
