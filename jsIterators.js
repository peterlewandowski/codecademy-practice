// FUNCTIONS ASSIGNED TO VARIABLES

let plusFive = (number) => {
    return number + 5;
};

// f is assigned a value of plusFive
let f = plusFive;

plusFive(3); // 8

//Since f has a function value, it can be invoked

f(9) // 14



// CALLBACK FUNCTION -> a function passed into another function, as an argument

const isEven = (n) => {
    return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4)


// HIGHER ORDER FUNCTIONS -> a function that accepts functions as parameters and/or returns a function


// FIRST CLASS OBJECTS

/**
 * They have built-in properties and methods, such as the name property and the .toString() method.

 * Properties and methods can be added to them.

 * They can be passed as arguments and returned from other functions.
 
 * They can be assigned to variables, array elements, and other objects.

 */

// Assign a function to a variable originalFunc

const originalFunc = (num) => { return num + 2 };

// Re-assign the function to a new variable newFunc

const newFunc = originalFunc

// Access the function's name property

newFunc.name; // 'originalFunc'

// Return the function's body as a string

newFunc.toString(); // '(num) = { return num + 2 }

// Add our own isMathFunction property to the function

newFunc.isMathFunction = true;

// Pass the function as an argument

const functionNameLength = (func) => { return func.name.length };
functionNameLength(originalFunc); // 12

//Return the function
const returnFunc = () => { return newFunc };

returnFunc(); // [Function: originalFunc]



// ARRAY METHOD .reduce()

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // 10

// description


// ARRAY METHOD .forEach()

const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
    console.log(number);
})