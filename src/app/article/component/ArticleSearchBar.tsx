'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useQueryState } from 'next-usequerystate';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const ArticleSearchBar = () => {
  const [keyword, setKeyword] = useQueryState('keyword');

  const [value, setValue] = useState(keyword || '');
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <nav className="flex w-full items-center justify-center space-x-3 bg-amber-300 p-4 py-7">
        <Button
          className="h-10 w-10 rounded-full bg-white p-0"
          variant="secondary"
          onClick={handleBack}
        >
          <ChevronLeft size={24} className="text-slate-900" />
        </Button>
      <div className="flex-1">
        <div className="flex w-full items-center overflow-hidden rounded-md border border-red-500 bg-slate-50 pl-4 text-left text-slate-400">
          <SearchIcon width={16} height={16} className="text-red-600 " />
          <input
            type="text"
            value={value}
            className="h-full w-full bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            placeholder="Cari Berita"
            onChange={(e) => setValue(e.target.value)}
          />
          {Boolean(keyword) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setKeyword(null);
                setValue('');
              }}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div>
        <Button size="sm" variant="destructive" onClick={() => setKeyword(value)}>
          Cari
        </Button>
      </div>
    </nav>
  );
};

export default ArticleSearchBar;
