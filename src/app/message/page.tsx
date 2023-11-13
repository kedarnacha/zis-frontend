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
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-start py-20">
              <div className="items-center justify-center py-4 px-5">
                <div className="w-[130px] h-[130px]">
                  <img
                    className="relative"
                    alt=""
                    src="/zis.png"
                  />
                </div>
              </div>
              <div className="relative font-semibold pb-2">
                Belum ada Pesan Masuk
              </div>
              <div className="flex flex-row items-start justify-center px-5 text-gray-600 text-sm">
                <div className="flex-1 relative">
                  Kamu tidak memiliki pesan pemberitahuan terbaru
                </div>
              </div>
            </div>
          </div>
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
