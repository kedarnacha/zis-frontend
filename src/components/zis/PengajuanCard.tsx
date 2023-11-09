import { formatDistance } from 'date-fns';
import Image from 'next/image';
import React from 'react';

import { Program } from '@/schema/program';

const PengajuanCard = ({ program }: { program: Program }) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${program.program_banner.banners_path}`;

    return (
        <>
            <div className="flex border-b border-b-slate-200 py-3">
                <div className="relative aspect-[1.05] flex-1 overflow-hidden rounded-md">
                    <Image src={imageUrl} fill alt="Item Image" className="object-cover" />
                </div>
                <div className="flex w-full flex-1 flex-col px-3">
                    <h2 className="mt-2 flex-1 text-md font-semibold">
                        {program.program_title}
                    </h2>
                    <div className="text-xs font-semibold text-slate-500">
                        Perubahan terakhir
                        <br />
                        <span className="font-bold">10 September 2023</span>
                    </div>
                    <div className="flex mt-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3da49b-6763-4d80-9c94-f695eaa7d87a?apiKey=a34d9f8447c743e9898cd7ca4608868a&"
                            alt="Icon"
                        />
                        <div className="flex flex-col ml-2">
                            <div className="text-xs text-slate-500">
                                Status
                            </div>
                            <div className="text-sm font-semibold">Diproses</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch text-center text-xs mt-2.5">
                Kategori: Pendidikan & Guru
            </div>
            <div className="flex justify-between gap-2 mt-3.5">
                <a
                    href={`/program/${program.program_id}`}
                    className="justify-center items-center self-stretch border border-red-500 flex w-[271px] max-w-full flex-col grow shrink-0 basis-auto px-20 py-3 rounded-lg"
                >
                    <div className="text-sm font-semibold self-center whitespace-nowrap text-red-600">
                        Lihat Program
                    </div>
                </a>
                <div className="justify-center items-center self-stretch border border-slate-400 flex w-14 max-w-full flex-col px-5 py-3 rounded-lg">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2fffc2b-c630-46dd-b41b-fb87af1fc1b9?apiKey=a34d9f8447c743e9898cd7ca4608868a&"
                        className="aspect-square object-contain object-center w-full fill-white overflow-hidden self-stretch"
                        alt="Icon"
                    />
                </div>
            </div>
        </>
    );
};

export default PengajuanCard;

