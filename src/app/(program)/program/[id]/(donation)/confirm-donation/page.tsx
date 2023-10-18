'use client';

import { Upload } from 'lucide-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import useMutateDonate from '@/app/(program)/hooks/useMutateDonate';
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

const ConfirmDonationPage = () => {
  const form = useFormContext<DonateSchema>();
  const evidenceRef = React.useRef<HTMLInputElement>(null);

  const { mutate, isLoading } = useMutateDonate();

  const onSubmit = (data: DonateSchema) => {
    mutate(data);
  };

  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Pilih Metode Pembayaran,</h2>
      </div>

      <div className="space-y-6 p-5">
        <FormField
          control={form.control}
          name="payment_method"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <Label>Metode Pembayaran</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="h-14 w-full">
                  <SelectValue placeholder="Pilih Metode Pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="IMKas">IMKas</SelectItem>
                    <SelectItem value="BCA">BCA</SelectItem>
                    <SelectItem value="BNI">BNI</SelectItem>
                    <SelectItem value="Mandiri">Mandiri</SelectItem>
                    <SelectItem value="BRI">BRI</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

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
      <div className="prose p-5">
        <h4>Panduan Pembayaran</h4>
        <ol className="text-xs">
          <li>
            <strong>Login ke Akun Bank Anda:</strong> Buka situs web bank Anda dan masuk ke akun
            Anda dengan menggunakan nama pengguna (username) dan kata sandi (password) yang benar.
          </li>

          <li>
            <strong>Pilih Opsi Transfer:</strong> Setelah masuk ke akun Anda, temukan opsi atau menu
            yang terkait dengan &quot;Transfer&quot; atau &quot;Pemindahan Dana.&quot; Ini bisa
            berbeda-beda tergantung pada bank Anda.
          </li>

          <li>
            <strong>Pilih Rekening Asal:</strong> Pilih rekening atau sumber dana yang ingin Anda
            gunakan untuk melakukan transfer.
          </li>

          <li>
            <strong>Tentukan Rekening Tujuan:</strong> Masukkan informasi rekening bank penerima,
            termasuk nama pemilik rekening, nomor rekening, dan kode bank jika diperlukan.
          </li>

          <li>
            <strong>Masukkan Jumlah Dana:</strong> Tentukan jumlah dana yang akan Anda transfer dan
            pilih mata uangnya.
          </li>

          <li>
            <strong>Verifikasi Data:</strong> Pastikan semua informasi yang Anda masukkan benar.
            Periksa lagi nomor rekening dan jumlah transfer sebelum melanjutkan.
          </li>

          <li>
            <strong>Konfirmasi Transfer:</strong> Setelah Anda yakin data yang dimasukkan benar,
            konfirmasikan transfer Anda. Biasanya, Anda akan diminta memasukkan kata sandi atau PIN
            untuk mengesahkan transaksi.
          </li>

          <li>
            <strong>Simpan Bukti Transfer:</strong> Setelah selesai, simpan bukti transfer sebagai
            referensi. Bank biasanya akan memberikan nomor referensi atau nomor transaksi yang bisa
            Anda gunakan untuk pelacakan.
          </li>

          <li>
            <strong>Cek Saldo:</strong> Pastikan untuk memeriksa saldo rekening Anda setelah
            melakukan transfer untuk memastikan bahwa transaksi telah berhasil dan dana telah
            dipindahkan.
          </li>
        </ol>
      </div>
      <Divider />

      <div className="h-96" />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        {/* <Link href={`/program/${id}/completed`}> */}
        <Button
          onClick={form.handleSubmit(onSubmit)}
          disabled={!form.formState.isDirty || !form.formState.isValid || isLoading}
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
