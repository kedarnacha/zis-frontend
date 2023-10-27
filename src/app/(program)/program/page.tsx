import React from 'react';

import FooterEmail from '@/components/zis/FooterEmail';
import Menu from '@/components/zis/Menu';

import ProgramList from '../components/ProgramList';
import ProgramSearchBar from './components/ProgramSearchBar';
import ProgramSort from './components/ProgramSort';

const page = () => {
  return (
    <div>
      <ProgramSearchBar />

      <Menu />
      <ProgramSort />
      <div className="h-3 bg-slate-100" />
      <ProgramList />
      <div className="h-3 bg-slate-100" />
      <FooterEmail />
    </div>
  );
};

export default page;
