//Face to take into account
// let face = 3;
//total of dice that matches
let totalOfFace = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let roll1 = getRandomIntInclusive(1, 6);
// let roll2 = getRandomIntInclusive(1, 6);
// let roll3 = getRandomIntInclusive(1, 6);
// console.log(roll1, roll2, roll3)

// //get value for each roll 
// //compare value of each roll with face variable
// //if true, add one to totalOfFace

// if (roll1 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// if (roll2 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// if (roll3 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// console.log(totalOfFace)


// == randomise number of roll ==
let rolls = getRandomIntInclusive(1, 10)
console.log(`number of rolls : ${rolls}`);

for (let roll = 0; roll < rolls; roll++) {
  let specificRoll = getRandomIntInclusive(1, 6)
  console.log(`That's one roll: ${specificRoll}`)
  if (specificRoll === face) {
    totalOfFace = totalOfFace + 1;
  }
}

console.log(`that's the total : ${totalOfFace}`)