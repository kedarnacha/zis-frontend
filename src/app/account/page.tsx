'use client';

import React from 'react';

import Navbar from '@/components/zis/Navbar';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ } from '@/utils/constants';

import CallCenter from '../../components/zis/CallCenter';
import AccountHeader from './components/AccountHeader';
import DonationReminder from './components/DonationReminder';
import DonationWalletEntry from './components/DonationWalletEntry';
import LogoutSection from './components/LogoutSection';
import Menu from './components/Menu';
import MustahiqDataEntry from './components/MustahiqDataEntry';

const ProfilePage = () => {
  const authState = useAuthState();
  return (
    <div>
      <Navbar
        title={`Akses Akun ${authState?.user?.user_type === TYPE_MUSTAHIQ ? 'Mustahiq' : 'Muzaki'}`}
      />
      <AccountHeader />
      <div className="h-3 w-full bg-slate-100" />
      {authState?.user?.user_type === TYPE_MUSTAHIQ ? (
        <MustahiqDataEntry />
      ) : (
        <DonationWalletEntry />
      )}
      <div className="h-3 w-full bg-slate-100" />
      <DonationReminder />
      <div className="h-3 w-full bg-slate-100" />
      <CallCenter />
      <div className="h-3 w-full bg-slate-100" />
      <Menu />
      <div className="h-3 w-full bg-slate-100" />
      <LogoutSection />
      <div className="h-96" />
    </div>
  );
};

export default ProfilePage;
