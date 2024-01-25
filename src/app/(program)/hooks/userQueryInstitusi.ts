import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Institusi } from '@/schema/institusi';
import { INSTITUSI_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
};

type Response = {
  message: string;
  data?: Institusi[];
};

const request = async (id_user: number) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/ref/institusi/${id_user}`,
  });

  return data; 
};

const useQueryInstitusi = (id_user: number) => {
  return useQuery({
    queryKey: [INSTITUSI_QUERY_KEY, id_user],
    queryFn: () => request(id_user),
  });
};

export default useQueryInstitusi;
