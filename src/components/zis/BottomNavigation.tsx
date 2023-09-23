'use client';

import { HeartHandshakeIcon, HomeIcon, LayoutGridIcon, LogInIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

const BottomNavigation = () => {
  const menu = [
    {
      icon: HomeIcon,
      label: 'Home',
      href: '/',
    },
    {
      icon: LayoutGridIcon,
      label: 'Program',
      href: '/program',
    },
    {
      icon: HeartHandshakeIcon,
      label: 'Galang Dana',
      href: '/galang-dana',
    },
    {
      icon: LogInIcon,
      label: 'Masuk',
      href: '/login',
    },
    //  status === 'unauthenticated' || status === 'loading'
    //    ? {
    //        icon: LogInIcon,
    //        label: 'Masuk',
    //        href: '/login',
    //      }
    //    : {
    //        icon: UserIcon,
    //        label: 'Akun',
    //        href: '/account',
    //      },
  ];
  const routes = [...menu.map((item) => item.href), '/register'];
  const pathName = usePathname();
  const matchRoutes = routes.find((item) => item === pathName);
  if (!matchRoutes) return null;

  return (
    <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex h-16 w-full max-w-md border-t border-t-slate-100 bg-white">
      {menu.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link key={String(index)} href={item.href} className="flex-1">
            <Button
              variant="ghost"
              className={cn(
                'rounded-none h-full flex-col w-full items-center text-slate-500 text-xs hover:text-red-600',
                {
                  'text-red-600': pathName === item.href,
                },
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
