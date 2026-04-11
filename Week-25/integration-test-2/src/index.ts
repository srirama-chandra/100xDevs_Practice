import express from 'express';
import { prismaClient } from './lib/prisma.js';

export const app = express();
app.use(express.json());

app.post('/sum', async (req, res) => {
    const {a, b} = req.body;

    await prismaClient.calculator.create({
        data: {
            a: 2,
            b: 3,
            sum: a + b
        }
    })

    return res.status(200).json({
        sum : a + b
    })
})