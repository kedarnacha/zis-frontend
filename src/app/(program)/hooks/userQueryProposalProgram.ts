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

const request = async (id_user: number) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/mustahiq/proposal/${id_user}`,
  });

  return data; 
};

const useQueryProposalProgram = (id_user: number) => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY, id_user],
    queryFn: () => request(id_user),
  });
};

export default useQueryProposalProgram;
