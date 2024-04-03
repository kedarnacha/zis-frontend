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
import { Label } from '@/components/ui/label';
import { useAuthState } from '@/store/useAuthState';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  const id = param?.id as string;
  const form = useFormContext<DonateSchema>();
  const { data } = useQueryDetailProgram(id);
  const cat_id = data?.data.program_category_id;

  const watchAmount = form.watch('amount');
  useEffect(() => {
    if (authState?.user) {
      form.setValue('nama_muzaki', authState.user.user_nama);
      form.setValue('email_muzaki', authState.user.username);
      form.setValue('phone_muzaki', authState.user.user_phone);
    }
  }, [authState?.user]);
  useEffect(() => {
      form.setValue('isrecurring', 1);
  }, []);

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
                  value={field.value}
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
      </div>

      <div className="px-5">
        <div className="flex flex-row items-center mb-4 text-slate-700">
          <div className="flex-1">Aktifkan Fitur Pengingat</div>
        </div>
          <FormField
            control={form.control}
            name="recurring_satuan"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2">
                <Label>Durasi Sedekah</Label>
                <div className="flex items-center justify-start space-x-3">
                  <div className="flex-1">
                    <Select onValueChange={(value) => {
                      field.onChange(parseInt(value));
                    }}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="0" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="12" >
                            12
                          </SelectItem>
                          <SelectItem value="24" >
                            24
                          </SelectItem>
                          <SelectItem value="36" >
                            36
                          </SelectItem>
                          <SelectItem value="48" >
                            48
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Input type="text" disabled placeholder="Minggu" />
                  </div>
                </div>
              </FormItem>
            )}
          />
      </div>

      <div className="h-96" />

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
