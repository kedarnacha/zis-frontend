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
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/zis/Navbar';

import useMutateResetPassword from '../hooks/useMutateResetPassword';

const schema = z
  .object({
    password: z.string().min(8, 'Minimal 8 karakter').max(50, 'Maksimal 50 karakter'),
    confirmPassword: z.string().min(8, 'Minimal 8 karakter').max(50, 'Maksimal 50 karakter'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ['confirmpassword'],
  });

type Schema = z.infer<typeof schema>;
type Props = {
  email: string;
  token: string;
};
const ResetPassword = ({ email, token }: Props) => {
  const { mutate, isLoading } = useMutateResetPassword();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    mutate({ password: data.password, email, token });
  };
  return (
    <div>
      <Navbar title="Reset Password" showBack={false} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, () => {
            toast({
              title: 'Password Harus Sama',
              variant: 'destructive',
            });
          })}
        >
          <div className="p-5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4" htmlFor="email">
                    Password Baru
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan Password Baru"
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
          <div className="p-5">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4" htmlFor="email">
                    Konfirmasi Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Konfirmasi Password"
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
    </div>
  );
};

export default ResetPassword;
