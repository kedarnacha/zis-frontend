import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { User } from '@/store/types';
import { useAuthState } from '@/store/useAuthState';

type Response = {
  success: boolean;
  message: string;
  session_id: string;
  token?: string;
  data?: User;
};

type Input = {
  username: string;
  password: string;
};

const login = async ({ username, password }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'POST',
    url: '/auth/login',
    data: {
      username,
      password,
    },
  });

  return data;
};

const useMutateLogin = () => {
  const router = useRouter();
  const state = useAuthState();
  const { toast } = useToast();

  return useMutation<Response, unknown, Input>({
    mutationFn: login,
    onSuccess: (data) => {
      toast({
        title: 'Berhasil Login',
        description: data?.message,
      });

      state?.login(data.data!, data.token!);
      router.push('/');
    },
    onError: (error) => {
      const err = error as any;
      toast({
        title: 'Gagal Login',
        description: err?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateLogin;
