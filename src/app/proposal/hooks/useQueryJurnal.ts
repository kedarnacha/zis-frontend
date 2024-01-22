import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Jurnal } from '@/schema/jurnal';
import { ALL_PROGRAM_QUERY_KEY } from '@/utils/constants';

type Params = {
  page?: number;
};

type Response = {
  message: string;
  data?: Jurnal[];
};

const request = async () => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/jurnal/jurnalall`,
  });

  return data; 
};

const useQueryJurnal = () => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY],
    queryFn: () => request(),
  });
};

export default useQueryJurnal;
