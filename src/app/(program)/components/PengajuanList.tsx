'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React from 'react';
import { useParams } from 'next/navigation';

import DataLayout from '@/components/zis/DataLayout';
import PengajuanCard from '@/components/zis/PengajuanCard';

import useQueryUserProgram from '../hooks/userQueryUserProgram';

const PengajuanList = () => {
    const [keyword] = useQueryState('keyword');
    const [category] = useQueryState('category', parseAsInteger);

    const [sortBy] = useQueryState('sortBy');
    const [order] = useQueryState('order');

    const param = useParams();
    const id_user = param?.id_user as string;

    const { data, isLoading, isError, isFetching } = useQueryUserProgram(id_user);

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
