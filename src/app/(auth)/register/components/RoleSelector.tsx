'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import SelectRoleContent from '../../login/components/SelectRoleContent';

type Props = {
  onSelect: (id: '10' | '11') => void;
};

const RoleSelector = ({ onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: '10' | '11') => {
    onSelect(id);
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-amber-500"
            type="button"
            onClick={() => setOpen(true)}
          >
            Ubah
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Daftar Sebagai</DialogTitle>
          </DialogHeader>
          <SelectRoleContent
            onSelect={(id) => {
              const _id = id as '10' | '11';
              handleClick(_id);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoleSelector;
