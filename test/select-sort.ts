import selectSort from "../src/base/select-sort";

test('Select sort: to be correct', () => {
  const notSortedArr = [7,4,0,1,-1,-2,-3,6,5,8,10,9,2,3];
  const sortedArr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

  expect(selectSort(notSortedArr)).toEqual(sortedArr);
});

test('Select sort: to be correct with empty array', () => {
  const emptyArr: Array<number> = [];

  expect(selectSort(emptyArr)).toEqual(emptyArr);
});

test('Select sort: to be correct with already sorted array', () => {
  const sortedArr = [1,2,3,4,5,6,7,8,9,10];

  expect(selectSort(sortedArr)).toEqual(sortedArr);
});
