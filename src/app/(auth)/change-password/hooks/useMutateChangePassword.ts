import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';

type Response = {
  success: boolean;
  message: string;
};

type Input = {
  password: string;
  newPassword: string;
};

const login = async ({ password, newPassword }: Input) => {
  const { data } = await axios.request<Response>({
    method: 'PUT',
    url: '/auth/password',
    data: {
      password,
      newPassword,
    },
  });

  return data;
};

const useMutateChangePassword = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation<Response, unknown, Input>({
    mutationFn: login,
    onSuccess: () => {
      toast({
        title: 'Berhasil ',
      });
      router.push('/account');
    },
    onError: (err) => {
      toast({
        title: 'Gagal Ubah Password',
        description: (err as any)?.response?.data?.message ?? 'Terjadi kesalahan',
        variant: 'destructive',
      });
    },
  });
};

export default useMutateChangePassword;
