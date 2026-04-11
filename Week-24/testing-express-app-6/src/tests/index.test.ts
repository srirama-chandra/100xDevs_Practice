import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';
import { prismaClient } from '../lib/__mocks__/prisma.js';

vi.mock("./../lib/prisma")

describe("Testing Sum Post Call", () => {

    it("Sum Of 2 & 3 Should Be 5", async () => {

        prismaClient.sum.create.mockResolvedValue({
            id: 1,
            a: 2,
            b: 3,
            answer: 5
        })

        vi.spyOn(prismaClient.sum, "create");

        const response = await request(app).post('/sum').send({
            a: 2,
            b: 3,
        })

        expect(prismaClient.sum.create).toHaveBeenCalledWith({
            data: {
                a: 2,
                b: 3,
                answer: 5
            }
        })

        expect(response.body.id).toBe(1);
        expect(response.body.sum).toBe(5);
    })
})