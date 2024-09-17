
import {z} from 'zod'

let userZodSchema = z.object({name:z.string(),
                              age:z.number().optional()
                            });

type userType = z.infer<typeof userZodSchema>

// Now userType is infered based on the zodSchema defined.