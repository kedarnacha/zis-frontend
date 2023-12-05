import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Article } from '@/schema/article';

const ArticleItemCardVertical = ({ article }: { article: Article }) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${article.banner}`;

    return (
        <Link href={`/article/${article.id}`}>
            <div className="flex border-b border-b-slate-200 py-3">
                <div className="relative aspect-[480/320] flex-1 overflow-hidden rounded-md">
                    <Image src={imageUrl} fill alt="Item Image" className="object-cover" />
                </div>
                <div className="flex w-full flex-1 flex-col px-3">
                    <p className="mt-1 text-sm font-semibold">{article.title}</p>

                    <div className=" pt-2 flex items-end">
                        <p className="text-xs text-slate-900">
                            {article.content}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleItemCardVertical;
