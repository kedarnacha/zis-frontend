'use client';

import React, { useState } from 'react';

import { role } from '@/data/role';
import { cn } from '@/lib/utils';
import InstituteIcon from '@/components/icon/InstituteIcon';
import PersonalIcon from '@/components/icon/PersonalIcon';

type Props = {
  onSelect: (id: boolean) => void;
};

const SelectInstitusiContent = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (label: boolean) => {
    setSelected(label);
    onSelect(label);
  };

  const roles= [
    { 
      icon: InstituteIcon,
      label: 'Lembaga',
      status: true
    },
    { 
      icon: PersonalIcon,
      label: 'Perorangan',
      status: false
    },
  ]

  return (
    <div>
      {roles.map((item) => (
        <div
          onClick={() => handleSelect(item.status)}
          key={item.label}
          className={cn(
            'mb-4 cursor-pointer rounded-xl border-2 border-slate-300 p-5 transition duration-300 hover:border-rose-400',
          )}
        >
          <div className="flex items-center space-x-4">
            <item.icon />
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight text-slate-500">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectInstitusiContent;
