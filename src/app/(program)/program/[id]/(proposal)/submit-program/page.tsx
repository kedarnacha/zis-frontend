'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, GlobeIcon, Loader2Icon, Upload } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import CallCenter from '@/components/zis/CallCenter';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import { ProposalSchema, proposalSchema } from '@/schema/proposal';
import MainForm from '@/components/zis/MainForm';
import InstitusiForm from '@/components/zis/Institusi Form';
import { useAuthState } from '@/store/useAuthState';

import Link from 'next/link';
import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';
import useMutateCreateProposal from '@/app/(program)/hooks/useMutateCreateProposal';
import useQueryInstitusi from '@/app/(program)/hooks/userQueryInstitusi';

const SubmitProgramPage = () => {
  const bannerRef = React.useRef<HTMLInputElement>(null);
  const { mutate, isLoading } = useMutateCreateProposal();

  const form = useFormContext<ProposalSchema>();
  const authState = useAuthState();
  const aidi = authState?.user?.user_id as number

  console.log(form.watch())
  const watchAll = form.watch();
  const param = useParams();
  const id = param?.id as string;
  const { data } = useQueryDetailProgram(id);
  const { data: Institusidata } = useQueryInstitusi(aidi);
  console.log(Institusidata)

  return (
    <div className="pb-96">
      <Navbar title="Proses Proposal Program Bantuan" />
      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Isi Data-data dibawah dengan lengkap</h2>
      </div>

      {Institusidata?.data && Institusidata.data.length > 0 ? (
        <InstitusiForm data={data} form={form}/>
      ) : (
        <MainForm data={data} form={form} />
      )}

      <Divider />

      <CallCenter />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
        <Link href={Boolean(watchAll) ? `/program/${id}/program-lampiran` : '#'}>
          <Button
            disabled={!Boolean(watchAll)}
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

export default SubmitProgramPage;