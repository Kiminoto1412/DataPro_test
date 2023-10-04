function findRepeatedCharacters(input) {
  const charCount = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  return charCount;
}

// example case
// const input = "programming";
// const repeatedCharacters = findRepeatedCharacters(input);
// console.log(repeatedCharacters);
