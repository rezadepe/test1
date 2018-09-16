//1
// function contoh(){
//     console.log("halo dunia")
// }
// contoh();

//2
// let contoh = function () {
//     console.log("halo dunia");
// }
// contoh();


//3
// let x = 10
// let y = 343

// function contoh() {
//     console.log(x+y);

// }
// contoh()


//4
// function namamu(nama){
//     console.log(nama + " Susilo");
// }

// namamu('adul')
// namamu('komeng')
// namamu('komang')
// namamu('bodat')

//5

// function data(x, y) {
//     console.log(x + " Lahir th " + y)
// }
// data('kuple', '1992')
// data('kuncut', '1991')


// //6

// function total(x, y) {
//     z = x + y;
//     return z;
// }
// console.log(total(4, 5));
// console.log(z);

// //7

// function pangkat(x, y) {
//     if (y == 1) {
//         return x;


//     }
//     else {
//         return x = x * pangkat(x, y - 1);

//     }
// }
// console.log(pangkat(7, 2));


// //8

// function kali(x) {
//     if (x < 2) { return 1; }
//     else { return (x * tiga()); }
// }
// function tiga() {
//     return 3;
// }
// console.log(kali(5))


// //9
// setTimeout(waktu, 3000);
// function waktu() {
//     console.log ("halo");
// }

// console.log ("yuk")

// //10
// setInterval (waktu, 1500);

// function waktu(){
//     console.log("halo");
// }


// let mobil1 = 'Alya';
// let mobil2 = 'Xenia';
// let mobil3 = 'Avanza';

// let mobil = ['Alya','Xenia','Avanza'];
// console.log (mobil),
// console.log (mobil.toString())
// console.log (mobil.join(' * '))


//12

// let buah = ['jeruk', 'nanas', 'nangka'];
// for (let i = 0; i < buah.length; i++) {
//     console.log(buah[i]);
// }

// buah.forEach(function(element){
//     console.log(element);
// })


// //13
// let mobil = ['alya', 'picanto', 'vios', 'kijang'];

// let w = mobil.length;
// let x = mobil.sort();
// let y = mobil.reverse();
// let z = mobil.indexOf('picanto')

// console.log(w)
// console.log(x)
// console.log(y)
// console.log(z)



//14
// let buah = ['jeruk', 'nanas', 'naga', 'dada'];

// buah.pop();
// console.log(buah)
// buah.push('Kiwi');
// console.log(buah)

// buah.shift();
// console.log(buah)
// buah.unshift('lemon');
// console.log(buah)

// buah.splice(2, 0, 'Lemon', 'Kiwi');
// console.log(buah)
// buah.splice(0, 1);
// console.log(buah)

// delete buah[0];
// console.log(buah)


//15
// let buah = ['Banana', 'Orange','Lemon', 'Apple', 'Mango'];
// let buah2 = buah.slice(1);
// console.log(buah2)
// let buah4 = buah.slice(1, 4);
// console.log(buah4)

//16
// let buah = ['Jeruk', 'Nanas', 'Apel'];
// buah.push('Duku');
// console.log(buah)
// buah[buah.length] = 'Pisang';
// console.log(buah)
// buah[6] = 'Mangga';
// console.log(buah)

//17
// let nama1 = ['Andi','Budi'];
// let nama2 = ['Caca','Dede','Euis'];
// let nama3 = nama1.concat(nama2);
// let nama4 = nama2.concat(nama1);
// console.log(nama3)
// console.log(nama4)


//18
// let nama1 = ['Andi', 'Budi'];
// let nama2 = ['Caca', 'Dede', 'Euis'];
// let nama3 = ['Faza', 'Gilang'];
// let x = nama1.concat(nama2, nama3);
// console.log(nama1)
// console.log(nama2)
// console.log(nama3)
// console.log(x)


//19
// let x = [40, 100, 1, 5, 25, 10]
// x.sort(function (a,b){
//     return b - a;
// });

// console.log(x)


//20
// let x = [40, 100, 1, 5, 25, 10];
// x.sort(function (a, b) {
//     return a - b
// });
// console.log(x[0])
// console.log(x[x.length - 1])


//21
// let x = [40, 100, 1, 5, 25, 10];
// function nilaiMin(a) {
//     return Math.min.apply(null, a);
// }
// function nilaiMax(a) {
//     return Math.max.apply(null, a);
// }
// console.log(nilaiMin(x))
// console.log(nilaiMax(x))


//22 nested array
// var arrayKu = [
//     ['Andi', 24, 'PNS'],
//     ['Budi', 28, 'Pengacara'],
//     ['Caca', 21, 'Siswa'],
// ]
// console.log(arrayKu[0])
// console.log(arrayKu[0][0])
// console.log(arrayKu[1][1])
// console.log(arrayKu[2][2])



//23 sorting nested arrat
var arrayKu = [
    ['Andi', 24, 'PNS'],
    ['Budi', 28, 'Pengacara'],
    ['Caca', 21, 'Siswa'],
]
arrayKu[0].sort()
arrayKu[1].reverse()
console.log(arrayKu[0])
console.log(arrayKu[1])