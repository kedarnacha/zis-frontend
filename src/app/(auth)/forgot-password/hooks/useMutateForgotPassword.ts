import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';

type Response = {
  success: boolean;
  message: string;
};

type Input = {
  username: string;
};

const login = async ({ username }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'POST',
    url: '/auth/resetpassword',
    data: {
      username,
    },
  });

  return data;
};

const useMutateForgotPassword = () => {
  const { toast } = useToast();

  return useMutation<Response, unknown, Input>({
    mutationFn: login,
    onSuccess: (data) => {
      if (!data.success) {
        toast({
          title: 'Gagal Request Reset Password',
          description: 'Data tidak ditemukan',
          variant: 'destructive',
        });

        return;
      }

      toast({
        title: 'Berhasil Request Reset Password',
        description: 'Silahkan Periska Email Anda',
      });
    },
    onError: () => {
      toast({
        title: 'Gagal Request Reset Password',
        description: 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateForgotPassword;
