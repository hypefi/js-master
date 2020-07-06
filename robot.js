////virtual mail delivery small village - robot.js

const roads = [
"Alice's House-Bob's House",
 "Alice's House-Post Office", 
 "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall",
 "Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm", "Marketplace-Farm", "Marketplace-Shop", "Shop-Town Hall"

];


function buildGraph(edges) {
   let graph = Object.create(null);   /// create graph 
   function addEdge(from, to) {
     if (graph[from] == null) {
       graph[from] = [to];
     } else {
       graph[from].push(to);
	} }


	for (let [from, to] of edges.map(r => r.split("-"))) { 
	addEdge(from, to);
	addEdge(to, from);
	}
	   return graph;
}


const roadGraph = buildGraph(roads);

//// The task 

class VillageState {
			  constructor(place, parcels) {
			  this.place = place;
			  this.parcels = parcels;
			  }

			move(destination) {  // method move update state of village, if destination has parcel to deliver, update with new village with destination with no more parcels to deliver 
		     if (!roadGraph[this.place].includes(destination)) {
		       return this;
		     } else {
		       let parcels = this.parcels.map(p => {
		         if (p.place != this.place) return p;
		         return {place: destination, address: p.address};
		       }).filter(p => p.place != p.address);
		       return new VillageState(destination, parcels);
		     }
} }

////

let first = new VillageState(
"Post Office",
[{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place); 
// → Alice's House console.log(next.parcels); // → [] console.log(first.place); // → Post Office

//// Simulation 

function runRobot(state, robot, memory) {
   for (let turn = 0;; turn++) {
	if (state.parcels.length == 0) { console.log(`Done in ${turn} turns`); break;
	}
	let action = robot(state, memory);
	state = state.move(action.direction);
	memory = action.memory;
	console.log(`Moved to ${action.direction}`);
} }

//// Random picking 

 function randomPick(array) {
   let choice = Math.floor(Math.random() * array.length);
   return array[choice];
}
 function randomRobot(state) {
   return {direction: randomPick(roadGraph[state.place])};
}

//// create random village state of parcels 

VillageState.random = function(parcelCount = 5) {
   let parcels = [];
   for (let i = 0; i < parcelCount; i++) {
     let address = randomPick(Object.keys(roadGraph));
     let place;
     do {
       place = randomPick(Object.keys(roadGraph));
     } while (place == address);
     parcels.push({place, address});
}
return new VillageState("Post Office", parcels); 
};


///////
//runRobot(VillageState.random(), randomRobot);
///////

//// mails truck route

const mailRoute = [
"Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House",
"Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
]; 


function routeRobot(state, memory) {
   if (memory.length == 0) {
     memory = mailRoute;
   }
   return {direction: memory[0], memory: memory.slice(1)};
 }

//console.log( routeRobot(0,mailRoute) );
stateofvillage = VillageState.random()

//runRobot(state, robot, memory)
	//runRobot(stateofvillage, routeRobot, mailRoute);      // run simulation on a random village state, 
														// apply the function finding of the robot 



function findRoute(graph, from, to) {
   let work = [{at: from, route: []}];
   for (let i = 0; i < work.length; i++) {
     let {at, route} = work[i];
     for (let place of graph[at]) {
       if (place == to) 
       	return route.concat(place);
       if (!work.some(w => w.at == place)) {
         work.push({at: place, route: route.concat(place)});
       }
	   } }
}


 function goalOrientedRobot({place, parcels}, route) {
   if (route.length == 0) {
     let parcel = parcels[0];
     if (parcel.place != place) {
       route = findRoute(roadGraph, place, parcel.place);
     } else {
       route = findRoute(roadGraph, place, parcel.address);
     }
}
   return {direction: route[0], memory: route.slice(1)};
 }

 ///++++++++++++++++++++++++++++++++++////++++++++++++++++++++++++++++++++++////

//console.log(roadGraph);

///findedroute = findRoute(roadGraph)

///console.log(findedroute);

runRobot(stateofvillage, goalOrientedRobot, mailRoute);

///// djikstra find route 

const {find_path} = require("dijkstrajs");
 let graph = {};
 for (let node of Object.keys(roadGraph)) {
   let edges = graph[node] = {};
   for (let dest of roadGraph[node]) {
     edges[dest] = 1;
   }
}
console.log(find_path(graph, "Post Office", "Cabin")); // → ["Post Office", "Alice's House", "Cabin"]







