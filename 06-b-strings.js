// I - concatenation
// Write a function which receives two strings and returns them as one string.

// const addString = (string, string2) => {
//   let result = string + " " + string2;
//   return result;
// };
// console.log(addString("Hello", "World"));

// function concatenation(string, string2) {
// 	let result = `${string} ${string2}`
// 	return result
// }
// console.log(concatenation("salut", "toi"))


// II - lowercase
// Write a function which receives a character in uppercase and prints it in lowercase.

// function lowercaseresult(string) {
// 	let result = string.toLowerCase()
// 	return result
// }
// console.log(lowercaseresult("COUCOU"))

// III - uppercase
// Write a function which receives a string in lowercase and returns an uppercase sentence.

// function uppercaseresult(string) {
// 	let result = string.toUpperCase()
// 	return result
// }
// console.log(uppercaseresult("coucou"))



// IV - convert name
// Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"

// const str = "Doe, John"
// const words = str.split(',')

// function reverse(string) {
// 	let result = words[1] + " " + words[0]
// 	return result
// }

// console.log(reverse(str))




// V - whitespace
// Write a function which receives a sentence full of whitespace and returns it without them.

const str = "Salut je m'appelle Hanna et je galère"
function withoutspace(string) {
	const strwithoutspace = string.split(" ").join("")
	return strwithoutspace
}
console.log(withoutspace(str))











