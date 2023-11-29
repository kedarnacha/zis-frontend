import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { Kota } from '@/store/types';
import { KOTA_QUERY_KEY } from '@/utils/constants';

type Response = {
  message: string;
  data?: Kota[];
};

const useQueryKota = (id: number) => {
  const request = async () => {
    const { data } = await axios.request<Response>({
      method: 'GET',
      url: `ref/cities/${id}`,
    });
    console.log(data.data);
    return data;
  };
  return useQuery([KOTA_QUERY_KEY], () => request());
};

export default useQueryKota;
