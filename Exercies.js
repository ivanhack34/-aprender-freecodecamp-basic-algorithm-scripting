//TODO: Exercise of day 21 part 2: 2/2/2023

//?1-Convert Celsius to Fahrenheit

/*
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit = (celsius * 9/5) + 32;
  //This will make using the formula from Celsius to Fahrenheit I can see the result of how much it gives me in Fahrenheit
}

convertCtoF(30);

console.log(convertCtoF(30));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
*/

//?2-Reverse a String

/*
function reverseString(str) {
  return str.split('').reverse().join('');
   //This will make the split() method devide each position of each character
   //With the reverse() method, I will invert the characters of the array
   //Finally, with the join() method, it will unite all the elements in a text string
}

console.log(reverseString("hello"));
*/

//?3-Factorialize a Number

/*
function factorialize(num) {
    let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
  //First we create a variable that is equal to 1. Then we create a for loop. 
  //Where each value that starts at 1 and is less than or equal to the number and is iterable. 
  //It will give the multiplication of that number in factorial form. Example: If the number is: 10. 
  //It will multiply: 1*2*3*4*5*6*7*8*9*10 = 3628800.
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
*/

//TODO: Exercise of day 22: 3/2/2023

//?4-Find the Longest Word in a String

/*
function findLongestWordLength(str) {
  let words = str.split(" "); //Split each word with this split() method
  let maxLength = 0; //We will put a value equal to 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  //Then in the for bubble it will call the words that are less than the distance and if it finds one that is the greatest with the if of each space. 
  //Then it will return the longest word with this nested for.
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

//?5-Return Largest Numbers in Arrays

/*
function largestOfFour(arr) {
  return arr.map(function(group){
    return Math.max.apply(null, group);
  });
  //Lo que hara con el metodo map traer cada subarray y despues trar la principal
  //Y dentro de este metodo con math.max.apply(null, group) traera el array maximo del mismo
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5, 27, 39, 1001]
console.log(([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
*/

//TODO: Exercise of day 23: 4/2/2023

//?6-Confirm the Ending

/*
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
  //Lo que hace que con el parametro str uso el metodo sbstr() para sacar la ultima palabra de ese valor.
  //Para eso el argumento lo ponemos negativo y lo igualamos al target para que pueda dar el resultado si es o no la ultima letra.
}


console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
*/

//?7-Repeat a String Repeat a String (No se puede usar el metodo repeat())

/*
function repeatStringNumTimes(str, num) {
  let result = '';
 if (num <= 0) {
   return result;
 }
 for (let i = 0; i < num; i++) {
   result += str;
 }
 return result;

 //Primero ponemos el resultado para que de una variable vacio para que con el bucle vaya ingresando valor
 //Los bucles son si el numero es menor a 0 no dara nada a repetir y si es mayor a 0 entonces hara un condicion for
 //Donde si es mayor que 0 entonces repetira la veces que quiere ese texto
}

console.log(repeatStringNumTimes("abc", 3));
*/

//?8-Truncate a String

/*
function truncateString(str, num) {
  if (str.length > num) {
   return str.slice(0, num) + "...";
 } else {
   return str;
 }
 //Lo que hara es que si el numero del string es mayor al numero entonces que me retorne el string + ...
 //En el caso de que no, que solo me retorne pero el string sin los ...
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
*/

//todo: Ejercicio del dia 24: 21/2/2023

//?9-Finders Keepers

/*
function findElement(arr, func) {
  let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
    //Es este lo que hara que el numero retornara indefinido y que con un ciclo for puede llamar cada linea de codigo
    //Donde dentro tendra una bucle if para llamar un numero a numero hasta conseguir el numero del console log.
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
//Aqui se buscar cada uno de los numeros hasta buscar el primer par.

*/

//?10-Boo who

/*
function booWho(bool) {
  return typeof bool === 'boolean';
  //Buscara retornar si es un tipo de valor booleano y si no es falso
}

console.log(booWho(null));
console.log(booWho([1, 2, 3]));
console.log(booWho(false));
*/

//?11-Title Case a Sentence
/*
function titleCase(str) {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(' ');
  
  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  // Join the capitalized words back into a string
  return capitalizedWords.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
*/

//todo: Ejercicio del dia 25: 22/2/2023

//?12-Slice and Splice

/*
function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 to avoid modifying the original array
  const newArr = arr2.slice();
  
  // Insert the elements of arr1 into newArr at the specified index
  newArr.splice(n, 0, ...arr1);
  
  // Return the new array
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
*/

//?13-Falsy Bouncer

/*
function bouncer(arr) {
  // Filter the array to remove falsy values
 const filteredArr = arr.filter(Boolean);
 
 // Return the new array
 return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
*/

//?14-Where do I Belong

/*
function getIndexToIns(arr, num) {
  // Add the number to the array
 arr.push(num);
 
 // Sort the array in ascending order
 arr.sort((a, b) => a - b);
 
 // Find the index of the number in the sorted array
 const index = arr.indexOf(num);
 
 // Return the index
 return index;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30) );
*/

//todo: Ejercicio del dia 26: 3/3/2023

//?15-Mutations

/*
function mutation(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  //Primero mostrar el primer valor y segundo en minuscula para que no haya problemas.

for (let i = 0; i < str2.length; i++) {
  const letter = str2[i];
  if (!str1.includes(letter)) {
    return false;
  }
}

return true;
//Luego en un for se iterara cada palabra del segundo valor del array
//Despues dentro del for mostrar en cada valor del segundo valor del array y si muestra que esta presente junto
//Con el primero sera true y si no sera falso.
}



console.log(mutation(["hello", "hey"])); //False
console.log(mutation(["hello", "Hello"])); //True
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //True
*/

//?16-Chunky Monkey

/*
function chunkArrayInGroups(arr, size) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }

  return result;
  //Lo primero poner un valor array para almacenar el resultado
  //Despues ponemos un valor que inicie desde 0
  //Ahora creamos un bucle while Donde lo buscara directamente desde el arreglo por cada valor
  //Despues con el metodo push mostrara cada resultad y dentro ponemos el parametro arr un slice para que divida por pedazos
  //La cantidad de arreglos que quiera cortar
  //Despues sumara el valor dependiendo la cantidad que quiere al lado y finalmente retorna el resultado
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups(["apples", "bananas", "cherries", "dates"], 4)); //[ [ 'apples', 'bananas', 'cherries', 'dates' ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //[ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
*/
