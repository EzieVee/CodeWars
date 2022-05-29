## Problem

Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

## Solution

var circleArea = function(radius) {
  
let answer = (radius*radius*Math.PI).toFixed(2)
  
  return radius > 0 ? +answer : false;
};
