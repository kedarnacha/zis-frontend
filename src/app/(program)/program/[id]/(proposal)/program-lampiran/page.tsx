'use client';

import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent } from 'react';
import { Trash2, Upload } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

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
import { ProgramSchema } from '@/schema/program';
import { useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { ProposalSchema } from '@/schema/proposal';
import useMutateCreateProposal from '@/app/(program)/hooks/useMutateCreateProposal';

const SubmitProgramPage = () => {
    const router = useRouter();
    const { data } = useQueryAccount();

    console.log({ data });
    const { mutate, isLoading } = useMutateCreateProposal();

    const form = useFormContext<ProposalSchema>();
    console.log(form.watch())


    const onSubmit = (data: ProposalSchema) => {
        console.log("test" + data)
        mutate(data);
    };

    const [files, setFiles] = useState<File[]>([]);
    const [message, setMessage] = useState<string>('');

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage('');
        const fileList = e.target.files;

        if (!fileList) {
            return;
        }

        for (let i = 0; i < fileList.length; i++) {
            const fileType = fileList[i].type;
            const validImageTypes = ['image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp',
                'application/pdf',];

            if (validImageTypes.includes(fileType)) {
                setFiles((prevFiles) => [...prevFiles, fileList[i]]);
            } else {
                setMessage('Format file yang diterima salah');
            }
        }
    };

    const removeImage = (fileName: string) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    };
    const watchAll = form.watch();
    return (
        <div className="pb-24">
            <Navbar title="Lampiran Pendukung Pemohon Bantuan" />

            <div className="prose p-5">
                <h4 className="font-semibold">Lampiran Pendukung Pemohon Bantuan</h4>
                <p className="text-sm font-light leading-tight">
                    Unggah data secara berurutan untuk mengisi data dibawah untuk proses pengajuan bantuan
                </p>

                <input onChange={handleFile} className="block w-full text-sm bg-yellow-50 text-yellow-500 border" type="file" name="files[]"></input>
                <span className="flex text-[12px] mb-1 text-red-500">{message}</span>
            </div>

            <Divider />
            <div className="space-y-4 p-5">
                <FormField
                    // control={form.control}
                    name="inicontoh"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>Lampiran file</FormLabel>
                            {files.map((file, key) => {
                                return (
                                    <FormControl>
                                        <>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="application/pdf, image/*"
                                                disabled
                                            />
                                            <Button
                                                variant="outline"
                                                className="justify-between text-slate-500"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    removeImage(file.name)
                                                }}
                                            >
                                                <span>{file.name ?? 'Ceritanya data max 2MB'}</span>{' '}
                                                <Trash2 className="h-4 w-4 text-orange-400" />
                                            </Button>
                                        </>
                                    </FormControl>
                                )
                            })}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.watch('proposal_kategori') === 1 ? (
                    <>
                        <p>Lampiran yang harus diupload : </p>
                    </>
                ) : null}
                <p className='text-xs text-slate-500'>Ketentuan Bantuan :
                    <br />
                    1. Pemohon bantuan diharuskan bukan perokok, karena bertentangan dengan tujuan Zakat
                    <br />
                    2. Pemohon bantuan khusus Putri/Muslimah dianjurkan untuk mengenakan Hijab/Jilbab
                    <br />
                    3. Pemohon wajib menggunakan Nomor Telepon INDOSAT, karena dana bantuan merupakan Zakat Profesi karyawan INDOSAT
                    </p>
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
                <Button
                    onClick={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
                    disabled={form.formState.isLoading}
                    type="button"
                    role="button"
                    className="w-full "
                    size="lg"
                    variant="destructive"
                >
                    Selesai
                </Button>
            </div>


        </div>
    );
};

export default SubmitProgramPage;
