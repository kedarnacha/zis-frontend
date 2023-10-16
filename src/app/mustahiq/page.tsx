'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { HardDriveDownload, Loader2Icon, Upload } from 'lucide-react';
import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (data?.mustahiq) {
      form.setValue('address', data?.mustahiq?.address);
      form.setValue('emergency_contact_name', data?.mustahiq?.emergency_contact_name);
      form.setValue('emergency_contact_number', data?.mustahiq?.emergency_contact_number);
      form.setValue('bank_name', data?.mustahiq?.bank_name);
      form.setValue('bank_number', data?.mustahiq?.bank_number);
      form.setValue('bank_account_name', data?.mustahiq?.bank_account_name);
      form.setValue('imkas_number', (data?.mustahiq?.imkas_number as any) || undefined);
    }
  }, [data?.mustahiq, form]);

  const onSubmit = (data: MustahiqSchema) => {
    mutate(data);
  };

  const isInstitusi = form.watch('is_institusi');

  return (
    <div>
      <Navbar title="Data Diri Mustahiq" />
      <Form {...form}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="is_institusi"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2">
                <Label>Daftar Sebagai</Label>
                <Select
                  onValueChange={(value) => field.onChange(value !== 'personal')}
                  defaultValue={!field.value ? 'personal' : 'institusi'}
                >
                  <SelectTrigger className="h-14 w-full">
                    <SelectValue placeholder="Pilih Status Keluarga" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="personal">Perorangan</SelectItem>
                      <SelectItem value="institusi">Institusi</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {isInstitusi && (
            <>
              <FormField
                control={form.control}
                name="institusi_nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Nama Institusi</FormLabel>
                    <FormControl>
                      <Input required placeholder="Masukkan Nama Institusi" {...field} />
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
                    <FormLabel className="mt-4">No. PIC</FormLabel>
                    <FormControl>
                      <Input required placeholder="Masukkan No. PIC" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <Divider />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium">Data Diri</p>
            <Button variant="ghost" className="text-orange-500">
              Ubah
            </Button>
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
              <Label>Nomor telepon / whatsapp</Label>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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

        <div className="p-5">
          <p className="font-medium">Nomor Rekening Penerima Bantuan</p>

          <div className="mt-4 space-y-5">
            <FormField
              control={form.control}
              name="bank_name"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Pilih Bank</Label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Nama Bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
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
                  <FormLabel className="mt-4">Pemilik Rekening</FormLabel>
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
          <p className="font-medium">Nomor IMkas</p>

          <div className="mt-4 space-y-5">
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
      </Form>

      <Divider />

      <div className="p-5">
        <Button variant="outline" size="lg" className="w-full justify-between px-4 text-slate-500">
          <span>Unduh data Mustahiq</span> <HardDriveDownload className="h-4 w-4 text-orange-400" />
        </Button>
      </div>
      <Divider />

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
