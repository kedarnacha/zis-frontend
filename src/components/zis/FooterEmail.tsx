'use client'
import React, { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FooterEmail = () => {
  const [email, setEmail] = useState('');

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
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="destructive"
        onClick={() => {
          const mailtoLink = `mailto:admin@zisindosat.id?subject=New Email Subscription&body=${encodeURIComponent(`New email subscription: ${email}`)}`;
          window.location.href = mailtoLink;
        }}
        className="my-4 w-full"
      >
        Kirim
      </Button>
    </div>
  );
};

export default FooterEmail;
