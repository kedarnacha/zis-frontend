import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { ProposalSchema } from '@/schema/proposal';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Response = {
  success: boolean;
  message: string;
};

const useMutateCreateProposal = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useQueryAccount();

  const mutationFn = async (data: ProposalSchema) => {
    const formData = new FormData();

    for (const key in data) {
      const _key = key as keyof typeof data;

      if (Boolean(data[_key])) {
        formData.append(key, data[_key]);
      }
    }

    const response = await axios.request<Response>({
      method: 'POST',
      url: '/proposal/create',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('tessss' + data);
    return response.data;
  };

  return useMutation({
    mutationFn: (data: ProposalSchema) => mutationFn(data),
    onSuccess: () => {
      toast({
        title: 'Berhasil Simpan Data',
      });
      queryClient.invalidateQueries([ALL_PROGRAM_QUERY_KEY]);
      router.push('/program/submit-complete');
    },
    onError: (err) => {
      toast({
        title: 'Gagal Simpan Data',
        description: (err as any)?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateCreateProposal;
