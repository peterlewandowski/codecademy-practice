// Create a variable myAge, set equal to your age as a number
const myAge = 8

// Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2

// earlyYears = earlyYears * 10.5
earlyYears *= 10.5

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears = laterYears * 4

// Check your work
console.log(earlyYears)
console.log(laterYears)

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

let myAgeInDogYears = earlyYears + laterYears

// Write your name a sa string, call its built-in method .toLowerCase(), and store the result in a variable callse myName.

let myName = 'Piotr'
console.log(myName)

myName = myName.toLowerCase(myName)
console.log(myName)

// Print a statement that displays your name and age in dog years.

console.log('My name is ' + myName + '. ' + 'I am ' + myAge + ' ' + 'years old in human years which is ' + myAgeInDogYears + ' ' + 'years old in dog years.')
