import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Toaster } from '@/components/ui/toaster';
import BottomNavigation from '@/components/zis/BottomNavigation';
import ReactQueryProvider from '@/lib/react-query/ReactQueryProvider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ziswaf Indosat',
  description: 'Website Zakat Infaq Sedekah Wakaf by Indosat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={cn(inter.className, 'bg-slate-100 text-slate-900')}>
          <div className="relative mx-auto min-h-screen max-w-md bg-white">
            <div className="pb-16">{children}</div>
            <BottomNavigation />
          </div>
          <Toaster />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
