import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/zis/Navbar';

const LoginPageForm = () => {
  return (
    <div className="pb-96">
      <Navbar title="Masuk Zis Indosat" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Yuk Masuk, untuk nikmati kemudahan berdonasi dan akses fitur lainnya
        </h2>
      </div>

      <div className="p-5">
        <p className="mb-3 font-semibold">Masukkan Email Pengguna</p>
        <Label className="mt-4" htmlFor="email">
          Email
        </Label>
        <Input name="email" placeholder="Masukkan Email" />
      </div>
      <div className="h-3 bg-slate-100" />

      <div className="p-5">
        <p className="mb-3 font-semibold">Masukkan Kata Sandi</p>
        <Label className="mt-4" htmlFor="email">
          Kata Sandi
        </Label>
        <Input name="password" type="password" placeholder="Masukkan Email" />

        <p className="mt-4 text-sm text-slate-700">
          Lupa kata sandi? <span className="font-semibold text-orange-500">Ganti Disini</span>
        </p>
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Button className="w-full" size="lg" variant="destructive">
          Masuk
        </Button>
        <div className="my-3 flex items-center space-x-3">
          <div className="h-px flex-1 bg-slate-200" />
          <p className="text-sm text-slate-400">Belum Punya Akun ?</p>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <Link href="/register">
          <Button
            className="w-full border-red-500 text-red-500 hover:text-red-500"
            size="lg"
            variant="outline"
          >
            Daftar Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPageForm;
