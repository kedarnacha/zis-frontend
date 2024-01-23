'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { HardDriveDownload, Loader2Icon, Upload, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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
import { MustahiqSchema, mustahiqSchema } from '@/schema/mustahiq';

import useQueryAccount from '../account/hooks/useQueryAccount';
import useMutateCreateMustahiq from './hooks/useMutateCreateMustahiq';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SelectInstitusiContent from './components/SelectInstitusiContent';
import InstituteIcon from '@/components/icon/InstituteIcon';
import PersonalIcon from '@/components/icon/PersonalIcon';
import useQueryProvince from './hooks/UseQueryProvince';
import useQueryKota from './hooks/UseQueryKota';
import useQueryKec from './hooks/UseQueryKec';
import { useAuthState } from '@/store/useAuthState';

type CityList = {
  [key: string]: { kota: string; value: string }[];
};
type KecList = {
  [key: string]: { kec: string; value: string }[];
};
const MustahiqPage = () => {
  const { data } = useQueryAccount();
  const { mutate, isLoading } = useMutateCreateMustahiq();
  const ktpRef = React.useRef<HTMLInputElement>(null);
  const kkRef = React.useRef<HTMLInputElement>(null);

  const form = useForm<MustahiqSchema>({
    resolver: zodResolver(mustahiqSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      is_institusi: false,
    },
  });
  const authState = useAuthState();
  const [selected, setSelected] = useState<number>();
  const [selected2, setSelected2] = useState<number>();;
  const { data: provData } = useQueryProvince();
  console.log(selected)
  console.log(selected2)
  const { data: kotaData, refetch: refKota } = useQueryKota(selected!);
  const { data: kecData, refetch: refKec } = useQueryKec(selected2!);
  useEffect(() => {
    if (selected !== undefined) {
      refKota();
    }
    if (selected2 !== undefined) {
      refKec();
    }
  }, [selected, selected2, refKota, refKec]);

  const onSubmit = (data: MustahiqSchema) => {
    mutate(data);
  };

  const [open, setOpen] = useState(false);
  const [isInstitusi, setIsInstitusi] = useState(false);
  const [pop, setPop] = useState(false);

  const handleClick = (label: true | false) => {
    setOpen(false);
    setIsInstitusi(label)
    form.setValue('is_institusi', label);
  };

  console.log(form.watch())

  return (
    <div>
      <Navbar title="Data Diri Mustahiq" />
      <Form {...form}>
        {authState?.user?.mustahiq_id === null && (
          <div className="mt-3 mx-3 flex items-center justify-between space-x-3 rounded-md border border-slate-300 p-2">
            {isInstitusi ? <InstituteIcon /> : <PersonalIcon />}
            <div className="flex-1">
              <p className='font-semibold'>
                {isInstitusi ? 'Lembaga' : 'Perorangan'}
              </p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-amber-500"
                  type="button"
                  onClick={() => setOpen(true)}
                >
                  Ubah
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Daftar Sebagai</DialogTitle>
                </DialogHeader>
                <SelectInstitusiContent
                  onSelect={(label) => {
                    // const _label = label as 'Perorangan' | 'Lembaga';
                    handleClick(label);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium">Data Diri</p>
            <Link href="/account/edit">
              <Button variant="ghost" className="text-orange-500">
                Ubah
              </Button>
            </Link>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <Label>Nama Lengkap</Label>
              <Input type="text" value={data?.user_nama} disabled placeholder="Nama Lengkap" />
            </div>

            <div>
              <Label>Email</Label>
              <Input disabled type="text" value={data?.username} placeholder="Email" />
            </div>

            <div>
              <Label>Nomor telepon yang tersambung whatsapp</Label>
              <Input
                disabled
                type="text"
                value={data?.user_phone}
                placeholder="Nomor telepon / whatsapp"
              />
            </div>
          </div>
        </div>
        <Divider />
        {authState?.user?.mustahiq_id === null && (
          <>
            <div className="p-5">
              <p className="font-medium">Identitas Penerima Bantuan</p>

              <div className="mt-4 space-y-5">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Alamat Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Alamat Lengkap" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="province" /*ubah disini*/
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <Label>Provinsi</Label>
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                        setSelected(parseInt(form.watch('province')))
                      }}
                        defaultValue={field.value}>
                        <SelectTrigger className="h-14 w-full">
                          <SelectValue placeholder="Pilih Provinsi" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 overflow-y-auto">
                          {provData?.data ? (
                            provData.data.map((option: { prov_id: number; prov_name: string }) => (
                              <SelectGroup key={option.prov_id}>
                                <SelectItem value={option.prov_id.toString()}>
                                  {option.prov_name}
                                </SelectItem>
                              </SelectGroup>
                            ))
                          ) : (
                            <p>Loading provinsi...</p>
                          )}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {selected !== undefined && (
                  <FormField
                    control={form.control}
                    name="kota" /*ubah disini*/
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-2">
                        <Label>Kota/Kabupaten</Label>
                        <Select onValueChange={(value) => {
                          field.onChange(value);
                          setSelected2(parseInt(form.watch('kota')))
                          console.log(selected2)
                        }}
                          defaultValue={field.value}>
                          <SelectTrigger className="h-14 w-full">
                            <SelectValue placeholder="Pilih Provinsi" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 overflow-y-auto">
                            {kotaData?.data ? (
                              kotaData.data.map((option: { city_id: number; city_name: string }) => (
                                <SelectGroup key={option.city_id}>
                                  <SelectItem value={option.city_id.toString()}>
                                    {option.city_name}
                                  </SelectItem>
                                </SelectGroup>
                              ))
                            ) : (
                              <p>Loading provinsi...</p>
                            )}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                )}
                {selected2 !== undefined && (
                  <FormField
                    control={form.control}
                    name="kecamatan" /*ubah disini*/
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-2">
                        <Label>Kecamatan</Label>
                        <Select onValueChange={(value) => {
                          field.onChange(value);
                        }}
                          defaultValue={field.value}>
                          <SelectTrigger className="h-14 w-full">
                            <SelectValue placeholder="Pilih Kecamatan" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 overflow-y-auto">
                            {kecData?.data ?
                              kecData.data.map((option: { dis_id: number; dis_name: string }) => (
                                <SelectGroup>
                                  <SelectItem value={option.dis_id.toString()}>
                                    {option.dis_name}
                                  </SelectItem>
                                </SelectGroup>
                              )) : (
                                <p>Loading provinsi...</p>
                              )}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />)}

                <FormField
                  control={form.control}
                  name="ktp_file"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Data Foto KTP</FormLabel>
                      <FormControl>
                        <>
                          <input
                            type="file"
                            ref={ktpRef}
                            className="hidden"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                            accept="application/pdf, image/*"
                          />
                          <Button
                            variant="outline"
                            className="justify-between text-slate-500"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              ktpRef.current?.click();
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

                <FormField
                  control={form.control}
                  name="kk_file"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Data Foto Kartu Keluarga</FormLabel>
                      <FormControl>
                        <>
                          <input
                            type="file"
                            ref={kkRef}
                            className="hidden"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                            accept="application/pdf, image/*"
                          />
                          <Button
                            variant="outline"
                            className="justify-between text-slate-500"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              kkRef.current?.click();
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

                <FormField
                  control={form.control}
                  name="emergency_contact_name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <Label>Kontak Darurat</Label>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="h-14 w-full">
                          <SelectValue placeholder="Pilih Status Keluarga" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Orang Tua">Orang Tua</SelectItem>
                            <SelectItem value="Saudara">Saudara</SelectItem>
                            <SelectItem value="Lainnya">Lainnya</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergency_contact_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Masukkan Nomor Telepon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Divider />

            {isInstitusi ?
              <>
                <div className="p-5">
                  <p className="font-medium">Data Lembaga</p>

                  <div className="mt-4 space-y-5">
                    <FormField
                      control={form.control}
                      name="institusi_nama"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mt-4">Nama Institusi</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan Nama Institusi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="institusi_no_hp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mt-4">Nomor Telepon Institusi</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan Nomor Telepon" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </div>
                <Divider />
              </>
              : null}

            <div className="p-5">
              <p className="font-medium">Nomor Rekening Penerima Bantuan</p>

              <div className="mt-4 space-y-5">
                <FormField
                  control={form.control}
                  name="bank_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Masukkan Nama Bank</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Nama Bank (Contoh : BCA)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bank_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Nomor Rekening</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Nomor Rekening" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bank_account_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Nama Pemilik Rekening</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Pemilik Rekening" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Divider />

            <div className="p-5">
              <div className='flex'>
                <p className="font-medium flex">Nomor IMkas</p>
                <button data-popover-target="popover-default" className=" rounded-full bg-white p-0" onClick={() => setPop(!pop)} >
                  <HelpCircle className='ml-1' />
                </button>
                <div data-popover id="popover-default" role="tooltip" className={`absolute z-10 left-1/3 block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${pop ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                  <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">IMKas Procedure</h3>
                  </div>
                  <div className="px-3 py-2 text-black" >
                    <img src='/IMKAS.png' />
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </div>

              <div className="mt-4 space-y-5">
                <FormField
                  control={form.control}
                  name="nama_imkas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Masukkan Nama Akun IMkas</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Nama Akun IMkas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imkas_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4">Masukkan Nomor IMkas</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Nomor IMkas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

          </>
        )}
      </Form>

      {/* <Divider /> */}
      {/* 
      <div className="p-5">
        <Button variant="outline" size="lg" className="w-full justify-between px-4 text-slate-500">
          <span>Unduh data Mustahiq</span> <HardDriveDownload className="h-4 w-4 text-orange-400" />
        </Button>
      </div>
      <Divider /> */}

      <CallCenter />

      <div className="h-96" />
      {!data?.mustahiq && (
        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
          <Button
            disabled={isLoading}
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            size="lg"
            variant="destructive"
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Lengkapi Data
          </Button>
        </div>
      )}
    </div>
  );
};

export default MustahiqPage;