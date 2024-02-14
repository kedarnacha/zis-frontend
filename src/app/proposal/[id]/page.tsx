'use client';

import { format } from 'date-fns';
import { id as indo } from 'date-fns/locale';
import { ChevronLeft, Download, HomeIcon, Share, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, use } from 'react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataLayout from '@/components/zis/DataLayout';
import { useAuthState } from '@/store/useAuthState';
import { Input } from '@/components/ui/input';
import Divider from '@/components/zis/Divider';
import { TYPE_MUSTAHIQ, TYPE_MUZAKI } from '@/utils/constants';
import { formatter } from '@/utils/number';

import useQueryProposalProgram from '../hooks/userQueryProposalProgram';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { proposalSchema } from '@/schema/proposal';
import Navbar from '@/components/zis/Navbar';
import useQueryJurnal from '../hooks/useQueryJurnal';

// ... (import statements)

const ProgramDetailPage = () => {
  const router = useRouter();
  const authState = useAuthState();
  const id_mustahiq = authState?.user?.mustahiq_id as number;

  const handleBack = () => {
    router.back();
  };

  const param = useParams();
  const id = param?.id as string;
  const ids = Number(id);

  const kategori = [
    { id: 1, namaCat: 'Bea Guru' },
    { id: 2, namaCat: 'Bea Kuliah' },
    { id: 3, namaCat: 'Kesehatan' },
    { id: 4, namaCat: 'Bea Sekolah' },
    { id: 5, namaCat: 'Sarpras Dakwah' },
    { id: 6, namaCat: 'Ekonomi' },
    { id: 7, namaCat: 'Sosial' },
  ];

  const { data, isError, isLoading, } = useQueryProposalProgram(ids);
  const { data: Jurnals } = useQueryJurnal(id_mustahiq);

  let biaya = 0;
  let tgl = '-';
  let formattedDate = '-';

  const filteredJurnals = Jurnals?.data?.filter((entry) => entry.proposal.id == ids && entry.amount_credit > 0);
  if (filteredJurnals && filteredJurnals.length > 0) {
    biaya = filteredJurnals?.[0].amount_credit;
    tgl = filteredJurnals?.[0].datetime;
    formattedDate = tgl ? format(new Date(tgl), 'dd-MM-yy') : '';
  }

  const getCategoryName = (categoryId?: number) => {
    if (categoryId === undefined) {
      return '';
    }
    const category = kategori.find((cat) => cat.id === categoryId);
    return category?.namaCat || '';
  };


  const form = useForm({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      nama: data?.data?.[0]?.nama || '',
      templ: data?.data?.[0]?.tempat_lahir || '',
      tangl: data?.data?.[0]?.tgl_lahir || '',
      alrum: data?.data?.[0]?.alamat_rumah || '',
      nmpmbri: data?.data?.[0]?.nama_pemberi_rekomendasi || '',
      notelp: data?.data?.[0]?.no_telp_pemberi_rekomendasi || '',
      propkat: getCategoryName(data?.data?.[0]?.proposal_kategori) || '',
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      form.reset({
        nama: data?.data?.[0]?.nama || '',
        templ: data?.data?.[0]?.tempat_lahir || '',
        tangl: data?.data?.[0]?.tgl_lahir || '',
        alrum: data?.data?.[0]?.alamat_rumah || '',
        nmpmbri: data?.data?.[0]?.nama_pemberi_rekomendasi || '',
        notelp: data?.data?.[0]?.no_telp_pemberi_rekomendasi || '',
        propkat: getCategoryName(data?.data?.[0]?.proposal_kategori) || '',
      });
    }
  }, [data, form]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <Navbar title="Lihat Proposal Mustahiq" />
      <Form {...form}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="templ"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Tempat Lahir</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tangl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Tanggal Lahir</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alrum"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Alamat Rumah</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nmpmbri"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nama Pemberi Rekomendasi</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notelp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nomor Telepon Pemberi Rekomendasi</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propkat"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Proposal Kategori</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
      <Divider />
      <h2 className="font-semibold pl-5 pt-5">Nominal dana yang akan dikirimkan oleh Tim ZIS</h2>
      <div className="mt-5 mx-5 flex items-center justify-between space-x-3 rounded-md border border-slate-300 p-2">
        <Wallet />
        <div className="flex-1 flex items-center">
          <p className='font-semibold'>
            Rp.
          </p>
          <p className='ml-auto'>
            {biaya ? formatter.format(biaya) : ''}
          </p>
        </div>
      </div>

      <div className="h-96" />
    </>
  );
};

export default ProgramDetailPage;
