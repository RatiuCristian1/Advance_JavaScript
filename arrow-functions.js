/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // Code Block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5)
// console.log(sum)
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code Block
    return a + b;
}

let sum = addTwoNumbers(3, 5)
console.log(sum)

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b
let sum2 = addTwoNumbers(5, 75)
console.log(sum2) 

// Implicit Returns

const saySomething = message => console.log(message)
saySomething('Hello!!')

// Returning Multiple Lines

const sayHello = () => console.log('Hey There')
sayHello()

const returnMultipleLines = () => (
    `<p>
        Multiple Line code
    </p>`
)
console.log(returnMultipleLines())
