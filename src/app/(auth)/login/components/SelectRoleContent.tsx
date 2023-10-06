'use client';

import React, { useState } from 'react';

import { role } from '@/data/role';
import { cn } from '@/lib/utils';

type Props = {
  onSelect: (id: string) => void;
};

const SelectRoleContent = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState('');

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect(id);
  };

  return (
    <div>
      {role.map((item) => (
        <div
          onClick={() => handleSelect(item.id)}
          key={item.id}
          className={cn(
            'mb-4 cursor-pointer rounded-xl border-2 border-slate-300 p-5 transition duration-300 hover:border-rose-400',
            {
              'border-red-500': selected === item.id,
            },
          )}
        >
          <div className="flex items-center space-x-4">
            <item.icon />
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight text-slate-500">{item.label1}</p>
              <p className="text-sm font-semibold leading-tight text-slate-500">{item.label2}</p>
            </div>
          </div>
          <p className="mt-4 text-xs">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectRoleContent;
