import React, { Fragment } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQQ = () => {
  return (
    <Fragment>
      <div className="border-b-8 border-b-slate-100 px-5 pt-3" />
      <div className="prose px-5 font-light text-xs leading-tight">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Apakah terdapat video tutorial pengajuannya?
            </AccordionTrigger>
            <AccordionContent>
              <video controls src="http://api.zisindosat.id/public/uploads/video_zis_Portal_Muzaki_Mustahiq_Landscape.mp4"></video>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana Cara Registrasi & Login di portal.zisindosat.id ?
            </AccordionTrigger>
            <AccordionContent>
              <ol>
                <li>User sudah membuka halaman portal : portal.zisindosat.id</li>
                <li>User memencet tombol Masuk</li>
                <li>Dipindahkan ke halaman masuk akun, user melakukan Daftar Sekarang</li>
                <li>User daftar sebagai muzaki mengisi data yang diminta</li>
                <li>User klik daftar, dan muncul berhasil daftar</li>
                <li>User membuka email yang didaftarkan untuk verifikasi akun</li>
                <li>User masuk ke portal dengan email dan password diberikan</li>
                <p>
                  Keterangan : Pastikan email dan nomor handphone belum pernah digunakan untuk
                  mendaftar
                </p>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana cara berdonasi di portal.zisindosat.id?
            </AccordionTrigger>
            <AccordionContent>
              <ol>
                <li>Pilih Program Kebaikan yang ingin Anda bantu di portal.zisindosat.id</li>
                <li>Klik tombol "Donasi Sekarang"</li>
                <li>Isi nominal donasi</li>
                <li>Pilih Metode Pembayaran</li>
                <li>Klik Lanjut Pembayaran</li>
                <p>
                  Keterangan : Pastikan Anda melakukan pembayaran sesuai dengan Nominal yang tertera
                  dan metode bayar yang sesuai dengan pilihan pada saat berdonasi agar donasi Anda
                  dapat diproses secara otomatis.
                </p>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana cara berdonasi menggunakan Transfer Bank?
            </AccordionTrigger>
            <AccordionContent>
              Anda dapat berbagi kebaikan dengan berdonasi menggunakan pilihan metode yang kami
              sediakan yaitu: Transfer Bank BCA, Mandiri, BRI, dll
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika sudah transfer tapi ada notifikasi donasi dibatalkan?
            </AccordionTrigger>
            <AccordionContent>
              Hal ini umumnya disebabkan oleh beberapa faktor berikut:
              <ul>
                <li>
                  Nominal transfer belum sesuai dengan tagihan sistem (tidak/salah mencantumkan kode
                  unik)
                </li>
                <li>Nominal transfer sudah sesuai dengan tagihan sistem, namun:</li>
                <li>Transfer terlalu dekat atau telah melewati batas waktu</li>
                <li>Ada kesalahan di sistem bank</li>
              </ul>
              Apabila hal tersebut terjadi, mohon konfirmasi dengan mengirimkan bukti transfer ke
              Whatsapp ke{' '}
              <a href="https://api.whatsapp.com/send?phone=6285693318006">085693318006</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika saya lupa memasukan kode unik pada nominal transfer?
            </AccordionTrigger>
            <AccordionContent>
              Jika Anda lupa memasukan kode unik saat transfer segera melakukan konfirmasi kepada
              admin melalui nomor Whatsapp{' '}
              <a href="https://api.whatsapp.com/send?phone=6285693318006">085693318006</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika rekening bank saya tidak terdaftar?
            </AccordionTrigger>
            <AccordionContent>
              Anda dapat memilih salah satu rekening yang tersedia dan melakukan transfer antar
              bank.
              <p>
                Catatan: Transfer antar bank akan dikenakan biaya administrasi sesuai dengan
                kebijakan bank terkait.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika saya belum transfer hingga melewati batas waktu?
            </AccordionTrigger>
            <AccordionContent>
              Anda bisa mengulangi proses donasi dengan memilih Program Kebaikan yang ingin dibantu.
              <p>
                Catatan: Abaikan tagihan sebelumnya, untuk mendapat nominal dan kode unik terbaru.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default FAQQ;
