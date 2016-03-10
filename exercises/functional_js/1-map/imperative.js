var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

/*  In the commented out code below, in an imperative style, we update the breakfastMeats array, with standardized capitalization */

// for (var i = 0; i < breakfastMeats.length; i++) {
//   breakfastMeats[i] = breakfastMeats[i].slice(0, 1).toUpperCase() +
//                       breakfastMeats[i].slice(1, breakfastMeats[i].length)
//                       .toLowerCase();
// }
// // breakfastMeats === ['Bacon', 'Bacon', 'Sausage', 'Sausage']
// console.log(breakfastMeats)

var capitalized;

/*  Rewrite the above in a functional style. You should use the
  breakfastMeats.map method and define a pure capitalize(word) mapper function.
  When you're finished, funning `node imperative.js` should print out
  "[ 'Bacon', 'Bacon', 'Sausage', 'Sausage' ]"  */

console.log(capitalized)
// ==> ["Bacon", "Bacon", "Sausage", "Sausage"]
