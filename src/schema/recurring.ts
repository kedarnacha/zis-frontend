import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, ACCEPTED_SIZE } from '@/utils/constants';

export const recurringSchema = z.object({
  program_id: z.string().min(1),
  payment_method: z.string().min(1),
  amount: z.string().min(1),
  reminder_type: z.string().min(1, 'Reminder harus diisi'),
  recurring_type: z.string().min(1, 'Pengingat harus diisi'),
});

export type RecurringSchema = z.infer<typeof recurringSchema>;
