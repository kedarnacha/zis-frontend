import React, { Fragment } from 'react';

import Navbar from '@/components/zis/Navbar';

import ForgotPassForm from './components/ForgotPassForm';

const ForgotPasswordPage = () => {
  return (
    <Fragment>
      <Navbar title="Lupa Kata Sandi" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Masukkan alamat email pengguna untuk mengubah kata sandi
        </h2>
      </div>

      <ForgotPassForm />
    </Fragment>
  );
};

export default ForgotPasswordPage;
