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
// init, stop, iterate
for (let i = 0; i < 4; i++) {
    console.log(i);
};
// Output: 0, 1, 2, 3



// LOOPING THROUGH ARRAYS

for (let i = 0; i < Array.length; i++) {
    console.log(array[i]);
}
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

/* Complete the code block so that the loop exits on its fourth iteration. */

for (let counter = 0; counter < 12; counter++) {
    if (counter > 3) {
        break;
    }
    console.log(counter)
}

/* Print the number and title for each value in titles. Make sure that the first in the list is 1, not 0.

1. The Philosopher's Stone
2. The Chamber of Secrets
3. The Prisoner of Azkaban
// and so on... */

titles = ['The Philosopher\'s Stone', 'The Chamber of Secrets', 'The Prisoner of Azkaban', 'The Goblet of Fire', 'The Order of the Phoenix', 'The Half-Blood Prince', 'The Deathly Hallows'];

// init, stop, iterate
for (let i = 0; i < titles.length; i++) {
  console.log(`${i+1}. ${titles[i]}`)
}



const phrase = 'proof of lag';
 
result = '';

//init, stop, iterate
for (let i = phrase.length - 3; i >= 0; i = i - 3) {
  result += phrase[i];
}
console.log(result);


// CHRISTIAN'S CHALLENGE

// Given a target, and an array of objects where each object contains an ***info*** property such as { info: 5 }. Modify the array so that the value of ***info*** is replaced with "-" when info is lesser than the target, "+" when info is greater, and "=" otherwise.
const arr = [
    { info: 5 },
    { info: 10 },
    { info: 15 },
    { info: 20 },
    { info: 25 },
    { info: 30 },
    { info: 35 },
    { info: 40 },
    { info: 45 },
    { info: 50 },
  ];
  target = 10;
  
  for (val of arr) {
    if (val.info < target) {
      val.info = '-';
    } else if (val.info > target) {
      val.info = '+';
    } else {
      val.info = '=';
    }
  }
  
  console.log(array);
  
  for (let i = 0; i < arr.length; i++) {
    arr[i].info < target
      ? (arr[i].info = '-')
      : arr[i].info > target
      ? (arr[i].info = '+')
      : (arr[i].info = '=');
  }
  
  console.log(arr);