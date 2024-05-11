import { z } from 'zod'

// Define a Zod schema for contact data
const ContactsValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email().optional(),
  phoneNumber: z.string().min(11, {
    message: 'Phone number is required and must be 11 characters long',
  }),
  address: z.string().min(1, { message: 'Address is required' }),
  profilePicture: z.string().url(),
})

export type TContactsData = z.infer<typeof ContactsValidationSchema>

export default ContactsValidationSchema
