'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import DataLayout from '@/components/zis/DataLayout';
import PengajuanCard from '@/components/zis/PengajuanCard';

import useQueryProposalProgram from '../hooks/userQueryProposalProgram';
import { useAuthState } from '@/store/useAuthState';
import SearchYellowSvg from '@/components/zis/SearchYellowSvg';

const PengajuanList = () => {
    const [keyword] = useQueryState('keyword');
    const [category] = useQueryState('category', parseAsInteger);

    const [sortBy] = useQueryState('sortBy');
    const [order] = useQueryState('order');
    const authState = useAuthState();
    // const [id_user, setIdUser] = useState(0)

    const id_user = authState?.user?.user_id as number;
    console.log(authState?.user?.user_id);

    const { data, isLoading, isError, isFetching } = useQueryProposalProgram(id_user);
    console.log(data?.data)

    return (
        <DataLayout isError={isError} isLoading={isLoading || isFetching} className="h-[30dvh]">
            <h3 className="font-semibold text-lg mx-5 mt-4">Pilih Program Kebaikan</h3>
            <div className="my-5 px-4">
                {(data?.data && data.data.length > 0) ? (
                    data?.data?.map((item) => (
                        <PengajuanCard key={item.id} proposal={item} />
                    ))
                ) : (
                    <div className='flex flex-col items-center'>
                        <SearchYellowSvg />
                        <h4 className="font-semibold pt-3">Belum ada permohonan</h4>
                    </div>
                )
                }
            </div>
        </DataLayout>
    );
};

export default PengajuanList;
