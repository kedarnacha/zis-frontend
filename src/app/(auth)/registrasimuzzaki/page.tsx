import React from 'react';

import Navbar from '@/components/zis/Navbar';

import RegisForm from './components/RegisForm';

const RegisterPage = () => {
  return (
    <div className="pb-96">
      <Navbar title="Daftar Zis Indosat" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Yuk Daftar, untuk nikmati kemudahan berdonasi dan akses fitur lainnya
        </h2>
      </div>

      <RegisForm />
    </div>
  );
};

export default RegisterPage;
