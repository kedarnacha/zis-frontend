'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { toast } from '@/components/ui/use-toast';
import { useAuthState } from '@/store/useAuthState';

const LogoutSection = () => {
  const authState = useAuthState();
  const router = useRouter();

  const handleLogout = () => {
    authState?.logOut();
    toast({
      description: 'Anda telah keluar dari ZIS Indosat',
    });
    router.push('/');
  };

  return (
    <div
      onClick={handleLogout}
      className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-10 py-2 transition-colors duration-150 hover:bg-slate-100"
    >
      <LogOut className="h-5 w-5 text-orange-500" />
      <div className="flex-1">Keluar dari ZIS Indosat</div>
    </div>
  );
};

export default LogoutSection;
