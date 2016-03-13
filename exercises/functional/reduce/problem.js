const breakfastMeats = ['bacon', 'Bacon', 'sausage', 'SauSaGe']

/*  In the commented out code below, in an imperative style, we update the
  breakfastMeats array, with standardized capitalization. We then look through
  the modified array, removing duplicates. Then we create create a single
  string containing a <p></p> html element for each remaining meat */

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
// // breakfastMeats === ['Bacon', 'Sausage']
// var tableData = '';
// for (var i = 0; i < breakfastMeats.length; i++) {
//   tableData += '<p>'+breakfastMeats[i]+'</p>'
// }
// console.log(tableData)
// // => '<p>Bacon</p><p>Sausage</p>'

const paragraphs;

/*  Rewrite the above in a functional style. You should use the breakfastMeats.map
  and breakfastMeats.filter methods from the "map" and "filter" exercies. You
  should use the breakfastMeats.reduce method and define pure
  wrap(acc, word) function. When you're finished, running `node imperative.js`
  should print out "<p>Bacon</p><p>Sausage</p>" */

console.log(paragraphs)
// ==> '<p>Bacon</p><p>Sausage</p>'
