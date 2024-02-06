# Common Caracters Extractor - Coding Interview Solution

- [Common Caracters Extractor - Coding Interview Solution](#common-caracters-extractor---coding-interview-solution)
  - [Overview](#overview)
  - [Problem Statement](#problem-statement)
    - [Find Common Characters Across Strings](#find-common-characters-across-strings)
    - [Example Input and Output](#example-input-and-output)
  - [Solution](#solution)
  - [Key Concepts Demonstrated](#key-concepts-demonstrated)
  - [Running the Tests](#running-the-tests)
  - [Contributing](#contributing)

## Overview

This repository contains a TypeScript solution to a common coding interview question focusing on string manipulation and analysis. The problem and its solution are designed to demonstrate proficiency in algorithms, data structures, and TypeScript.

## Problem Statement

### Find Common Characters Across Strings

Given an array of strings, write a function to find and return an array of characters that appear in the same position across all strings. The function should ignore case and special characters, providing a case-sensitive match for common characters. If a character appears more than once in all strings at the same position, it should be included in the output array multiple times.

### Example Input and Output

- Input: `["abcd", "bcd", "cde", "cdef"]`
- Output: `["c", "d"]`

- Input: `["nillie", "illie", "bllie"]`
- Output: `["i", "l", "l", "e"]`

## Solution

The solution to this problem can be found in the [index.ts](./index.ts) file. The core algorithm iterates over the characters of the first string and checks for their presence in the same position across the other strings, adjusting for characters that have already been matched.

## Key Concepts Demonstrated

- **String Manipulation:** Efficiently handling strings and character comparisons.
- **Algorithm Complexity:** Optimizing for both time and space complexity.
- **TypeScript Features:** Utilizing TypeScript for type safety and clarity.

## Running the Tests

To ensure the correctness of the solution, a comprehensive suite of tests has been provided. These tests cover various scenarios, including edge cases, to validate the functionality of the implemented algorithm.

To run the tests, follow these steps:

```sh
# Install dependencies
bun install

# Run the tests
bun test
```

## Contributing

While this repository is primarily for a coding interview solution, contributions for improvements or alternative solutions are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

---

This coding challenge solution is aimed at developers looking for examples of coding interview questions and solutions, specifically those involving TypeScript and string manipulation algorithms.
