import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Article } from '@/schema/article';
import { ALL_ARTICLE_QUERY_KEY } from '@/utils/constants';

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
  data?: Article[];
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
    url: '/ref/article',
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

const useQueryGetAllArticle= (params?: Params) => {
  return useQuery({
    queryKey: [ALL_ARTICLE_QUERY_KEY, params],
    queryFn: () => request(params),
  });
};

export default useQueryGetAllArticle
