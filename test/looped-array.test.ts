import LoopedArray from "../src/data-structures/LoopedArray/LoopedArray";

describe("Looped Array", () => {
  describe("method push", () => {
    const loopedArray = new LoopedArray(5);

    loopedArray.push("q");
    loopedArray.push("w");
    loopedArray.push("e");
    loopedArray.push("r");
    loopedArray.push("t");

    test("should collect correct elements before overwriting", () => {
      expect(loopedArray.getArray()).toEqual(["q", "w", "e", "r", "t"]);
    });

    test("should correctly overwrite ", () => {
      loopedArray.push("y");
      loopedArray.push("u");
      loopedArray.push("i");

      expect(loopedArray.getArray()).toEqual(["y", "u", "i", "r", "t"]);
    });
  });

  describe("method unshift", () => {
    const loopedArray = new LoopedArray(5);

    loopedArray.unshift("q");
    loopedArray.unshift("w");
    loopedArray.unshift("e");
    loopedArray.unshift("r");
    loopedArray.unshift("t");

    test("should collect correct elements before overwriting", () => {
      expect(loopedArray.getArray()).toEqual(["t", "r", "e", "w", "q"]);
    });

    test("should correctly overwrite ", () => {
      loopedArray.unshift("y");
      loopedArray.unshift("u");
      loopedArray.unshift("i");

      expect(loopedArray.getArray()).toEqual(["i", "u", "y", "t", "r"]);
    });
  });

  describe("method peekHead", () => {
    test("should return last element of array", () => {
      const loopedArray = new LoopedArray(5);

      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peekHead()).toEqual("e");
    });
    test("should return undefined when array is empty", () => {
      const loopedArray = new LoopedArray(5);

      expect(loopedArray.peekHead()).toEqual(undefined);
    });
  });

  describe("method peekTail", () => {
    test("should return first element of array", () => {
      const loopedArray = new LoopedArray(5);

      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peekTail()).toEqual("q");
    });
    test("should return undefined when array is empty", () => {
      const loopedArray = new LoopedArray(5);

      expect(loopedArray.peekTail()).toEqual(undefined);
    });
  });
});
