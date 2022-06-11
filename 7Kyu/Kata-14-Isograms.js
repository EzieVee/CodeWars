## Problem

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

## Solution

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


## Notes

function isIsogram(str){
  console.log(new Set(str)) // makes a new array out of the str. For example, word becomes [w], [o], [r], [d]
  // console.log(new Set(str).toUpperCase())
  console.log(new Set(str).size) // gives the value of how many entries in array
  console.log(new Set(str).size == str.length); // compares if the new array is equal to the string length
  return new Set(str.toUpperCase()).size == str.length;
}
