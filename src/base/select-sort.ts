import {getMinIndex} from "../utils";

export default function selectSort(elements: Array<number>): Array<number> {

  const copyArr: Array<number> = [...elements];

  return elements.reduce((acc: Array<number>) => {
    const minIndex = getMinIndex(copyArr);
    const minElement = copyArr[minIndex];

    acc.push(minElement);
    copyArr.splice(minIndex, 1);

    return acc;
  }, []);
}
