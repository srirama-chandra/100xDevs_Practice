
import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';

vi.mock('./../lib/prisma.ts');

import { app } from './../index.ts';

describe("Testing Sum Post Call", () => {

    it("Invalid Input Scenario", async () => {
        const res = await request(app).post('/sum').send({
            a: "2",
            b: 3
        });
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Invalid Input");
    });

    it("Invalid Input Scenario - 2", async () => {
        const res = await request(app).post('/sum').send({
            a: [1],
            b: 3
        });
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Invalid Input");
    });

    it("Sum Of 2 & 3 Should Be 5", async () => {
        const res = await request(app).post('/sum').send({
            a: 2,
            b: 3
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(5);
    });

    it("Sum Of -1 & -2 Should Be 3", async () => {
        const res = await request(app).post('/sum').send({
            a: -1,
            b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(-3);
    })
})