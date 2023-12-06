import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Proposal } from '@/schema/proposal';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
};

type Response = {
  message: string;
  data?: Proposal[];
};

const request = async (id: number) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/mustahiq/details/${id}`,
  });

  return data; 
};

const useQueryProposalProgram = (id: number) => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY, id],
    queryFn: () => request(id),
  });
};

export default useQueryProposalProgram;
