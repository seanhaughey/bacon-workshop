var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

/*  In the commented out code below, in an imperative style, we update the breakfastMeats array, with standardized capitalization. We then look through
  the modified array, removing duplicates */

// var meat, i, first, rest
// for (i in breakfastMeats) {
//   meat = breakfastMeats[i]
//   first = meat[0].toUpperCase()
//   rest = meat.slice(1, meat.length).toLowerCase()
//   breakfastMeats[i] = first + rest
// }
// // breakfastMeats === ['Bacon', 'Bacon', 'Sausage', 'Sausage']
// var firstMeats, lastMeats
// for (i = 0; i < breakfastMeats.length; i++) {
//   meat = breakfastMeats[i]
//   if (breakfastMeats.indexOf(meat) !== i) {
//     firstMeats = breakfastMeats.slice(0, i)
//     lastMeats = breakfastMeats.slice(i+1, breakfastMeats.length)
//     breakfastMeats = firstMeats.concat(lastMeats)
//   }
// }
// breakfastMeats === ['Bacon', 'Sausage']
// console.log(breakfastMeats)

var simplified;

/*  Rewrite the above in a functional style. You should use the breakfastMeats.map
  method, as in the "map" exercise. Then filter out duplicates with the
  breakfastMeats.filter method and define a pure isUnique(word, index, array)
  function. When you're finished, running `node imperative.js` should print out
  "[ 'Bacon', 'Sausage' ]" */

console.log(simplified)
// ==> ["Bacon", "Sausage"]
