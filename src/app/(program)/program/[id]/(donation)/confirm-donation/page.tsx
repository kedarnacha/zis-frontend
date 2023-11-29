'use client';

import { Divide, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import useMutateDonate from '@/app/(program)/hooks/useMutateDonate';
import useMutateRecurring from '@/app/(program)/hooks/useMutateRecurring';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import { DonateSchema } from '@/schema/donate';
import { RecurringSchema } from '@/schema/recurring';

const bank = [
  {
    bank: "IMKas",
  },
  {
    bank: "BCA",
  },
  {
    bank: "BNI",
  },
  {
    bank: "Mandiri",
  },
  {
    bank: "BRI",
  },
  {
    bank: "BSI",
  },
  {
    bank: "CIMB",
  },
  {
    bank: "DKI",
  },
  {
    bank: "BJB",
  },
];

const ConfirmDonationPage = () => {
  const form = useFormContext<DonateSchema>();
  const evidenceRef = React.useRef<HTMLInputElement>(null);

  const { mutate: donateMutate, isLoading: donateLoading } = useMutateDonate();
  const { mutate: recurringMutate, isLoading: recurringLoading } = useMutateRecurring();

  const onSubmit = (data: DonateSchema) => {
    donateMutate(data);
    recurringMutate(data);
  };

  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Pilih Metode Pembayaran</h2>
      </div>

      <div className="space-y-6 p-5">
        <FormField
          control={form.control}
          name="payment_method"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <Label>Metode Pembayaran</Label>
              <Select onValueChange={(value) => {
                field.onChange(value);
              }}
                defaultValue={field.value}>
                <SelectTrigger className="h-14 w-full">
                  <SelectValue placeholder="Pilih Metode Pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  {bank.map((items) => (
                    <SelectGroup>
                      <SelectItem value={items.bank}>
                        {items.bank}
                      </SelectItem>
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
              <div className="relative mt-8 mb-4">
                <Label>Panduan Pembayaran</Label>
                <Select>
                  <SelectTrigger className="h-14 w-full">
                    <SelectValue placeholder="Panduan Pembayaran" />
                    <SelectContent>
                      <SelectGroup>
                        <div className="max-w-[40ch] max-h-[20ch] p-5">
                          <ol className="text-xs">
                            <li className='pb-2'>
                              <strong>Nomor Rekening:</strong>
                              <br />
                              <p>Rekening zakat :
                                <br />
                                1. ZIS Indosat
                                <br />
                                Norek BSI 7015.73.8877
                                <br />
                                2. ZIS Indosat
                                <br />
                                Norek Bank Mandiri 103.009.5265.894</p>
                              <br />
                              <p>Rekening infaq :
                                <br />
                                1. ZIS Indosat
                                <br />
                                Norek BSI 711.2454.009
                                <br />
                                2. ZIS Indosat
                                <br />
                                Norek Bank Mandiri 103.009.5265.464</p>
                            </li>
                            <li className='pb-2'>
                              <strong>Login ke Akun Bank Anda:</strong>
                              <br />
                              Buka situs web bank Anda dan masuk ke akun
                              Anda dengan menggunakan nama pengguna (username) dan kata sandi (password) yang benar.
                            </li>

                            <li className='pb-2'>
                              <strong>Pilih Opsi Transfer:</strong>
                              <br />
                              Setelah masuk ke akun Anda, temukan opsi atau menu
                              yang terkait dengan &quot;Transfer&quot; atau &quot;Pemindahan Dana.&quot; Ini bisa
                              berbeda-beda tergantung pada bank Anda.
                            </li>

                            <li className='pb-2'>
                              <strong>Pilih Rekening Asal:</strong>
                              <br />
                              Pilih rekening atau sumber dana yang ingin Anda
                              gunakan untuk melakukan transfer.
                            </li>

                            <li className='pb-2'>
                              <strong>Tentukan Rekening Tujuan:</strong>
                              <br />
                              Masukkan informasi rekening bank penerima,
                              termasuk nama pemilik rekening, nomor rekening, dan kode bank jika diperlukan.
                            </li>

                            <li className='pb-2'>
                              <strong>Masukkan Jumlah Dana:</strong>
                              <br />
                              Tentukan jumlah dana yang akan Anda transfer dan
                              pilih mata uangnya.
                            </li>

                            <li className='pb-2'>
                              <strong>Verifikasi Data:</strong>
                              <br />
                              Pastikan semua informasi yang Anda masukkan benar.
                              Periksa lagi nomor rekening dan jumlah transfer sebelum melanjutkan.
                            </li>

                            <li className='pb-2'>
                              <strong>Konfirmasi Transfer:</strong>
                              <br />
                              Setelah Anda yakin data yang dimasukkan benar,
                              konfirmasikan transfer Anda. Biasanya, Anda akan diminta memasukkan kata sandi atau norek
                              untuk mengesahkan transaksi.
                            </li>

                            <li className='pb-2'>
                              <strong>Simpan Bukti Transfer:</strong>
                              <br />
                              Setelah selesai, simpan bukti transfer sebagai
                              referensi. Bank biasanya akan memberikan nomor referensi atau nomor transaksi yang bisa
                              Anda gunakan untuk pelacakan.
                            </li>

                            <li className='pb-2'>
                              <strong>Cek Saldo:</strong>
                              <br />
                              Pastikan untuk memeriksa saldo rekening Anda setelah
                              melakukan transfer untuk memastikan bahwa transaksi telah berhasil dan dana telah
                              dinorekdahkan.
                            </li>
                          </ol>
                        </div>
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </FormItem>
          )}
        />
      </div>

      <Divider />
      <div className="space-y-6 p-5">
        <FormField
          control={form.control}
          name="evidence"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Bukti Pembayaran</FormLabel>
              <FormControl>
                <>
                  <input
                    type="file"
                    ref={evidenceRef}
                    className="hidden"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    accept="application/pdf, image/*"
                  />
                  <Button
                    variant="outline"
                    size="lg"
                    className="justify-between px-4 text-slate-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      evidenceRef.current?.click();
                    }}
                  >
                    <span>{field.value?.name ?? 'Unggah Data (PDF/JPG) max 2MB'}</span>{' '}
                    <Upload className="h-4 w-4 text-orange-400" />
                  </Button>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Divider />

      <div className="h-96" />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        {/* <Link href={`/program/${id}/completed`}> */}
        <Button
          onClick={form.handleSubmit(onSubmit)}
          disabled={!form.formState.isDirty || !form.formState.isValid || form.formState.isLoading}
          type="button"
          role="button"
          className="w-full "
          size="lg"
          variant="destructive"
        >
          Selesai
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ConfirmDonationPage;
