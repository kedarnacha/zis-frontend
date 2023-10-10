'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import DataLayout from '@/components/zis/DataLayout';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';

import useQueryGetAllProgram from '../hooks/useQueryGetAllProgram';

const ProgramList = ({ isHome = false }) => {
  const { data, isLoading, isError } = useQueryGetAllProgram();

  return (
    <DataLayout isError={isError} isLoading={isLoading} className="h-[30dvh]">
      <div className="my-5 px-4">
        {data?.data?.map((item) => (
          <DonationItemCardVertical key={item.program_id} program={item} />
        ))}

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
