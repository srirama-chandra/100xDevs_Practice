
import { z } from 'zod'

export const userSchema = z.object({
    username : z.string(),
    password : z.string()
})

export type user = z.infer<typeof userSchema>

