{
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
  // Sample Input:
  //   sumArray([1, 2, 3, 4, 5]);
  //   // Sample Output:
  //   15;
  function sumArray(numbers: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  }
  const result1 = sumArray([1, 2, 3, 4, 5]);
  console.log(result1);
}
