var breakfastMeats = ['bacon', 'Bacon', 'sausage', 'SauSaGe']

/*  In the commented out code below, in an imperative style, we update the
  breakfastMeats array, with standardized capitalization. We then look through
  the modified array, removing duplicates. Then we create create a single
  string containing a <p></p> html element for each remaining meat */

// for (var i = 0; i < breakfastMeats.length; i++) {
//   breakfastMeats[i] = breakfastMeats[i].slice(0, 1).toUpperCase() +
//                       breakfastMeats[i].slice(1, breakfastMeats[i].length)
//                       .toLowerCase();
// }
// // breakfastMeats === ['Bacon', 'Bacon', 'Sausage', 'Sausage']
// for (var k = 0; k < breakfastMeats.length; k++) {
//   meat = breakfastMeats[k]
//   if (breakfastMeats.indexOf[meat] !== k){
//     breakfastMeats = breakfastMeats.slice(0, k).concat(
//                      breakfastMeats.slice(k+1, breakfastMeats.length)
//     )
//   }
// }
// // breakfastMeats === ['Bacon', 'Sausage']
// var tableData = '';
// for (var i = 0; i < breakfastMeats.length; i++) {
//   tableData += '<p>'+breakfastMeats[i]+'</p>'
// }
// console.log(tableData)
// // => '<p>Bacon</p><p>Sausage</p>'

var paragraphs;

/*  Rewrite the above in a functional style. You should use the breakfastMeats.map
  and breakfastMeats.filter methods from the "map" and "filter" exercies. You
  should use the breakfastMeats.reduce method and define pure
  wrap(acc, word) function. When you're finished, running `node imperative.js`
  should print out "<p>Bacon</p><p>Sausage</p>" */

console.log(paragraphs)
// ==> '<p>Bacon</p><p>Sausage</p>'
