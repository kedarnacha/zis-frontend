import { ChevronRight, CogIcon, FileSearch, HelpCircle } from 'lucide-react';
import React from 'react';

const Menu = () => {
  return (
    <div className="p-5">
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <HelpCircle className="h-5 w-5 text-orange-500" />
        <div className="flex-1">Bantuan</div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <CogIcon className="h-5 w-5 text-orange-500" />
        <div className="flex-1">Tentang ZIS Indosat</div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <FileSearch className="h-5 w-5 text-orange-500" />
        <div className="flex-1">Syarat Dan Ketentuan</div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
    </div>
  );
};

export default Menu;
