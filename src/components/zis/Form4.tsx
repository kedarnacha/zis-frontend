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
import Divider from '@/components/zis/Divider';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface Form3Props {
  form: any; // Adjust the type according to your form state
}

class Form4 extends React.Component<Form3Props> {
  render() {
    const { form } = this.props;

    return (
      <>
        <Form {...form}>
          <div className="space-y-4 p-5">
            <FormField
              control={form.control}
              name="nik_mustahiq" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nomor Induk Kependudukan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex : 3201192817651 (masukkan angka saja)"
                      {...field}
                      type="number"
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
                  <FormLabel className="mt-4">Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Ini Nama"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tempat_lahir" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Tempat Lahir</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Jakarta"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tgl_lahir"
              render={({ field }) => (
                <FormItem className="mt-4 flex flex-col space-y-3">
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className='w-full font-normal input input-bordered'
                      value={field.value || ''}
                      onChange={(e) => {
                        const adjustedDate = e.target.value ? new Date(e.target.value + 'T00:00:00Z') : undefined;
                        field.onChange(adjustedDate?.toISOString().split('T')[0] || '');
                      }}
                    />
                  </FormControl>
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
                    <Input
                      placeholder="Ex : 3000000 (masukkan angka saja)"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alamat_rumah" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Alamat Rumah</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Sawah Besar VI no 12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status_rumah" /*ubah disini*/
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Status Rumah</Label>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Status Rumah" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Milik Sendiri</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="1">Numpang</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="2">Sewa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status_pernikahan" /*ubah disini*/
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Status Pernikahan</Label>
                  <Select onValueChange={(value) => {
                    field.onChange(Number(value));
                  }}>
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Status Pernikahan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">
                          Belum Menikah
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="1">
                          Menikah
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jumlah_tanggungan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Jumlah Tanggungan</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 2"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pekerjaan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Pekerjaan</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Project Manager" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="penghasilan_bulanan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Penghasilan Bulanan</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 30000000"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="biaya_hidup_bulanan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Biaya Hidup Bulanan</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 30000000"
                      {...field}
                      type="number"
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
                    <Input placeholder="Ex: Pengajuan Bantuan Kesehatan Anak"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bantuan_pihak_lain" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Bantuan Pihak Lain</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Yayasan Budi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nominal_bantuan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nominal</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex : 3000000 (masukkan angka saja)"
                      {...field}
                      type="number"
                    />
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
                    <Input placeholder="Ex: Ini Nama"
                      {...field}
                    />
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
                    <Input placeholder="Ex: Sawah Besar VI no 12"
                      {...field}
                    />
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
                    <Input placeholder="Ex: 081919282719"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
      </>

    );
  }
}

export default Form4;
