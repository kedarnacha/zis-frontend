// 'use client';

// import Image from 'next/image';
// import React from 'react';

// import { Button } from '@/components/ui/button';
// import Divider from '@/components/zis/Divider';
// import PengajuanMenu from '../components/PengajuanMenu';
// import PengajuanList from '../../components/PengajuanList';
// import CallCenter from '@/components/zis/CallCenter';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { ChevronLeft, PlusCircle } from 'lucide-react';

// const SubmitProgramPage = () => {
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };
//   return (
//     <div className="relative">
//       <nav className="flex w-full items-center justify-center space-x-3 bg-amber-300 p-4 py-7">
//         <Button
//           className="h-10 w-10 rounded-full bg-white p-0"
//           variant="secondary"
//           onClick={handleBack}
//         >
//           <ChevronLeft size={24} className="text-slate-900" />
//         </Button>
//         <div className="flex-1">
//           <div className="ml-3 flex-1">
//             <p className='text-lg font-semibold'>Ajukan bantuan di ZIS Indosat</p>
//           </div>
//         </div>
//       </nav>
//       <div className="relative aspect-[7/2] object-cover bg-amber-300">
//         <div className="absolute left-5 top-1 z-10 pr-32 text-lg font-semibold">
//           Buat permohonan bantuan
//           <div className="relative text-ms font-medium">
//             Kuota Tersedia : 0
//           </div>
//         </div>
//       </div>
//       <div className="relative z-40 -mt-10 px-4 mb-4">
//         <div className="rounded-lg bg-white p-4 shadow-lg">
//           <Link href='/program/program-category' className="mt-3 flex items-center justify-center rounded-md border-2 border-dashed border-red-400 p-2">
//             <button className="text-red-400 text-md flex py-2">
//               Ajukan program bantuan baru <PlusCircle size={24} className="text-red-400 ml-2" />
//             </button>
//           </Link>
//           <Link href="/program/submit-program-intro">
//             <Button className="mt-4 w-full rounded-full bg-[#EE888C] hover:bg-slate-400 text-black" size="sm" variant="destructive">
//               <span className="font-medium">Tips Pengajuan Bantuan? {' '}
//                 <b className="text-[#B10000]">Lihat disini</b>
//               </span>
//             </Button>
//           </Link>
//         </div>
//       </div>
//       <Divider />
//       <PengajuanMenu />
//       <Divider />
//       <PengajuanList />
//       <Divider />
//       <CallCenter />
//     </div>
//   );
// };

// export default SubmitProgramPage;
