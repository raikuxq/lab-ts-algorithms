import quickSort from "./quick-sort";

describe('Quick sort', () => {

  test('with not sorted array', () => {
    const notSortedArr = [7, 4, 0, 1, -1, -2, -3, 6, 5, 8, 10, 9, 2, 3];
    const sortedArr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(quickSort(notSortedArr)).toEqual(sortedArr);
  });

  test('with empty array', () => {
    const emptyArr: Array<number> = [];

    expect(quickSort(emptyArr)).toEqual(emptyArr);
  });

  test('with already sorted array', () => {
    const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(quickSort(sortedArr)).toEqual(sortedArr);
  });


  test('with repeated numbers', () => {
    const notSortedArr = [8, 7, 6, 4, 3, 1, 6, 2, 2, 4, 5];
    const sortedArr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8];

    expect(quickSort(notSortedArr)).toEqual(sortedArr);
  });
});
