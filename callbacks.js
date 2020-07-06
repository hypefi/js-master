//callbacks.js

function higherOrder (data, cb) {
	//check that the callback is a function argument (cb) is a function.”
	if ( !cb || !( typeof cb === 'function' ) ){
		throw new Error('Invalid callback. please provide a function');
		//console.log(' Error callback is not function');
	}


	console.log(data);
    // call the  cb after 10s 
    setTimeout(cb, 10000);
}

try {
             higherOrder(10, () => {return 9;});
}
catch (err) {
console.log(err);
           }

higherOrder(100, () => {console.log("callback called")} )

