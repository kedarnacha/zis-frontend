import { ACCEPTED_IMAGE_TYPES, ACCEPTED_SIZE } from '@/utils/constants';

export type Proposal = {
  id: number;
  program_id: number;
  nik_mustahiq:string;
  proposal_kategori: number;
  nama: string;
  tempat_lahir: string;
  approved: number;
  tgl_lahir: string;
  alamat_rumah: string;
  nama_pemberi_rekomendasi: string;
  no_telp_pemberi_rekomendasi: string;
  status_bayar: number;
  ispaid: number;
  proposal_approval: {
    id: number;
    status: number;
    date: string;
    user: {
      user_nama: string;
    };
  }[];
  create_date: string;
};

import { z } from 'zod';

export const proposalSchema = z.object({
  program_id: z.number().min(1, 'Program Id tidak boleh kosong').optional(),
  proposal_kategori: z.number().min(1, 'Proposal Kategori tidak boleh kosong').optional(),
  nik_mustahiq: z
    .string()
    .min(16, 'NIK tidak boleh kosong atau tidak valid')
    .max(20)
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  nama: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  alamat_rumah: z.string().max(255, 'Panjang karakter maksimal 255 huruf').optional(),
  kode_pos: z.string().max(6, 'Panjang karakter maksimal 6 huruf').optional(),
  status_domisili: z.number().optional(),
  tgl_lahir: z.string().optional(),
  tempat_lahir: z.string().optional(),
  jenis_kelamin: z.number().optional(),
  status_rumah: z.number().optional(),
  status_pernikahan: z.number().optional(),
  jumlah_anak: z.string().optional(),
  penghasilan_bulanan: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  nama_pasangan: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  pekerjaan: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  pendidikan_terakhir: z.number().optional(),
  nama_sekolah_universitas: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  fakultas: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  jurusan: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  kelas_semester_saat_ini: z.string().optional(),
  alamat_sekolah_kampus: z.string().max(100, 'Panjang karakter maksimal 100 huruf').optional(),
  nomor_telp_sekolah_kampus: z.string().max(15).optional(),
  tempat_mengajar: z.string().max(255, 'Panjang karakter maksimal 255 huruf').optional(),
  alamat_mengajar: z.string().max(255, 'Panjang karakter maksimal 255 huruf').optional(),
  sebagai_guru: z.string().optional(),
  biaya_pendidikan_bulanan: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  jumlah_tanggungan: z.string().optional(),
  organisasi_yang_diikuti: z.string().optional(),
  nama_ayah: z.string().optional(),
  pekerjaan_ayah: z.string().optional(),
  penghasilan_bulanan_ayah: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  nama_ibu: z.string().optional(),
  pekerjaan_ibu: z.string().optional(),
  penghasilan_bulanan_ibu: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  jenis_bantuan_kesehatan: z.string().optional(),
  bantuan_pihak_lain: z.string().optional(),
  nominal_bantuan: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  biaya_hidup_bulanan: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  dana_yang_diajukan: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Masukkan nilai tanpa titik maupun koma',
    })
    .optional(),
  nama_pemberi_rekomendasi: z.string().min(1).optional(),
  alamat_pemberi_rekomendasi: z.string().min(1).max(255, 'Panjang karakter maksimal 255 huruf').optional(),
  no_telp_pemberi_rekomendasi: z.string().min(1).max(15).optional(),
  lampiran1: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran2: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran3: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran4: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran5: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran6: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  lampiran7: z.any().optional(),
  // .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB'),
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
});

export type ProposalSchema = z.infer<typeof proposalSchema>;
