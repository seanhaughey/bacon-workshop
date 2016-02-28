var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Bacon', 'Durian']

//How many vowels are in these fruits?
//grab vowels
//count
//add to total


function countVowels (item) {
  return item.toLowerCase().split('').filter(isIn('aeiou'.split(''))).length
}

function isIn(array) {
  return item => {array.indexOf(item) !== -1}
}

function add(a, b) {return a + b}

console.log(inputWords.map(countVowels)
  .reduce(add, 0))


// reduce count word instance 

const breads = ['ciabatta', 'baguette', 'sliced', 'baguette', 
                'baguette']

var breadCounter = {};

for (i = 0; i < breads.length; i++) {
  var bread = breads[i];
  breadCounter[bread] ? breadCounter[bread]++ :
                        breadCounter[bread] = 1;
}

//{ ciabatta: 1, baguette: 3, sliced: 1 }

const breads = ['ciabatta', 'baguette', 'sliced', 'baguette', 
                'baguette']

var breadCounter = {};

breads.forEach(bread => {
  breadCounter[bread] ? breadCounter[bread]++ :
                        breadCounter[bread] = 1;
})

// { ciabatta: 1, baguette: 3, sliced: 1 }

const breads = ['ciabatta', 'baguette', 'sliced', 'baguette', 
                'baguette']

breads.reduce((accumulator, value) => {
  accumulator[value] ? accumulator[value]++ : 
                       accumulator[value] = 1;
  return accumulator;
}, {});

//