//
// OOP atau Object Oriented Programing

// Var = {
//     namaDpn : 'Andi',
//     Usia : 50,
//     job : 'tukang kebun'
// };

// orang.negara = 'indonesia';
// delete orang.usia;

// console.log(orang)


//

// var cart = {
//     alamatPengiriman: 'blok m',
//     products: [
//         { namaProduk: 'Iphone X', hargaProduk: "15999000" },
//         { namaProduk: "charger", hargaProduk: "249000" }
//     ]
// };
// console.log(cart.namaProduk);


// var Andi = {
//     nama: 'Andi',
//     usia: 50,
//     job: {
//         nama: 'PNS',
//         tingkat: 'Eselon IIIA',
//         lokasi: 'Bali'
//     }
// };
// console.log(Andi.job.nama)
// console.log(Andi.job.lokasi)

//

// function orang(awal, akhir, usia) {
//     this.nama = { awal, akhir };
//     this.usia = usia;
// }
// var Andi = new orang('Andi', 'Susilo', 20);
// console.log(Andi)
// console.log(Andi.nama.awal) 
// console.log(Andi.nama.akhir)

//

// var orang = {
//     namaDpn: "Andi",
//     namaBlk: "Susilo",
//     usia: 50,
//     namaFull: function () {
//         return this.namaDpn + " " + this.namaBlk;
//     }
// }; 
// console.log(orang.namaFull) // kalau ga pake (), pas di execute cuma keluar deskripsi functionnya aja
// console.log(orang.namaFull()) // memanggil function harus dengan () dibelakang

//

// var manusia = {
//     kepala: 1,
//     mata: 2,
//     telinga: 2,
//     tangan: 2,
//     kaki: 2,
// };
// var namaProp;
// for (namaProp in manusia) {

// console.log(namaProp + ":" + manusia[namaProp]);
// }

//

// function Orang(nama, lahir, job) {
//     this.nama = nama;
//     this.lahir = lahir;
//     this.job = job;
// }
// Orang.prototype.marga = 'Pandjaitan';
// Orang.prototype.usia = function () {
//     return 2018 - this.lahir;
// };
// var budi = new Orang('Budi', 1992, 'PNS');
// console.log(budi);
// console.log(budi.marga);
// console.log(budi.usia());

//

//inheritance atau pewarisan properties ke fungsi selanjutnya

// function orang(nama, usia, job) {
//     this.namaDpn = nama;
//     this.usia = usia;
//     this.pekerjaan = job;
// }
// function atlit(nama, usia, job, cab, pres) {
//     orang.call(this, nama, usia, job)
//     this.cabor = cab;
//     this.prestasi = pres;
// }
// var Andi = new atlit("Andi", 20, 'Pelajar', 'Panahan', '0');
// console.log(Andi)

//

// function pizza() {
//     this.diameter = 30;
// }
// function pizKeju() {
//     pizza.call(this)
//     this.Keju = 'mozarella';
//     this.harga = '50K';
// }
// function pizJamur() {
//     pizza.call(this)
//     this.Jamur = 'Shitake';
//     this.harga = '65K';
// }
// var satu = new pizKeju();
// var dua = new pizJamur();
// console.log(satu)
// console.log(dua)

//
// function persegi(sisi) {
//     this.sisi = sisi;
//     this.luas = function () {
//         return Math.pow(this.sisi, 2);
//     };
//     this.kll = function () {
//         return 4 * this.sisi;
//     };
// };
// var x = new persegi(8);
// console.log('Luas = ' + x.luas());
// console.log('Keliling = ' + x.kll());

//
// function persegiPanjang(panjang, lebar) {
//     this.panjang = panjang;
//     this.lebar = lebar;
//     this.luas = function () {
//         return this.panjang * this.lebar;
//     };
//     this.kll = function () {
//         return (2 * this.panjang)+(2 * this.lebar);
//     };
// };
// var x = new persegiPanjang(32, 14);
// console.log('Luas = ' + x.luas());
// console.log('Keliling = ' + x.kll());

//

// var jomblo = true
// var Andi =
//     { usia: 27, job: 'Polisi' };
// var Budi =
//     Object.assign({}, { usia: 32, job: 'Pilot' });// harus ada objek kosong didepannya {},
// var Caca =
//     Object.assign({}, Budi, { job: 'Akuntan' });
// var Dedi =
//     Object.assign({}, { job: 'Guru' }, { jomblo });
// console.log(Budi);
// console.log(Caca);
// console.log(Dedi);

//

// var arrayku = [
//     { nama: 'andi', usia: 27 },
//     { nama: 'budi', usia: 25 },
//     { nama: 'caca', usia: 23 },
// ];

// //looping menampilkan semuanya
// // for (let i = 0; i< arrayku.length; i++){
// //     for (prop in arrayku[i]){
// //         console.log(arrayku[i][prop]);
// //     }
// // }

// // Number rendah ke tinggi
// // arrayku.sort(function (x, y) {
// //     return x.usia - y.usia
// // })

// // Number tinggi ke rendah
// // arrayku.sort(function (x, y) {
// //     return y.usia - x.usia
// // })

// // // String dari A ke Z (Ascending)
// // arrayku.sort(function (x, y) {
// //     if (x.nama < y.nama) { return -1 }
// //     if (x.nama > y.nama) { return 1 }
// //     return 0
// // })


// // // String dari Z ke A (Descending)
// // arrayku.sort(function (x, y) {
// //     if (x.nama > y.nama) { return -1 }
// //     if (x.nama < y.nama) { return 1 }
// //     return 0
// // })

// console.log(arrayku)

