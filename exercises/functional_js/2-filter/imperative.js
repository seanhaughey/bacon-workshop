var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

/*  In the commented out code below, in an imperative style, we update the breakfastMeats array, with standardized capitalization. We then look through
  the modified array, removing duplicates */

// for (var i = 0; i < breakfastMeats.length; i++) {
//   breakfastMeats[i] = breakfastMeats[i].slice(0, 1).toUpperCase() +
//                       breakfastMeats[i].slice(1, breakfastMeats[i].length)
//                       .toLowerCase();
// }
// // breakfastMeats === ['Bacon', 'Bacon', 'Sausage', 'Sausage']
//
// for (var k = 0; k < breakfastMeats.length; k++) {
//   meat = breakfastMeats[k]
//   if (breakfastMeats.indexOf[meat] !== k){
//     breakfastMeats = breakfastMeats.slice(0, k).concat(
//                      breakfastMeats.slice(k+1, breakfastMeats.length)
//     )
//   }
// }
// // breakfastMeats === ['Bacon', 'Sausage']
// console.log(breakfastMeats)

var simplified;

/*  Rewrite the above in a functional style. You should use the breakfastMeats.map
  method, as in the "map" exercise. Then filter out duplicates with the
  breakfastMeats.filter method and define a pure isUnique(word, index, array)
  function. When you're finished, running `node imperative.js` should print out
  "[ 'Bacon', 'Sausage' ]" */

console.log(simplified)
// ==> ["Bacon", "Sausage"]
