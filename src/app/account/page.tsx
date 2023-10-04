import React from 'react';

import Navbar from '@/components/zis/Navbar';

import AccountHeader from './components/AccountHeader';
import CallCenter from './components/CallCenter';
import DonationReminder from './components/DonationReminder';
import DonationWalletEntry from './components/DonationWalletEntry';
import LogoutSection from './components/LogoutSection';
import Menu from './components/Menu';

const ProfilePage = () => {
  return (
    <div>
      <Navbar title="Akses Akun Muzaki" />
      <AccountHeader />
      <div className="h-3 w-full bg-slate-100" />
      <DonationWalletEntry />
      <div className="h-3 w-full bg-slate-100" />
      <DonationReminder />
      <div className="h-3 w-full bg-slate-100" />
      <CallCenter />
      <div className="h-3 w-full bg-slate-100" />
      <Menu />
      <div className="h-3 w-full bg-slate-100" />
      <LogoutSection />
    </div>
  );
};

export default ProfilePage;
