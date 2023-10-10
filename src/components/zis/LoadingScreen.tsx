import { LoaderIcon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const LoadingScreen = ({ className = '' }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div>
        <LoaderIcon className="h-8 w-8 animate-spin text-red-500" />
      </div>
    </div>
  );
};

export default LoadingScreen;
