'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import Navbar from '@/components/zis/Navbar';

import useMutateEditAccount from '../hooks/useMutateEditAccount';
import useQueryAccount from '../hooks/useQueryAccount';

import { ChevronRight, KeyIcon } from 'lucide-react';
import Link from 'next/link';

const schema = z.object({
  nama: z.string().min(1),
  phone: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

const EditPage = () => {
  const { data } = useQueryAccount();
  const { mutate, isLoading } = useMutateEditAccount();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    form.setValue('nama', data?.user_nama ?? '');
    form.setValue('phone', data?.user_phone ?? '');
  }, [data, form]);

  const onSubmit = (data: Schema) => {
    mutate({ nama: data.nama, phone: data.phone });
  };

  return (
    <div>
      <Navbar title="Data Diri " />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-medium">Data Diri</p>
        </div>

        <Form {...form}>
          <div className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">No. Telepon / WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="No. Telepon / WhatsApp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label>Email</Label>
              <Input type="text" value={data?.username ?? ''} disabled placeholder="Email" />
            </div>
          </div>
        </Form>
        <Link href="/change-password">
          <div className="flex mt-3 cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
            <KeyIcon className="h-5 w-5 text-orange-500" />
            <div className="flex-1">Ubah Password</div>
            <ChevronRight className="h-5 w-5 text-slate-500" />
          </div>
        </Link>
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-md items-center space-x-4 border-t border-t-slate-100 bg-white p-5">
        <Button
          onClick={form.handleSubmit(onSubmit)}
          disabled={isLoading}
          className="w-full"
          size="lg"
          variant="destructive"
        >
          Ubah
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
