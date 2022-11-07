// // =========== I print an array : Write an algorithm which prints everything in an array.
// const tab = ["salut", "john", "clarisse"]
// for (let i = 0; i<tab.length; i++) {
// 	console.log(tab[i])
// 	}



// =========== II - maximum : Write an algorithm which receives an array of integers 
// and prints its maximum.

// const tab = [3, 19, 20, 2, 36]
// // console.log(tab)
// let max = 0
// // console.log(max)
// tab.forEach(item => {
// 	if (item>max) {
// 		max=item
// 	}
// })
// console.log(max)



// // =========== II - maximum : Write an algorithm which receives an array of integers 
// // and prints its minimum.
// const tab = [3, 19, 20, 2, 36, 40, -3]
// let min = 100
// tab.forEach(item => {
// 	if (item<min) {
// 		min=item
// 	}
// })
// console.log(min)


// // =========== Write an algorithm which receives an array of integers 
// // and prints the position of its minimum.
// const tab = [3, 19, 20, 2, 36, 40, -3]
// let min = 100
// tab.forEach(item => {
// 	if (item<min) {
// 		min=item
// 	}
// })
// console.log(tab.indexOf(min))


// =========== Write a algorithm which receives an array of integers 
// and check if its ordered ascendantly. 
// Print true if the array is ordered, false if it’s not.

// const tab = [3, 19, 20, 2, 36, 40]
const tab = [1, 2, 5, 7]
for (let i = 0; i<tab.length; i++) {
	if (tab[i]>tab[i+1]) {
		console.log(`le tableau n'est pas ordonné`)
	}
	else {
		console.log(`le tableau est ordonné`)
	}
}











