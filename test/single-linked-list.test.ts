import SingleLinkedList from "../src/data-structures/SingleLinkedList/SingleLinkedList";
import ILinkedList from "../src/data-structures/ILinkedList";
import ISingleLinkedList from "../src/data-structures/SingleLinkedList/ISingleLinkedList";


describe('Single linked list: addition', () => {
  const list: ILinkedList<number> = new SingleLinkedList<number>();

  it('should add elements from array', () => {
    const arr = [1, 2];
    list.pushFromArray(arr);
    expect(list.getAsArray()).toEqual(arr);
  });

  it('should push to list end', () => {
    list.push(3);
    expect(list.getAsArray()).toEqual([1, 2, 3]);
  });

  it('should push to list start', () => {
    list.unshift(0);
    expect(list.getAsArray()).toEqual([0, 1, 2, 3]);
  });

});


describe('Single linked list: accession', () => {
  const emptyList: ISingleLinkedList<number> = new SingleLinkedList<number>();
  const list: ILinkedList<number> = new SingleLinkedList<number>();
  list.pushFromArray([10, 20, 30, 40, 50]);

  it('should get first element', () => {
    expect(list.peekTail()).toBe(10);
  });

  it('should get last element', () => {
    expect(list.peekHead()).toBe(50);
  });

  it('should get element by index', () => {
    expect(list.getByIndex(0)).toBe(10);
    expect(list.getByIndex(2)).toBe(30);
    expect(() => {
      list.getByIndex(1000)
    }).toThrow('Index exceed list length');
  });

  it('should get first element (empty)', () => {
    expect(() => {
      emptyList.peekTail();
    }).toThrow('Tail does not exist');
    expect(emptyList.tail).toBe(null);
  });

  it('should get last element (empty)', () => {
    expect(() => {
      emptyList.peekHead();
    }).toThrow('Head does not exist');
    expect(emptyList.head).toBe(null);
  });

  it('should get element by index (empty)', () => {
    expect(() => {
      emptyList.getByIndex(0)
    }).toThrow('List is empty');
  });

});


describe('Single linked list: deletions', () => {
  const list: ILinkedList<number> = new SingleLinkedList<number>();
  list.pushFromArray([10, 40, 20, 30, 40, 50, 20, 30]);

  it('should delete first element', () => {
    const shifted = list.shift();

    expect(shifted).toBe(10);
    expect(list.getAsArray()).toEqual([40, 20, 30, 40, 50, 20, 30]);
  });

  it('should delete last element', () => {
    const popped = list.pop();

    expect(popped).toBe(30);
    expect(list.getAsArray()).toEqual([40, 20, 30, 40, 50, 20]);
  });
});


describe('Single linked list: iterator', () => {
  const list: ISingleLinkedList<number> = new SingleLinkedList<number>();
  const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  list.pushFromArray(testArray);

  const iterator1 = list.iterator(0);
  const iterator2 = list.iterator(5);

  it('should return element data at current position', () => {
    expect(iterator1.current()).toBe(10);
    expect(iterator2.current()).toBe(60);
  });

  it('should iterate to next', () => {
    expect(iterator1.next()).toBe(20);
    expect(iterator2.next()).toBe(70);
  });

});
