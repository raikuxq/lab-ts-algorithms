import { EnumBinarySearchTreeType } from "src/app/types/EnumBinarySearchTreeType";
import { createBinaryTree } from "src/app/data-structures/BinaryTree/factories/createBinaryTree";
import { EnumTreeTraversalType } from "src/app/types/EnumTreeTraversalType";
import IsAlreadyExistsException from "src/app/exceptions/IsAlreadyExistsException";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";

describe.each([
  EnumBinarySearchTreeType.BST,
  EnumBinarySearchTreeType.RANDOMIZED_BST,
])("%s", (treeType: EnumBinarySearchTreeType) => {
  let tree: any;

  beforeEach(() => {
    tree = createBinaryTree(treeType);
  });

  describe("method insert", () => {
    it("should have added elements to be in order", () => {
      [5, 15, 10, 0, 20].forEach((n) => tree.insert(n));
      expect(tree.traverse(EnumTreeTraversalType.IN_ORDER)).toEqual([
        0, 5, 10, 15, 20,
      ]);
    });

    it("should throw when element already exists", () => {
      tree.insert(5);
      expect(() => tree.insert(5)).toThrow(IsAlreadyExistsException);
    });
  });

  describe("method length", () => {
    it("should return updated length after operations", () => {
      expect(tree.length()).toBe(0);
      tree.insert(5);
      tree.insert(15);
      expect(tree.length()).toBe(2);
      tree.delete(5);
      expect(tree.length()).toBe(1);
    });
  });

  describe("method height", () => {
    it("should return zero for empty tree", () => {
      expect(tree.height()).toBe(0);
    });

    it("should be within valid bounds for random insertion", () => {
      const length = 100;
      const shuffled = Array.from({ length }, (_, i) => i).sort(
        () => Math.random() - 0.5,
      );
      shuffled.forEach((num) => tree.insert(num));

      expect(tree.height()).toBeGreaterThanOrEqual(
        Math.ceil(Math.log2(length)),
      );
      expect(tree.height()).toBeLessThanOrEqual(tree.length());
    });
  });

  describe("method has", () => {
    it("should return correct boolean for existence", () => {
      tree.insert(5);
      expect(tree.has(5)).toBe(true);
      expect(tree.has(10)).toBe(false);
    });
  });

  describe("method delete", () => {
    it("should remove element and restructure tree", () => {
      [5, 12, 7, 20].forEach((n) => tree.insert(n));
      tree.delete(12);
      expect(tree.has(12)).toBe(false);
      expect(tree.traverse(EnumTreeTraversalType.IN_ORDER)).toEqual([5, 7, 20]);
    });

    it("should throw when element not found", () => {
      tree.insert(5);
      expect(() => tree.delete(10)).toThrow(IsNotFoundException);
    });
  });

  describe("min/max", () => {
    it("should find min and max values", () => {
      [5, 12, 7, 20, 2].forEach((n) => tree.insert(n));
      expect(tree.min()).toBe(2);
      expect(tree.max()).toBe(20);
    });

    it("should throw if tree is empty", () => {
      expect(() => tree.min()).toThrow(CollectionIsEmptyException);
      expect(() => tree.max()).toThrow(CollectionIsEmptyException);
    });
  });

  if (treeType === EnumBinarySearchTreeType.BST) {
    describe("BST specific methods", () => {
      beforeEach(() => {
        [22, 4, 16, 19, 15, 8, 23].forEach((n) => tree.insert(n));
      });

      it("should correctly create subtree", () => {
        const subtree = tree.subtree(16);
        expect(subtree.traverse(EnumTreeTraversalType.IN_ORDER)).toEqual([
          8, 15, 16, 19,
        ]);
      });

      it("should correctly convert in-order type", () => {
        expect(tree.traverse(EnumTreeTraversalType.IN_ORDER)).toEqual([
          4, 8, 15, 16, 19, 22, 23,
        ]);
      });

      it("should correctly convert pre-order type", () => {
        expect(tree.traverse(EnumTreeTraversalType.PRE_ORDER)).toEqual([
          22, 4, 16, 15, 8, 19, 23,
        ]);
      });

      it("should correctly convert post-order type", () => {
        expect(tree.traverse(EnumTreeTraversalType.POST_ORDER)).toEqual([
          8, 15, 19, 16, 4, 23, 22,
        ]);
      });
    });
  }
});
