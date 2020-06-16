// js mastery

require('/Users/admin/desktop/JS_learning/scripts.js')

function map(array, transform) {
	let mapped = [];
	for (let element of array){
		mapped.push(transform(element));
	}
return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

console.log(map(rtlScripts, s => s.name));



