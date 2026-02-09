import { transposeMatrix } from "src/app/algorithms/transpose-matrix";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";

describe("transpose matrix", () => {
  it("should throw when rows have different lengths (not a matrix)", () => {
    const notAMatrix = [[0, 1], [1]];

    expect(() => {
      transposeMatrix(notAMatrix);
    }).toThrow(IllegalArgumentException);
  });

  it("should transpose rectangular matrix correctly (3x2 -> 2x3)", () => {
    const srcMatrix = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    const expected = [
      [1, 3, 5],
      [2, 4, 6],
    ];

    expect(transposeMatrix(srcMatrix)).toEqual(expected);
  });

  it("should transpose square matrix correctly", () => {
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

  it("should return same values for symmetric matrix", () => {
    const symmetric = [
      [1, 0],
      [0, 1],
    ];
    expect(transposeMatrix(symmetric)).toEqual(symmetric);
  });
});
