import { mergeSort } from "./mergeSort";

describe("Merge Sort tests", () => {
  test("Should return the inputted array", () => {
    // expect(actual).toEqual(expected)
    expect(mergeSort([1])).toEqual([1]);
  });

  test("Should return an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Should handle single numbers", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("Should handle an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Should sort an array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Should sort an array", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("Should handle negative numbers", () => {
    expect(mergeSort([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3]);
  });

  test("Should handle an array where all elements are the same", () => {
    expect(mergeSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });
});
