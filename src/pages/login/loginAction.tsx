'use server'

import { z } from 'zod'
import { FormDataSchema } from '../../schemas/validation'

type Inputs = z.infer<typeof FormDataSchema>

export async function Login(data: Inputs) {
    const result = FormDataSchema.safeParse(data)

    if (result.success) {
        // Perform actual login logic here
        if (data.email === 'test123@gmail.com' && data.password === 'password123') {
            return { success: true, data: result.data }
        } else {
            return { success: false, error: { email: { message: 'Invalid email or password' }, password: { message: 'Invalid email or password' } } }
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}