import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';

type Response = {
  success: boolean;
  message: string;
};

type Input = {
  email: string;
};

const login = async ({ email }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'POST',
    url: '/auth/forgot-password',
    data: {
      email,
    },
  });

  return data;
};

const useMutateForgotPassword = () => {
  const { toast } = useToast();

  return useMutation<Response, unknown, Input>({
    mutationFn: login,
    onSuccess: () => {
      toast({
        title: 'Berhasil Request Reset Password',
        description: 'Silahkan Periska Email Anda',
      });
    },
    onError: (err) => {
      toast({
        title: 'Gagal Request Reset Password',
        description: 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateForgotPassword;
