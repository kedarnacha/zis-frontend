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

const request = async (id: number) => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/jurnal/jurnalall/${id}`,
  });

  return data; 
};

const useQueryJurnal = (id: number) => {
  return useQuery({
    queryKey: [ALL_PROGRAM_QUERY_KEY,id],
    queryFn: () => request(id),
  });
};

export default useQueryJurnal;
