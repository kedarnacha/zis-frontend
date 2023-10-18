'use client';

import {
  HeartHandshakeIcon,
  HomeIcon,
  LayoutGridIcon,
  LogInIcon,
  MailIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ } from '@/utils/constants';

import { Button } from '../ui/button';

const BottomNavigation = () => {
  const auth = useAuthState();

  const mustahiqMenu = [
    {
      icon: HomeIcon,
      label: 'Beranda',
      href: '/',
    },
    {
      icon: HeartHandshakeIcon,
      label: 'Galang Dana',
      href: '/program/submit-program-intro',
    },
    {
      icon: LayoutGridIcon,
      label: 'program',
      href: '/program',
    },
  ];

  const muzakiMenu = [
    {
      icon: HomeIcon,
      label: 'Beranda',
      href: '/',
    },
    {
      icon: LayoutGridIcon,
      label: 'Program',
      href: '/program',
    },
    {
      icon: MailIcon,
      label: 'Pesan',
      href: '/message',
    },
  ];

  const menu = [
    ...(auth?.user?.user_type === TYPE_MUSTAHIQ ? mustahiqMenu : muzakiMenu),
    !auth?.isAuthenticated || !auth?.hasHydrated
      ? {
          icon: LogInIcon,
          label: 'Masuk',
          href: '/login',
        }
      : {
          icon: UserIcon,
          label: 'Akun',
          href: '/account',
        },
  ];

  const routes = [...menu.map((item) => item.href)].filter(
    (item) => item !== '/login' && item !== '/program/submit-program-intro',
  );
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
