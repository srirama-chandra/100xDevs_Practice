import express from 'express';
import { z } from 'zod';
import { prismaClient } from './db.ts';

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

    await prismaClient.sum.create({
        data: {
            a: parsedInput.data.a,
            b: parsedInput.data.b,
            answer: parsedInput.data.a + parsedInput.data.b
        }
    })

    return res.status(200).json({
        sum: parsedInput.data.a + parsedInput.data.b
    })
});