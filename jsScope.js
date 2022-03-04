// Scope

function myFunction() {
  
    var pizzaName = "Volvo";
    // Code here can use pizzaName
    
  }s
   
  // Code here can't use pizzaName



// BLOCKED SCOPE VARIABLES

const isLoggedIn = true;
 
if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}
 
console.log(statusMessage);
 
// Uncaught ReferenceError: statusMessage is not defined


// GLOBAL VARIABLES

// Variable declared globally
const color = 'blue';
 
function printColor() {
  console.log(color);
}
 
printColor(); // Prints: blue


// 