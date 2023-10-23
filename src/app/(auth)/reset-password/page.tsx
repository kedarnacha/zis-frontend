import React from 'react';

import ResetPassword from './components/ResetPassword';

type Props = {
  searchParams: {
    akun?: string;
    token?: string;
  };
};

const ResetPasswordPage = ({ searchParams }: Props) => {
  const account = searchParams.akun || '';
  const token = searchParams.token || '';

  const cleanAccount = decodeURIComponent(account);
  const email = Buffer.from(cleanAccount, 'base64').toString();

  return <ResetPassword email={email} token={token} />;
};

export default ResetPasswordPage;
