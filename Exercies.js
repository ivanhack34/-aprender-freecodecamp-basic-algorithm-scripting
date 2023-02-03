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

//?6-Confirm the Ending

