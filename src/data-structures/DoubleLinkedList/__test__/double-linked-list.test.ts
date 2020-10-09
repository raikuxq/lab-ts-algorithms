import DoubleLinkedList from "../DoubleLinkedList";
import ILinkedList from "../../ILinkedList";
import IDoubleLinkedList from "../../IDoubleLinkedList";


describe('Double linked list', () => {

  /**
   * Empty list case
   */

  test('when list is empty', () => {
    const emptyList: IDoubleLinkedList<number> = new DoubleLinkedList<number>();

    expect(() => {
      emptyList.peekTail();
    }).toThrow('Tail does not exist');

    expect(() => {
      emptyList.peekHead();
    }).toThrow('Head does not exist');

    expect(() => {
      emptyList.getByIndex(0)
    }).toThrow('List is empty');

    expect(emptyList.head).toBe(null);
    expect(emptyList.tail).toBe(null);
  });



  /**
   * Addition methods
   */

  test('elements addition from array', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    const arr = [1, 2, 3, 4, 5];
    list.pushFromArray(arr);
    expect(list.getAsArray()).toEqual(arr);
  });

  test('element addition to list end', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.push(1);
    expect(list.peekHead()).toBe(1);
  });

  test('element addition to list start', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.unshift(1);
    expect(list.peekTail()).toBe(1);
  });



  /**
   * Accession methods
   */

  test('should get first element', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.pushFromArray([10, 20, 30, 40, 50]);

    expect(list.peekTail()).toBe(10);
  });

  test('should get last element', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.pushFromArray([10, 20, 30, 40, 50]);

    expect(list.peekHead()).toBe(50);
  });

  test('should get element by index', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.pushFromArray([10, 20, 30, 40, 50]);

    expect(list.getByIndex(0)).toBe(10);
    expect(list.getByIndex(2)).toBe(30);

    expect(() => {
      list.getByIndex(1000)
    }).toThrow('Index exceed list length');

  });



  /**
   * Deletion methods
   */

  test('should delete first element', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.pushFromArray([10, 40, 20, 30, 40, 50, 20, 30]);
    const shifted = list.shift();

    expect(shifted).toBe(10);
    expect(list.getAsArray()).toEqual([40, 20, 30, 40, 50, 20, 30]);
  });

  test('should delete last element', () => {
    const list: ILinkedList<number> = new DoubleLinkedList<number>();
    list.pushFromArray([10, 40, 20, 30, 40, 50, 20, 30]);
    const popped = list.pop();

    expect(popped).toBe(30);
    expect(list.getAsArray()).toEqual([10, 40, 20, 30, 40, 50, 20]);
  });



  /**
   * Reverse list
   */
  describe('reverse', () => {
    test('should reverse list', () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const reversedArray = [...array].reverse();
      list.pushFromArray(array);
      list.reverse();

      expect(list.getAsArray()).toEqual(reversedArray)
    });

    test('with two elements', () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      const array = [10, 20];
      const reversedArray = [...array].reverse();
      list.pushFromArray(array);
      list.reverse();

      expect(list.getAsArray()).toEqual(reversedArray)
    });
  });



  /**
   * Iteration methods
   */

  describe('iterator behavior', () => {
    const list: IDoubleLinkedList<number> = new DoubleLinkedList<number>();
    const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    list.pushFromArray(testArray);

    const iterator1 = list.iterator(0);
    const iterator2 = list.iterator(5);

    test('should return element data at current position', () => {
      expect(iterator1.current()).toBe(10);
      expect(iterator2.current()).toBe(60);
    });

    test('should iterate to next', () => {
      expect(iterator1.next()).toBe(20);
      expect(iterator2.next()).toBe(70);
    });

    test('should iterate to prev', () => {
      expect(iterator1.prev()).toBe(10);
      expect(iterator2.prev()).toBe(60);
    });
  })

});
