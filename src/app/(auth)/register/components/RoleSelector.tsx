'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import SelectRoleContent from '../../login/components/SelectRoleContent';

type Props = {
  onSelect: (id: string) => void;
};

const RoleSelector = ({ onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onSelect(id);
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-amber-500" onClick={() => setOpen(true)}>
            Ubah
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Daftar Sebagai</DialogTitle>
          </DialogHeader>
          <SelectRoleContent
            onSelect={(id) => {
              handleClick(id);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoleSelector;
