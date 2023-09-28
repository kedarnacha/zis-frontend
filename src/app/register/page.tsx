import Link from 'next/link';
import React, { Fragment } from 'react';

import MuzakiIcon from '@/components/icon/MuzakiIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/zis/Navbar';

const RegisterPage = () => {
  return (
    <div className="pb-96">
      <Navbar title="Daftar Zis Indosat" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Yuk Daftar, untuk nikmati kemudahan berdonasi dan akses fitur lainnya
        </h2>
      </div>

      <div className="p-5">
        <p className="font-semibold">Daftar Sebagai</p>
        <div className="mt-3 flex items-center justify-between space-x-3 rounded-md border border-slate-300 p-2">
          <MuzakiIcon />
          <div className="flex-1">
            <p>
              Muzaki <span className="text-slate-600">(Pemberi Bantuan)</span>
            </p>
          </div>
          <Button variant="ghost" className="text-amber-500">
            Ubah
          </Button>
        </div>
      </div>

      <div className="h-3 bg-slate-100" />

      <div className="flex flex-col space-y-4 p-5">
        <p className="font-semibold">Masukkan Data</p>
        <div>
          <Label className="mt-4" htmlFor="name">
            Nama Lengkap
          </Label>
          <Input name="name" placeholder="Nama Lengkap Pengguna" />
        </div>
        <div>
          <Label className="mt-4" htmlFor="email">
            Email
          </Label>
          <Input name="email" type="email" placeholder="Email Pengguna" />
        </div>
        <div>
          <Label className="mt-4" htmlFor="email">
            Nomor telepon / whatsapp
          </Label>
          <Input name="tel" type="tel" placeholder="Nomor telepon / whatsapp Pengguna" />
        </div>
        <div>
          <Label className="mt-4" htmlFor="email">
            Kata Sandi
          </Label>
          <Input name="password" type="password" placeholder="Kata Sandi Pengguna" />
        </div>
      </div>
      <div className="h-3 bg-slate-100" />

      <div className="p-5 text-slate-700">
        Dengan Klik Daftar, anda telah menyetujui{' '}
        <span className="font-semibold text-orange-500">Syarat dan Ketentuan kami.</span>
      </div>
      <div className="h-3 bg-slate-100" />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md  bg-white p-5">
        <Button className="w-full" size="lg" variant="destructive">
          Daftar
        </Button>
        <div className="my-3 flex items-center space-x-3">
          <div className="h-px flex-1 bg-slate-200" />
          <p className="text-sm text-slate-400">Sudah Punya Akun ?</p>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <Link href="/login">
          <Button
            className="w-full border-red-500 text-red-500 hover:text-red-500"
            size="lg"
            variant="outline"
          >
            Masuk Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
