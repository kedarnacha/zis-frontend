'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
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
  const id = param?.id as string;
  const form = useFormContext<DonateSchema>();

  const watchAmount = form.watch('amount');

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
              form.setValue('amount', item.price.toString());
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
                  value={selectedIndex ? '' : field.value}
                  onChange={(e) => {
                    if (selectedIndex !== undefined) {
                      setSelectedIndex(undefined);
                    }
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>Minimal donasi sebesar Rp 10.000</FormDescription>
            </FormItem>
          )}
        />
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Link href={Boolean(watchAmount) ? `/program/${id}/confirm-donation` : '#'}>
          <Button
            disabled={!Boolean(watchAmount)}
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
