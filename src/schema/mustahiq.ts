import { z } from 'zod';

const acceptedSize = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf',
];

export const mustahiqSchema = z
  .object({
    is_institusi: z.boolean().optional(),
    institusi_nama: z.string().optional(),
    institusi_no_hp: z.string().optional(),
    address: z
      .string({
        required_error: 'Alamat harus diisi',
      })
      .min(1, 'Alamat harus diisi'),
    emergency_contact_name: z
      .string({
        required_error: 'Nama Kontak Darurat harus diisi',
      })
      .min(1, 'Nama Kontak Darurat harus diisi'),
    emergency_contact_number: z
      .string({
        required_error: 'Nomor Kontak Darurat harus diisi',
      })
      .min(1, 'Nomor Kontak Darurat harus diisi'),
    bank_name: z
      .string({
        required_error: 'Nama Bank harus diisi',
      })
      .min(1, 'Nama Bank harus diisi'),
    bank_account_name: z
      .string({
        required_error: 'Nama Pemilik Rekening harus diisi',
      })
      .min(1, 'Nama Pemilik Rekening harus diisi'),
    bank_number: z
      .string({
        required_error: 'Nomor Rekening harus diisi',
      })
      .min(1, 'Nomor Rekening harus diisi'),
    imkas_number: z.string().optional(),

    kk_file: z
      .any()
      .refine((file) => file?.size <= acceptedSize, 'Ukuran file maksimal 2MB')
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),

    ktp_file: z
      .any()
      .refine((file) => file?.size <= acceptedSize, 'Ukuran file maksimal 2MB')
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  })
  .refine((data) => {
    if (data.is_institusi === true) {
      return data.institusi_nama !== undefined && data.institusi_no_hp !== undefined;
    }
    return true;
  });

export type MustahiqSchema = z.infer<typeof mustahiqSchema>;
