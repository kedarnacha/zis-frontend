'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { programSchema } from '@/schema/program';
import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';

type Params = {
  params: {
    id: string;
  };
};

const ProgramLayout = ({ children, ...props }: PropsWithChildren<Params>) => {
  const programId = props.params?.id ?? '';
  const { data } = useQueryDetailProgram(programId);
  console.log(data?.data.program_category_id)

  const form = useForm({
    resolver: zodResolver(programSchema),
    defaultValues: {
      program_id: programId,
      program_category_id:data?.data.program_category_id
    },
    mode: 'onChange',
  });

  console.log(form.watch());

  return <Form {...form}>{children}</Form>;
};

export default ProgramLayout;
