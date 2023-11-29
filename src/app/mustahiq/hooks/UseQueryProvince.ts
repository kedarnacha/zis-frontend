import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { Provinces } from '@/store/types';
import { useAuthState } from '@/store/useAuthState';
import { PROV_QUERY_KEY } from '@/utils/constants';

type Response = {
  message: string;
  data?: Provinces[];
};

const useQueryProvince = () => {
  const authState = useAuthState();

  const request = async () => {
    const { data } = await axios.request<Response>({
      method: 'GET',
      url: `/ref/provinces`,
      headers: {
        Authorization: `Bearer ${authState?.token}`,
      },
    });
    console.log(data.data);
    return data;
  };

  return useQuery({
    queryKey: [PROV_QUERY_KEY],
    queryFn: () => request(),
  });
};

export default useQueryProvince;
