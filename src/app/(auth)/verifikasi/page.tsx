import axios from '@/lib/axios';

import VerifikasiPage from './components/VerifikasiPage';

type Props = {
  searchParams: {
    akun?: string;
  };
};
const Verifikasi = async (props: Props) => {
  const account = props.searchParams.akun;

  if (!account) {
    throw new Error('Akun tidak ditemukan');
  }

  const cleanAccount = decodeURIComponent(account);
  const email = Buffer.from(cleanAccount, 'base64').toString();

  const res = await axios.request({
    url: '/auth/verifed',
    method: 'POST',
    data: {
      email,
    },
  });

  console.log(res.data);

  return <VerifikasiPage />;
};

export default Verifikasi;
