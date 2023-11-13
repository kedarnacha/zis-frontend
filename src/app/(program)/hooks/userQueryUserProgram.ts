import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Program } from '@/schema/program';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
};

type Response = {
  message: string;
  data?: Program[];
};

const request = async (id_user: string) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/mustahiq/program/${id_user}`,
  });

  return data; 
};

const useQueryUserProgram = (id_user: string) => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY, id_user],
    queryFn: () => request(id_user),
  });
};

export default useQueryUserProgram;
