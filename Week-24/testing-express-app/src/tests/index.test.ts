const request = require('supertest');
const { app } = require('../index');
const { describe, it, expect} = require('@jest/globals');

describe("Testing Sum Post Call", () => {
    it("Sum Of 2 & 3 Should Be 5", async () => {
        const res = await request(app).post('/sum').send({
            a: 2,
            b: 3
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(5);
    })
})

