'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { donateSchema } from '@/schema/donate';

type Params = {
  params: {
    id: string;
  };
};

const DonationLayout = ({ children, ...props }: PropsWithChildren<Params>) => {
  const programId = props.params?.id ?? '';

  const form = useForm({
    resolver: zodResolver(donateSchema),
    defaultValues: {
      program_id: programId,
    },
    mode: 'onChange',
  });

  console.log(form.watch());

  return <Form {...form}>{children}</Form>;
};

export default DonationLayout;
