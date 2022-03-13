// FUNCTIONS ASSIGNED TO VARIABLES

let plusFive = (number) => {
  return number + 5;
};

// f is assigned a value of plusFive
let f = plusFive;

plusFive(3); // 8

//Since f has a function value, it can be invoked

f(9); // 14

// CALLBACK FUNCTION -> a function passed into another function, as an argument

const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 4);

// HIGHER ORDER FUNCTIONS -> a function that accepts functions as parameters and/or returns a function

// FIRST CLASS OBJECTS

/**
 * They have built-in properties and methods, such as the name property and the .toString() method.

 * Properties and methods can be added to them.

 * They can be passed as arguments and returned from other functions.
 
 * They can be assigned to variables, array elements, and other objects.

 */

// Assign a function to a variable originalFunc

const originalFunc = (num) => {
  return num + 2;
};

// Re-assign the function to a new variable newFunc

const newFunc = originalFunc;

// Access the function's name property

newFunc.name; // 'originalFunc'

// Return the function's body as a string

newFunc.toString(); // '(num) = { return num + 2 }

// Add our own isMathFunction property to the function

newFunc.isMathFunction = true;

// Pass the function as an argument

const functionNameLength = (func) => {
  return func.name.length;
};
functionNameLength(originalFunc); // 12

//Return the function
const returnFunc = () => {
  return newFunc;
};

returnFunc(); // [Function: originalFunc]

// ARRAY METHOD .reduce()

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  console.log(`Total is ${accumulator}, currentValue is: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(sum); // 10

// we can break it down a bit into parts to better understand

const initialValue = 0;

const numbersArr = [5, 10, 15];

const reducer = (accumulator, item) => {
  console.log(`The accumulator is ${accumulator}, item is ${item}`);
  return accumulator + item;
};

const total = numbersArr.reduce(reducer, initialValue);

console.log(total);

// using .reduce() to flatten an array

function flattenArray(data) {
  // our initial value is a blank array
  const initialValue = [];
  // call reduce on our data
  return data.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);

  // if the value is an array, then recursively call reduce
  // if the value is not an array then just concat our value
}

console.log(flattenArray(numArray));

// using .reduce() to change object structure

const pokemon = [
  {
    name: "charmander",
    type: "fire",
  },
  {
    name: "squirtle",
    type: "water",
  },
  {
    name: "bulbasaur",
    type: "grass",
  },
];

// desired structure
const pokemonModified = {
  charmander: {
    type: "fire",
  },
  squirtle: {
    type: "water",
  },
  bulbasaur: {
    type: "grass",
  },
};

const getMapFromArray = (data) =>
  data.reduce((acc, item) => {
    // add object key t our i.e. charmander: {type: 'water'}
    acc[item.name] = {
      type: item.type,
    };
    return acc;
  }, {});

console.log(getMapFromArray(pokemon));

// ARRAY METHOD .forEach()
/* executes a provided function once for each array element */
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});

// ARRAY METHOD .filter()

const randomNumbers = [4, 11, 42, 14, 39];

/* executes a callback function on each element in an array */
const filteredArray = randomNumbers.filter((n) => {
    return n > 5;
});
/* the callback fn must return either true or false */

/* The returned array is a new array with any elements for which the fn returns true */

// EXERCISES

let cb = (n1, n2) => {return n1 + n2};
 
let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
}
 
hof(cb) // 'this function returned 8'


const sum = (x, y) => x + y;
sum.name = 'summation';

