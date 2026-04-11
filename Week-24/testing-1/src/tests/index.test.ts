const { sum } = require('../index');
const { describe, it, expect } = require('@jest/globals');

describe('Sum Function Tests', () => {
    it('Sum Of 2 & 3 Should Be 5', () => {
        expect(sum(2,3)).toBe(5);
    })

    it('Sum Of 10 & 20 Should Be 30', () => {
        expect(sum(10,20)).toBe(30);
    })

    it('Sum Of -2 & -3 Should Be -5', () => {
        expect(sum(-2,-3)).toBe(-5);
    })
})