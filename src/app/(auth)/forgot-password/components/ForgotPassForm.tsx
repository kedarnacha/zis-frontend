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

import useMutateForgotPassword from '../hooks/useMutateForgotPassword';

const schema = z.object({
  email: z
    .string({
      invalid_type_error: 'Email tidak valid',
      required_error: 'Email harus diisi',
    })
    .email({
      message: 'Email tidak valid',
    }),
});

type Schema = z.infer<typeof schema>;
const ForgotPassForm = () => {
  const { mutate, isLoading } = useMutateForgotPassword();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    mutate(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-5">
          <p className="mb-3 font-semibold">Masukkan Email Pengguna</p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="email">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan Email" {...field} disabled={isLoading} />
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

export default ForgotPassForm;
