'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon, LoaderIcon } from 'lucide-react';
import React from 'react';
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

import useMutateChangePassword from '../hooks/useMutateChangePassword';

const schema = z
  .object({
    password: z
      .string({
        invalid_type_error: 'Password Lama tidak valid',
        required_error: 'Password Lama harus diisi',
      })
      .min(1, 'Password Lama harus diisi'),
    newPassword: z
      .string({
        invalid_type_error: 'Password Baru tidak valid',
        required_error: 'Password Baru harus diisi',
      })
      .min(1, 'Password Baru harus diisi'),
    confirm: z
      .string({
        invalid_type_error: 'Konfirmasi Password Baru tidak valid',
        required_error: 'Konfirmasi Password Baru harus diisi',
      })
      .min(1, 'Konfirmasi Password Baru harus diisi'),
  })
  .refine((data) => data.newPassword === data.confirm, {
    message: 'Password Baru dan Konfirmasi Password Baru harus sama',
    path: ['confirm'],
  });

type Schema = z.infer<typeof schema>;
const ChangePassForm = () => {
  const { mutate, isLoading } = useMutateChangePassword();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    mutate(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Kata Sandi Lama</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Kata Sandi Lama"
                    type="password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Kata Sandi Baru</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Kata Sandi Baru"
                    type="password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Konfirmasi Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Konfirmasi Password"
                    type="password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="h-3 bg-slate-100" />

        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full"
            size="lg"
            variant="destructive"
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Selanjutnya
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChangePassForm;
