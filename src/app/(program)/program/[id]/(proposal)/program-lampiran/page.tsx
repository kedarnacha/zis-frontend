'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Trash2, Upload } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import FileUploadForm from '@/components/FileUploadForm';

import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';

const SubmitProgramPage = () => {
    const router = useRouter();
    const { data } = useQueryAccount();

    console.log({ data });

    const handleClick = () => {
        if (!data) {
            return;
        }

        router.push('/program/program-completed');
    };


    return (
        <div className="pb-24">
            <Navbar title="Lampiran Pendukung Pemohon Bantuan" />

            <div className="prose p-5">
                <h4 className="font-semibold">Lampiran Pendukung Pemohon Bantuan</h4>
                <p className="text-sm font-light leading-tight">
                    Unggah data secara berurutan untuk mengisi data dibawah untuk proses pengajuan bantuan
                </p>

                <Button
                    onClick={handleClick}
                    className="mt-4 w-full text-slate-50"
                    size="lg"
                    variant="destructive"
                >
                    <span>Ajukan Lampiran</span>
                    <Upload className="h-4 w-4 ml-2" />
                </Button>
                {/* <FileUploadForm /> */}
            </div>

            <Divider />
            <div className="space-y-4 p-5">
                <FormField
                    // control={form.control}
                    name="inicontoh"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>Lampiran file</FormLabel>
                            <FormControl>
                                <>
                                    <input
                                        type="file"
                                        // ref={ktpRef}
                                        className="hidden"
                                        onChange={(e) => field.onChange(e.target.files?.[0])}
                                        accept="application/pdf, image/*"
                                        disabled
                                    />
                                    <Button
                                        variant="outline"
                                        className="justify-between text-slate-500"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            // ktpRef.current?.click();
                                        }}
                                    >
                                        <span>{field.value?.name ?? 'Ceritanya data max 2MB'}</span>{' '}
                                        <Trash2 className="h-4 w-4 text-orange-400" />
                                    </Button>
                                </>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p className='text-xs text-slate-500'>Ketentuan Bantuan :
                    <br />
                    1. Pemohon bantuan diharuskan bukan perokok, karena bertentangan dengan tujuan Zakat
                    <br />
                    2. Pemohon bantuan khusus Putri/Muslimah dianjurkan untuk mengenakan Hijab/Jilbab
                    <br />
                    3. Pemohon wajib menggunakan Nomor Telepon INDOSAT, karena dana bantuan merupakan Zakat Profesi karyawan INDOSAT</p>
            </div>
            <Divider />

            <div className="my-3 flex items-center space-x-2 p-5">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Saya setuju data yang dimasukkan akan digunakan oleh Ziswaf Indosat
                </label>
            </div>
            <Divider />


            <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
                <Button onClick={handleClick} className="w-full" size="lg" variant="destructive">
                    Ajukan Bantuan Sekarang
                </Button>
            </div>


        </div>
    );
};

export default SubmitProgramPage;
