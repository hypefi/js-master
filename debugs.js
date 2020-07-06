//"use strict";

function Person(name) { this.name = name; } 
let ferdinand = Person("Ferdinand"); // oops console.log(name);
// → Ferdinand 

//console.log(name);




function test(label, body) {
if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => { 
	return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ"; });

/////

function numberToString(n, base = 10) {

	let result = "", sign = "";

			if (n < 0) {
			sign = "-";
			n = -n; }
			   
			do {
			     result = String(n % base) + result;
			     n = Math.floor(n / base);
			     console.log(n)
			} while (n > 0);

			return sign + result;
			}

console.log(numberToString(13, 10));

////

function promptNumber(question) {
   let result = Number(prompt(question));
   if (Number.isNaN(result)) return null;
   else return result;
}
console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
   if (array.length == 0) {
     return {failed: true};
   } else {
     return {element: array[array.length - 1]};
}
}
/*

function promptDirection(question) {
let result = prompt(question);
if (result.toLowerCase() == "left") return "L"; if (result.toLowerCase() == "right") return "R"; throw new Error("Invalid direction: " + result);
}

function look() {
if (promptDirection("Which way?") == "L") {
return "a house"; } else {
return "two angry bears";

} }
try {
console.log("You see", look());
} catch (error) {
console.log("Something went wrong: " + error);
}

*/

const accounts = {
  a: 100,
  b: 0,
  c: 20 };
function getAccount() {
let accountName = prompt("Enter an account name"); if (!accounts.hasOwnProperty(accountName)) {
throw new Error(`No such account: ${accountName}`); }
   return accountName;
 }
 function transfer(from, amount) {
   if (accounts[from] < amount) return;
   accounts[from] -= amount;
   accounts[getAccount()] += amount;
}
/////
const accounts = {
  a: 100,
  b: 0,
  c: 20 };


function getAccount() {
		let accountName = prompt("Enter an account name"); 

		if (!accounts.hasOwnProperty(accountName)) {
		throw new Error(`No such account: ${accountName}`); }
		   return accountName;
}

function transfer(from, amount) {
   if (accounts[from] < amount) return;
   let progress = 0;
   try {
   
         accounts[from] -= 20;  
         progress = 1;
         accounts[getAccount()] += amount;
         progress = 2;

   } finally {
     if (progress == 1) {
       accounts[from] += amount;
     }
} }

console.log(accounts.a)  /// ain't working how to input accounts a into the function ? 
//console.log(accounts.a)
console.log(accounts)

transfer(accounts.a,20)
console.log(accounts)

for (;;) {
   try {
let dir = promtDirection("Where?"); // ← typo! console.log("You chose ", dir);
break;
} catch (e) {
console.log("Not a valid direction. Try again.");
} }














