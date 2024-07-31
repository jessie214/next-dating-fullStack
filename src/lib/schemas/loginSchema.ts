import {z} from 'zod';

// Define a Zod schema for login form
export const loginSchema = z.object({
  // The email field must be a string and a valid email address
  email: z.string().email(),
  // The password field must be a string with a minimum length of 6 characters
  password: z.string().min(6, {
      message: 'Password must be at least 6 characters'
  })
})
// Infer the TypeScript type from the Zod schema
export type LoginSchema = z.infer<typeof loginSchema>