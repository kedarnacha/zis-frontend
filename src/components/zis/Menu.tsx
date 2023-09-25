import { GlobeIcon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const Menu = () => {
  return (
    <div className="mt-5 px-4">
      <h3 className="font-semibold ">Pilih Program Kebaikan</h3>

      <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex w-16 shrink-0 cursor-pointer flex-col items-center">
            <div
              className={cn(
                'h-10 w-10 rounded-full items-center justify-center flex bg-slate-50 shadow-lg',
                {
                  'bg-red-500': item === 1,
                },
              )}
            >
              <GlobeIcon
                className={cn('h-4 w-4 text-red-500', {
                  'text-slate-50': item === 1,
                })}
              />
            </div>
            <p
              className={cn('text-[10px] text-center mt-2', {
                'text-slate-400': item !== 1,
              })}
            >
              Program Umum
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
