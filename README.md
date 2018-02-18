# javascript-challenges
My own personal homework assignments for solidifying my understanding in JavaScript.

## Table of Contents
(1) Recursion


## (1) Recursion - recrusion.html

Recursion is a concept that is used often in programming. What it's basically doing is *calling a function on itself*.

The typical example of recursion in action is a simple factorial function. For example, the factorial of 4 = 24 (1 * 2 * 3 * 4).
With this factorial program we want to be able to input any number into a form and spit out the correct factorial in the browser. Since factorials are made of integers we want to do validation and round any decimal number to the nearest integer.  

New stuff I learned:
* Math.round()
* "+=" operator
* factorial formula: n * factorial(n - 1)

Status: complete


## (2) Prototype - prototype.js

JavaScript doesn't use classical inheritance like most other languages do. Instead it passes things down through prototypal inheritance.
What's that? Well, with a prototype language like JavaScript classes are not available. Instead we can do some magic with modifying prototypes and passing down properties, etc through prototypal inheritance.

"..the prototype is just a way of saying that 'for this object use this other object as a backup - as a delegate, as a protytpe.''
If someone calls my object with a property that does not exist on my object, go look in this other object. That is what the prototype is."
-MPJ

Status: complete

New stuff I learned:
* Object.setPrototypeOf() [not really used in real world cases though..]
* console.log from the command line: node (filename).js
