'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '../ui/button';

type Props = {
  title?: string;
};

const Navbar = ({ title = '' }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex h-[76px] w-full items-center space-x-4 bg-amber-300 px-5">
      <Button
        className="h-10 w-10 rounded-full bg-white p-0"
        variant="secondary"
        onClick={handleBack}
      >
        <ChevronLeft size={24} className="text-slate-900" />
      </Button>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default Navbar;
