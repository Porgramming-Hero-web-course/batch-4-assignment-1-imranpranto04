// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
// // Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
// // Sample Output:
// 2;

function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence: string = sentence.toLowerCase();
  const lowerCaseWord: string = word.toLowerCase();
  const wordsArray: string[] = lowerCaseSentence.split(" ");
  return wordsArray.filter((w) => w === lowerCaseWord).length;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
