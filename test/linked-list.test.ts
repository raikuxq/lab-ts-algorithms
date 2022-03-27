import ILinearStorageAccessible from "../src/types/ILinearStorageAccessible";
import SingleLinkedList from "../src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList";
import DoubleLinkedList from "../src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import { EnumLinkedListType } from "../src/types/EnumLinkedListType";
import { createLinkedList } from "../src/helpers/createLinkedList";

describe("Linked list collection", () => {
  describe("polymorphism should work correctly", () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    const singleLinkedList = new SingleLinkedList<number>();
    const collection: Array<ILinearStorageAccessible<number>> = [
      doubleLinkedList,
      singleLinkedList,
    ];

    collection.forEach((list: ILinearStorageAccessible<number>) => {
      list.push(1);
      list.push(2);
    });

    test("double linked list should contain elements", () => {
      expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
    });
    test("single linked list should contain elements", () => {
      expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
    });
  });
});

describe.each([EnumLinkedListType.SINGLE, EnumLinkedListType.DOUBLE])(
  "%s linked list",
  (listType: EnumLinkedListType) => {
    describe("constructor", () => {
      test("should throw when capacity is less than 1", () => {
        expect(() => {
          createLinkedList<number>(listType, -5);
        }).toThrowError();
      });
    });

    describe("method push", () => {
      test("should add elements to list's end", () => {
        const list = createLinkedList<number>(listType);
        list.push(1);
        expect(list.peek()).toBe(1);
      });
      test("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.push(1);
        list.push(2);
        expect(() => {
          list.push(3);
        }).toThrowError();
      });
    });

    describe("method pushFromIndex", () => {
      test("should add elements to list from index", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [10, 20, 30, 40, 50];
        list.pushFromArray([10, 30, 40, 50]);
        list.pushFromIndex(20, 1);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      test("should add elements to list from start", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [0, 10];
        list.pushFromArray([0]);
        list.pushFromIndex(10, 1);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      test("should add elements to empty list", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [10];
        list.pushFromIndex(10, 0);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      test("should add elements to list from end", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [0, 10, 20, 30];
        list.pushFromArray([0, 10, 30]);
        list.pushFromIndex(20, 2);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
    });

    describe("method unshift", () => {
      test("should add elements to list's start", () => {
        const list = createLinkedList<number>(listType);
        list.unshift(1);
        list.unshift(0);
        expect(list.peekFromStart()).toBe(0);
      });
      test("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.unshift(1);
        list.unshift(2);
        expect(() => {
          list.unshift(3);
        }).toThrowError();
      });
    });

    describe("method pushFromArray", () => {
      test("should add elements to list's end", () => {
        const list = createLinkedList<number>(listType);
        const arr = [1, 2, 3, 4, 5];
        list.pushFromArray(arr);
        expect(list.getAsArray()).toEqual(arr);
      });
      test("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.pushFromArray([1]);
        expect(() => {
          list.pushFromArray([2, 3]);
        }).toThrowError();
      });
    });

    describe("method peekFromStart", () => {
      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peekFromStart();
        }).toThrowError();
      });
      test("should return first element from list", () => {
        const list = new DoubleLinkedList();
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peekFromStart()).toBe(10);
      });
    });

    describe("method peek", () => {
      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peek();
        }).toThrowError();
      });
      test("should return first element from list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peek()).toBe(50);
      });
    });

    describe("method peekByIndex", () => {
      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peekByIndex(0);
        }).toThrowError();
      });
      test("should return element by its index from list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peekByIndex(2)).toBe(30);
      });
      test("should throw when index exceed list length", () => {
        const list = createLinkedList<number>(listType);

        expect(() => {
          list.peekByIndex(1000);
        }).toThrowError();
      });
    });

    describe("method shift", () => {
      describe("should delete first element and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20]);
        const shifted = list.shift();

        test("should delete correct", () => {
          expect(list.getAsArray()).toEqual([20]);
        });
        test("should return correct value", () => {
          expect(shifted).toBe(10);
        });
      });

      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.shift();
        }).toThrowError();
      });
    });

    describe("method pop", () => {
      describe("should delete last element and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 40]);
        const shifted = list.pop();

        test("should delete correct", () => {
          expect(list.getAsArray()).toEqual([10]);
        });

        test("should return correct value", () => {
          expect(shifted).toBe(40);
        });
      });

      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.pop();
        }).toThrowError();
      });
    });

    describe("method deleteFromIndex", () => {
      describe("should delete element by index and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30]);
        const shifted = list.deleteFromIndex(1);

        test("should delete correct", () => {
          expect(list.getAsArray()).toEqual([10, 30]);
        });
        test("should return correct value", () => {
          expect(shifted).toBe(20);
        });
      });

      test("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.shift();
        }).toThrowError();
      });
    });

    describe("method reverse", () => {
      test("should correct reverse list", () => {
        const list = createLinkedList<number>(listType);
        const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
        const reversedArray = [...array].reverse();
        list.pushFromArray(array);
        list.reverse();

        expect(list.getAsArray()).toEqual(reversedArray);
      });
    });

    describe("method clear", () => {
      test("should correct clear list", () => {
        const list = createLinkedList<number>(listType);
        const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        list.pushFromArray(testArray);
        list.clear();

        expect(list.getAsArray()).toHaveLength(0);
      });
    });
  }
);

describe("Linked list iterator", () => {
  describe("in Double linked list", () => {
    test("should throw when try to create iterator for empty list", () => {
      const list = new DoubleLinkedList<number>();

      expect(() => {
        list.iterator(0);
      }).toThrowError();
    });

    describe("when list is not empty", () => {
      const list = new DoubleLinkedList<number>();
      const testArray: Array<number> = [10, 20, 30];
      list.pushFromArray(testArray);
      const iterator = list.iterator(0);

      test("should return element data at current position", () => {
        expect(iterator.current()).toBe(10);
      });

      test("should have next element", () => {
        expect(iterator.hasNext()).toBe(true);
      });

      test("should iterate to next", () => {
        expect(iterator.next()).toBe(20);
      });

      test("should iterate to prev", () => {
        expect(iterator.prev()).toBe(10);
      });
    });
  });

  describe("in Single linked list", () => {
    test("should throw when try to create iterator for empty list", () => {
      const list = new SingleLinkedList<number>();

      expect(() => {
        list.iterator(0);
      }).toThrowError();
    });

    describe("when list is not empty", () => {
      const list = new SingleLinkedList<number>();
      const testArray: Array<number> = [10, 20, 30];
      list.pushFromArray(testArray);
      const iterator = list.iterator(0);

      test("should return element data at current position", () => {
        expect(iterator.current()).toBe(10);
      });

      test("should have next element", () => {
        expect(iterator.hasNext()).toBe(true);
      });

      test("should iterate to next", () => {
        expect(iterator.next()).toBe(20);
      });
    });
  });
});
