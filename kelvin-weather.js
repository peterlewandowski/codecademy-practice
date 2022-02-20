// Today's forecast calls for 293 Kelvin
const kelvin = 293;

console.log(kelvin);

// Converting today's forecast temp from Kelvin to Celsius
let celsius = kelvin - 273;

console.log(celsius);

// Converting our celsius temp to Fahrenheit
let fahrenheit = (celsius * (9 / 5)) + 32;
console.log(fahrenheit);

// Round to largest integer LESS THAN or EQUAL to the result above.
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' Fahrenheit');

//Converting from celsius to Newton scale
let newton = celsius * (33 / 100);
console.log(newton);

//Round down the Newton temperature
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
