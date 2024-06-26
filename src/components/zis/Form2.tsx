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
import { NumericFormat } from 'react-number-format';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface Form2Props {
  form: any; // Adjust the type according to your form state
}

class Form2 extends React.Component<Form2Props> {
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
                    <Input placeholder="Ex: Ini Nama" {...field} />
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
                    <Input placeholder="Ex: Jakarta" {...field} />
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
                    {/* <Input
                      placeholder="Ex : 3000000 (masukkan angka saja)"
                      {...field}
                      type="number"
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jenis_kelamin" /*ubah disini*/
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Jenis Kelamin</Label>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Laki-laki</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="1">Perempuan</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
                    <Input placeholder="Ex: Sawah Besar VI no 12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kode_pos" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Kode Pos</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 662111" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status_domisili" /*ubah disini*/
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Status Domisili</Label>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Status Domisili" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Tidak Tetap</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="1">Tetap</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pendidikan_terakhir" /*ubah disini*/
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <Label>Pendidikan Terakhir</Label>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-14 w-full">
                      <SelectValue placeholder="Pilih Pendidikan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">SD</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="1">SMP</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="2">SMA</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="3">SMK</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="4">S1</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectItem value="5">S2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama_sekolah_universitas" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nama Sekolah/Universitas</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Universitas Indonesia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Fakultas khusus univ */}
            <FormField
              control={form.control}
              name="jurusan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Jurusan</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kelas_semester_saat_ini" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Kelas/Semester</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alamat_sekolah_kampus" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Alamat Sekolah/Universitas</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Jakarta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nomor_telp_sekolah_kampus" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nomor Telepon Sekolah/Universitas</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 085677181826" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="biaya_pendidikan_bulanan" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Biaya SPP / Biaya Per Semester</FormLabel>
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
                    {/* <Input placeholder="Ex: 3000000" {...field} type="number" /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organisasi_yang_diikuti" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Organisasi yang diikuti</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Lembaga Dakwah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama_ayah" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nama Ayah</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Budi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pekerjaan_ayah" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Pekerjaan Ayah</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Pegawai Swasta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="penghasilan_bulanan_ayah" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Penghasilan per bulan ayah</FormLabel>
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
                    {/* <Input placeholder="Ex: 4000000" {...field} type="number" /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama_ibu" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Nama Ibu</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Siti" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pekerjaan_ibu" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Pekerjaan Ibu</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Ibu Rumah Tangga" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="penghasilan_bulanan_ibu" /*ubah disini*/
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-4">Penghasilan per bulan ibu</FormLabel>
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
                    {/* <Input placeholder="Ex: 4000000" {...field} type="number" /> */}
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
                  <FormLabel className="mt-4">No Handphone yang terhubung Whatsapp</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 085619282719" {...field} />
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

export default Form2;
