export type Proposal = {
  id:number,
  program_id: number;
  proposal_kategori: number;
  nama: string;
  status_bayar:number;
  proposal_approval:{
    id: number;
    status: number;
    user: {
      user_nama: string;
    };
  }[];
  create_date:string;
};

import { z } from 'zod';

export const proposalSchema = z.object({
  program_id: z.number().min(1, 'Program Id tidak boleh kosong').optional(),
  proposal_kategori: z.number().min(1, 'Proposal Kategori tidak boleh kosong').optional(),
  nama: z.string().optional(),
  alamat_rumah: z.string().optional(),
  kode_pos: z.string().optional(),
  status_domisili: z.number().optional(),
  tgl_lahir: z.string().optional(),
  tempat_lahir: z.string().optional(),
  jenis_kelamin: z.number().optional(),
  status_rumah: z.number().optional(),
  status_pernikahan: z.number().optional(),
  jumlah_anak: z.string().optional(),
  penghasilan_bulanan: z.string().optional(),
  nama_pasangan: z.string().optional(),
  pekerjaan: z.string().optional(),
  pendidikan_terakhir: z.number().optional(),
  nama_sekolah_universitas: z.string().optional(),
  fakultas: z.string().optional(),
  jurusan: z.string().optional(),
  kelas_semester_saat_ini: z.string().optional(),
  alamat_sekolah_kampus: z.string().optional(),
  nomor_telp_sekolah_kampus: z.string().optional(),
  tempat_mengajar: z.string().optional(),
  alamat_mengajar: z.string().optional(),
  sebagai_guru: z.string().optional(),
  biaya_pendidikan_bulanan: z.string().optional(),
  jumlah_tanggungan: z.string().optional(),
  organisasi_yang_diikuti: z.string().optional(),
  nama_ayah: z.string().optional(),
  pekerjaan_ayah: z.string().optional(),
  penghasilan_bulanan_ayah: z.string().optional(),
  nama_ibu: z.string().optional(),
  pekerjaan_ibu: z.string().optional(),
  penghasilan_bulanan_ibu: z.string().optional(),
  jenis_bantuan_kesehatan: z.string().optional(),
  bantuan_pihak_lain: z.string().optional(),
  nominal_bantuan: z.string().optional(),
  biaya_hidup_bulanan: z.string().optional(),
  dana_yang_diajukan: z.string().optional(),
  nama_pemberi_rekomendasi: z.string().min(1).optional(),
  alamat_pemberi_rekomendasi: z.string().min(1).optional(),
  no_telp_pemberi_rekomendasi: z.string().min(1).optional(),
});

export type ProposalSchema = z.infer<typeof proposalSchema>;
