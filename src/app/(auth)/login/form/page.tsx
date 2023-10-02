import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/zis/Navbar';

import LoginForm from '../components/LoginForm';

const LoginPageForm = () => {
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

export default LoginPageForm;
