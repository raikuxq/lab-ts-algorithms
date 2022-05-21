import { EnumBinarySearchTreeType } from "../../../../src/types/EnumBinarySearchTreeType";
import { createBinaryTree } from "../../../../src/helpers/createBinaryTree";
import { EnumTreeTraversalType } from "../../../../src/types/EnumTreeTraversalType";

describe.each([
  EnumBinarySearchTreeType.BST,
  EnumBinarySearchTreeType.RANDOMIZED_BST,
])("%s", (treeType: EnumBinarySearchTreeType) => {
  describe("constructor", () => {
    it("should create an empty instance", () => {
      const tree = createBinaryTree(treeType);

      expect(tree.length()).toBe(0);
    });
  });

  describe("method insert", function () {
    it("should have added elements to be in order", () => {
      const tree = createBinaryTree(treeType);
      tree.insert(5);
      tree.insert(15);
      tree.insert(10);
      tree.insert(0);
      tree.insert(20);

      expect(tree.traverse(EnumTreeTraversalType.InOrder)).toEqual([
        0,
        5,
        10,
        15,
        20,
      ]);
    });
  });

  describe("method length", function () {
    describe("when tree is non empty", () => {
      describe("after adding", () => {
        it("should return updated length value", () => {
          const tree = createBinaryTree(treeType);
          tree.insert(5);
          tree.insert(15);
          tree.insert(10);

          expect(tree.length()).toBe(3);
        });
      });

      describe("after deleting", () => {
        it("should return updated length value", () => {
          const tree = createBinaryTree(treeType);
          tree.insert(5);
          tree.insert(15);
          tree.insert(10);
          tree.delete(5);

          expect(tree.length()).toBe(2);
        });
      });
    });

    describe("when tree is empty", () => {
      it("should return zero value", () => {
        const tree = createBinaryTree(treeType);

        expect(tree.length()).toBe(0);
      });
    });
  });

  describe("method height", function () {
    describe("when tree is non empty", () => {
      describe("after adding", () => {
        const tree = createBinaryTree(treeType);
        const length = 300;
        const arraySrc = Array.from(Array(length).keys());
        const arrayShuffled = arraySrc
          .map((item) => item)
          .sort(() => Math.random() - 0.5);
        arrayShuffled.forEach((num) => {
          tree.insert(num);
        });
        const height = tree.height();

        it("should be equal or greater than log(length)", () => {
          const expected = Math.ceil(Math.log2(length));
          expect(height).toBeGreaterThanOrEqual(expected);
        });
        it("should be equal or smaller than length", () => {
          expect(height).toBeLessThanOrEqual(tree.length());
        });
      });
    });

    describe("when tree is empty", () => {
      const tree = createBinaryTree(treeType);

      it("should return zero value", () => {
        expect(tree.height()).toBe(0);
      });
    });
  });

  describe("method has", function () {
    const tree = createBinaryTree(treeType);
    tree.insert(5);

    it("should return true when value exists", () => {
      expect(tree.has(5)).toBe(true);
    });

    it("should return false when value does not exist", () => {
      expect(tree.has(10)).toBe(false);
    });
  });

  describe("method delete", function () {
    const tree = createBinaryTree(treeType);
    tree.insert(5);
    tree.insert(12);
    tree.insert(7);
    tree.insert(20);

    tree.delete(12);

    it("should delete element from the tree", () => {
      expect(tree.has(12)).toBe(false);
    });

    it("should restructure the tree correctly", () => {
      expect(tree.traverse(EnumTreeTraversalType.InOrder)).toEqual([5, 7, 20]);
    });
  });

  describe("method max", function () {
    const tree = createBinaryTree(treeType);
    tree.insert(5);
    tree.insert(12);
    tree.insert(7);
    tree.insert(20);

    it("should be in order", () => {
      expect(tree.max()).toBe(20);
    });
  });

  describe("method min", function () {
    const tree = createBinaryTree(treeType);
    tree.insert(5);
    tree.insert(12);
    tree.insert(7);
    tree.insert(20);
    tree.insert(2);

    it("should be in order", () => {
      expect(tree.min()).toBe(2);
    });
  });

  if (treeType === EnumBinarySearchTreeType.BST) {
    describe("method subtree", function () {
      const bst = createBinaryTree(treeType);
      bst.insert(22);
      bst.insert(4);
      bst.insert(16);
      bst.insert(19);
      bst.insert(15);
      bst.insert(8);
      bst.insert(23);
      const subtree = bst.subtree(16);

      it("should correctly create subtree", () => {
        expect(subtree.traverse(EnumTreeTraversalType.InOrder)).toEqual([
          8,
          15,
          16,
          19,
        ]);
      });
    });

    describe("method traverse", function () {
      const bst = createBinaryTree(treeType);

      bst.insert(22);
      bst.insert(4);
      bst.insert(16);
      bst.insert(19);
      bst.insert(15);
      bst.insert(8);
      bst.insert(23);

      it("should correctly convert in-order type", () => {
        expect(bst.traverse(EnumTreeTraversalType.InOrder)).toEqual([
          4,
          8,
          15,
          16,
          19,
          22,
          23,
        ]);
      });

      it("should correctly convert pre-order type", () => {
        expect(bst.traverse(EnumTreeTraversalType.PreOrder)).toEqual([
          22,
          4,
          8,
          15,
          16,
          19,
          23,
        ]);
      });

      it("should correctly convert post-order type", () => {
        expect(bst.traverse(EnumTreeTraversalType.PostOrder)).toEqual([
          4,
          8,
          15,
          16,
          19,
          23,
          22,
        ]);
      });
    });
  }
});
