// var let const
var textoSaludar = "Hola equipo!";
var textoSaludar = "Hola equipo!";

let sinNada; //undefined
sinNada = 15;
// let sinNada = 15
// const nombre = "Pepito";

//ejemplos variables

// - variables de tipo string:
let animal = "caballo";
const dni = "01234567A";
// - variables de tipo number:
let numero = 2;
const id = 5405934;
// - variables de tipo booleano:
// let finished = false; let finished = true;
// // - variables de tipo undefined:
// let noData = undefined; const noData = undefined;
// // - variables de tipo null:
// let data = null; const data = null;
// - variables de tipo object:
let friend = {
  name: "Luis",
  age: 25,
};
console.log(friend.name); //objeto
const friends = ["Luis", "Laura", "Marcos", 10, true];
console.log(friends[2]); //array

//* CONDICIONALES

// let nombre = "Pepito"

// console.log(nombre == "Pedro")
// if(nombre == "Pedro") {
//     console.log("Hola " + nombre)
// } else if(nombre =="Natalia"){
//     console.log("Hola nombre es Natalia")
// }
// else {
//     console.log("Hola, desconocido")
// }

const number = 2;

if (number === 1) {
  console.log(number);
} else {
  console.log("no coincide el número");
}
console.log(number === 1);
switch (true) {
  case number === 1:
    console.log(number);
    break;
  case number > 1:
    console.log("number es mayor que 1");
    break;
  default:
    console.log("no coincide el número");
    break;
}
// let number = 9;
// && // ||
if (number > 20) {
  console.log("Valor mayor que 20");
} else if (number == 20) {
  console.log("El valor es 20");
} else if (number < 20 && number > 10) {
  console.log("El valor es menor 20 y mayor que 10");
} else {
  console.log("El valor es menor que 10");
}

// let personaje = "Pepito";

// switch (personaje) {
//   case "Harry Potter":
//     console.log("Eres el protagonista");
//     break;
//   case "Hermione":
//     console.log("Eres amig@ del protagonista");
//     break;
//   case "Ron":
//     console.log("Eres amig@ del protagonista");
//     break;
//   default:
//     console.log("No eres amigo del protagonista");
//     break;
// }

// player++ == player  + 1
// player = player + 2
// player += 2
for (let player = 1; player <= 10; player++) {
  console.log("Jugador " + player);
}

let i = 0;
console.log(i);
while (i <= 10) {
  console.log("El valor es:", i);
  i++;
}

//for of

const numbers = [4, 5, 6, 3, 9];

for (let number of numbers) {
  console.log(number);
}

let num = 2;

if( num != 1){
    console.log("no es un 1")
}else{
    console.log("es un 1")
}
// num = num + 2
num += 2
console.log(num)

// const person = {
//     name:"Yolanda",
//     tel:666999777
// }
// person.tel = 777888999
// person = "hola"
// console.log(person)