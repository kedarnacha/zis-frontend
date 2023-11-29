'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { proposalSchema } from '@/schema/proposal';
import useQueryDetailProgram from '@/app/(program)/hooks/useQueryDetailProgram';
import { useAuthState } from '@/store/useAuthState';

type Params = {
  params: {
    id: string;
  };
};

const ProgramLayout = ({ children, ...props }: PropsWithChildren<Params>) => {
  const programId = props.params?.id ?? '';
  const authState = useAuthState();
  const { data } = useQueryDetailProgram(programId);
  console.log(data?.data.program_category_id)
  // const userId = authState?.user?.user_id
  // console.log(userId)

  const form = useForm({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      program_id: parseInt(programId),
      proposal_kategori: data?.data.program_category_id,
    },
    mode: 'onChange',
  });

  console.log(form.watch());

  return <Form {...form}>{children}</Form>;
};

export default ProgramLayout;
