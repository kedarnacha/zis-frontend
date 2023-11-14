import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { MustahiqSchema } from '@/schema/mustahiq';
import { ACCOUNT_QUERY_KEY } from '@/utils/constants';

type Response = {
  success: boolean;
  message: string;
};

const useMutateCreateMustahiq = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = async (data: MustahiqSchema) => {
    const formData = new FormData();

    for (const key in data) {
      const _key = key as keyof typeof data;

      if (Boolean(data[_key])) {
        formData.append(key, data[_key]);
      }
    }

    const response = await axios.request<Response>({
      method: 'POST',
      url: 'https://api.zisindosat.id/mustahiq/create ',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: (data: MustahiqSchema) => mutationFn(data),
    onSuccess: () => {
      toast({
        title: 'Berhasil Simpan Data',
      });
      queryClient.invalidateQueries([ACCOUNT_QUERY_KEY]);
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

export default useMutateCreateMustahiq;
