import { fibs } from "./fibonacci";
import { fibsRec } from "./fibonacci";

describe("Fibonacci iterative tests", () => {
  test("Should return the first number of the fib sequence", () => {
    // expect(actual).toEqual(expected)
    expect(fibs(1)).toEqual([0]);
  });

  test("Should return the first 2 numbers of the fib sequence", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("Should return an empty array", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("Should return the first 6 numbers of the fib sequence", () => {
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test("Should return the first 10 numbers", () => {
    const result = fibs(10);
    expect(result[9]).toEqual(34);
    expect(result.length).toBe(10);
  });

  test("Should return an empty array for negative input", () => {
    expect(fibs(-5)).toEqual([]);
  });

  test("Should handle decimals", () => {
    expect(fibs(1.5)).toEqual([]);
  });
});


describe("Fibonacci Recursive Tests", () => {
  test("Should return the first number of the fib sequence", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("Should return the first 2 numbers of the fib sequence", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("Should return an empty array for 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("Should return the first 6 numbers of the fib sequence", () => {
    expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test("Should return the first 10 numbers", () => {
    const result = fibsRec(10);
    expect(result[9]).toEqual(34);
    expect(result.length).toBe(10);
  });

  test("Should return an empty array for negative input", () => {
    expect(fibsRec(-5)).toEqual([]);
  });

  test("Should handle decimals", () => {
    expect(fibsRec(1.5)).toEqual([]);
  });
});
