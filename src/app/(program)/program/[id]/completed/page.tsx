'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import Divider from '@/components/zis/Divider';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';
import Navbar from '@/components/zis/Navbar';
import SuccessSvg from '@/components/zis/SuccessSvg';

const ConfirmDonationPage = () => {
  const [checked, setChecked] = React.useState(false);

  const param = useParams();
  const id = param?.id as string;

  const { data } = useQueryDetailProgram(id);

  return (
    <div>
      <Navbar title="Mulai Bantu Sedekah Sekarang" />
      <div className="border-b-8 border-b-slate-100 p-5">
        {!!data && <DonationItemCardVertical program={data?.data} />}
      </div>

      <div className="prose flex flex-col items-center space-y-3 p-5 text-center leading-tight">
        <SuccessSvg />
        <h4>Terima kasih telah bersedekah</h4>
        <p>Bantuan donasimu akan sangat berguna untuk yang membutuhkan dari program ini</p>
      </div>

      <Divider />

      <div className="flex flex-row items-center space-x-4 p-5 text-slate-700">
        <div className="flex-1">Sembunyikan Nama Saya</div>

        <Switch
          className="data-[state=checked]:bg-red-500"
          checked={checked}
          onCheckedChange={(c) => setChecked(c)}
        />
      </div>

      <Divider />

      <div className="space-y-4 p-5">
        <Label className="mt-4">{`Pesan dan Do'a`}</Label>
        <Textarea placeholder="Masukkan pesan dan do'a disini untuk mereka yang membutuhkan." />
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Link href="/program">
          <Button type="button" role="button" className="w-full " size="lg" variant="destructive">
            Selesai
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmDonationPage;
