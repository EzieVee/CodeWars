## Problem

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

## Solution

function reverseWords(str) {
  // Go for it
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
