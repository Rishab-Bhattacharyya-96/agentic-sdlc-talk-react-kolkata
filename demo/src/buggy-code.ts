// This file intentionally has linting issues for the demo

var sum = 10;  // no-unused-vars, no-var
let   name   =   "John"  // inconsistent spacing, missing semicolon
let   age = 25;

function greet() {
  console.log(name)  // missing semicolon
}

function calculateTotal(a, b) {
  return a + b   // missing semicolon
}

export { greet, calculateTotal }  // missing semicolon
