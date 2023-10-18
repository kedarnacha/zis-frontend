import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Program } from '@/schema/program';

type Response = {
  message: string;
  data: {
    program_id: number;
    program_banner: {
      banners_path: string;
    };
  }[];
};

const request = async () => {
  const { data } = await axios.request<Response>({
    method: 'GET',
    url: `/home/banner`,
  });

  return data;
};

const useQueryBanner = () => {
  return useQuery({
    queryKey: ['ALL_BANNER'],
    queryFn: request,
  });
};

export default useQueryBanner;
