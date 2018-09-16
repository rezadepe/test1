// let angka = 1;

// while (angka <= 10){    //siapkan kondisi dimana loop itu berhenti
//     console.log(angka);
//     angka++;
// }

// let angka = 1;
// do{
//     console.log(angka);
//     angka++;
//     } while (angka <=10)

//     //pada dasarnya while dan do while rawan error karena kalo lupa increment 
//     // atau decrement bisa berabe

// var x;
// for (x=1; x<=10; x++){ // for (initial iterator; kondisi; incerement/decrement)
//     console.log(x);
// }


// var str = "Nomor Urut ";
// for (x=1; x<=10; x++){
//     console.log(str + x)
// }

// let z= '';
// for (i=0 ; i<5; i++){
//     z += " * "
// }
// console.log(z)

// let z = "";
// for (i=0; i<5; i++){
//     z += "* \n"
// }
// console.log(z)


//             // nested loop
// let z = "";
// for (i=0; i<5; i++){
//     for (j= 0; j<5; j++){
//         z+= ' * '
//     }
//     z += "\n"
// }
// console.log(z)



// let z = "";
// for (let i=0 ; i<5; i++){       //<---print vertikal
//     for (let j=0; j<=i; j++){   //<---print horizontal
//         z += " * "
//     }
//     z += "\n"
// }
// console.log (z)



// let z = "";
// for (let i=0; i<5; i++){
//     for (let j=5; j>i; j--){
//         z+= " * "
//     }
//     z += " \n"
// }
// console.log (z)

// let z = "";
// for (i = 0; i < 9; i++) {
//     if (i < 5) {
//         for (j = 5; j > i; j--) {
//             z += " * ";
//         }
//     } else if (i >= 5) {
//         for (j = 0; j <= i - 4; j++) {
//             z += " * ";
//         }
//     }
//     z += "\n";
// }
// console.log(z);


// let z = "";
// for (i = 0; i < 9; i++) {
//     if (i < 5) {
//         for (j = 5; j > i; j--); {
//             z += " * ";
//         }
//     } else if (i >= 5); {
//         for (j = 0; j <= i - 4; j++); {
//             z += " * "
//         }
//     }
//     z += "\n";
// }
// console.log(z);



// let k = '';
// for (i = 0; i < 9; i++) {
//     for (j = 0; j < 18; j++) {
//         if (i + j < 8) {
//             k += "   ";
//         } else if (j < 9 && j + i >= 8) {
//             k += " * ";
//         } else if (j >= 9 && j - i < 9) {
//             k += " * "
//         }
//     }
//     k += "\n"
// }
// console.log(k)



// let z = '';
// for (i = 0; i < 9; i++) {
//     for (j = 0; j < 18; j++) {
//         if (j - i < 0) {
//             z += "   ";
//         } else if (j < 9 && j - i >= 0) {
//             z += " * ";
//         } else if (j >= 9 && j - i > 9) {
//             z += " * "
//         }
//     }
//     z += "\n"
// }
// console.log(z)


