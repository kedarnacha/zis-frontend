import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string({
      invalid_type_error: 'Email tidak valid',
      required_error: 'Email harus diisi',
    })
    .email({
      message: 'Email tidak valid',
    }),
  password: z
    .string({
      required_error: 'Kata sandi harus diisi',
    })
    .min(8, {
      message: 'Kata sandi minimal 8 karakter',
    })
    .max(32),
});

export type LoginSchema = z.infer<typeof loginSchema>;
