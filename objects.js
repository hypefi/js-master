// objects.js

function speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}

function eat() {

	console.log(`The ${this.type} rabbit eats ${this.food}`);

}


let whiteRabbit = {type: "white", food: "carrots", speak, eat}; 

let hungryRabbit = {type: "hungry", food: "herb", speak, eat};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now.");  // method v 1 

whiteRabbit.eat();
hungryRabbit.eat();

speak.call(hungryRabbit, "Burp!");  // method v 2
///++============

function normalize() {
   console.log(this.coords.map(n => n / this.length));

   //console.log(map( this.coords , n => n / this.length ));
}

normalize.call({coords: [0, 2, 3], length: 5});

console.log("==============");

let empty = {}; 
console.log(empty.toString);
console.log(empty.toString());

//++=================================


// this is an object with ione method // its variables are not defined but will be adde along the way through methods

let protoRabbit = {
   speak(line) {
   console.log(`The ${this.type} rabbit says '${line}'`); }
};


// let killerRabbit = Object.create(protoRabbit); // here we create killer rabbt that will derive from protorabbit its properties 

//console.log(killerRabbit);
//killerRabbit.type = "killer"; 
//killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// classes ============================================================================================================================== //

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

// constructor s 


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

//killerRabbit.speak("mksqùmqksdmlqskd");



Rabbit.prototype.toString = function() { 
	return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit)); // → a black rabbit










