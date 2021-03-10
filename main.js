// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function ageToAbilities(age) {
  // under 16, 'You can't drive.'
  if (age < 16) {
    return "You can't drive.";
    // 16 to 17, 'You can drive but not vote.'
  } else if (age >= 16 && age <= 17) {
    return "You can drive but not vote.";
    // 18 to 24, 'You can vote but not rent a car.'
  } else if (age >= 18 && age <= 24) {
    return "You can vote but not rent a car.";
    // 25 plus, 'You can do pretty much anything.'
  } else if (age >= 25) {
    return "You can do pretty much anything.";
  }
}

function oddIndices(arrayOfNum) {
  // Write a function, `oddIndices`, that takes in an array of numbers and returns only the ones
  // that are located at odd indices (indices is plural of index). Recall that the index of the
  // first value in an array (or string) is 0.

  // for loop over array of num, i equals 0, i less than OR equal to array length, iterate
  for (let i = 0; i <= arrayOfNum.length; i++) {
    // if empty array or single value array, return empty array
    if (arrayOfNum.length === 1 || arrayOfNum.length === 0) {
      return [];
      // if array length >= 2
    } else if (arrayOfNum.length >= 2) {
      // remove all the alternate indexes indexes starting at 0
      arrayOfNum.splice(i + 0, 1);
      // return array
      return arrayOfNum;
    }
  }
}

function numOddValues(arrayOfNum) {
  // Write a function, `numOddValues`, that takes in an array of numbers and returns the
  // quantity of odd values in that array.

  // edge case if empty array, return 0
  if (arrayOfNum.length === 0) {
    return 0;
  }

  // it('should count odds when only odds are present', () => {
  //     expect(numOddValues([1, 3, 5])).toBe(3);
  //     expect(numOddValues([1])).toBe(1);
  //     expect(numOddValues([9, 9, 9, 11, 13])).toBe(5);
  // });

  // it('should count odds when odds and evens are present', () => {
  //     expect(numOddValues([1, 4, 3])).toBe(2);
  //     expect(numOddValues([0, 1])).toBe(1);
  //     expect(numOddValues([9, 8, 7, 5, 12])).toBe(3);
  // });

  for (let i = 0; i < arrayOfNum.length; i++) {
    // if values at i is odd
    if (arrayOfNum[i] % 2 === 1) {
      return arrayOfNum[i];
      // if values at i is even
    } else if (arrayOfNum[i] % 2 === 0) {
      return 0;
    }
  }
}

function averageStringLength(arrayOfStr) {
  // Write a function, `averageStringLength`, that takes in an array of strings and returns the average
  // length of the strings. An average is calculated by first summing X values, then dividing the sum by X.

  // edge case if empty array, return 0
  if (arrayOfStr.length === 0) {
    return 0;
  }

  // create an average variable that equals to
  // The array of strings concatenated together using .join method
  /// divided by the length of (number of) strings. We get get the average including decimals if needed.
  const average = arrayOfStr.join("").length / arrayOfStr.length;

  // return result
  return average;
}

// Write a function, `firstPunctuationIndex`, that returns the index of the first appearance of a period,
// question mark, or exclamation mark in the given string. If none are found, return `-1`.

function firstPunctuationIndex(str) {
  //  loop over str
  for (let i = 0; i < str.length; i++) {
    // if str char contains punctuations return the index
    if (str[i] === "!" || str[i] === "." || str[i] === "?") return i;
  }
  // else return -1 // Else is giving me errors :(
}

// Write a function, `getPlace`, that takes in two parameters, a **sorted** list of high scores (highest first, lowest last)
// and a new `score`. The function should return a human readable string indicating which
// place the new score fits into the given list of high scores.

// > Note 1: You are not required to insert `score` into the `highScores` array

// > Note 2: We will assume that the new score is not already in the high scores array
// so that we don't have to handle ties

// **Examples**

// getPlace([60, 30, 10], 90)     => '1st place'
// getPlace([60, 30, 10], 50)     => '2nd place'
// getPlace([60, 30, 10], 15)     => '3rd place'
// getPlace([500, 300, 200], 100) => '4th place'

function getPlace(highScores, newScore) {
  // if new score > high scores
  // return "good for first place"
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === "undefined") {
  ageToAbilities = undefined;
}
if (typeof oddIndices === "undefined") {
  oddIndices = undefined;
}
if (typeof numOddValues === "undefined") {
  numOddValues = undefined;
}
if (typeof averageStringLength === "undefined") {
  averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === "undefined") {
  firstPunctuationIndex = undefined;
}
if (typeof getPlace === "undefined") {
  getPlace = undefined;
}

module.exports = {
  ageToAbilities,
  oddIndices,
  numOddValues,
  averageStringLength,
  firstPunctuationIndex,
  getPlace,
};
