let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN - Not a Number 

// 33 => 33
//33 => NaN (Not a Number)
// true => 1 / false => 0

let isLoggedIn = "ashphak"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true 
// "" => false 
// "ashphak" =>true

let someNumber = 33
let stringNumber = String(someNumber) // is used to convert number to string
console.log(stringNumber);
console.log(typeof stringNumber);