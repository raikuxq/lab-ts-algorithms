import { EnumBinarySearchTreeType } from "../../../../src/types/EnumBinarySearchTreeType";
import { createBinaryTree } from "../../../../src/helpers/createBinaryTree";
import { EnumTreeTraversalType } from "../../../../src/types/EnumTreeTraversalType";

// describe("Any BST type", () => {});

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
    const tree = createBinaryTree(treeType);

    tree.insert(5);
    tree.insert(15);
    tree.insert(10);
    tree.insert(0);
    tree.insert(20);

    it("should be in order", () => {
      const expectedInorder = tree.traverse(EnumTreeTraversalType.InOrder);
      expect(expectedInorder).toEqual([0, 5, 10, 15, 20]);
    });
  });

  describe("method length", function () {
    describe("when tree is non empty", () => {
      describe("after adding", () => {
        const tree = createBinaryTree(treeType);
        tree.insert(5);
        tree.insert(15);
        tree.insert(10);

        const length = tree.length();

        it("should return updated length value", () => {
          expect(length).toBe(3);
        });
      });

      describe("after deleting", () => {
        const tree = createBinaryTree(treeType);
        tree.insert(5);
        tree.insert(15);
        tree.insert(10);
        tree.delete(5);

        const length = tree.length();

        it("should return updated length value", () => {
          expect(length).toBe(2);
        });
      });
    });

    describe("when tree is empty", () => {
      const tree = createBinaryTree(treeType);

      const length = tree.length();

      it("should return zero value", () => {
        expect(length).toBe(0);
      });
    });
  });

  describe("method height", function () {
    describe("when tree is non empty", () => {
      describe("after adding", () => {
        const tree = createBinaryTree(treeType);
        tree.insert(5);
        tree.insert(15);
        tree.insert(10);

        const height = tree.height();

        it("should be equal or greater than log(length)", () => {
          const expected = Math.ceil(Math.log2(height));
          expect(height).toBeGreaterThanOrEqual(expected);
        });
        it("should be equal or smaller than length", () => {
          expect(height).toBeLessThanOrEqual(tree.length());
        });
      });
    });

    describe("when tree is empty", () => {
      const tree = createBinaryTree(treeType);

      const height = tree.height();

      it("should return zero value", () => {
        expect(height).toBe(0);
      });
    });
  });

  describe("method has", function () {
    it("should return true when value is exists", () => {
      const tree = createBinaryTree(treeType);
      tree.insert(5);

      const has5 = tree.has(5);

      expect(has5).toBe(true);
    });
    it("should return false when value does not exist", () => {
      const tree = createBinaryTree(treeType);
      tree.insert(5);

      const has10 = tree.has(10);

      expect(has10).toBe(false);
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

    const max = tree.max();

    it("should be in order", () => {
      expect(max).toBe(20);
    });
  });

  describe("method min", function () {
    const tree = createBinaryTree(treeType);
    tree.insert(5);
    tree.insert(12);
    tree.insert(7);
    tree.insert(20);
    tree.insert(2);

    const min = tree.min();

    it("should be in order", () => {
      expect(min).toBe(2);
    });
  });
});

describe.each([EnumBinarySearchTreeType.BST])(
  "%s",
  (treeType: EnumBinarySearchTreeType) => {
    describe("method subtree", function () {
      const bst = createBinaryTree(treeType);
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
);
