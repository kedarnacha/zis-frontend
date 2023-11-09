'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React from 'react';

import { Button } from '@/components/ui/button';
import DataLayout from '@/components/zis/DataLayout';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';

import useQueryGetAllProgram from '../hooks/useQueryGetAllProgram';
import SearchYellowSvg from '@/components/zis/SearchYellowSvg';

const ProgramList = ({ isHome = false }) => {
  const [keyword] = useQueryState('keyword');
  const [category] = useQueryState('category', parseAsInteger);

  const [sortBy] = useQueryState('sortBy');
  const [order] = useQueryState('order');

  const { data, isLoading, isError, isFetching } = useQueryGetAllProgram({
    category,
    keyword,
    sortBy,
    order,
  });

  return (
    <DataLayout isError={isError} isLoading={isLoading || isFetching} className="h-[30dvh]">
      <div className="my-5 px-4">
      {(data?.data && data.data.length > 0) ? (
          data.data.map((item) => (
            <DonationItemCardVertical key={item.program_id} program={item} />
          ))
        ) : (
          <div className='flex flex-col items-center'>
            <SearchYellowSvg />
            <h4 className="font-semibold pt-3">Program tidak ditemukan</h4>
          </div>
        )}

        {!isHome && (
          <div className="mt-4 flex justify-center">
            <Button className="rounded-full text-slate-50" size="sm" variant="destructive">
              Lihat Lebih Banyak
            </Button>
          </div>
        )}
      </div>
    </DataLayout>
  );
};

export default ProgramList;
