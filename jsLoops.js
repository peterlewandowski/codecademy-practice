// WHILE LOOP

/* while (condition) {
    // code block to be executed
} */

let i = 0;

while (i < 5) {
    console.log(i);
    i++
}

// DO...WHILE

x = 0
i = 6

do {
    x = x + i;
    console.log(x)
    i++;
} while (i < 5); // Prints: 0 1 3 6 10



// FOR LOOP
// initialization, stopping condition, iteration statement
// initialize, stopper, iterate
for (let i = 0; i < 4; i++) {
    console.log(i);
};
// Output: 0, 1, 2, 3



// LOOPING THROUGH ARRAYS

/* for (let i = 0; i < Array.length; i++) {
    console.log(array[i]);
} */
// Output: every item in the array



// BREAK KEYWORD
//initialize, stopper, iterate
for (let i = 0; i < 99; i += 1) {
    if (i > 5) {
        break;
    }
    console.log(i)
}
// Output: 0 1 2 3 4 5 


// NESTED FOR LOOP
// init, stopper, iterate
// inits, stopper, iterate

for (let outer = 0; outer < 2; outer += 1) {
    //init, stop, iterate
    for (let inner = 0; inner < 3; inner += 1) {
        console.log(`${outer}-${inner}`);
    }
}
