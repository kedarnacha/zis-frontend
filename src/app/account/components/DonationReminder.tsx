'use client';

import React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const DonationReminder = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <div className="flex flex-row items-center space-x-4 p-5 text-slate-700">
        <div className="flex-1">Kantong Sedekah Saya</div>

        <Switch
          className="data-[state=checked]:bg-red-500"
          checked={checked}
          onCheckedChange={(c) => setChecked(c)}
        />
      </div>
      <div className="h-3 w-full bg-slate-100" />

      <div className="p-5">
        <p className="font-medium">Masukkan Data Diri</p>
        <p className="my-5 font-medium text-orange-500">Lihat Program Terkait</p>

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
    </div>
  );
};

export default DonationReminder;
