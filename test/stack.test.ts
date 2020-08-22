import IStack from "../src/data-structures/IStack";
import Stack from "../src/data-structures/Stack/Stack";

describe('Stack', () => {

  test('simple addition by push method', () => {
    const stack: IStack<number> = new Stack(100);

    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('simple deletion by pop method', () => {
    const stack: IStack<number> = new Stack(100);

    stack.push(10);
    stack.push(20);

    const deleted = stack.pop();

    expect(deleted).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test('when is empty', () => {
    const stack: IStack<number> = new Stack(10);

    expect(() => stack.peek()).toThrow('Stack is empty');
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('when is full', () => {
    const capacity: number = 3;
    const stack: IStack<number> = new Stack(capacity);

    for (let i = 0; i < capacity; i++) {
      stack.push(i + 1);
    }

    expect(() => stack.push(0)).toThrow('Stack is full');
  });

})
