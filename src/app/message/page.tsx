'use client';

import React from 'react';

import DataLayout from '@/components/zis/DataLayout';
import Navbar from '@/components/zis/Navbar';

import useQueryMessage from './hooks/useQueryMessage';

const MessagePage = () => {
  const { data, isError, isLoading } = useQueryMessage();

  const notif = data ?? [];

  const hasMessage = notif.length > 0;

  return (
    <DataLayout isError={isError} isLoading={isLoading} className="h-[80dvh]">
      <Navbar showBack={false} title="Pesan" />

      <div className="p-5">
        {!hasMessage ? (
          <p className="text-center">Belum Ada pesan</p>
        ) : (
          notif.map((item) => (
            <div
              key={item.id}
              className="prose mb-5 rounded-md border border-slate-200 p-5 shadow-md"
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </DataLayout>
  );
};

export default MessagePage;
