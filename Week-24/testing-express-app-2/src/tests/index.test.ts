import { app } from './../index.ts';
import request from 'supertest';
import { describe, it, expect } from '@jest/globals';

describe("Testing Sum Post Call", () => {
    it("Sum Of 2 & 3 Should Be 5", async () => {
        const res = await request(app).post("/sum").send({
            a: 2,
            b: 3
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(5);
    })

     it("Sum Of -1 & -2 Should Be -3", async () => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    })
})