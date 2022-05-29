## Problem

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

## Solution

var greet = function(name) {
  let newName = name.toLowerCase()
  let newNameB = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  let result = 'Hello ' + newNameB + '!'
  
  return  result
};

## Notes

I made a variable just for lower casing the name parameter, then I made it so with the second variable (newNameB) to make the first character uppercase and the rest lower case. Afterwards, I made a final variable (result) with the two string including the newNameB variable.
