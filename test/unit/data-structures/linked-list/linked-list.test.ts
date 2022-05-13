import ILinkedList from "../../../../src/types/ILinkedList";
import SingleLinkedList from "../../../../src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList";
import DoubleLinkedList from "../../../../src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import { EnumLinkedListType } from "../../../../src/types/EnumLinkedListType";
import { createLinkedList } from "../../../../src/helpers/createLinkedList";

describe("Linked list collection", () => {
  describe("polymorphism should work correctly", () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    const singleLinkedList = new SingleLinkedList<number>();
    const collection: Array<ILinkedList<number>> = [
      doubleLinkedList,
      singleLinkedList,
    ];

    collection.forEach((list: ILinkedList<number>) => {
      list.push(1);
      list.push(2);
    });

    it("double linked list should contain elements", () => {
      expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
    });
    it("single linked list should contain elements", () => {
      expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
    });
  });
});

describe.each([EnumLinkedListType.SINGLE, EnumLinkedListType.DOUBLE])(
  "%s linked list",
  (listType: EnumLinkedListType) => {
    describe("constructor", () => {
      it("should throw when capacity is less than 1", () => {
        expect(() => {
          createLinkedList<number>(listType, -5);
        }).toThrowError();
      });
    });

    describe("method push", () => {
      it("should add elements to list's end", () => {
        const list = createLinkedList<number>(listType);
        list.push(1);
        expect(list.peek()).toBe(1);
      });
      it("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.push(1);
        list.push(2);
        expect(() => {
          list.push(3);
        }).toThrowError();
      });
    });

    describe("method pushFromIndex", () => {
      it("should add elements to list from index", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [10, 20, 30, 40, 50];
        list.pushFromArray([10, 30, 40, 50]);
        list.pushFromIndex(20, 1);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      it("should add elements to list from start", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [0, 10];
        list.pushFromArray([0]);
        list.pushFromIndex(10, 1);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      it("should add elements to empty list", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [10];
        list.pushFromIndex(10, 0);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      it("should add elements to list from end", () => {
        const list = createLinkedList<number>(listType);
        const expectedArr: Array<number> = [0, 10, 20, 30];
        list.pushFromArray([0, 10, 30]);
        list.pushFromIndex(20, 2);
        expect(list.getAsArray()).toEqual(expectedArr);
      });
      it("should throw when index exceeds list length ", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0, 10, 30]);
        expect(() => {
          list.pushFromIndex(10, 1000);
        }).toThrowError();
      });
      it("should throw when index less than 0 ", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0, 10, 30]);
        expect(() => {
          list.pushFromIndex(10, -20);
        }).toThrowError();
      });
    });

    describe("method unshift", () => {
      it("should add elements to list's start", () => {
        const list = createLinkedList<number>(listType);
        list.unshift(1);
        list.unshift(0);
        expect(list.peekFromStart()).toBe(0);
      });
      it("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.unshift(1);
        list.unshift(2);
        expect(() => {
          list.unshift(3);
        }).toThrowError();
      });
    });

    describe("method pushFromArray", () => {
      it("should add elements to list's end", () => {
        const list = createLinkedList<number>(listType);
        const arr = [1, 2, 3, 4, 5];
        list.pushFromArray(arr);
        expect(list.getAsArray()).toEqual(arr);
      });
      it("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, 2);
        list.pushFromArray([1]);
        expect(() => {
          list.pushFromArray([2, 3]);
        }).toThrowError();
      });
    });

    describe("method peekFromStart", () => {
      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peekFromStart();
        }).toThrowError();
      });
      it("should return first element from list", () => {
        const list = new DoubleLinkedList();
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peekFromStart()).toBe(10);
      });
    });

    describe("method peek", () => {
      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peek();
        }).toThrowError();
      });
      it("should return first element from list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peek()).toBe(50);
      });
    });

    describe("method peekByIndex", () => {
      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peekByIndex(0);
        }).toThrowError();
      });
      it("should return element by its index from list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peekByIndex(2)).toBe(30);
      });
      it("should throw when index exceed list length", () => {
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

        it("should delete correct", () => {
          expect(list.getAsArray()).toEqual([20]);
        });
        it("should return correct value", () => {
          expect(shifted).toBe(10);
        });
      });

      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.shift();
        }).toThrowError();
      });
    });

    describe("method pop", () => {
      describe("should delete last element and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 40, 50]);
        const shifted = list.pop();

        it("should delete correct", () => {
          expect(list.getAsArray()).toEqual([10, 40]);
        });

        it("should return correct value", () => {
          expect(shifted).toBe(50);
        });
      });

      it("should throw when list is empty", () => {
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

        it("should delete correct", () => {
          expect(list.getAsArray()).toEqual([10, 30]);
        });
        it("should return correct value", () => {
          expect(shifted).toBe(20);
        });
      });

      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.shift();
        }).toThrowError();
      });
    });

    describe("method reverse", () => {
      it("should correct reverse list", () => {
        const list = createLinkedList<number>(listType);
        const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
        const reversedArray = [...array].reverse();
        list.pushFromArray(array);
        list.reverse();

        expect(list.getAsArray()).toEqual(reversedArray);
      });
    });

    describe("method clear", () => {
      it("should correct clear list", () => {
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
    it("should throw when try to create iterator for empty list", () => {
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

      it("should return element data at current position", () => {
        expect(iterator.current()).toBe(10);
      });

      it("should have next element", () => {
        expect(iterator.hasNext()).toBe(true);
      });

      it("should iterate to next", () => {
        expect(iterator.next()).toBe(20);
      });

      it("should iterate to prev", () => {
        expect(iterator.prev()).toBe(10);
      });
    });
  });

  describe("in Single linked list", () => {
    it("should throw when try to create iterator for empty list", () => {
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

      it("should return element data at current position", () => {
        expect(iterator.current()).toBe(10);
      });

      it("should have next element", () => {
        expect(iterator.hasNext()).toBe(true);
      });

      it("should iterate to next", () => {
        expect(iterator.next()).toBe(20);
      });
    });
  });
});
