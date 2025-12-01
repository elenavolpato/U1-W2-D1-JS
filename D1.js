/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
string: per testo
number: per numeri
boolean: per verificare se in dato é vero o falso.
null: segnala assenza di valore.
undefined: indica che la variabile non é ancora definita

esempi:

let text = "name";
let number = 37;
let isThisTrue = true;
console.log('text: ', text) 
console.log('number : ', number) 
console.log('isThisTrue: ', isThisTrue) */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName = "Elena";
console.log(myName);
 */
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let firstNumber = 12;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log("la somma è: " + sum);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* 
myName = "Volpato";
console.log(myName);

const myName2 = "Elena";
myName2 = "Volpato";

ERROR: Uncaught TypeError: invalid assignment to const 'myName2'
    <anonymous> http://127.0.0.1:5500/D1.js:61

console.log("const: " + myName2); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* console.log("valore di x prima:" + x);
x = x - 4;
console.log("valore di x dopo:" + x); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
if (name1 === name2) {
  console.log("the names match");
} else {
  console.log("the names don't match");
}

/* converts second name to lower case */
let lowerCaseName2 = name2.toLowerCase();
if (name1 === lowerCaseName2) {
  console.log("the names match");
} else {
  console.log("the names don't match");
}
