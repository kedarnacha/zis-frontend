import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { RegisSchema } from '@/schema/regis';

type Response = {
  success: boolean;
  message: string;
};

const login = async (data: RegisSchema) => {
  const response = await axios.request<Response>({
    method: 'POST',
    url: '/auth/register',
    data,
  });

  return response.data;
};

const useMutateRegis = () => {
  const { toast } = useToast();

  return useMutation<Response, unknown, RegisSchema>({
    mutationFn: login,
    onSuccess: () => {
      toast({
        title: 'Berhasil Daftar',
        description: 'Berhasil Daftar, Silahkan Periksa Email Anda',
      });
    },
    onError: () => {
      toast({
        title: 'Gagal Daftar',
        description: 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateRegis;
