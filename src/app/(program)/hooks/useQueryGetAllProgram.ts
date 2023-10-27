import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Program } from '@/schema/program';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
  category: number | null;
  keyword: string | null;
  sortBy: string | null;
  order: string | null;
};

type Response = {
  success: boolean;
  message: string;
  data?: Program[];
  total?: number;
  pagination?: {
    current: number;
    numberPerPage: number;
    has_previous: boolean;
    previous: number;
    has_next: boolean;
    next: number;
    last_page: number;
  };
};

const request = async (params?: Params) => {
  const { page = 1, category = '', keyword = '', order = '', sortBy = '' } = params || {};
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: '/home/program',
    params: {
      page,
      category,
      keyword,
      order,
      sortBy,
    },
  });

  return data;
};

const useQueryGetAllProgram = (params?: Params) => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY, params],
    queryFn: () => request(params),
  });
};

export default useQueryGetAllProgram;
