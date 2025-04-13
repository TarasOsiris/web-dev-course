import './style.css'

function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

setupCounter(document.querySelector('#counter'))

const button = document.querySelector('#hello')
button.addEventListener('click', () => {
  button.innerHTML = 'Hello World! ' + Math.random()
  button.classList.add('hello')
})

let myVariable = 4;

const x = 2 + 2;

if (x === 2) {
  //some behavior;
}

const weaklyTypedVariable = 42 + "42";
console.log('JavaScript is a weakly typed language,', weaklyTypedVariable);

// Each variable has a type
let myString = "Hello, world!";
let myNumber = 42;
console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof setupCounter) // "function"
console.log(typeof button) // "object"

// strict comparison and weak comparison
console.log('2 == "2"', 2 == "2")
console.log('2 === "2"', 2 === "2")