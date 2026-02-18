export function fibs(n) {
  if (!Number.isInteger(n) || n <= 0) return [];
  if (n <= 0) return [];
  if (n === 1) return [0];

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    let sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  return arr;
}

export function fibsRec(n) {
  if (!Number.isInteger(n) || n <= 0) return [];
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
