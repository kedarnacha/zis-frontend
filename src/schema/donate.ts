import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, ACCEPTED_SIZE } from '@/utils/constants';

export const donateSchema = z.object({
  program_id: z.string().min(1),
  amount: z.string().min(1)
  .refine((value) => /^[0-9]+$/.test(value), {
    message: 'Masukkan nilai tanpa titik maupun koma',
  }),
  payment_method: z.string().min(1),
  evidence: z
    .any()
    .refine((file) => file?.size <= ACCEPTED_SIZE, 'Ukuran file maksimal 2MB')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Format file tidak didukung'),
  isrecurring: z.number().optional(),
  recurring_satuan: z.number().optional(),
  nama_muzaki: z.string().min(1),
  email_muzaki: z.string().min(1).email({
    message: 'Email tidak valid',
  }),
  phone_muzaki: z.string().min(1),
});

export type DonateSchema = z.infer<typeof donateSchema>;
