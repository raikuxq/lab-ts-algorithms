import quickSort from "./quick-sort";
import mergeSort from "./merge-sort";
import selectSort from "./select-sort";
import bubbleSort from "./bubble-sort";
import insertionSort from "./insertion-sort";

const randomArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max))

describe.each([
  'Quick',
  'Merge',
  'Selection',
  'Bubble',
  'Insertion'
])('%s sort', (sortStrategyType: string) => {

  let sort: Function;

  switch (sortStrategyType) {
    case 'Quick':
      sort = quickSort;
      break;
    case 'Merge':
      sort = mergeSort;
      break;
    case 'Selection':
      sort = selectSort;
      break;
    case 'Bubble':
      sort = bubbleSort;
      break;
    case 'Insertion':
      sort = insertionSort;
      break;
    default:
      throw new Error('Invalid sort type')
  }


  test('with not sorted random array', () => {
    const notSortedArr: Array<number> = randomArray(100, 500);

    const sortedArr = [...notSortedArr].sort((a: number, b: number) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    expect(sort(notSortedArr)).toEqual(sortedArr);
  });


  test('with empty array', () => {
    const emptyArr: Array<number> = [];

    expect(sort(emptyArr)).toEqual(emptyArr);
  });


  test('with already sorted array', () => {
    const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(sort(sortedArr)).toEqual(sortedArr);
  });


  test('with repeated numbers', () => {
    const notSortedArr = [8, 7, 6, 4, 3, 1, 6, 2, 2, 4, 5];
    const sortedArr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8];

    expect(sort(notSortedArr)).toEqual(sortedArr);
  });
});
