/////classes.js

let object = new class { 
	getWord() { 
		return "hello";
		 }
	 }; 

console.log(object.getWord());
// → hello

function makeRabbit(type) {
   let rabbit = Object.create(protoRabbit); //create an object rabbit from prototype rabbit 
   rabbit.type = type;
   return rabbit;
}

/*function Rabbit(type) {    /// is also a constructor function 
   this.type = type;
 }

Rabbit.prototype.speak = function(line) {
console.log(`The ${this.type} rabbit says '${line}'`); 
};*/ 

//let weirdRabbit = new Rabbit("weird");  // a new instance of rabbit is created we use  'new'

// constructors

class Rabbit {
   constructor(type) { // constructor 
     this.type = type;
   }
   speak(line) {  //methods of the class 
	console.log(`The ${this.type} rabbit says '${line}'`);
   }
}


let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

 Rabbit.prototype.teeth = "small";
 console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody"; 
console.log(killerRabbit.teeth);
// → long, sharp, and bloody console.log(blackRabbit.teeth);
// → small console.log(Rabbit.prototype.teeth); // → small


//killerRabbit.speak("mmh");




