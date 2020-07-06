

const weekDay = function() {
	const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
	"Thursday", "Friday", "Saturday"];

    return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
}; }();


console.log(weekDay.name(weekDay.number("Sunday"))); // → Sunday

///

const x = 1;
 
function evalAndReturnX(code) {
eval(code);
return x; }

console.log(evalAndReturnX("var x = 2")); // → 2
console.log(x);

/////

const ordinal = require("ordinal");
const {days, months} = require("date-names");



///////

const {formatDate} = require("./format-date.js");

console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
// → Friday the 13th

//import ordinal from "ordinal";
//import {days, months} from "date-names";
 //export function formatDate(date, format) { 


//export default ["Winter", "Spring", "Summer", "Autumn"];

//import {days as dayNames} from "date-names";
 //console.log(dayNames.length);
 // → 7

 

