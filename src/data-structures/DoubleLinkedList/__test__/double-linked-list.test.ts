import DoubleLinkedList from "../DoubleLinkedList";
import ILinkedList from "../../ILinkedList";
import IDoubleLinkedList from "../interface/IDoubleLinkedList";

describe("double linked list", () => {
  const emptyList: IDoubleLinkedList<number> = new DoubleLinkedList();

  describe("getter head", () => {
    test("should be null when list is empty", () => {
      expect(emptyList.head).toBeNull();
    });
  });

  describe("getter tail", () => {
    test("should be null when list is empty", () => {
      expect(emptyList.tail).toBeNull();
    });
  });

  describe("method peekTail", () => {
    test("should throw when list is empty", () => {
      expect(() => {
        emptyList.peekTail();
      }).toThrowError();
    });
  });

  describe("method peekHead", () => {
    test("should throw when list is empty", () => {
      expect(() => {
        emptyList.peekHead();
      }).toThrowError();
    });
  });

  describe("method getByIndex", () => {
    test("should throw when list is empty", () => {
      expect(() => {
        emptyList.getByIndex(0);
      }).toThrowError();
    });
  });

  describe("method push", () => {
    test("should add elements to list's end", () => {
      const list: ILinkedList<number> = new DoubleLinkedList<number>();
      list.push(1);
      expect(list.peekHead()).toBe(1);
    });
  });

  describe("method unshift", () => {
    test("should add elements to list's start", () => {
      const list: ILinkedList<number> = new DoubleLinkedList<number>();
      list.unshift(1);
      list.unshift(0);
      expect(list.peekTail()).toBe(0);
    });
  });

  describe("method pushFromArray", () => {
    test("should add elements to list's end", () => {
      const list: ILinkedList<number> = new DoubleLinkedList<number>();
      const arr = [1, 2, 3, 4, 5];
      list.pushFromArray(arr);
      expect(list.getAsArray()).toEqual(arr);
    });
  });

  describe("method peekTail", () => {
    test("should return first element from list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.peekTail()).toBe(10);
    });
  });

  describe("method peekHead", () => {
    test("should return first element from list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.peekHead()).toBe(50);
    });
  });

  describe("method getByIndex", () => {
    test("should return element by its index from list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      list.pushFromArray([10, 20, 30, 40, 50]);

      expect(list.getByIndex(2)).toBe(30);
    });
    test("should throw when index exceed list length", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();

      expect(() => {
        list.getByIndex(1000);
      }).toThrowError();
    });
  });

  describe("method shift", () => {
    describe("should delete first element and return its value", () => {
      const list: ILinkedList<number> = new DoubleLinkedList<number>();
      list.pushFromArray([10, 40, 20, 30, 40, 50, 20, 30]);
      const shifted = list.shift();

      test("should delete correct", () => {
        expect(list.getAsArray()).toEqual([40, 20, 30, 40, 50, 20, 30]);
      });
      test("should return correct value", () => {
        expect(shifted).toBe(10);
      });
    });

    test("should throw when list is empty", () => {
      expect(() => {
        emptyList.shift();
      }).toThrowError();
    });
  });

  describe("method pop", () => {
    describe("should delete last element and return its value", () => {
      const list: ILinkedList<number> = new DoubleLinkedList<number>();
      list.pushFromArray([10, 40, 20, 30, 40, 50, 20, 30]);
      const shifted = list.pop();

      test("should delete correct", () => {
        expect(list.getAsArray()).toEqual([10, 40, 20, 30, 40, 50, 20]);
      });
      test("should return correct value", () => {
        expect(shifted).toBe(30);
      });
    });

    test("should throw when list is empty", () => {
      expect(() => {
        emptyList.shift();
      }).toThrowError();
    });
  });

  describe("method reverse", () => {
    test("should correct reverse list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const reversedArray = [...array].reverse();
      list.pushFromArray(array);
      list.reverse();

      expect(list.getAsArray()).toEqual(reversedArray);
    });
  });

  describe("method clear", () => {
    test("should correct clear list", () => {
      const list: ILinkedList<number> = new DoubleLinkedList();
      const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      list.pushFromArray(testArray);
      list.clear();

      expect(list.getAsArray()).toHaveLength(0);
    });
  });

  describe("method iterator", () => {
    test("should throw when try to create iterator for empty list", () => {
      const list: IDoubleLinkedList<number> = new DoubleLinkedList<number>();

      expect(() => {
        list.iterator(0);
      }).toThrowError();
    });

    describe("when list is not empty", () => {
      const list: IDoubleLinkedList<number> = new DoubleLinkedList<number>();
      const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      list.pushFromArray(testArray);
      const iterator = list.iterator(0);

      test("should return element data at current position", () => {
        expect(iterator.current()).toBe(10);
      });

      test("should iterate to next", () => {
        expect(iterator.next()).toBe(20);
      });

      test("should iterate to prev", () => {
        expect(iterator.prev()).toBe(10);
      });
    });
  });
});
