import React from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FooterEmail = () => {
  return (
    <div className="p-5">
      <h4 className="font-semibold text-slate-900">
        Lebih dekat membantu sesama lewat Zis Indosat,
      </h4>

      <p className="py-5 text-sm">
        Dapatkan perkembangan berita dan program terbaru dari tim ZisIndosat melalui Email-mu
      </p>

      <Label className="mt-4" htmlFor="email">
        Email
      </Label>
      <Input
        name="email"
        className="rounded-none border-x-0 border-b border-t-0 border-b-slate-400 placeholder:text-slate-400"
        placeholder="Masukkan Email"
      />
      <Button variant="destructive" className="my-4 w-full">
        Kirim
      </Button>
    </div>
  );
};

export default FooterEmail;
