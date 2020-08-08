export default function quickSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    return arr;
  } else {
    const middleIndex: number = Math.floor(arr.length / 2);
    const basisElement: number = arr[middleIndex];

    const arrToFilter: Array<number> = [...arr.slice(0, middleIndex), ...arr.slice(middleIndex + 1)];

    const arrSmaller: Array<number> = arrToFilter.filter((i: number) => (i <= basisElement));
    const arrBigger: Array<number> = arrToFilter.filter((i: number) => (i > basisElement));

    return ([
      ...quickSort(arrSmaller),
      basisElement,
      ...quickSort(arrBigger)
    ])
  }
}
