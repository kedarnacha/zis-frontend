import { format, formatDistance } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import React from 'react';

import { Proposal } from '@/schema/proposal';

const PengajuanCard = ({ proposal }: { proposal: Proposal }) => {
    // const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${program.program_banner.banners_path}`;
    const formattedDate = format(new Date(proposal.create_date), "dd-MMM-yyyy", { locale: id });

    const tlhBayar = proposal.status_bayar
    const perBayar = proposal.approved
    console.log(proposal.ispaid)
    const done = proposal.ispaid

    const statTolak = proposal.proposal_approval.filter(approval => approval.status === 2);
    console.log(statTolak[0]?.date);
    const dateToCheck = new Date(statTolak[0]?.date);
    console.log(dateToCheck)
    const startDate = new Date('2024-04-02');
    const endDate = new Date('2024-04-15');

    const statAcc = proposal.proposal_approval.filter(approval => approval.status === 1).length;
    console.log(statAcc);

    const kategori = [
        { id: 1, namaCat: 'Bea Guru' },
        { id: 2, namaCat: 'Bea Kuliah' },
        { id: 3, namaCat: 'Kesehatan' },
        { id: 4, namaCat: 'Bea Sekolah' },
        { id: 5, namaCat: 'Sarpras Dakwah' },
        { id: 6, namaCat: 'Ekonomi' },
        { id: 7, namaCat: 'Sosial' },
    ]
    const category = kategori.find(cat => cat.id === proposal.proposal_kategori);
    const namaCat = category?.namaCat || ''

    let statusClass: string = '';
    let statusText: string = '';

    if (done === 1) {
        statusClass = 'text-green-700';
        statusText = 'Dana Telah Dikirimkan';
    } else if (tlhBayar === 1 || perBayar === 1) {
        statusClass = 'text-green-500';
        statusText = 'Proposal Telah Disetujui';
    } else if (perBayar === 2) {
        statusClass = 'text-red-500';
        if (dateToCheck >= startDate && dateToCheck <= endDate) {
            statusText = 'Untuk proposal kegiatan Ramadhan 1445 H sudah kami tutup tanggal 02 April 2024 dan untuk proposal diluar kegiatan Ramadhan 1445 H harap diinput kembali mulai tanggal 16 April 2024'
        } else {
            statusText = 'Ditolak';
        }
    } else if (statAcc <= 4) {
        statusClass = 'text-yellow-600';
        statusText = 'Dalam proses persetujuan';
    }

    return (
        <>
            <div className="flex border-b border-b-slate-200 py-3">
                {/* <div className="relative aspect-[1.05] flex-1 overflow-hidden rounded-md"> */}
                {/* <Image src={imageUrl} fill alt="Item Image" className="object-cover" /> */}
                {/* </div> */}
                <div className="flex w-full flex-1 flex-col px-3">
                    <h2 className="mt-2 flex-1 text-md font-semibold">
                        Nama penerima bantuan : {proposal.nama}
                    </h2>
                    <div className="text-xs font-semibold text-slate-500">
                        Tanggal Pengajuan
                        <br />
                        <span className="font-bold">{formattedDate}</span>
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
                            <div className={"text-sm font-semibold " + statusClass}>{statusText}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch text-center text-xs mt-2.5">
                Kategori: {namaCat}
            </div>
            <div className="flex justify-between gap-2 mt-3.5">
                <a
                    href={`/proposal/${proposal.id}`}
                    className="justify-center items-center self-stretch border border-red-500 flex w-[271px] max-w-full flex-col grow shrink-0 basis-auto px-20 py-3 rounded-lg"
                >
                    <div className="text-sm font-semibold self-center whitespace-nowrap text-red-600">
                        Lihat Proposal
                    </div>
                </a>
                <div className="justify-center disabled: items-center self-stretch border border-slate-400 flex w-14 max-w-full flex-col px-5 py-3 rounded-lg">
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

