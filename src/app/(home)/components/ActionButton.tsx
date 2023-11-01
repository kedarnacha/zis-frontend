'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ, TYPE_MUZAKI } from '@/utils/constants';

const ActionButton = () => {
  const authState = useAuthState();

  if (!authState?.hasHydrated) {
    return null;
  }

  if (authState?.user?.user_type === TYPE_MUSTAHIQ) {
    return (
      <Link href="/program/submit-program-intro">
        <Button className="mt-4 w-full rounded-full text-slate-50" size="sm" variant="destructive">
          Galang Dana Sekarang
        </Button>
      </Link>
    );
  }
  
  const user_type = authState?.user?.user_type;

  const href = user_type === TYPE_MUZAKI ? '/program' : '/login';
  
  return (
    <Link href={href}>
      <Button className="mt-4 w-full rounded-full text-slate-50" size="sm" variant="destructive">
        Yuk Donasi Sekarang!
      </Button>
    </Link>
  );
};

export default ActionButton;
