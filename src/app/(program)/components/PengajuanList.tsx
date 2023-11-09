'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React from 'react';

import DataLayout from '@/components/zis/DataLayout';
import PengajuanCard from '@/components/zis/PengajuanCard';

import useQueryGetAllProgram from '../hooks/useQueryGetAllProgram';

const PengajuanList = () => {
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
                {data?.data?.map((item) => (
                    <PengajuanCard key={item.program_id} program={item} />
                ))}
            </div>
        </DataLayout>
    );
};

export default PengajuanList;
