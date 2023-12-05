'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React from 'react';

import DataLayout from '@/components/zis/DataLayout';
import ArticleItemCardVertical from '@/components/zis/ArticleItemCardVertical';

import useQueryGetAllArticle from './hooks/useQueryAllArticle';
import SearchYellowSvg from '@/components/zis/SearchYellowSvg';

import ArticleSearchBar from './component/ArticleSearchBar';

const ArticlePage = () => {
  const [keyword] = useQueryState('keyword');
  const [category] = useQueryState('category', parseAsInteger);

  const [sortBy] = useQueryState('sortBy');
  const [order] = useQueryState('order');

  const { data, isLoading, isError, isFetching } = useQueryGetAllArticle({
    category,
    keyword,
    sortBy,
    order,
  });
  console.log(data)

  return (
    <div>
      <ArticleSearchBar />
      <DataLayout isError={isError} isLoading={isLoading || isFetching} className="h-[30dvh]">
      <div className="mt-6 px-4">
      <h3 className="font-semibold ">Baca Berita Lainnya</h3>
        <div className="my-5 px-4">
          {(data?.data && data.data.length > 0) ? (
            data.data.map((item) => (
              <ArticleItemCardVertical key={item.id} article={item} />
            ))
          ) : (
            <div className='flex flex-col items-center'>
              <SearchYellowSvg />
              <h4 className="font-semibold pt-3">Berita tidak ditemukan</h4>
            </div>
          )}
        </div>
        </div>
      </DataLayout>
    </div>
  );
};

export default ArticlePage;
