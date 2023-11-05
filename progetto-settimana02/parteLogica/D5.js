/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'rabbit']

const printArray=function(Trial){

  for(let i=0; i<Trial.length; i++){
  console.log(Trial[i])
 }

}

printArray(pets) 

console.log('******* ES 2 ******')

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()


printArray(pets)

console.log('******* ES 3 ******')

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()

printArray(pets)

console.log('******* ES 4 ******')


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstItem= pets.shift()

pets.push(firstItem)

printArray(pets)

console.log('******* ES 5 ******')


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(let i=0; i<cars.length; i++){
  cars[i].licensPlate='at576io'
  
}
printArray(cars)

console.log('******* ES 6 ******')



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const extraObject= {
    brand: 'Koessingen',
    model: 'Regera',
    color: 'blue',
    trims: ['gt', 'racing', 'royal'],
    licensPlate: 'jr339up'
  }
  cars.push(extraObject)

  printArray(cars)
  console.log('**** array senza ultimo elemento trims****')
  for(let i=0; i<cars.length; i++){
    cars[i].trims.pop()
  }
  printArray(cars)


console.log('******* ES 7 ******')


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i=0; i<cars.length; i++){
  let item =cars[i].trims.shift()
  justTrims.push(item)
}
printArray(justTrims)


console.log('******* ES 8 ******')


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i=0; i<cars.length; i++){
  let colorsLetters=cars[i].color
  let firstLetter =colorsLetters.substring(0,1)
  if(firstLetter=='b'){
    console.log('Fizz')
    
  }
  else{
    console.log('Buzz')
  }
  //console.log(firstLetter) prova di debbugging;
  

}

console.log('******* ES 9 ******')


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index =0

while(index<numericArray.length){
 console.log(numericArray[index])
 if(numericArray[index]===32){
  console.log('ho trovato il n.32')
  break
 }
 index++ 

}

console.log('******* ES 10 ******')


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newArray.push(1);
      break;
    case "b":
      newArray.push(2);
      break;
    case "c":
      newArray.push(3);
      break;
    case "d":
      newArray.push(4);
      break;
    case "e":
      newArray.push(5);
      break;
    case "f":
      newArray.push(6);
      break;
    case "g":
      newArray.push(7);
      break;
    case "h":
      newArray.push(8);
      break;
    case "i":
      newArray.push(9);
      break;
    case "j":
      newArray.push(10);
      break;
    case "k":
      newArray.push(11);
      break;
    case "l":
      newArray.push(12);
      break;
    case "m":
      newArray.push(13);
      break;
    case "n":
      newArray.push(14);
      break;
    case "o":
      newArray.push(15);
      break;
    case "p":
      newArray.push(16);
      break;
    case "q":
      newArray.push(17);
      break;
    case "r":
      newArray.push(18);
      break;
    case "s":
      newArray.push(19);
      break;
    case "t":
      newArray.push(20);
      break;
    case "u":
      newArray.push(21);
      break;
    case "v":
      newArray.push(22);
      break;
    case "w":
      newArray.push(23);
      break;
    case "x":
      newArray.push(24);
      break;
    case "y":
      newArray.push(25);
      break;
    case "z":
      newArray.push(26);
      break;
  }
}
printArray(newArray);
