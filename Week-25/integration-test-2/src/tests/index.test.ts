import { app } from "../index.js";
import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import clearDB from "./helpers/reset-db.js";

describe("Testing The Sum Post Call", () => {

    beforeAll(async () => {
        console.log("Cleared DB");
        await clearDB();
    })

    it("Sum Of 2 & 3 Should Be 5", async () => {
        const response = await request(app).post('/sum').send({
            a: 2,
            b: 3
        })

        expect(response.statusCode).toBe(200);
        expect(response.body.sum).toBe(5);
    })
})