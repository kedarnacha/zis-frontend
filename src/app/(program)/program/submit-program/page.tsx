'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, GlobeIcon, Loader2Icon, Upload } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
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
import { cn } from '@/lib/utils';
import { ProgramSchema, programSchema } from '@/schema/program';

import useMutateCreateProgram from '../../hooks/useMutateCreateProgram';

const SubmitProgramPage = () => {
  const bannerRef = React.useRef<HTMLInputElement>(null);
  const { mutate, isLoading } = useMutateCreateProgram();

  const form = useFormContext<ProgramSchema>();

  console.log(form.watch())

  const onSubmit = (data: ProgramSchema) => {
    mutate(data);
  };

  return (
    <div className="pb-96">
      <Navbar title="Proses Proposal Program Bantuan" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Isi Data-data dibawah dengan lengkap</h2>
      </div>

      <Form {...form}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="banner"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="mt-4">Foto Kondisi untuk Program</FormLabel>
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
                      Upload Foto
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
      </Form>

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
      </div>
    </div>
  );
};

export default SubmitProgramPage;