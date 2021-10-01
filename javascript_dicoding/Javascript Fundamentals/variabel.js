
// Let Variabel

let lastName;
lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/

// Atau Langsung

let lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/



let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = “Skywalker”); // (lastName = “Skywalker”) merupakan expression, sehingga kode ini tidak error.
let fullName = “Luke” + “Skywalker”;




// Const Variabel


const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */


const a = 50;
console.log(z);
