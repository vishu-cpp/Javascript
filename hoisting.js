// This will cover all the code for hoisting in javascript

console.log(a);     //output ==> undefined
var a;  //var is automatically undefined during hoisting
console.log(a);     //output ==> undefined

// var is not a blocked scopred variable and is hoisted 

// {
//     var blockVar = "I am accessible outside";
//     let blockLet = "I am blocked";
//     const blockConst = "I am also blocked";
// }
// console.log(blockVar); // output ==> "I am accessible outside"
// console.log(blockLet); // ReferenceError: blockLet is not defined
// console.log(blockConst); // ReferenceError: blockConst is not defined

// Temporal Dead Zone (TDZ):
// - var: Hoisted and initialized as 'undefined'. It has no TDZ.
// - let & const: Hoisted but remain uninitialized. They enter the TDZ 
//   from the start of their enclosing block until the execution reaches their declaration.



console.log(b);     //output ==> ReferenceError: Cannot access 'b' before initialization
let b;  //let is automatically undefined during hoisting
console.log(b);     //output ==> undefined

// let variable is also hoisted but it is not initialized and is temporal dead zone

console.log(c);     //output ==> ReferenceError: Cannot access 'c' before initialization
const c = 10;   //const is also hoisted but it is not initialized
console.log(c);     //output ==> 10

// const variable is also hoisted but it is not initialized and is temporal dead zone


helloname();

function helloname()
{
    let name = "Bimla"; // replaced `prompt` since it is not available in Node.js
    console.log("hello " + name);
}

//function are also hoisted

