

for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}



for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/


for(arrayItem of myArray) {
    // do something
}



let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/




let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}


let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);
