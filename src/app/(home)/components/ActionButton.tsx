'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ, TYPE_MUZAKI } from '@/utils/constants';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import { useRouter } from 'next/navigation';
import SearchYellowSvg from '@/components/zis/SearchYellowSvg';

const ActionButton = () => {
  const authState = useAuthState();
  const [isOpen, setIsOpen] = React.useState(false);
  const { data } = useQueryAccount();
  const router = useRouter();
  const handleClick = () => {
    if (!data) {
      return;
    }
    if (data?.mustahiq === null) {
      setIsOpen(true);
      return;
    }

    router.push('/program/program-mustahiq');
  };

  const handleClickModal = () => {
    router.push('/mustahiq');
    setIsOpen(false);
  };

  if (!authState?.hasHydrated) {
    return null;
  }

  if (authState?.user?.user_type === TYPE_MUSTAHIQ) {
    return (
      <>
        <Button className="mt-4 w-full rounded-full text-slate-50" size="sm" variant="destructive" onClick={handleClick}>
          Pilih Form Pengajuan Bantuan
        </Button>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Lengkapi Data sebelum mengajukan bantuan</AlertDialogTitle>
              <AlertDialogDescription className="flex flex-col items-center">
                <SearchYellowSvg />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button onClick={handleClickModal} variant="destructive" size="lg">
                Lengkapi Data Diri
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
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
