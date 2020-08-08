import quickSort from "../src/divide-and-conquer/quick-sort";

test('Quick sort: should sort correctly', () => {
  expect(quickSort([1,2,3,4,5,0,-5])).toEqual([-5,0,1,2,3,4,5]);
  expect(quickSort([6,1,5,2,3,5,8,9,0])).toEqual([0,1,2,3,5,5,6,8,9]);
});

test('Quick sort: should be correct with empty array', () => {
  expect(quickSort([])).toEqual([]);
});

test('Quick sort: should be correct with already sorted array', () => {
  expect(quickSort([-10,-5,0,1,2,3,4,5])).toEqual([-10,-5,0,1,2,3,4,5]);
});
