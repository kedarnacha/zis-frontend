'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NumericFormat } from 'react-number-format';
import Divider from '@/components/zis/Divider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface MainFormProps {
  data: any; // Adjust the type according to your data structure
  form: any; // Adjust the type according to your form state
}

class InstitusiForm extends React.Component<MainFormProps> {
  renderForm() {
    const { data, form } = this.props;
    return (
      <Form {...form}>
        <div className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="nik_mustahiq" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nomor Induk Kependudukan Penanggung Jawab</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex : 3201192817651 (masukkan angka saja)"
                    {...field}
                    type="number"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nama Lembaga</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dana_yang_diajukan" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Dana yang diajukan</FormLabel>
                <FormControl>
                  <NumericFormat
                    placeholder="Ex: 4000000"
                    className="input flex h-10 w-full rounded-none border-x-0 border-b border-t-0 border-b-slate-200 bg-transparent px-3 py-2 text-sm"
                    type="text"
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value.value);
                    }}
                    decimalSeparator=","
                    thousandSeparator="."
                    prefix="Rp "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenis_bantuan_kesehatan" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Jenis Permohonan Bantuan</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Pengajuan Bantuan Kesehatan Anak" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Divider />
        <p className="p-5 font-medium">Pemberi Rekomendasi</p>
        <div className="space-y-4 px-5 pb-5">
          <FormField
            control={form.control}
            name="nama_pemberi_rekomendasi" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ini Nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alamat_pemberi_rekomendasi" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Alamat</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Sawah Besar VI no 12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="no_telp_pemberi_rekomendasi" /*ubah disini*/
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">No Telepon yang tersambung Whatsapp</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 081919282719" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
    );
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default InstitusiForm;
