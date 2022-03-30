let username1 = '';
let defaultName1;

if (username) {
    defaultName1 = username1;
} else {
    defaultName1 = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

let username2 = '';
let defaultName2 = username2 || 'Stranger';

console.log(defaultName2); // Prints: Stranger



// LOGICAL OPERATORS
if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}



// TRUTHY FALSY STATEMENTS

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

// Use short circuit evaluation to assign  writingUtensil variable below:
let tool = 'marker';

let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);



// TRUTHY FALSY ASSIGNMENT
let username3 = '';
let defaultName3;
 
if (username) {
  defaultName3 = username3;
} else {
  defaultName3 = 'Stranger';
}
 
console.log(defaultName3); // Prints: Stranger



// TERNARY OPERATOR
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

isNightTime
? console.log("Turn on the lights!")
: console.log("Turn off the lights!");



// ELSE IF STATEMENTS

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}



// SWITCH STATEMENTS

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place': console.log('You get the gold medal!');
  break;
  case 'second place': console.log('You get the silver medal!');
  break;
  case 'third place': console.log('You get the bronze medal!');
  break;
  default: console.log('No medal awarded.');
  break;
}