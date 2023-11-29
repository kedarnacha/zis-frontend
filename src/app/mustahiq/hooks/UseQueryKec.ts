import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { Kec } from '@/store/types';
import { KEC_QUERY_KEY } from '@/utils/constants';

type Response = {
  message: string;
  data?: Kec[];
};

const useQueryKec = (id: number) => {
  const request = async () => {
    const { data } = await axios.request<Response>({
      method: 'GET',
      url: `ref/districts/${id}`,
    });
    console.log(data.data);
    return data;
  };
  return useQuery([KEC_QUERY_KEY], () => request());
};

export default useQueryKec;
