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



// Dom manipulation
const demoSection1 = document.querySelector('#demo-section-1')
console.log(demoSection1)

const demoSection1Button = demoSection1.querySelector('button')
demoSection1Button.addEventListener('click', () => {
  demoSection1.classList.toggle('bright-red')
  demoSection1Button.innerHTML = demoSection1.classList.contains('bright-red') ? 'Red' : 'Not Red'
})