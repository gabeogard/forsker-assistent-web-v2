const BASE_PRICE_TWO_PEOPLE = 300;
const PRICE_PER_EXTRA_PERSON = 20;

export const calculateCost = (amountOfPeople: number, timeInMinutes: number) => {
    const minutes = Math.max(timeInMinutes, 1);
    const tenMinIntervals = Math.max(minutes / 10, 1);

    const EXTRA_PRICE_PER_INTERVAL = (amountOfPeople > 2)
        ? PRICE_PER_EXTRA_PERSON * (amountOfPeople - 2)
        : 0;

    const PRICE_PER_INTERVAL = BASE_PRICE_TWO_PEOPLE + EXTRA_PRICE_PER_INTERVAL;

    return PRICE_PER_INTERVAL * tenMinIntervals;
};
