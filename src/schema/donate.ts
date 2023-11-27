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
  reminder_type: z.string().optional(),
  recurring_type: z.string().optional(),
});

export type DonateSchema = z.infer<typeof donateSchema>;
