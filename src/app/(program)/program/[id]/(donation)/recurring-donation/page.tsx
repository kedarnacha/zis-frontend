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
import { RecurringSchema } from '@/schema/recurring';
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
  const forms = useFormContext<RecurringSchema>();
  const [checked, setChecked] = React.useState(false);

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
                  value={field.value}
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

      <div className="p-5">
        <p className="font-medium">Masukkan Data Diri</p>

        <div className="my-4">
          <Label>Email</Label>
          <Input type="email" placeholder="Email" value={authState?.user?.username} />
        </div>

        <div className="my-4">
          <Label>Nama</Label>
          <Input type="text" placeholder="Nama" value={authState?.user?.user_nama} />
        </div>

        <div className="my-4">
          <Label>Nomor telepon / whatsapp</Label>
          <Input type="text" placeholder="Nomor telepon / whatsapp" value={authState?.user?.user_phone} />
        </div>

        <div className="flex flex-row items-center my-4 text-slate-700">
          <div className="flex-1">Aktifkan Fitur Pengingat</div>

          <Switch
            className="data-[state=checked]:bg-red-500"
            checked={checked}
            onCheckedChange={(c) => setChecked(c)}
          />
        </div>
        {checked ? (
          <>
            <FormField
              control={forms.control}
              name="reminder_type"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Durasi Sedekah</Label>
                  <div className="flex items-center justify-start space-x-3">
                    <div className="flex-1">
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                      }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0" >
                              1
                            </SelectItem>
                            <SelectItem value="1" >
                              2
                            </SelectItem>
                            <SelectItem value="2" >
                              3
                            </SelectItem>
                            <SelectItem value="3" >
                              4
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-[3]">
                      <Input type="text" disabled placeholder="Minggu" />
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={forms.control}
              name="recurring_type"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Pengingat Setiap</Label>
                  <div className="flex items-center justify-start space-x-3">
                    <div className="flex-1">
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                      }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0" >
                              1
                            </SelectItem>
                            <SelectItem value="1" >
                              2
                            </SelectItem>
                            <SelectItem value="2" >
                              3
                            </SelectItem>
                            <SelectItem value="3" >
                              4
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-[3]">
                      <Input type="text" disabled placeholder="Minggu" />
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </>
        ) : null}
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
