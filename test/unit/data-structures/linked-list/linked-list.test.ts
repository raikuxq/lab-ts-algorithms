import DoubleLinkedList from "../../../../src/app/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import { EnumLinkedListType } from "../../../../src/app/types/EnumLinkedListType";
import { createLinkedList } from "../../../../src/app/data-structures/LinkedList/_helpers/createLinkedList";
import ILinearStorage from "../../../../src/app/types/ILinearStorage";
import ValueOutOfRangeException from "../../../../src/app/exceptions/ValueOutOfRangeException";
import CollectionIsFullException from "../../../../src/app/exceptions/CollectionIsFullException";
import IndexOutOfBoundsException from "../../../../src/app/exceptions/IndexOutOfBoundsException";
import CollectionIsEmptyException from "../../../../src/app/exceptions/CollectionIsEmptyException";

describe.each([EnumLinkedListType.SINGLE, EnumLinkedListType.DOUBLE])(
  "%s linked list",
  (listType: EnumLinkedListType) => {
    describe("constructor", () => {
      it("should throw when capacity is less than 1", () => {
        expect(() => {
          createLinkedList<number>(listType, false, -5);
        }).toThrowError(ValueOutOfRangeException);
      });
    });

    describe("method push", () => {
      it("should add elements to list's end", () => {
        const list = createLinkedList<number>(listType);
        list.push(1);

        expect(list.peek()).toBe(1);
      });
      it("should throw when list is full", () => {
        const list = createLinkedList<number>(listType, false, 2);
        list.push(1);
        list.push(2);

        expect(() => {
          list.push(3);
        }).toThrowError(CollectionIsFullException);
      });
    });

    describe("method pushFromIndex", () => {
      it("should add elements to list from index", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 30, 40, 50]);
        list.pushFromIndex(20, 1);

        expect(list.getAsArray()).toEqual([10, 20, 30, 40, 50]);
      });

      it("should add elements to list from start", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0]);
        list.pushFromIndex(10, 1);

        expect(list.getAsArray()).toEqual([0, 10]);
      });

      it("should add elements to empty list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromIndex(10, 0);

        expect(list.getAsArray()).toEqual([10]);
      });

      it("should add elements to list from end", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0, 10, 30]);
        list.pushFromIndex(20, 2);

        expect(list.getAsArray()).toEqual([0, 10, 20, 30]);
      });

      it("should throw when index exceeds list length ", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0, 10, 30]);

        expect(() => {
          list.pushFromIndex(10, 1000);
        }).toThrowError(IndexOutOfBoundsException);
      });

      it("should throw when index less than 0 ", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([0, 10, 30]);

        expect(() => {
          list.pushFromIndex(10, -20);
        }).toThrowError(IndexOutOfBoundsException);
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
        const list = createLinkedList<number>(listType, false, 2);
        list.unshift(1);
        list.unshift(2);

        expect(() => {
          list.unshift(3);
        }).toThrowError(CollectionIsFullException);
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
        const list = createLinkedList<number>(listType, false, 2);
        list.pushFromArray([1]);

        expect(() => {
          list.pushFromArray([2, 3]);
        }).toThrowError(CollectionIsFullException);
      });
    });

    describe("method peekFromStart", () => {
      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.peekFromStart();
        }).toThrowError(CollectionIsEmptyException);
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
        }).toThrowError(CollectionIsEmptyException);
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
        }).toThrowError(CollectionIsEmptyException);
      });

      it("should return element by its index from list", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30, 40, 50]);

        expect(list.peekByIndex(2)).toBe(30);
      });

      it("should throw when index exceed list length", () => {
        const list = createLinkedList<number>(listType, false, 5);
        list.push(1);

        expect(() => {
          list.peekByIndex(1000);
        }).toThrowError(IndexOutOfBoundsException);
      });
    });

    describe("method shift", () => {
      describe("should delete first element and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20]);
        const shifted = list.shift();

        it("should delete correctly", () => {
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
        }).toThrowError(CollectionIsEmptyException);
      });
    });

    describe("method pop", () => {
      describe("should delete last element and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 40, 50]);
        const shifted = list.pop();

        it("should delete correctly", () => {
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
        }).toThrowError(CollectionIsEmptyException);
      });
    });

    describe("method deleteFromIndex", () => {
      describe("should delete element by index and return its value", () => {
        const list = createLinkedList<number>(listType);
        list.pushFromArray([10, 20, 30]);
        const shifted = list.deleteFromIndex(1);

        it("should delete correctly", () => {
          expect(list.getAsArray()).toEqual([10, 30]);
        });

        it("should return correct value", () => {
          expect(shifted).toBe(20);
        });
      });

      it("should throw when list is empty", () => {
        const emptyList = createLinkedList<number>(listType);

        expect(() => {
          emptyList.deleteFromIndex(0);
        }).toThrowError(CollectionIsEmptyException);
      });
    });

    describe("method reverse", () => {
      it("should correctly reverse list", () => {
        const list = createLinkedList<number>(listType);
        const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
        const reversedArray = [...array].reverse();
        list.pushFromArray(array);
        list.reverse();

        expect(list.getAsArray()).toEqual(reversedArray);
      });
    });

    describe("method clear", () => {
      it("should correctly clear list", () => {
        const list = createLinkedList<number>(listType);
        const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        list.pushFromArray(testArray);
        list.clear();

        expect(list.isEmpty()).toBe(true);
      });
    });

    describe("method has", function () {
      const list = createLinkedList<number>(listType);
      list.push(5);

      it("should return true when value exists", () => {
        expect(list.has(5)).toBe(true);
      });

      it("should return false when value does not exist", () => {
        expect(list.has(10)).toBe(false);
      });
    });

    describe("method length", function () {
      describe("when list is non empty", () => {
        describe("after adding", () => {
          it("should return updated length value", () => {
            const list = createLinkedList<number>(listType);
            list.push(5);
            list.push(15);
            list.push(10);

            expect(list.length()).toBe(3);
          });
        });

        describe("after deleting", () => {
          it("should return updated length value", () => {
            const list = createLinkedList<number>(listType);
            list.push(5);
            list.push(15);
            list.push(10);
            list.pop();

            expect(list.length()).toBe(2);
          });
        });
      });

      describe("when list is empty", () => {
        it("should return zero value", () => {
          const list = createLinkedList<number>(listType);

          expect(list.length()).toBe(0);
        });
      });
    });

    describe("method isEmpty", () => {
      it("should return true when list is empty", () => {
        const list: ILinearStorage<number> = createLinkedList<number>(listType);
        expect(list.isEmpty()).toBe(true);
      });
    });

    describe("method isFull", () => {
      it("should return false when list elements length lower than its capacity", () => {
        const list: ILinearStorage<number> = createLinkedList<number>(
          listType,
          false,
          100
        );
        list.push(10);

        expect(list.isFull()).toBe(false);
      });
      it("should return true when list elements length same as its capacity", () => {
        const list: ILinearStorage<number> = createLinkedList<number>(
          listType,
          false,
          1
        );
        list.push(10);

        expect(list.isFull()).toBe(true);
      });
    });
  }
);
