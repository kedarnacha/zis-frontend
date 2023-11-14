import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Program } from '@/schema/program';
import { DETAIL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
};

type Response = {
  message: string;
  data: Program;
};

const request = async (id: string) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/home/program/${id}`,
  });

  return data;
};

const useQueryDetailArticle = (id: string) => {
  return useQuery({
    queryKey: [DETAIL_PROGRAM_QUERY_KEY, id],
    queryFn: () => request(id),
  });
};

export default useQueryDetailArticle;
