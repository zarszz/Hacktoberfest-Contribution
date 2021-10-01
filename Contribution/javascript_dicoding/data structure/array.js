// contoh array

 let myArray = ["Cokelat", 42.5, 22, true, "Programming"];


 console.log(myArray);
 /*Output:
 ['cokelat', 42.5, 22, true, 'Programming']
 */

console.log(myArray[0]);
/*Output:
Cokelat
*/


console.log(myArray[1]);
/*Output:
42.5
*/


console.log(myArray[2]);
/*Output:
22
*/


console.log(myArray[3]);
/*Output:
true
*/


console.log(myArray[4]);
/*Output:
Programming
*/

console.log("Panjang Array Aku Adalah" + myArray.length + ".");
/*Output:
Panjang Array Aku Adalah 5
*/



// menambahkan sesuatu di akhir nilai Array
myArray.push('Javascript');
console.log(myArray);

/*Output:
 ['cokelat', 42.5, 22, true, 'Programming', 'Javascript']
*/


// Menghapus  nilai Array di Akhir

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

/*Output:
 ['cokelat', 42.5, 22, true]
*/


// Manipulasi Nilai array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/*
['Apple', 42.5, 22, true, 'Programming']
*/


// Menghapus Nilai Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray['1'];
console.log(myArray);

/*
['Coklat', <1 Empty item>, 22, true, 'Programming']
*/
