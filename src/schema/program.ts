import { z } from 'zod';

export type Program = {
  program_id: number;
  program_kode: string;
  program_title: string;
  program_short_desc: string;
  program_start_date: string;
  program_end_date: string;
  program_description: string;
  program_target_amount: number;
  institusi_nama: string;
  program_institusi?: {
    institusi_nama: string;
  };
  institusi_no_hp: string;
  program_banner: {
    banners_path: string;
  };
  total_donation: number;
};

const acceptedSize = 1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const programSchema = z.object({
  program_title: z.string().min(1, 'Nama Program Harus Diisi').max(255),
  program_short_desc: z.string().max(100).optional(),
  program_start_date: z.date(),
  program_end_date: z.date(),
  program_description: z.string().min(1, 'Deskripsi Program Harus Diisi'),
  program_target_amount: z.number().min(1, 'Target Dana Harus Diisi'),
  target: z.string().optional().or(z.literal('self')).optional(),
  banner: z
    .any()
    .refine((file) => file?.size <= acceptedSize, 'Ukuran file maksimal 2MB')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
});

export type ProgramSchema = z.infer<typeof programSchema>;
