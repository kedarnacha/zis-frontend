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
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ } from '@/utils/constants';

import { Button } from '../ui/button';
import useQueryAccount from '@/app/account/hooks/useQueryAccount';

const BottomNavigation = () => {
  const auth = useAuthState();
  const [datas, setDatas] = useState<any>(null);

  const isLoggedIn = auth?.isAuthenticated && auth?.hasHydrated;
  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const { data } = await useQueryAccount();
          setDatas(data);
        } catch (error) {
          // Handle error if needed
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);

  const mustahiqMenu = [
    {
      icon: HomeIcon,
      label: 'Beranda',
      href: '/',
    },
    {
      icon: HeartHandshakeIcon,
      label: 'Bantuan',
      href: datas?.mustahiq === null ? '/mustahiq' : '/program/program-mustahiq',
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
  ];

  const menu = [
    ...(auth?.user?.user_type === TYPE_MUSTAHIQ ? mustahiqMenu : muzakiMenu),
    {
      icon: MailIcon,
      label: 'Pesan',
      href: isLoggedIn ? '/message' : '#',
      disabled: true,
    },
    !isLoggedIn
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

  const routes = Array.from(new Set([...menu.map((item) => item.href), '/program'])).filter(
    (item) => item !== '/login' && item !== '/mustahiq',
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
                  'opacity-50': !isLoggedIn && 'disabled' in item && item.disabled,
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
