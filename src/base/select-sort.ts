import {getMinIndex} from "../utils";

export default function selectSort(elements: Array<number>): Array<number> {

  elements.forEach((elem, index) => {
    const minIndex: number = getMinIndex(elements);
    const minElement: number = elements[minIndex];

    elements[minIndex] = elements[index];
    elements[index] = minElement;
  });

  return elements;
}
