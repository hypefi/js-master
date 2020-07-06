setTimeout(() => console.log("Tick"), 500);


///

const {bigOak} = require("./crow-tech.js");

//import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => { let firstCache = caches[0]; bigOak.readStorage(firstCache, info => { console.log(info); });
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

const {defineRequestType} = require("./crow-tech.js");

//import {defineRequestType} from "./crow-tech";
defineRequestType("note", (nest, content, source, done) => { console.log(`${nest.name} received note: ${content}`); done();
});

let fifteen = Promise.resolve(15); fifteen.then(value => console.log(`Got ${value}`)); // → Got 15

/// promises 

function storage(nest, name) {
   return new Promise(resolve => {
     nest.readStorage(name, result => resolve(result));
   });
}
storage(bigOak, "enemies").then(value => console.log("Got", value));

// failure 

new Promise((_, reject) => reject(new Error("Fail"))) .then(value => console.log("Handler 1")) .catch(reason => {

console.log("Caught failure " + reason);

return "nothing"; }).then(value => console.log("Handler 2", value)); 
// → Caught failure Error: Fail
// → Handler 2 nothing
