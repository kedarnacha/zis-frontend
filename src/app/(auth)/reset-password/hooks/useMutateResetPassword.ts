import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';

type Response = {
  success: boolean;
  message: string;
};

type Input = {
  email: string;
  token: string;
  password: string;
};

const reset = async ({ email, token, password }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'POST',
    url: '/auth/resetpassword',
    data: {
      email,
      token,
      password,
    },
  });

  return data;
};

const useMutateResetPassword = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation<Response, unknown, Input>({
    mutationFn: reset,
    onSuccess: () => {
      toast({
        title: 'Berhasil Reset Password',
        description: 'Silahkan Periska Email Anda',
      });

      router.push('/login');
    },
    onError: (err) => {
      toast({
        title: 'Gagal Reset Password',
        description: (err as any)?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateResetPassword;
