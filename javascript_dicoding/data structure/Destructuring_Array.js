// Destructuring Array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/



// Destructuring Assignment

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/


// Default Values


const favorites = ["Seafood"];
const [myFood, herFood] = favorites

console.log(myFood);
console.log(herFood);

/* output:
Seafood
undefined
*/


const favorites = ["Seafood"];

const [myFood, herFood = "Salad"] = favorites

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/
