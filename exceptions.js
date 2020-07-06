for (;;) {


try {
let dir = promtDirection("Where?"); // ← typo! console.log("You chose ", dir);
break;
} catch (e) {
console.log("Not a valid direction. Try again.");
} }

