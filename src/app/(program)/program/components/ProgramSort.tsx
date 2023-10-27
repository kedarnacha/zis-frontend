'use client';

import { useQueryState } from 'next-usequerystate';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sort = [
  {
    name: 'Semua',
    value: null,
    sort: null,
  },
  {
    name: 'Segera Berakhir',
    value: 'program_end_date',
    sort: 'asc',
  },
  {
    name: 'Program Terbaru',
    value: 'program_create',
    sort: 'desc',
  },
];

const ProgramSort = () => {
  const [sortBy, setSortBy] = useQueryState('sortBy');
  const [_, setOrder] = useQueryState('order');

  return (
    <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
      {sort.map((item) => {
        return (
          <Button
            onClick={() => {
              setSortBy(item.value);
              setOrder(item.sort);
            }}
            key={item.name}
            size="sm"
            className={cn('shrink-0 rounded-full', {
              'border-red-500 text-red-500': item.value !== sortBy,
            })}
            variant={item.value === sortBy ? 'destructive' : 'outline'}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ProgramSort;
