'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { programSchema } from '@/schema/program';

type Params = {
  params: {
    id: string;
  };
};
const ProgramLayout = ({ children, ...props }: PropsWithChildren<Params>) => {

  const form = useForm({
    resolver: zodResolver(programSchema),
    mode: 'onChange',
  });

  console.log(form.watch());

  return <Form {...form}>{children}</Form>;
};

export default ProgramLayout;
