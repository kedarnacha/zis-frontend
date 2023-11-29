import React from 'react';

import FooterEmail from '@/components/zis/FooterEmail';
import MenuMustahiq from '@/components/zis/MenuMustahiq';

import ProgramList from '../../components/ProgramList';
import ProgramSearchBar from '../components/ProgramSearchBar';
import ProgramSort from '../components/ProgramSort';

const page = () => {
  return (
    <div>
      <ProgramSearchBar />

      <MenuMustahiq />
      <ProgramSort />
      <div className="h-3 bg-slate-100" />
      <ProgramList />
      <div className="h-3 bg-slate-100" />
      <FooterEmail />
    </div>
  );
};

export default page;
