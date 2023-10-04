'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { useAuthState } from '@/store/useAuthState';
import { getInitials } from '@/utils/string';

const AccountHeader = () => {
  const authState = useAuthState();

  return (
    <div className="flex flex-row items-center space-x-4 p-5">
      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
        <span>{getInitials(authState?.user?.user_nama ?? '')}</span>
      </div>
      <div className="flex-1">
        <p>{authState?.user?.user_nama ?? ''}</p>
      </div>

      <Button variant="destructive" className="rounded-full">
        Ubah Profil
      </Button>
    </div>
  );
};

export default AccountHeader;
