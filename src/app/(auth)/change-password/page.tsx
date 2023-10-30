import React, { Fragment } from 'react';

import Navbar from '@/components/zis/Navbar';

import ChangePassForm from './components/ChangePassForm';

const ChangePasswordPage = () => {
  return (
    <Fragment>
      <Navbar title="Ubah Kata Sandi" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Masukkan kata sandi lama & baru untuk mengubah kata sandi
        </h2>
      </div>

      <ChangePassForm />
    </Fragment>
  );
};

export default ChangePasswordPage;
