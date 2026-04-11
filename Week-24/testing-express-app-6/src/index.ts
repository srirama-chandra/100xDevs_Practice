import express from 'express';
import { z } from 'zod';
import { prismaClient } from './lib/prisma.js';

export const app = express();
app.use(express.json());

const inputSchema = z.object({
    a: z.number(),
    b: z.number()
})

app.post('/sum', async (req,res) => {
    const parsedInput = inputSchema.safeParse(req.body);

    if(!parsedInput.success) {
        return res.status(411).json({
            message: "Invalid Input"
        })
    }

    const response = await prismaClient.sum.create({
        data: {
            a: parsedInput.data.a,
            b: parsedInput.data.b,
            answer: parsedInput.data.a + parsedInput.data.b
        }
    })

    return res.status(200).json({
        id: response.id,
        sum: parsedInput.data.a + parsedInput.data.b
    })
});