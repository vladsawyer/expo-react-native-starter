import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  createdAt: z.string().datetime(),
})

export type User = z.infer<typeof userSchema>