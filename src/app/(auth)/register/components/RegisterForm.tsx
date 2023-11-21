'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import TOCContent from '@/app/toc/components/TOCContent';
import MuzakiIcon from '@/components/icon/MuzakiIcon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { role } from '@/data/role';
import { RegisterSchema, registerSchema } from '@/schema/register';

import useMutateRegister from '../hooks/useMutateRegister';
import RoleSelector from './RoleSelector';

const RegisterForm = () => {
  const { mutateAsync, isLoading } = useMutateRegister();
  const [isTermsAgreed, setIsTermsAgreed] = React.useState(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      type: '10',
      email: '',
      nama: '',
      phone: '',
    },
  });

  const selectedRole = form.watch('type');

  const setSelectedRole = (id: '10' | '11') => {
    form.setValue('type', id);
  };

  const onSubmit = (data: RegisterSchema) => {
    mutateAsync(data).finally(() => {
      form.reset(
        {
          email: '',
          nama: '',
          phone: '',
          type: '10',
        },
        {
          keepValues: false,
        },
      );
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-5">
          <p className="font-semibold">Daftar Sebagai</p>
          <div className="mt-3 flex items-center justify-between space-x-3 rounded-md border border-slate-300 p-2">
            <MuzakiIcon />
            <div className="flex-1">
              <p>
                {role.find((r) => r.id === selectedRole)?.label1}{' '}
                <span className="text-slate-600">
                  {role.find((r) => r.id === selectedRole)?.label3}
                </span>
              </p>
            </div>

            <RoleSelector onSelect={setSelectedRole} />
          </div>
        </div>

        <div className="h-3 bg-slate-100" />
        <div className="flex flex-col space-y-4 p-5">
          <p className="font-semibold">Masukkan Data</p>
          <FormField
            disabled={isLoading}
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="email">
                  Nama Lengkap
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nama Lengkap Pengguna" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="email">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email Pengguna" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4" htmlFor="email">
                  Nomor telepon / whatsapp (contoh format: 085xxxx)
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nomor telepon / whatsapp Pengguna" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="h-3 bg-slate-100" />

        <div className="flex p-5 text-slate-700">
          <Checkbox
            id="terms"
            className="mr-2 mt-1"
            checked={isTermsAgreed}
            onCheckedChange={(e) => setIsTermsAgreed(Boolean(e))}
          />
          <div>
            Dengan Klik Daftar, anda telah menyetujui{' '}
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer font-semibold text-orange-500">
                  Syarat dan Ketentuan kami.
                </div>
              </DialogTrigger>
              <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Syarat Dan Ketentuan</DialogTitle>
                </DialogHeader>
                <TOCContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="h-3 bg-slate-100" />

        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md  bg-white p-5">
          <Button
            disabled={isLoading || !isTermsAgreed}
            className="w-full"
            size="lg"
            variant="destructive"
            type="submit"
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Daftar
          </Button>
          <div className="my-3 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200" />
            <p className="text-sm text-slate-400">Sudah Punya Akun ?</p>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <Link href="/login">
            <Button
              disabled={isLoading}
              type="button"
              className="w-full border-red-500 text-red-500 hover:text-red-500"
              size="lg"
              variant="outline"
            >
              Masuk Sekarang
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
