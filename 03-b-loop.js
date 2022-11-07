// // =========== the numbers from 1 to n ===========
// const n = prompt(`entre un chiffre :`)
// for (let number = 0; number <= n; number++) {
// 	console.log(number)
// }


// // =========== the numbers from 1 to n in descending order ===========
// const n = prompt(`entre un chiffre : `)
// for (let number = n; number >= 0; number --) {
// 	console.log(number)
// }


// // =========== the numbers from -n to n ===========
// const n = prompt(`entre un chiffre : `)
// for (let number = -n; number <= n; number ++) {
// 	console.log(number)
// }


// // =========== the odd numbers from 1 to n ===========
// const n = prompt(`entre un chiffre : `)
// for (let number = 0; number <= n; number++) {
// 	if (number % 2 !== 0) {
// 	console.log(number)
// 	}
// }


// // =========== Write an algorithm which receives an random integer and prints from 0 to it. ===========
// const n = Math.floor(Math.random() * 100)
// for (let number = 0; number<n; number++) {
// 	console.log(number)
// }


// =========== Écrivez un algorithme qui lance un dé un nombre donné ===========
// =========== de fois et compte le nombre de fois qu'un certain nombre est reçu. ===========

// nbr lancé
// let face = 3  

// // face aléatoire du dés
// // pour chaque lancés enregistrer la face du dés
// const min = 0
// const max = 6
// const lance1 = Math.floor(Math.random() * (max - min) + min)
// const lance2 = Math.floor(Math.random() * (max - min) + min)
// const lance3 = Math.floor(Math.random() * (max - min) + min)

// console.log(lance1, lance2, lance3)

// afficher combien de fois chaque face a été lancé
// let faceident = 1

// if (lance1 == lance2 || lance1 == lance3) {
// 	faceident = faceident +1
// 	console.log(`il y a ${faceident} faces identiques avec la valeur ${lance1}`)
// }
// else if (lance2 == lance3) {
// 	faceident = faceident +1
// 	console.log(`il y a ${faceident} faces identiques avec la valeur ${lance2}`)
// }
// else if (lance1 == lance2 && lance2 == lance3) {
// 	faceident = faceident +2
// 	console.log(`il y a ${faceident} faces identiques avec la valeur ${lance1}`)
// }
// else {
// 	console.log(`il n'y a aucune valeurs identiques`)
// }

// test avec le nbr aleatoire de lancé PAS REUSSIE
// const min = 0
// const max = 6
// const lance = Math.floor(Math.random() * (max - min) + min)

// for (let lancees = 0; lancees<lance.lenght; lancees++) {
// 	console.log(lancees)
// }



// // =========== Write an algorithm which prints all the even numbers from 0 to a given number. ===========
// const randomNumber = Math.floor(Math.random() * 100)
// console.log(randomNumber)

// for (let n = 0; n <= randomNumber; n++) {
// 	if (n % 2 == 0) {
// 	console.log(n)
// 	}
// }


// =========== Write an algorithm which verify if a given positive integer is a perfect number, ===========
// =========== meaning equal to the sum of his divisors (except himself). ===========

























