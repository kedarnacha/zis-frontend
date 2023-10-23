import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { ACCOUNT_QUERY_KEY } from '@/utils/constants';

type Input = {
  nama: string;
  phone: string;
};

const mutationFn = async ({ nama, phone }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'PUT',
    url: '/auth/update',
    data: {
      nama,
      phone,
    },
  });

  return data;
};

const useMutateEditAccount = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation<Response, unknown, Input>({
    mutationFn,
    onSuccess: () => {
      toast({
        title: 'Berhasil Update',
        description: 'Berhasil update akun',
      });

      queryClient.invalidateQueries({
        queryKey: [ACCOUNT_QUERY_KEY],
      });
    },
    onError: (error) => {
      const err = error as any;
      toast({
        title: 'Gagal Update',
        description: err?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateEditAccount;
