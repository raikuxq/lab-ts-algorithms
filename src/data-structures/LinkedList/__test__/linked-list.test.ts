import ILinkedList from "../../ILinkedList";
import SingleLinkedList from "../SingleLinkedList/SingleLinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";
import IIterable from "../../IIterable";
import IIterator from "../../IIterator";

const createList = <T>(type: string): ILinkedList<T> => {
  let linkedList: ILinkedList<T>;

  switch (type) {
    case "Double":
      linkedList = new DoubleLinkedList();
      break;
    case "Single":
      linkedList = new SingleLinkedList();
      break;
    default:
      throw new Error("Invalid list type");
  }

  return linkedList;
};

describe.each(["Double", "Single"])("%s linked list", (listType: string) => {
  describe("method getByIndex", () => {
    test("should throw when list is empty", () => {
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.getByIndex(0);
      }).toThrowError();
    });
  });

  describe("method push", () => {
    test("should add elements to list's end", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      list.push(1);
      expect(list.peekHead()).toBe(1);
    });
  });

  describe("method unshift", () => {
    test("should add elements to list's start", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      list.unshift(1);
      list.unshift(0);
      expect(list.peekTail()).toBe(0);
    });
  });

  describe("method pushFromArray", () => {
    test("should add elements to list's end", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      const arr = [1, 2, 3, 4, 5];
      list.pushFromArray(arr);
      expect(list.getAsArray()).toEqual(arr);
    });
  });

  describe("method peekTail", () => {
    test("should throw when list is empty", () => {
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.peekTail();
      }).toThrowError();
    });
    test("should return first element from list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.peekTail()).toBe(10);
    });
  });

  describe("method peekHead", () => {
    test("should throw when list is empty", () => {
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.peekHead();
      }).toThrowError();
    });
    test("should return first element from list", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.peekHead()).toBe(50);
    });
  });

  describe("method getByIndex", () => {
    test("should throw when list is empty", () => {
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.getByIndex(0);
      }).toThrowError();
    });
    test("should return element by its index from list", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.getByIndex(2)).toBe(30);
    });
    test("should throw when index exceed list length", () => {
      const list: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        list.getByIndex(1000);
      }).toThrowError();
    });
  });

  describe("method shift", () => {
    describe("should delete first element and return its value", () => {
      const list: ILinkedList<number> = createList<number>(listType);
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
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.shift();
      }).toThrowError();
    });
  });

  describe("method pop", () => {
    describe("should delete last element and return its value", () => {
      const list: ILinkedList<number> = createList<number>(listType);
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
      const emptyList: ILinkedList<number> = createList<number>(listType);

      expect(() => {
        emptyList.pop();
      }).toThrowError();
    });
  });

  describe("method reverse", () => {
    test("should correct reverse list", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const reversedArray = [...array].reverse();
      list.pushFromArray(array);
      list.reverse();

      expect(list.getAsArray()).toEqual(reversedArray);
    });
  });

  describe("method clear", () => {
    test("should correct clear list", () => {
      const list: ILinkedList<number> = createList<number>(listType);
      const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      list.pushFromArray(testArray);
      list.clear();

      expect(list.getAsArray()).toHaveLength(0);
    });
  });
});

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
