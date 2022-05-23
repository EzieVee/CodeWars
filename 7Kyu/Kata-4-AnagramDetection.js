var isAnagram = function(test, og) {
2
 let sortA = test.toLowerCase()
3
  console.log(sortA) 
4
  let sortB = test.toLowerCase().split('')
5
  console.log(sortB)
6
  let sortC = test.toLowerCase().split('').sort()
7
  console.log(sortC)
8
  let sortD = test.toLowerCase().split('').sort().join('')
9
  console.log(sortD)
10
  
11
// 
12
​
13
let ogSortA = og.toLowerCase()
14
console.log(ogSortA)
15
let ogSortB = og.toLowerCase().split('')
16
console.log(ogSortB)
17
let ogSortC = og.toLowerCase().split('').sort()
18
console.log(ogSortC)
19
let ogSortD = og.toLowerCase().split('').sort().join('')
20
console.log(ogSortD)
21
​
22
//
23
​
24
return (sortD === ogSortD) ? true : false;
25
};
 Correctamundo! You may take your time to refactor/com
