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

  const res = await fetch('http://api.zisindosat.id/auth/verifed', {
    body: JSON.stringify({
      email,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log({ email });

  const json = await res.json();

  console.log({ json });

  if (!res.ok) {
    throw new Error('Gagal memverifikasi akun');
  }

  if (!json.success) {
    throw new Error('Gagal memverifikasi akun');
  }

  return <VerifikasiPage />;
};

export default Verifikasi;
