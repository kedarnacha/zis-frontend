'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, GlobeIcon, Loader2Icon, Upload } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import CallCenter from '@/components/zis/CallCenter';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ProgramSchema, programSchema } from '@/schema/program';

import useMutateCreateProgram from '../../../../hooks/useMutateCreateProgram';
import Link from 'next/link';
import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';

const SubmitProgramPage = () => {
  const bannerRef = React.useRef<HTMLInputElement>(null);
  const { mutate, isLoading } = useMutateCreateProgram();

  const form = useFormContext<ProgramSchema>();

  console.log(form.watch())
  const watchAll = form.watch();
  const param = useParams();
  const id = param?.id as string;
  const { data } = useQueryDetailProgram(id);

  const onSubmit = (data: ProgramSchema) => {
    mutate(data);
  };

  return (
    <div className="pb-96">
      <Navbar title="Proses Proposal Program Bantuan" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Isi Data-data dibawah dengan lengkap</h2>
      </div>
      {data?.data.program_category_id === 1 && (
        <>
          <Form {...form}>
            <div className="space-y-4 p-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Tempat/Tanggal Lahir</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Jakarta/1 Januari 1990"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Jenis Kelamin</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Jenis Kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="L">
                            Laki-laki
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="P">
                            Perempuan
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat Rumah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Kode Pos</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 662111"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Status Rumah</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Status Rumah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Sendiri">
                            Milik Sendiri
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Numpang">
                            Numpang
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Sewa">
                            Sewa
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Status Pernikahan</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Status Pernikahan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Belum Kawin">
                            Belum Kawin
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Kawin">
                            Kawin
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="CeraiHidup">
                            Cerai Hidup
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="CeraiMati">
                            Cerai Mati
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Jumlah Anak</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Penghasilan Bulanan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex : 3000000/bulan (masukkan angka saja)"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama Suami/Istri</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Istri saya"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Pekerjaan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Project Manager"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Pendidikan Terakhir</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: S1"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Universitas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Cambridge"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Fakultas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Computer Science"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Tempat Mengajar</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Harvard"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: United State"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nomor Telepon Sekolah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 081929278729726"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Sebagai Guru</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Guru IPA"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Bantuan Pihak Lain</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Yayasan Budi"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nominal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex : 3000000 (masukkan angka saja)"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Divider />
            <p className="p-5 font-medium">Pemberi Rekomendasi</p>
            <div className="space-y-4 px-5 pb-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">No Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 081919282719"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </>
      )}
      {data?.data.program_category_id === 3 && (
        <>
          <Form {...form}>
            <div className="space-y-4 p-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Tempat/Tanggal Lahir</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Jakarta/1 Januari 1990"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat Rumah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Status Pernikahan</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Status Pernikahan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Belum Kawin">
                            Belum Kawin
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Kawin">
                            Kawin
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="CeraiHidup">
                            Cerai Hidup
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="CeraiMati">
                            Cerai Mati
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Pendidikan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: S1"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Penghasilan Bulanan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 30000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Biaya Hidup Bulanan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 30000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Jumlah Tanggungan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Jenis Permohonan Bantuan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Pengajuan Bantuan Kesehatan Anak"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Bantuan Pihak Lain</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Yayasan Budi"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nominal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 100000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Divider />
            <p className="p-5 font-medium">Pemberi Rekomendasi</p>
            <div className="space-y-4 px-5 pb-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">No Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 081919282719"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </>
      )}
      {(data?.data.program_category_id === 2 || data?.data.program_category_id === 4) && (
        <>
          <Form {...form}>
            <div className="space-y-4 p-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Tempat/Tanggal Lahir</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Jakarta/1 Januari 1990"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Jenis Kelamin</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Jenis Kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="L">
                            Laki-laki
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="P">
                            Perempuan
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat Rumah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Kode Pos</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 662111"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Status Domisili</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Status Domisili" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Ortu">
                            Ikut Orang Tua
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Saudara">
                            Ikut Saudara
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Kost">
                            Kost
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="Numpang">
                            Numpang
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <Label>Pendidikan</Label>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                    }}
                      defaultValue={field.value}>
                      <SelectTrigger className="h-14 w-full">
                        <SelectValue placeholder="Pilih Pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="SD">
                            SD
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="SMP">
                            SMP
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="SMA/SMK">
                            SMA/SMK
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="D-I">
                            D-I
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="D-II">
                            D-II
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="D-III">
                            D-III
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectItem value="S1">
                            S1
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama Sekolah/Universitas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Harvard"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Fakultas khusus univ */}
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Jurusan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Computer Science"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Kelas/Semester</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 4"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat Sekolah/Universitas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: California"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nomor Telepon Sekolah/Universitas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 081877181826"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Biaya Pendidikan Bulanan</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 3000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Organisasi yang diikuti</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Cyber Team"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama Ayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Budi"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Pekerjaan Ayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Hacker"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Penghasilan per bulan ayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 4000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama Ibu</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Nabs"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Pekerjaan Ibu</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Hacker"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Penghasilan per bulan ibu</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 4000000"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Divider />
            <p className="p-5 font-medium">Pemberi Rekomendasi</p>
            <div className="space-y-4 px-5 pb-5">
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ini Nama"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Alamat</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sawah Besar VI no 12"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program_title" /*ubah disini*/
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">No Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 081919282719"
                      // {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </>
      )}

      {/* <Form {...form}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="program_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nama Program</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Bantuan Masjid Al Kautsar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="program_short_desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Deskripsi Singkat Program</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan Deskripsi Singkat Program" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="program_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Deskripsi Program</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan Deskripsi Program" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="banner"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="mt-4">Lampirkan file yang dibutuhkan</FormLabel>
                <FormControl>
                  <>
                    {field.value && (
                      <Image
                        alt="Image Banner"
                        height={200}
                        width={500}
                        src={URL.createObjectURL(field.value)}
                        className="w-full object-cover"
                      />
                    )}
                    <input
                      type="file"
                      ref={bannerRef}
                      className="hidden"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      accept="image/*"
                    />
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        bannerRef.current?.click();
                      }}
                    >
                      Upload Persyaratan
                      <svg xmlns="http://www.w3.org/2000/svg" className="pl-2 icon icon-tabler icon-tabler-camera" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      </svg>
                    </Button>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        <Divider />

        <div className="p-5">
          <p className="mb-3 font-semibold text-slate-600">Nominal Kebutuhan Dana</p>

          <FormField
            control={form.control}
            name="program_target_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nominal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: 1000000"
                    type="number"
                    onKeyDown={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    value={field.value ? Number(field.value) : undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="program_start_date"
            render={({ field }) => (
              <FormItem className="mt-4 flex flex-col space-y-3">
                <FormLabel>Tanggal Mulai</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Pilih Tanggal Program Mulai</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="program_end_date"
            render={({ field }) => (
              <FormItem className="mt-4 flex flex-col space-y-3">
                <FormLabel>Tanggal Berakhir</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Pilih Tanggal Program Berakhir</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form> */}

      <Divider />

      <CallCenter />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
        {/* <Link href={Boolean(watchAll) ? `/program/${id}/submit-completed` : '#'}> */}
        <Link href={Boolean(watchAll) ? `/program/${id}/program-lampiran` : '#'}>
          <Button
            disabled={isLoading}
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            size="lg"
            variant="destructive"
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Selanjutnya
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubmitProgramPage;