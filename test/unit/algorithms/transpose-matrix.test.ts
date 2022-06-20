import { transposeMatrix } from "../../../src/app/algorithms/transpose-matrix";
import IllegalArgumentException from "../../../src/app/exceptions/base/IllegalArgumentException";

describe("transpose matrix", () => {
  it("should throw when array is not a matrix", () => {
    const srcMatrix = [
      [0, 1],
      [1, 0],
      [0, 1],
    ];

    expect(() => {
      transposeMatrix(srcMatrix);
    }).toThrowError(IllegalArgumentException);
  });

  it("should transpose matrix correctly", () => {
    const srcMatrix = [
      [0, 1, 1],
      [0, 0, 1],
      [1, 0, 0],
    ];

    expect(transposeMatrix(srcMatrix)).toEqual([
      [0, 0, 1],
      [1, 0, 0],
      [1, 1, 0],
    ]);
  });

  it("should return same matrix in case of symmetric matrix", () => {
    const srcMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];

    expect(transposeMatrix(srcMatrix)).toEqual(srcMatrix);
  });
});
