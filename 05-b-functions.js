// =========== I print an array : Write an algorithm which prints everything in an array.

// const tab = ["salut", "john", "clarisse"]

// function printEverything(array) {
// 	array.forEach(item => {
// 	console.log(item)
// 	})
// }

// printEverything(tab)



// // =========== II - maximum : Write an algorithm which receives an array of integers 
// // and prints its maximum.

// // const tab = [3, 19, 20, 2, 36]
// // // console.log(tab)
// // let max = 0
// // // console.log(max)
// // tab.forEach(item => {
// // 	if (item>max) {
// // 		max=item
// // 	}
// // })
// // console.log(max)

// // function :
// const tab = [3, 19, 20, 2, 36]
// const tab1 = [19, 20, 2, 90]
// function getMax(array) {
// 	return (Math.max(...array))
// }
// console.log(getMax(tab))
// console.log(getMax(tab1))


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

// // function :
// const tab = [3, 19, 20, 2, 36, 40, -3]
// function getMin(array) {
// 	return (Math.min(...array))
// }


// // =========== Write a algorithm which receives an array of integers 
// // and check if its ordered ascendantly. 
// // Print true if the array is ordered, false if it’s not.

// // const tab = [3, 19, 20, 2, 36, 40]
// const tab = [1, 2, 5, 7]
// for (let i = 0; i<tab.length; i++) {
// 	if (tab[i]>tab[i+1]) {
// 		console.log(`le tableau n'est pas ordonné`)
// 	}
// 	else {
// 		console.log(`le tableau est ordonné`)
// 	}
// }

// function :
const tab = [3, 19, 20, 2, 36, 40]
const tabO = [1, 2, 3, 9]
function checkIfOrdered(array) {
	for (i=0; i<array.length; i++) {
		if (array[i]>array[i+1]) {return false}
	}
	return true
} 
console.log(checkIfOrdered(tabO))





