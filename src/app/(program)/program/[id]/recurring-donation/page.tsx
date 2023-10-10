'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import { formatter } from '@/utils/number';

const amount = [
  {
    emoji: '🙂',
    price: 30000,
  },
  {
    emoji: '😊',
    price: 50000,
  },
  {
    emoji: '😄',
    price: 100000,
  },
  {
    emoji: '😍',
    price: 150000,
  },
];

const DonatePage = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Masukkan Nominal Sedekah,</h2>
      </div>

      <div className="space-y-4 p-5">
        {amount.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center space-x-3 rounded-lg border border-slate-200 px-2 py-4"
          >
            <span>{item.emoji}</span>
            <div className="flex-1">{formatter.format(item.price)}</div>
            <ChevronRight />
          </div>
        ))}
      </div>

      <Divider />

      <div className="p-5">
        <p className="mb-3 font-semibold text-slate-600">Nominal Donasi Lainnya</p>

        <Input name="name" placeholder="Rp" className="h-14 text-base" />
        <small>Minimal donasi sebesar Rp 10.000</small>
      </div>
      <Divider />

      <div className="flex flex-row items-center space-x-4 p-5 text-slate-700">
        <div className="flex-1">Ingatkan Saya Setiap</div>

        <Switch
          className="data-[state=checked]:bg-red-500"
          checked={checked}
          onCheckedChange={(c) => setChecked(c)}
        />
      </div>
      <div className="h-3 w-full bg-slate-100" />

      <div className="p-5">
        <p className="font-medium">Masukkan Data Diri</p>

        <div className="my-4">
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </div>

        <div className="my-4">
          <Label>Nomor telepon / whatsapp</Label>
          <Input type="text" placeholder="Nomor telepon / whatsapp" />
        </div>

        <Label>Durasi Sedekah</Label>
        <div className="flex items-center justify-start space-x-3">
          <div className="flex-1">
            <Input type="number" placeholder="0" />
          </div>
          <div className="flex-[3]">
            <Input type="number" placeholder="Pilih Durasi" />
          </div>
        </div>

        <div className="mt-4">
          <Label>Pengingat Setiap</Label>
          <div className="flex items-center justify-start space-x-3">
            <div className="flex-1">
              <Input type="number" placeholder="0" />
            </div>
            <div className="flex-[3]">
              <Input type="date" placeholder="Tanggal/Bulan/Tahun" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-96" />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Button type="button" role="button" className="w-full " size="lg" variant="destructive">
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default DonatePage;
