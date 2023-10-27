import React from 'react';

import Navbar from '@/components/zis/Navbar';

import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="pb-96">
      <Navbar title="Masuk Zis Indosat" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">
          Yuk Masuk, untuk nikmati kemudahan berdonasi dan akses fitur lainnya
        </h2>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
