// komentar 1 baris
alert('Welcome To JSdasar Page'); console.log('satetment baris ke 2');

/*
komentar multi
baris */
console.log('satetment 1 baris');


var fullnames = "ricko firmansyah"
fullnames = "wildan"
fullnames = "yoga"

document.write(fullnames);

let fullname = "jiki"
fullname = "joko"
document.write(fullname);

// const fullname1 = "lionel mesii"
// fullname1 = "jokowi"
// document.write(fullname1)

// menggunakan var
var x = 10;
if (true) {
    var x = 20;
    console.log("nilai x dalam blok:", x);
}
console.log("nilai x luar blok:", x);

// menggunakan let
let y = 10;
if (true) {
    let y = 20;
    console.log("nilai x dalam blok:", y);
}
console.log("nilai x luar blok:", y);


// TIPE DATA
// tipe data number
let bulat = 25
let desimal = 25.2

document.writeln('<br>')
document.writeln(bulat)
document.writeln('<br>')
document.writeln(desimal)
document.writeln('<br>')
document.writeln("hasil penjumlahan = ")
document.writeln(bulat + desimal)

let angka = 12341234123412342n
document.writeln('<br>')
document.writeln(angka)

// tipe data string
let text = "arkatama"
document.writeln('<br>')
document.writeln(text)

// tipe data boolean
let admin = true
let perbandingan = 15 > 0
document.writeln('<br>')
document.writeln(perbandingan)

// tipe data undefined
let admins
document.writeln('<br>')
document.writeln(admins)

// tipe data null
let admin1 = null
document.writeln('<br>')
document.writeln(admin1)

// tipe data symbol
let employee = Symbol('joko')
console.log(employee)
console.log(employee.description)

// tipe data object 
let employe = {
    name : "john",
    age : 30,
    job : "web dev",
    ismarried : false,
}
document.writeln('<br>')
document.write(`My name is ${employe.name} and he is ${employe.age} years old`)

// TYPE CONVERSION
// string
let value = false
let string = String(value)
alert(typeof value)

// numeric
let str = "123"
let nbr = Number("123")
alert(typeof nbr)

// boolean
alert(Boolean(0))
alert(Boolean(1))

// JS OPERATOR
//aritmatika
let a = 3
let b = 5
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);

// perbandingan
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a != b);

//logika 
console.log(a && b);
console.log(a || b);
console.log(!a);

// bitwise
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);

// ternary
console.log(a == b ? 'sama' : 'tidak sama');

//POPUP
//prompt
let stringg = prompt("apakah kamu mau makan malam denganku?")
alert('jawaban anda' + stringg)

//confirm
string ? alert('jawaban anda mau') : alert ('jawaban anda tidak mau')

//PERCABANGAN
//if
let strings = confirm("apakah kamu mau makan malam denganku?")
if (strings)
    alert('jawaban anda mau')

//if else
if (strings) {
    alert('jawaban anda mau')
}else {
    alert ('jawaban anda tidak mau')
}

//else if
let string1 = prompt("1 + 1 ?")
if (string1 = 2) {
    alert('jawaban anda betul')
}else if (string1 > 2) {
    alert('jawaban anda kelebihan')
}else if (string1 < 2) {
    alert('jawaban anda kurang')
}else{
    alert('jawaban anda salah')
}

// switch
let sw = "blue"
switch (sw) {
    case "red":
        alert('i love red')
        break;

    case "blue":
        alert('i love blue')
        break;

    default:
        alert('i dont know what color is')
        break;
}

//PERULANGAN
//for
for (let i = 1; i <5 ; i ++) {
    document.writeln(i)
    document.writeln("<br>")
}

//while
let c = 1
while (c<5) {
    document.writeln(c)
    document.writeln("<br>")
    c++
}

// do while
let e = 1;
document.writeln('perulangan do while')
document.writeln("<br>")
do {
    document.writeln(e)
    document.writeln("<br>")
    e++
}while (e<5);

//break
document.writeln('perulangan for')
document.writeln("<br>")
for (let g = 1 ; g<5 ;g++) {
    if (g == 3){
        break
    }
    document.writeln(g)
    document.writeln("<br>")
}

    