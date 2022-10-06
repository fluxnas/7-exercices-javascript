// Write an algorithm which calculates :
//// - the sum of two chosen number :
const a = 7;
const b = 8;
console.log(a+b);

//// the division of two chosen number :
const a = 10;
const b = 2;
console.log(a/b);

//// the modulo of two inputed numbers :
const a = 36;
const b = 4;
console.log(a%b);

// Write an algorithm which concatenates two phrases together.
const a = "hello";
const b = "worlds";
console.log(a+b);

// Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.
const nombre = prompt("entrez un nombre :");
const nombretva = (nombre+(nombre*21/100));
console.log("le prix sans tva est : " + nombre + "et le prix avec tva est :" + nombretva);

// Write an algorithm which receives the radius of a circle and calculate its surface.
const chiffre = prompt("entrez un chiffre :");
const surface = chiffre*chiffre*π;
console.log("la surface du rayon est " + surface);

// Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight.
const heure = prompt("quelle heure est il?");
const h = prompt("heure : ");
const min = prompt("minutes : ");
const sec = prompt("secondes : ");
const secfinale = (h*3600) + (min*60) + sec;
console.log("il y a " + secfinale + "secondes depuis 00h");
