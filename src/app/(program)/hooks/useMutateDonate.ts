import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { DonateSchema } from '@/schema/donate';
import { DETAIL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Response = {
  success: boolean;
  message: string;
};

const useMutateDonate = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const param = useParams();
  const id = param?.id as string;

  const mutationFn = async (data: DonateSchema) => {
    const formData = new FormData();

    for (const key in data) {
      const _key = key as keyof typeof data;

      if (Boolean(data[_key])) {
        formData.append(key, data[_key]);
      }
    }

    const response = await axios.request<Response>({
      method: 'POST',
      url: '/transaction/donate',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: (data: DonateSchema) => mutationFn(data),
    onSuccess: async () => {
      toast({
        title: 'Berhasil Donasi',
      });
      await queryClient.invalidateQueries([DETAIL_PROGRAM_QUERY_KEY]);
      router.push(`/program/${id}/completed`);
    },
    onError: (err) => {
      toast({
        title: 'Gagal Donasi',
        description: (err as any)?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateDonate;
