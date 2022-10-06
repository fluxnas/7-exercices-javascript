const prompt = require("prompt-sync")();

// //In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.
// var age = prompt("quel age as tu ?");
// if (age > 26) 
// {
// 	console.log("tu dois payer 10€");
// }
// else 
// {
// 	console.log("tu dois payer 8€");
// }

// // Write an algorithm which given 3 numbers finds the maximum.
// var chiffre1 = prompt("Choisis 3 chiffres : chiffre 1 : ");
// var chiffre2 = prompt("chiffre 2 : ");
// var chiffre3 = prompt("chiffre 3 : ");
// if (chiffre1 > chiffre2 && chiffre1 > chiffre3)
// {
// 	console.log("le plus grand chiffre est : " + chiffre1);
// }
// else if (chiffre2 > chiffre1 && chiffre2 > chiffre3)
// {
// 	console.log("le plus grand chiffre est : " + chiffre2);
// }
// else
// {
// 	console.log("le plus grand chiffre est : " + chiffre3);
// }

// // Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.
let min = 1;
let max = 6;
var lancer1 = Math.floor(Math.random()* (max - min) + min);
var lancer2 = Math.floor(Math.random()* (max - min) + min);
var lancer3 = Math.floor(Math.random()* (max - min) + min);
// var lancer1 = 1;
// var lancer2 = 1;
// var lancer3 = 3;

console.log(lancer1 + " " + lancer2 + " " + lancer3)

if ( lancer1 == lancer2 && lancer1 == lancer3 )
{
	console.log("il y a 3 valeurs dés identiques avec la valeur " + lancer1);
}
else if ( lancer1 == lancer2 )
{
	console.log("il y a 2 valeurs identiques avec la valeur " + lancer1);
}
else if ( lancer2 == lancer3 )
{
	console.log("il y a 2 valeurs identiques avec la valeur " + lancer2);
}
else if ( lancer3 == lancer1 )
{
	console.log("il y a 2 valeurs identiques avec la valeur " + lancer3);
}
else
{
	console.log("il n'y a pas de valeur identique ! essaye encore !");
}


// // Write an algorithm which given the number of a day returns its name.

// var chiffre = prompt("entre un chiffre entre 1 et 7 :");
// if (chiffre == 1) 
// {
// 	console.log("On est lundi");
// }
// else if (chiffre == 2)
// {
// 	console.log("On est mardi");
// }
// else if (chiffre == 3)
// {
// 	console.log("On est mercredi");
// }
// else if (chiffre == 4)
// {
// 	console.log("On est jeudi");
// }
// else if (chiffre == 5)
// {
// 	console.log("On est vendredi");
// }
// else if (chiffre == 6)
// {
// 	console.log("On est samedi");
// }
// else 
// {
// 	console.log("On est dimanche, enfin !")
// }


// // A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.
// var nbrcopies = prompt("combien de copies as tu à faire ?");
// var prix = 1;

// if ( 0 < nbrcopies < 10 )
// {
// 	prix = 0.12;
// 	var prixapaye = nbrcopies * prix;
// 	console.log("tu dois payer : " + prixapaye + " euros");
// }
// else if ( nbrcopies >= 10 && nbrcopies < 20 )
// {
// 	prix = 0.11;
// 	var prixapaye = nbrcopies * prix;
// 	console.log("tu dois payer : " + prixapaye + " euros");
// }
// else if ( nbrcopies >= 20  )
// {
// 	prix = 0.10;
// 	var prixapaye = nbrcopies * prix;
// 	console.log("tu dois payer : " + prixapaye + " euros");
// }














