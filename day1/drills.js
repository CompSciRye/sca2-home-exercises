const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  const rev = str.split("")
  const res = rev.reverse()
  const hello = res.join("")
  return hello
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  let fac = 1
  for (let i = 1; i <= num; i++){
    fac *= i
  }
  return fac
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const arr = str.split("")
  let end = arr.slice(-num)
  end = end.concat(arr.slice(0, -num))
  return end.join("")
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ")
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  let arr = []
  for(let i = 0; i < ary.length; i++){
    if(arr.includes(ary[i]) == false){
      arr.push(ary[i])
    }
  }
  return arr.sort()
  
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length == arr2.length) {  
    let finalArr = [];
    for(let i = 0; i < arr1.length; i++) {
      finalArr.push([arr1[i], arr2[i]])      
    }
    return finalArr
  }
  else {
    return -1
  }
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = []
  let arr2 = []
  for(let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  let final = [arr1, arr2]
  return final
}

// Write tests here:

console.log(factorial(5))
console.log(tokenize("This is now an array!"))
console.log(zip([1, 2, 3], [5, 3, 1]))
console.log(unzip([[1, 5], [2, 3], [3, 1]]))
console.log(reverse("Hello"))
console.log(uniqueOnes([1, 1, 4, 6, 8, 6, 3, 4, 2, 9, 8, 7, 5, 4, 1, 8]))
console.log(shiftRight("Hello", 3))


assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")