// var usiaAndi = 40;
// console.log(usiaAndi *= 2);
// console.log(usiaAndi /= 2); 
// console.log(usiaAndi += 2);
// console.log(usiaAndi -= 2);
// console.log(usiaAndi %= 2);


//


// var x = 5;
// var y = '5';

// console.log(x == y); == value sama tapi tipe data berbeda (number dan string)
// console.log(x === y); === value dan tipe data harus sama, jika tidak maka akan false
// console.log(x > y); 
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);

//

// var x = 5;
// var y = '5';
// var z = 6;

// console.log(x===y && y<z);
// console.log(x===y || y<z);
// console.log(!(x===y || y<z));
// console.log(x==y || y<x && z);

//

// let nilai = 38


// if (nilai > 79) {
//     console.log("Anda mendapatkan nilai A");
// } else if (nilai <= 79 && nilai > 59) {
//     console.log('Anda mendapatkan nilai B')
// } else if (nilai <= 59 && nilai > 39) {
//     console.log('Anda mendapatkan nilai C')
// } else if (nilai <= 39) {
//     console.log('Anda mendapatkan nilai D')
// }

//

// let jomblo = false

// if (jomblo) {
//     console.log('masih jomblo')
// }
// else {
//     console.log('sudah teken')
// }

// //

// let pekerjaan = 'nganggur'

// switch (pekerjaan) {
//     case "guru":
//         console.log('pekerjaanya mengajar');
//         break;
//     case 'supir':
//         console.log('pekerjaanya nyetir');
//         break;
//     case 'polisi':
//         console.log('pekerjaannya nilang');
//         break;
//     default:
//         console.log('ada aja kerjaannya')
//         break;
// }

//

// let alaskaki = "sandal"
// let warna = "merah"
// switch (true) {
//     case (alaskaki == 'sepatu' && warna == 'merah'):
//     console.log('Saya suka sepatu merah.');
//     break;
//     case (alaskaki == 'sepatu' && warna == 'biru'):
//     console.log('Saya suka sepatu biru.');
//     break;
//     case (alaskaki == 'sandal' && warna == 'merah'):
//     console.log('Saya suka sandal merah.');
//     break;
//     case (alaskaki == 'sandal' && warna == 'biru'):
//     console.log('Saya suka sandal biru.');
//     break;
//     default:
//     console.log('Tak suka alas kaki merah/biru.');
// }

// Dont repeat yourself (DRY)
// program diatas terlalu banyak dan bisa disederhanakan dengan kondisi if dan else
// contohnya dibawah ini

//

// let alaskaki = "sandal";
// let warna = 'merah';
// let harga = 'mahal';

// let result;
// if (
//     (alaskaki === "sepatu" || alaskaki === "sandal") && 
//     (warna === 'merah' || warna === 'biru') &&
//     (harga === 'mahal' || harga === 'murah')
// ) {
//     result = "Saya suka " + alaskaki + " " + warna + ' yang ' + harga ;
// } else {
//     result = "Tak suka alas kaki merah/biru.";
// }
// console.log(result)

//

let berat = 89;
let tinggi = 1.74;

let imt = berat / tinggi ** 2;
let result;

if (imt < 18.5 ){
    result = 'berat badan anda kurang ideal'
} else if (imt  < 25) {
    result = 'berat badan anda ideal'
} else if (imt  < 30) {
    result = 'berat badan anda berlibih'
} else if (imt < 40) {
    result = "berat badan anda sangat berlebih"
} else if (imt >= 40) {
    result = "anda obesitas"
}
console.log(result);
