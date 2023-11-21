import { z } from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const registerSchema = z.object({
  type: z.enum(['10', '11']),
  nama: z.string({ required_error: 'Nama Harus Diisi' }).min(1, 'Nama Harus Diisi').max(255),
  email: z
    .string({
      invalid_type_error: 'Email tidak valid',
      required_error: 'Email harus diisi',
    })
    .email({
      message: 'Email tidak valid',
    }),
  phone: z
    .string({ required_error: 'Nomor Telepon / WA harus diisi' })
    .regex(phoneRegex, 'Nomor telepon / WA tidak valid')
    .refine(
      (value) =>
        value.startsWith('0816') ||
        value.startsWith('0815') ||
        value.startsWith('0814') ||
        value.startsWith('0855') ||
        value.startsWith('0856') ||
        value.startsWith('0857') ||
        value.startsWith('0858'),
      {
        message: 'Nomor telepon harus nomor Indosat',
      },
    ),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
