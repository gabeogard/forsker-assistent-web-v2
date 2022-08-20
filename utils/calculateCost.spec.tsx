import { calculateCost } from './calculateCost';

describe('useCalculateCost', () => {
    it('should throw error if less than 1 person', () => {
        expect(() =>
            calculateCost(0, 10)
        ).toThrow('Amount of people cannot be less than 1,')
    });

    it('should default to 1 10 min interval if less than 10 minutes', () => {
        expect(calculateCost(2, 5)).toBe(300);
    });

    it('should cost 300 per interval for 2 people', () => {
        expect(calculateCost(2, 40)).toBe(300 * 4); // 1200
    });

    it('should add 20 per interval per extra person if more than 2 people', () => {
        expect(calculateCost(4, 40)).toBe((300 * 4) + (4 * (20 * 2))); // 1360
    })
});
