function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function() {
  console.log('I would like to say:', this.saying);
}

function createNew(constructor) {
  // Step 1) Create a new object
  var obj = {};
  // Step 2) Set the prototype
  Object.setPrototypeOf(obj, constructor.prototype);
  // Step 3) Execute the constructor with 'this' set to the object created in Step 1
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  // Step 4) Return the created object (with some edge case exception)
  return obj;
}

var trump = createNew(Person, 'fakenews is true');
trump.talk();
