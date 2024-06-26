import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, ACCEPTED_SIZE } from '@/utils/constants';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

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
      .min(1, 'Nomor Kontak Darurat harus diisi')
      .max(15, 'Panjang karakter maksimal 15 huruf')
      .regex(phoneRegex, 'Nomor telepon / WA tidak valid'),
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
    nama_imkas: z
      .string({
        required_error: 'Nama Akun Imkas harus diisi',
      })
      .min(1, 'Nama Akun Imkas harus diisi'),
    imkas_number: z
      .string()
      .max(15, 'Panjang karakter maksimal 15 huruf')
      // .optional()
      .refine(
        (value) =>
          value.startsWith('0816') ||
          value.startsWith('0815') ||
          value.startsWith('0814') ||
          value.startsWith('0855') ||
          value.startsWith('0856') ||
          value.startsWith('0857') ||
          value.startsWith('0858') ||
          value.startsWith('0895') ||
          value.startsWith('0896') ||
          value.startsWith('0897') ||
          value.startsWith('0898') ||
          value.startsWith('0899'),
        {
          message: 'Nomor telepon harus nomor Indosat',
        },
      ),
    province: z
      .string({
        required_error: 'Provinsi harus diisi',
      })
      .min(1, 'Provinsi harus diisi'),
    kota: z
      .string({
        required_error: 'Kota harus diisi',
      })
      .min(1, 'Kota harus diisi'),
    kecamatan: z
      .string({
        required_error: 'Kecamatan harus diisi',
      })
      .min(1, 'Kecamatan harus diisi'),

    kk_file: z
      .any()
      .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB')
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),

    ktp_file: z
      .any()
      .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB')
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  })
  .refine((data) => {
    if (data.is_institusi === true) {
      return data.institusi_nama !== undefined && data.institusi_no_hp !== undefined;
    }
    return true;
  });

export type MustahiqSchema = z.infer<typeof mustahiqSchema>;
