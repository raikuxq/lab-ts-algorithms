import quickSort from "../src/sorts/quick-sort";

describe('Quick sort', () => {

    test('with not sorted array', () => {
        const notSortedArr = [7,4,0,1,-1,-2,-3,6,5,8,10,9,2,3];
        const sortedArr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

        expect(quickSort(notSortedArr)).toEqual(sortedArr);
    });

    test('with empty array', () => {
        const emptyArr: Array<number> = [];

        expect(quickSort(emptyArr)).toEqual(emptyArr);
    });

    test('with already sorted array', () => {
        const sortedArr = [1,2,3,4,5,6,7,8,9,10];

        expect(quickSort(sortedArr)).toEqual(sortedArr);
    });

});
