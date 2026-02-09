import IterableSingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/IterableSingleLinkedList";
import IterableDoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/IterableDoubleLinkedList";
import { EnumLinkedListType } from "src/app/types/EnumLinkedListType";
import { createLinkedList } from "src/app/data-structures/LinkedList/factories/createLinkedList";
import ValueOutOfRangeException from "src/app/exceptions/ValueOutOfRangeException";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";

const createTypedLinkedList = (
  listType: EnumLinkedListType,
  capacity?: number,
) => {
  return createLinkedList<number>(listType, true, capacity) as
    | IterableSingleLinkedList<number>
    | IterableDoubleLinkedList<number>;
};

describe.each([EnumLinkedListType.SINGLE, EnumLinkedListType.DOUBLE])(
  "%s linked list",
  (listType: EnumLinkedListType) => {
    describe("constructor", () => {
      it("should throw when capacity is less than 1", () => {
        expect(() => {
          createTypedLinkedList(listType, -5);
        }).toThrow(ValueOutOfRangeException);
      });
    });

    describe("method iterator", () => {
      describe("constructor", () => {
        it("should throw when list is empty", () => {
          const linkedList = createTypedLinkedList(listType);

          expect(() => {
            linkedList.iterator(0);
          }).toThrow(CollectionIsEmptyException);
        });
      });

      describe("method hasNext", () => {
        it("should return false when there is no next element available", () => {
          const linkedList = createTypedLinkedList(listType);

          linkedList.pushFromArray([10, 20, 30]);
          const iterator = linkedList.iterator(0);
          iterator.next();
          iterator.next();

          expect(iterator.hasNext()).toBe(false);
        });

        it("should return true when next element is available", () => {
          const linkedList = createTypedLinkedList(listType);

          linkedList.pushFromArray([10, 20, 30]);
          const iterator = linkedList.iterator(0);

          expect(iterator.hasNext()).toBe(true);
        });
      });

      describe("method next", () => {
        it("should iterate to next", () => {
          const linkedList = createTypedLinkedList(listType);

          linkedList.pushFromArray([10, 20, 30]);
          const iterator = linkedList.iterator(0);

          expect(iterator.next()).toBe(20);
        });

        it("should throw when next element is not available", () => {
          const linkedList = createTypedLinkedList(listType);

          linkedList.pushFromArray([10, 20, 30]);
          const iterator = linkedList.iterator(0);
          iterator.next();
          iterator.next();

          expect(() => {
            iterator.next();
          }).toThrow(IsNotFoundException);
        });
      });

      describe("method current", () => {
        it("should return current value", () => {
          const linkedList = createTypedLinkedList(listType);

          linkedList.pushFromArray([10, 20, 30]);
          const iterator = linkedList.iterator(0);

          expect(iterator.current()).toBe(10);
        });
      });

      if (listType === EnumLinkedListType.DOUBLE) {
        describe("method hasPrev", () => {
          it("should return false when there is no prev element available", () => {
            const list = new IterableDoubleLinkedList<number>();
            list.pushFromArray([10, 20, 30]);
            const iterator = list.iterator(0);

            expect(iterator.hasPrev()).toBe(false);
          });

          it("should return true when prev element is available", () => {
            const list = new IterableDoubleLinkedList<number>();
            list.pushFromArray([10, 20, 30]);
            const iterator = list.iterator(0);
            iterator.next();
            iterator.next();

            expect(iterator.hasPrev()).toBe(true);
          });
        });

        describe("method prev", () => {
          const list = new IterableDoubleLinkedList<number>();
          list.pushFromArray([10, 20, 30]);
          const iterator = list.iterator(0);
          iterator.next();

          it("should iterate to prev", () => {
            expect(iterator.prev()).toBe(10);
          });

          it("should throw when prev element is not available", () => {
            const list = new IterableDoubleLinkedList<number>();
            list.pushFromArray([10, 20]);
            const iterator = list.iterator(0);
            iterator.next();
            iterator.prev();

            expect(() => {
              iterator.prev();
            }).toThrow(IsNotFoundException);
          });
        });
      }
    });
  },
);
