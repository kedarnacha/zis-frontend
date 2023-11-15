import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { ProgramSchema } from '@/schema/program';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Response = {
  success: boolean;
  message: string;
};

const useMutateCreateProgram = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useQueryAccount();

  const institusi_id = (data?.institusi ?? []).length > 0 ? data?.institusi[0].institusi_id : null;

  const mutationFn = async (data: ProgramSchema) => {
    const formData = new FormData();

    for (const key in data) {
      const _key = key as keyof typeof data;

      if (Boolean(data[_key])) {
        formData.append(key, data[_key]);
      }
    }

    if (institusi_id) {
      formData.append('program_institusi_id', String(institusi_id));
    }

    const response = await axios.request<Response>({
      method: 'POST',
      url: '/home/createprogram',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: (data: ProgramSchema) => mutationFn(data),
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

export default useMutateCreateProgram;
