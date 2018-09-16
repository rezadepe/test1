// BEBERAPA GAYA BARUNYA JAVASCRIPT ES6 (ECMAScript 6)
// mengenal beberapa fungsi baru di ES6

// const pi = 3.14;
// function luasLingkaran(r) {
//     const pi = 10;
//     console.log('Luas=' + pi * r * r);
// }
// console.log(pi); 
// luasLingkaran(78);



// TEMPLATE STRING

// //backtick atau string literal ``, 
// //dimana dengan menggunakan ini semua yang ada didalam backtick akan
// //dianggap sebagai string, tidak seperti petik biasa, kalau di enter banyak nanti ilang    
// let halo = `Halo


// Dunia!`
// console.log(halo);

// function halo(nama) {
//     console.log('Halo, aku ' + nama);
// }
// function hai(nama) {
//     console.log(`Hai, aku ${nama}`);
//     console.log(`Usiaku ${7 * 3}`);
// }
// halo('Andi');
// hai('Arif');


//

// let x = 'halo';
// console.log(x.repeat(5)); //repeat 

// console.log(x.includes('lo')); // include, ngecek valuenya cocok ga 

// console.log(x.startsWith('ha'));
// console.log(x.startsWith('lo')); // startwith, ngecek true/false  
// console.log(x.startsWith('lo',2));

// console.log(x.endsWith('lo'));
// console.log(x.endsWith('ha')); // endwith, ngecek true/false juga
// console.log(x.endsWith('ha',x.length-2));

//

// SPREAD OPERATOR (...), mengambil semua operator dan 
// dia bakal passing ke dalam suatu fungsi dan menjadi elemen atau parameter

// let buah = ['apel', 'duku', 'pir'];
// console.log(buah); // kalo gapake spread dia bakal nampilin arraynya

// console.log(...buah); // kalo pake spread (...) dia bakal beda hasilnya

// let no1 = [1, 2, 3];
// let no2 = [no1, 4, 5, 6];
// let no3 = [...no1, 7, 8, 9];
// console.log(no2); // keluarnya bakal 1 variabel array
// // [[1, 2, 3], 4, 5, 6]
// console.log(no3); // operator dalam array bakal disebar dan menjadi parameter lagi
// // [1, 2, 3, 7, 8, 9]

// // bisa dilihat juga dibawah ini, tentang spread
// let angka = [1, 2, 3]; function jumlah(x, y, z) {
//     console.log(x + y + z);
// }
// jumlah(angka);

// jumlah(angka[0], angka[1], angka[2]);

// jumlah(...angka);

//DEFAULT PARAMETER

// function kuadrat(x = 5) {
//     console.log(x * x);
// }
// kuadrat(); // kalo ga diisi sama orang dan udah dikasi default hasilnya 25
// kuadrat(10); // tapi kalo diisi sama orang, fungsi tsb mengikuti isian 


// // ARROW FUNCTION
// // ( => ) arrow funcition bisa mempersingkat penulisan function seperti contoh dibawah
// let halo = function () {
//     console.log('Halo Dunia!')
// }
// let hai = () => {
//     console.log('Hai Hacker!')
// }
// let alo = () => console.log('Aloha!')
// halo(); hai(); alo();


// Arrow function dengan 1 parameter
// let halo = (nama) => {
//     console.log(`Halo ${nama}`)
// }
// halo('Andi');

// let hai = nama => console.log(`Hai ${nama}`)

// hai('Budi');


// // Arrow function dengan lebih dari 2 param
// let halo = (x,y) => {
//     console.log(`hoy ${x} ${y}`)
// }
// halo('Andi', 21);



//CALL BACK FUNCTION = ini buat manggil fungsi yang udah kita deklarasikan

// let x = function () {
//     console.log('Hai ini X!');
// };

// let y = function (callback) {
//     console.log('Halo ini Y!');
//     callback();
// };

// y(x);


// CALL BACK FUNCTION DENGAN ARROW (dipersingkat)

// let x = () => {
//     console.log('Hai ini X!');
// };
// let y = (callback) => {
//     console.log('Halo ini Y!');
//     callback();
// };
// y(x);


// Aplikasi callback function yang dipersingkat dengan arrow

