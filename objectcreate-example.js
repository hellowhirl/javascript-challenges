const cat = {
  init: function(call) {
    this.call = call;
    return this;
  },
  makeSound: function() {
    console.log(this.call);
  }
};

// uses init
const casper = Object.create(cat).init('Misses kitty! Ar arrr');
casper.makeSound();

// separated without using init
const kelly = Object.create(cat);
kelly.call = 'Kelly. Baby. Come here baby, come here';
kelly.makeSound();

console.log('is Casper a cat?', cat.isPrototypeOf(casper));
