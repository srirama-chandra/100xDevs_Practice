import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { app } from "../index.js";
import request from "supertest"
import clearDB from "./helpers/reset-db.js";

describe("Testing Sum POST Call", () => {

    beforeAll( async () => {
        console.log("Clearing Database")
        await clearDB();
    })

    it("Sum Of 2 & 3 Should Be 5", async () => {
        const response = await request(app).post("/sum").send({
            a: 2,
            b: 3
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.sum).toBe(5);
    })

    it("Sum Of -1 & -2 Should Be -3", async () => {
        const response = await request(app).post("/sum").send({
            a: -1,
            b: -2
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.sum).toBe(-3);
    })
})