//sebelum menggunakan arrow:
//
// let kali = (x, y) => {
// return x * y;
// }
// let bagi = (x, y) => {
//     return x / y;
// }
// let hitung = (no1, no2, op) => {
//     return op(no1, no2);
// };
// console.log(hitung(2, 3, kali));

// // setelah menggunakan arrow jadi lebih singkat :
// let kali = (x, y) => x * y;
// let bagi = (x, y) => x / y;
// let rataRata = (x,y) => (x+y)/2;

// let hitung = (no1, no2, op) => op(no1, no2); // "OP" INI ADALAH OPERASI yang telah di deklarasikan sebelumnya
// console.log(hitung(2, 3, rataRata)); // jadinye gini, op = kali atau op = bagi atau lainnya, tergantung fungsi apa yang udah dinyatakan


//

// //ARRAY FILTER
// var w = [1,2,3,4,5,6,7,8];

// //filter angka yang habis dibagi 2
// var x = w.filter(val => val !== 2);

// //filter nilai genap
// var y = w.filter(val => val % 2 == 0);
// //filter nilai ganjil
// var z = w.filter((val) => val % 2 !== 0);
// console.log(x);
// console.log(y);
// console.log(z);


// // ARRAY MAPPING, semua elemen bakal di map dan di proses dengan fungsi

// var w = [1, 4, 9, 16, 25]
// var x = w.map(Math.sqrt);
// var y = w.map((val) => val * 2);
// var z = w.map((val) => val !== 9);
// var z1 = w.map( val => 'wow '.repeat(val));
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(z1);

// // ARRAY MAPPING string
// var orang = [
//     { nama: "Andi", marga: "Hasibuan" },
//     { nama: "Budi", marga: "Sinaga" },
//     { nama: "Caca", marga: "Pasaribu" }
// ];
// function namaLengkap(item) {
//     var fullname = [item.nama, item.marga].join(" ");
//     return fullname;
// }
// function tesMap() {
//     console.log(orang.map(namaLengkap));
//     console.log(orang.map(namaLengkap)[0]);
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
// }
// tesMap()


// //PROMISES = membuat prekondisi 

// let janji = new Promise(function (tepati, ingkari) {
//     let dipenuhi = true; // disini nilainya ada true atau false baru di buat prekondisinya dibawah
//     if (dipenuhi) {
//         tepati('Janji Kutepati.');
//     } else {
//         ingkari('Janji Kuingkari.');
//     }
// });
// janji.then(function (janjiDitepati) {
//     console.log(janjiDitepati);
// }).catch(function (janjiDiingkari) {
//     console.log(janjiDiingkari);
// })


// // Object literal Properties, memasukan variabel kedalam objek

// let merk = 'Yamaha';
// let tahun = 2015;
// let mio = {
//     merk: merk,
//     prod: tahun
// }
// let vixion = {
//     merk, tahun
// }
// console.log(mio);
// console.log(vixion);


//OBJECT LITERAL METHOD

// let mio = {
//     kualitas: x => `Mutu ${x}` //SUDAH DISEDERHANAKAN DENGAN ARROW
// }
// let vixion = {
//     kualitas(x) {
//         return `Performa ${x}`; // TIDAK DISEDERHANAKAN DENGAN ARROW TAPI BEDA BENTUK
//     }
// }
// console.log(mio.kualitas('Oke banget!'));
// console.log(vixion.kualitas('Juara!'));


// //SET = membuat data yang tidak terduplikasi

// let nama = new Set();
// nama.add('Adi').add('Budi').add('Adi');
// console.log(nama);
// console.log(nama.size);

// nama.delete('Adi');
// console.log(nama);
// console.log(nama.size);

// nama.clear();
// console.log(nama);
// console.log(nama.size);

//

// let angka = [1, 2, 3, 4, 1, 2, 5, 6];
// console.log(angka);
// let nomor = new Set(angka); 
// console.log(nomor);
// let arrayAngka = [...nomor]
// console.log(arrayAngka);

//Destructuring Array
//dari array ingin mengambil variabel" tertentu untuk menjadi variabel biasa

// let buah = ['Apel','Duku','Leci']
// var [x, y, z] = buah;
// console.log(x);
// console.log(y);
// console.log(z);

// let andi = {
//     nama: 'Andi',
//     usia: 24,
//     job: 'PNS'
// }
// var { nama, usia, job } = andi;
// console.log(nama);
// console.log(usia);
// console.log(job);

