import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { User } from '@/store/types';
import { useAuthState } from '@/store/useAuthState';
import { ACCOUNT_QUERY_KEY } from '@/utils/constants';

type Response = {
  message: string;
  data: {
    id: string;
    title: string;
    description: string;
    type: 'program' | 'transaction';
    program?: {
      program_id: number;
    };
    transaction?: {
      id: number;
    };
  }[];
};

const useQueryMessage = () => {
  const authState = useAuthState();

  const request = async () => {
    const { data } = await axios.request<Response>({
      method: 'GET',
      url: `/user/notifications`,
      headers: {
        Authorization: `Bearer ${authState?.token}`,
      },
    });

    return data;
  };

  return useQuery({
    queryKey: ['all_mesage', authState?.token],
    queryFn: () => request(),
    select: (data) => data?.data,
    enabled: Boolean(authState?.token),
  });
};

export default useQueryMessage;
