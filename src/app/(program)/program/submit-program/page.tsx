'use client';

import { GlobeIcon, Upload } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import CallCenter from '@/components/zis/CallCenter';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';

const SubmitProgramPage = () => {
  return (
    <div className="pb-96">
      <Navbar title="Proses Proposal Program Bantuan" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Isi Data-data dibawah dengan lengkap</h2>
      </div>

      <div className="p-5">
        <p className="font-semibold text-slate-600">Kategori Kebutuhan</p>
        <div className="mt-3 flex items-center justify-between space-x-3 rounded-md border border-slate-300 p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
            <GlobeIcon className="h-4 w-4 text-red-500" />
          </div>
          <div className="flex-1 font-semibold">
            <p>Pendidikan & Guru</p>
          </div>
        </div>
      </div>
      <Divider />

      <div className="p-5">
        <p className="mb-3 font-semibold text-slate-600">Memiliki Rekomendasi untuk Program ini?</p>
        <Select>
          <SelectTrigger className="h-14 w-full">
            <SelectValue placeholder="Pilih Identitas Pemberi Saran" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="a">A</SelectItem>
              <SelectItem value="b">B</SelectItem>
              <SelectItem value="c">C</SelectItem>
              <SelectItem value="d">D</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Divider />

      <div className="p-5">
        <p className="mb-3 font-semibold text-slate-600">Pendidikan dan Guru</p>

        <div>
          <Label className="mt-4 font-semibold" htmlFor="name">
            Jenjang Pendidikan Pelajar
          </Label>
          <Input
            name="name"
            placeholder="Masukkan jenjang pendidikan (SD,S1,dll)"
            className="h-14 text-base"
          />
        </div>

        <div>
          <button className="mt-5 flex h-14 w-full items-center justify-between rounded-lg border border-slate-200 p-2">
            <span>Unggah Data (PDF/JPG) max 2MB</span>
            <Upload size={16} className="text-orange-500" />
          </button>
          <p className="mt-3 text-xs text-slate-700">
            Data dapat berupa keterangan aktif di sekolah / universitas
          </p>
        </div>

        <div className="mt-5">
          <Label className="mt-4 font-semibold" htmlFor="name">
            Kebutuhan Bantuan
          </Label>
          <div className="my-3 flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Program saya merupakan kebutuhan Darurat
            </label>
          </div>
          <Input
            name="name"
            placeholder="Sebutkan kebutuhan (cth, Beasiswa)"
            className="h-14 text-base"
          />
        </div>
      </div>

      <Divider />

      <div className="p-5">
        <p className="mb-3 font-semibold text-slate-600">Memiliki Dokumen Pengajuan Zis Indosat?</p>

        <button className="mt-5 flex h-14 w-full items-center justify-between rounded-lg border border-slate-200 p-2">
          <span>Unggah Data (PDF/JPG) max 2MB</span>
          <Upload size={16} className="text-orange-500" />
        </button>
        <p className="mt-3 pr-5 text-xs text-slate-700">
          Foto / File dapat berupa JPG, PNG, PDF. Data akan kami verifikasi di jam kerja
        </p>
      </div>

      <Divider />

      <div className="p-5">
        <p className="mb-3 font-semibold text-slate-600">Nominal Kebutuhan Dana</p>

        <Input name="name" placeholder="Rp" className="h-14 text-base" />

        <div className="mt-4">
          <Label className="font-semibold">Durasi Program</Label>
          <div className="mt-4 flex items-center justify-start space-x-3">
            <div className="flex-1">
              <Input type="number" placeholder="0" />
            </div>
            <div className="flex-[3]">
              <Input type="number" placeholder="Pilih Durasi" />
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <div className="my-3 flex items-center space-x-2 p-5">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Saya setuju data yang dimasukkan akan digunakan oleh Ziswaf Indosat
        </label>
      </div>
      <Divider />

      <CallCenter />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
        <Button className="w-full" size="lg" variant="destructive">
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default SubmitProgramPage;
