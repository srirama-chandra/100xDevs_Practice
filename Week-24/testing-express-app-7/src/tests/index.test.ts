import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';
import { prismaClient } from '../lib/__mocks__/prisma.js';


vi.mock("./../lib/prisma");

describe("Testing Sum POST Call", () => {
    it("Testing Invalid Scenario", async () => {

        const res = await request(app).post("/sum").send({
            a: "1",
            b: 3
        });

        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Invalid Input");
    })

    it("Sum of 2 and 3 Should Be 5", async () => {

        prismaClient.calculator.create.mockResolvedValue({
            id: 1,
            a: 2, 
            b: 3, 
            sum: 5
        })

        vi.spyOn(prismaClient.calculator,"create");

        const res = await request(app).post("/sum").send({
            a: 2,
            b: 3
        })

        expect(prismaClient.calculator.create).toHaveBeenLastCalledWith({
            data: {
                a: 2,
                b: 3,
                sum: 5
            }
        })

        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(5);
        expect(res.body.id).toBe(1);
    })
})