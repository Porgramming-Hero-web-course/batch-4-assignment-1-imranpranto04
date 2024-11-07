"use strict";
{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    // removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
    //     // Sample Output:
    //     (1, 2, 3, 4, 5)
    //   ];
    function removeDuplicates(numbers) {
        const uniqueNumbers = [];
        numbers.forEach((num) => {
            if (!uniqueNumbers.includes(num)) {
                uniqueNumbers.push(num);
            }
        });
        return uniqueNumbers;
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
