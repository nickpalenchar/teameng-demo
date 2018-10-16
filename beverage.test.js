const myBeverage = {
    delicious: true,
    sour: false,
};

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });
});

