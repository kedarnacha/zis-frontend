'use client';

import { formatDistance } from 'date-fns';
import { id as indo } from 'date-fns/locale';
import { ChevronLeft, Download, HomeIcon, Share } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LineShareButton,
} from 'react-share';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataLayout from '@/components/zis/DataLayout';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUSTAHIQ, TYPE_MUZAKI } from '@/utils/constants';
import { formatter } from '@/utils/number';

import useQueryDetailProgram from '../../hooks/useQueryDetailProgram';

const ProgramDetailPage = () => {
  const router = useRouter();
  const authState = useAuthState();

  const handleBack = () => {
    router.back();
  };

  const param = useParams();
  const id = param?.id as string;

  const { data, isError, isLoading } = useQueryDetailProgram(id);

  const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${data?.data.program_banner.banners_path}`;

  const totalDonation = data?.data?.total_donation ?? 0;
  const programTargetAmount = data?.data?.program_target_amount ?? 0;

  const percentage =
    (totalDonation / programTargetAmount) * 100 > 100
      ? 100
      : (totalDonation / programTargetAmount) * 100;

  const distance = formatDistance(
    new Date(data?.data?.program_end_date ?? Date.now()),
    new Date(),
    {
      locale: indo,
    },
  );

  const [isSharedVisible, setIsSharedVisible] = useState(false);

  const handleShareButtonClick = () => {
    setIsSharedVisible(!isSharedVisible);
  };

  const [copied, setCopied] = useState(false);

  const [link, setLink] = useState('');
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  console.log(data?.data);

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const copyToClipboard = (e: string) => {
    navigator.clipboard.writeText(e);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <DataLayout isLoading={isLoading} isError={isError} className="h-[80dvh]">
      <div className="relative w-full">
        <div className="to-black-90 absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-gradient-to-b from-black/50 p-5">
          <Button onClick={handleBack} className="h-8 w-8 rounded-full p-0" variant="secondary">
            <ChevronLeft size={16} />
          </Button>
          <Button className="rounded-full" variant="secondary" onClick={handleShareButtonClick}>
            <Share size={16} className="mr-2" />
            Bagikan
          </Button>
        </div>
        <Image
          src={imageUrl}
          height={375}
          width={230}
          alt="Item Image"
          className="w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h1 className="font-bold">{data?.data.program_title}</h1>
        <p className="mt-2 text-sm font-light">{data?.data.program_short_desc ?? ''}</p>

        <div className="mb-2 mt-5 h-1 w-full rounded-full bg-slate-300">
          <div className="h-1 rounded-full bg-orange-500" style={{ width: `${percentage}%` }} />
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text font-semibold text-slate-900">
              {formatter.format(data?.data?.total_donation ?? 0)}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm">Donasi Terkumpul</p>
          </div>
          <p className="text-sm">{distance} Lagi</p>
        </div>
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="prose prose-fuchsia p-5 leading-normal">
        <h4 className="font-semibold">Tentang Program Ini</h4>

        {(data?.data.program_description ?? '').split('\n').map((text, index) => (
          <p key={index} className="font-light">
            {text}
          </p>
        ))}
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="p-5">
        <h2 className="font-semibold">Informasi Pengunaan Dana</h2>

        <div className="mt-5 rounded-lg border border-slate-300 px-3 py-5">
          <div className="flex items-center border-b border-b-slate-300 pb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <HomeIcon className="text-orange-500" size={16} />
                </div>
                <div className="flex-1 leading-tight">
                  <p className="font-semibold">Penyaluran</p>
                  <p className="font-semibold">Dana</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="ml-2 mt-2 text-right font-semibold">
                {formatter.format(data?.data?.total_donation ?? 0)}
              </p>
            </div>
          </div>
          <p className="mt-5 font-light">
            Data akan kembali diperbaharui setiap kali ada penarikan dana dilakukan oleh Mustahiq
            atau perima bantuan yang bersangkutan.
          </p>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-semibold">Total Transaksi sampai saat ini</h2>

        <div className="mt-5 flex items-center">
          <div className="flex-1 text-slate-500">Jumlah Donasi</div>

          <div className="font-medium text-black">
            {data?.data?.transactions.length ?? 0} transaksi
          </div>
        </div>

        <div className="mt-5 flex items-center">
          <div className="flex-1 text-slate-500">Dana Terkumpul</div>

          <div className="font-medium text-black">
            {formatter.format(data?.data?.total_donation ?? 0)}
          </div>
        </div>

        <button className="mt-5 flex w-full items-center justify-between rounded-lg border border-slate-200 p-2">
          <span>Unduh laporan distribusi</span>
          <Download size={16} className="text-orange-500" />
        </button>
      </div>

      <div className="h-3 bg-slate-100" />
      <div className="p-5">
        <h2 className="font-semibold">Informasi Pengunaan Dana</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Apakah Zis Indosat memberikan bantuan langsung?
            </AccordionTrigger>
            <AccordionContent>
              Seluruh bantuan yang diajukan atau diberikan melalui pengajuan terlebih dahulu melalui
              portal.zisindosat.id dengan menggunakan user sebagai mustahik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika donasi yang diberikan tidak sesuai target?
            </AccordionTrigger>
            <AccordionContent>
              Jika donasi yang terkumpul belum memenuhi target, maka periode program akan
              diperbanjang.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Apakah Zis Indosat tidak memungut biaya potongan?
            </AccordionTrigger>
            <AccordionContent>
              Donasi yang terkumpul dari portal.zisindosat.id akan dipotong 5% sebagai Dana
              Pengembangan Dakwah (DPD).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {authState?.user?.user_type === TYPE_MUSTAHIQ && (
        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-md items-center space-x-4 border-t border-t-slate-100 bg-white p-5">
          {authState?.user?.mustahiq_id !== null &&
          data?.data?.program_category_id !== undefined &&
          data.data.program_category_id <= 7 ? (
            <Link href={`/program/${id}/submit-program`} className="w-full flex-1">
              <Button className="w-full" size="lg" variant="destructive">
                Ajukan Proposal
              </Button>
            </Link>
          ) : (
            <Link href="/mustahiq" className="w-full flex-1">
              <Button className="w-full" size="lg" variant="destructive">
                Lengkapi Data Diri
              </Button>
            </Link>
          )}
        </div>
      )}
      {authState?.user?.user_type === TYPE_MUZAKI && (
        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-md items-center space-x-4 border-t border-t-slate-100 bg-white p-5">
          <Link href={`/program/${id}/recurring-donation`} className="w-full flex-1">
            <Button className="w-full border-red-500 text-red-500" size="lg" variant="outline">
              Sedekah Rutin
            </Button>
          </Link>
          <Link href={`/program/${id}/donate`} className="w-full flex-1">
            <Button className="w-full" size="lg" variant="destructive">
              Bantu Sekarang
            </Button>
          </Link>
        </div>
      )}
      {isSharedVisible && (
        <div className="justify-center items-end flex fixed inset-0 backdrop-blur-sm z-50 outline-none focus:outline-none">
          <div className="bg-gray-100 w-[450px] p-4 rounded-xl">
            <div className="flex justify-between items center border-b border-gray-200 py-3">
              <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">Bagikan melalui</p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-red-600 rounded-full"
                onClick={() => {
                  setIsSharedVisible(false);
                }}
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="my-4">
              <div className="flex justify-around my-4">
                <div className="border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer">
                  <FacebookShareButton
                    url={shareUrl}
                    children={
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                      </div>
                    }
                  ></FacebookShareButton>
                </div>
                <div className="border hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
                  <TwitterShareButton
                    url={shareUrl}
                    children={
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                        </svg>
                      </div>
                    }
                  ></TwitterShareButton>
                </div>
                <div className="border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer">
                  <LineShareButton
                    url={shareUrl}
                    children={
                      <div>
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 377.764 377.764"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#3ACE01"
                              d="M77.315 0h223.133c42.523 0 77.315 34.792 77.315 77.315v223.133c0 42.523-34.792 77.315-77.315 77.315H77.315C34.792 377.764 0 342.972 0 300.448V77.315C0 34.792 34.792 0 77.315 0z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#FFF"
                              d="M188.515 62.576c76.543 0 138.593 49.687 138.593 110.979 0 21.409-7.576 41.398-20.691 58.351-.649.965-1.497 2.031-2.566 3.209l-.081.088c-4.48 5.36-9.525 10.392-15.072 15.037-38.326 35.425-101.41 77.601-109.736 71.094-7.238-5.656 11.921-33.321-10.183-37.925-1.542-.177-3.08-.367-4.605-.583l-.029-.002v-.002c-64.921-9.223-114.222-54.634-114.222-109.267-.002-61.292 62.049-110.979 138.592-110.979z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#3ACE01"
                              d="M108.103 208.954h27.952c3.976 0 7.228-3.253 7.228-7.229v-.603c0-3.976-3.252-7.228-7.228-7.228h-20.121v-45.779c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.977 3.252 7.23 7.228 7.23zm173.205-33.603v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976 0 7.229-3.252 7.229-7.228v-.603c0-3.976-3.253-7.228-7.229-7.228h-27.952c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229h27.952c3.976 0 7.229-3.253 7.229-7.229v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976.002 7.229-3.251 7.229-7.226zm-53.755 31.448l.002-.003a7.207 7.207 0 0 0 2.09-5.07v-53.609c0-3.976-3.252-7.228-7.229-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v31.469l-26.126-35.042c-1.248-2.179-3.598-3.655-6.276-3.655h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.252 7.229 7.229 7.229h.603c3.976 0 7.228-3.253 7.228-7.229v-32.058l26.314 35.941c.162.252.339.494.53.724l.001.002c.723.986 1.712 1.662 2.814 2.075.847.35 1.773.544 2.742.544h.603a7.162 7.162 0 0 0 3.377-.844c.723-.344 1.332-.788 1.761-1.311zm-71.208 2.155h.603c3.976 0 7.228-3.253 7.228-7.229v-53.609c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.253 7.229 7.229 7.229z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    }
                  ></LineShareButton>
                </div>
                <div className="border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer">
                  <WhatsappShareButton
                    url={shareUrl}
                    children={
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                          ></path>
                        </svg>
                      </div>
                    }
                  ></WhatsappShareButton>
                </div>
                <div className="border hover:bg-[#229ED9] w-12 h-12 fill-[#229ED9] hover:fill-white border-sky-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
                  <TelegramShareButton
                    url={shareUrl}
                    children={
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                        </svg>
                      </div>
                    }
                  ></TelegramShareButton>
                </div>
              </div>

              <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-500 ml-2"
                >
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
                <input
                  className="w-full outline-none pl-2 bg-transparent"
                  type="text"
                  value={link}
                  disabled
                />

                <button
                  className={`bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600 ${
                    copied ? 'bg-green-500 hover:bg-green-600' : ''
                  }`}
                  onClick={() => copyToClipboard(link)}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DataLayout>
  );
};

export default ProgramDetailPage;
