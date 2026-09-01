// map method

//filter method
// returns an array of the items that matches the condition 

const numbers = [700, 300, 500, 1000, 2000]
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers);

const complexion = ['dark', "fair", "medium", "dark", "fair"]
const darkComplexion = complexion.filter((item) => item === "dark")
console.log(darkComplexion)

// find method 
// find gives back the first item that matches the condition
const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark);

// findIndex gives the index position of the condition
const findIndexOfDark = complexion.findIndex((item) => item === "dark")
console.log(findIndexOfDark) 

//Reduce 
//Reduce performs an operation on each and every element in the array and return a single value

const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce (( acc, cur ) => acc + cur, 0)
console.log(sum); 

const multiply = nums.reduce((acc, cur   ) => acc * cur, 1);
console.log(multiply);