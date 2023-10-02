'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon, LoaderIcon } from 'lucide-react';
import Link from 'next/link';
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

import useMutateLogin from '../hooks/useMutateLogin';

const loginSchema = z.object({
  username: z
    .string({
      invalid_type_error: 'Email tidak valid',
      required_error: 'Email harus diisi',
    })
    .email({
      message: 'Email tidak valid',
    }),
  password: z
    .string({
      required_error: 'Kata sandi harus diisi',
    })
    .min(8, {
      message: 'Kata sandi minimal 8 karakter',
    })
    .max(32),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { mutate, isLoading } = useMutateLogin();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    mutate(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-5">
          <p className="mb-3 font-semibold">Masukkan Email Pengguna</p>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="email">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="h-3 bg-slate-100" />

        <div className="p-5">
          <p className="mb-3 font-semibold">Masukkan Kata Sandi</p>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="password">
                  Kata Sandi
                </FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan Kata Sandi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="mt-4 text-sm text-slate-700">
            Lupa kata sandi? <span className="font-semibold text-orange-500">Ganti Disini</span>
          </p>
        </div>

        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full"
            size="lg"
            variant="destructive"
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Masuk
          </Button>
          <div className="my-3 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200" />
            <p className="text-sm text-slate-400">Belum Punya Akun ?</p>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <Link href="/register">
            <Button
              type="button"
              role="button"
              className="w-full border-red-500 text-red-500 hover:text-red-500"
              size="lg"
              variant="outline"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
