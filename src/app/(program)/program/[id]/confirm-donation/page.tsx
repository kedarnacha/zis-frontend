'use client';

import { ChevronRight, Upload } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const ConfirmDonationPage = () => {
  const param = useParams();
  const id = param?.id as string;

  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Pilih Metode Pembayaran,</h2>
      </div>

      <div className="space-y-6 p-5">
        <div className="flex flex-col space-y-2">
          <Label>Pilih Metode Pembayaran</Label>
          <Select>
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
        </div>

        <div className="flex flex-col space-y-2">
          <Label>Unggah Bukti Pemnayaran</Label>

          <Button variant="outline" size="lg" className="justify-between px-4 text-slate-500">
            <span>{'Unggah Data (PDF/JPG) max 2MB'}</span>{' '}
            <Upload className="h-4 w-4 text-orange-400" />
          </Button>
        </div>
      </div>

      <Divider />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Link href={`/program/${id}/completed`}>
          <Button type="button" role="button" className="w-full " size="lg" variant="destructive">
            Selesai
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmDonationPage;
