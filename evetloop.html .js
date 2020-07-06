<script>


addEventListener("message", event => { postMessage(event.data * event.data);
});
let squareWorker = new Worker("code/squareworker.js"); 


squareWorker.addEventListener("message", event => { console.log("The worker responded:", event.data);
 });
 squareWorker.postMessage(10);
 squareWorker.postMessage(24);

 </script>
