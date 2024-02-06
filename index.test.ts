import { describe, test, expect } from "bun:test";
import { extractCommonLetters } from ".";

describe("extractCommonLetters", () => {
  // Test for basic functionality
  test.each([
    [["abc", "bcd", "cde"], ["c"]],
    [
      ["abcd", "bcd", "cde", "cdef"],
      ["c", "d"],
    ],
    [
      ["nillie", "illie", "bllie"],
      ["i", "l", "l", "e"],
    ],
    [
      [
        "abbcd",
        "bcptbhcodr",
        "yubfgbhjfgjcyuydoio",
        "dfgdbsdhgdghbestrscghjghjdtyjfhgjg",
      ],
      ["b", "b", "c", "d"],
    ],
    [
      ["23", "dfg672df387gh", "dfu2io3g"],
      ["2", "3"],
    ],
  ])(
    "correctly identifies common letters in simple cases, %p => %p",
    (input, expected) => {
      expect(extractCommonLetters(input)).toEqual(expected);
    }
  );

  // Test for empty input
  test("returns an empty array when input is empty", () => {
    expect(extractCommonLetters([])).toEqual([]);
  });

  // Test with input of one word
  test("returns all characters when input contains only one word", () => {
    const singleWord = ["testword"];
    expect(extractCommonLetters(singleWord)).toEqual([
      "t",
      "e",
      "s",
      "t",
      "w",
      "o",
      "r",
      "d",
    ]);
  });

  // Test with input containing an empty string
  test("returns an empty array when any of the input strings is empty", () => {
    expect(extractCommonLetters(["abc", "", "def"])).toEqual([]);
  });

  // Test for case sensitivity
  test.each([
    [["ABC", "abc", "bc"], []], // Case sensitive, no common letters
    [["abc", "Abc", "aBC"], []], // Case sensitive, no common letters
  ])("handles case sensitivity correctly, %p => %p", (input, expected) => {
    expect(extractCommonLetters(input)).toEqual(expected);
  });

  // Test with special characters
  test("works with special characters", () => {
    expect(extractCommonLetters(["123!@#", "!@#", "abc!@#"])).toEqual([
      "!",
      "@",
      "#",
    ]);
  });

  // Test for non-overlapping characters
  test("returns an empty array for non-overlapping characters", () => {
    expect(extractCommonLetters(["abc", "def", "ghi"])).toEqual([]);
  });

  // Test to ensure function does not modify the input array
  test("does not modify the input array", () => {
    const input = ["abcd", "abc", "ab"];
    const copy = [...input];
    extractCommonLetters(input);
    expect(input).toEqual(copy);
  });
});
