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
    <div className="h-16 bg-white w-full fixed flex bottom-0 left-0 right-0 max-w-md mx-auto shadow-t-sm border-t border-t-slate-100">
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
