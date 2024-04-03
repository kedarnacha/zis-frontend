'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import { cn } from '@/lib/utils';
import { DonateSchema } from '@/schema/donate';
import { formatter } from '@/utils/number';
import { useAuthState } from '@/store/useAuthState';
import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';

const amount = [
  {
    emoji: '🙂',
    price: 30000,
  },
  {
    emoji: '😊',
    price: 50000,
  },
  {
    emoji: '😄',
    price: 100000,
  },
  {
    emoji: '😍',
    price: 150000,
  },
];

const DonatePage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();
  const param = useParams();
  const authState = useAuthState();
  console.log(authState?.user)
  const id = param?.id as string;
  const form = useFormContext<DonateSchema>();
  const { data } = useQueryDetailProgram(id);
  const cat_id = data?.data.program_category_id;

  useEffect(() => {
    if (authState?.user) {
      form.setValue('nama_muzaki', authState.user.user_nama);
      form.setValue('email_muzaki', authState.user.username);
      form.setValue('phone_muzaki', authState.user.user_phone);
    }
  }, [authState?.user]);

  const watchAmount = form.watch('amount');
  const watchName = form.watch('nama_muzaki');
  const watchEmail = form.watch('email_muzaki');
  const watchPhone = form.watch('phone_muzaki');
  console.log(cat_id)

  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Masukkan Nominal Sedekah,</h2>
      </div>

      <div className="space-y-4 p-5">
        {amount.map((item, index) => (
          <div
            onClick={() => {
              setSelectedIndex(index);
              form.setValue('amount', (item.price.toString()));
            }}
            key={index}
            className={cn(
              'flex cursor-pointer items-center space-x-3 rounded-lg border border-slate-200 px-2 py-4',
              {
                'border-red-500': selectedIndex === index,
              },
            )}
          >
            <span>{item.emoji}</span>
            <div className="flex-1">{formatter.format(item.price)}</div>
            <ChevronRight />
          </div>
        ))}
      </div>

      <Divider />

      <div className="p-5">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-4">Nominal Donasi Lainnya</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Rp"
                  {...field}
                  value={(field.value)}
                  onChange={(e) => {
                    if (selectedIndex !== undefined) {
                      setSelectedIndex(undefined);
                    }
                    field.onChange(e);
                  }}
                  onBlur={(e) => {
                    form.setValue('amount', (e.target.value.toString()));
                  }}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>Minimal donasi sebesar Rp 10.000</FormDescription>
            </FormItem>
          )}
        />
        <div className='pt-4'>
          {(authState?.user == undefined || null) ? (
            <>
              <FormField
                control={form.control}
                name="nama_muzaki"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Masukkan Nama Anda</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Budi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email_muzaki"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Masukkan Email Anda</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="budi@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_muzaki"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-4">Masukkan Nomor Handphone Anda</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="08989101082716" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ) : null}
        </div>
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Link href={Boolean(watchAmount) ? `/program/${id}/confirm-donation` : '#'}>
          <Button
            disabled={!(Boolean(watchAmount) && Boolean(watchName) && Boolean(watchEmail) && Boolean(watchPhone)) }
            type="button"
            role="button"
            className="w-full "
            size="lg"
            variant="destructive"
          >
            Selanjutnya
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DonatePage;
