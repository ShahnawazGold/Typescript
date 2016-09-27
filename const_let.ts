

const a =6

const b : string = "sghj";
const c = "sghhh";

//I suggest use let instead of var everywhere, becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope
