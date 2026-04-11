const { sum } =  require('./../index.ts');
const { describe, it, expect } =  require('@jest/globals');

describe("Testing Sum Function", () => {
    it("Sum Of 2 & 3 Should Be 5", () => {
        expect(sum(2,3)).toBe(5);
    })

    it("Sum Of -1 & -2 Should Be 5", () => {
        expect(sum(-1,-2)).toBe(-3);
    })
})