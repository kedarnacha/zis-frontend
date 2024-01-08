import { ChevronRight, CogIcon, FileSearch, HelpCircle } from 'lucide-react';
import React from 'react';
import TOCContent from '@/app/toc/components/TOCContent';
import Abouts from '@/app/toc/components/Abouts';
import FAQQ from '@/app/toc/components/FAQQ';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Menu = () => {
  return (
    <div className="p-5">
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <HelpCircle className="h-5 w-5 text-orange-500" />
        <div className="flex-1">
        <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                Bantuan
              </div>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className='pt-5'>Bantuan</DialogTitle>
              </DialogHeader>
              <FAQQ />
            </DialogContent>
          </Dialog>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <CogIcon className="h-5 w-5 text-orange-500" />
        <div className="flex-1">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                Tentang ZIS Indosat
              </div>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className='pt-5'>Tentang ZIS Indosat</DialogTitle>
              </DialogHeader>
              <Abouts />
            </DialogContent>
          </Dialog>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center space-x-4 border-b border-b-slate-200 px-5 py-2 transition-colors duration-150 hover:bg-slate-100">
        <FileSearch className="h-5 w-5 text-orange-500" />
        <div className="flex-1">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                Syarat dan Ketentuan
              </div>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className='pt-3'>Syarat Dan Ketentuan</DialogTitle>
              </DialogHeader>
              <TOCContent />
            </DialogContent>
          </Dialog>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
    </div>
  );
};

export default Menu;
