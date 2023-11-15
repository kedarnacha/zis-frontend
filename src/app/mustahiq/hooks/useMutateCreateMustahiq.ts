import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import axios from '@/lib/axios';
import { useAuthState } from '@/store/useAuthState';
import { MustahiqSchema } from '@/schema/mustahiq';
import { ACCOUNT_QUERY_KEY } from '@/utils/constants';

type Response = {
  success: boolean;
  message: string;
};

const useMutateCreateMustahiq = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const authState = useAuthState();
  const { data } = useQueryAccount();

  const institusi_id = (data?.institusi ?? []).length > 0 ? data?.institusi[0].institusi_id : null;

  const mutationFn = async (data: MustahiqSchema) => {
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
      url: 'https://api.zisindosat.id/mustahiq/create ',
      data: formData,
      headers: {
        Authorization: `Bearer ${authState?.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
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
