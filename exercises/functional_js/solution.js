const mocha = require('mocha');
const chai

const breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"];


function makeMeatTags(meats) {
  //write code here
}

makeMeatTags(breakfastMeats);

breakfastMeats
  .map(capitalize)
  .filter(unique)
  .reduce(wrap("<td>", "</td>"), ""))

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

function unique(x, i, xs) {
  return xs.indexOf(x) === i
}

function wrap(pre, post) {
  return (content, word) => {return content + pre + word + post }
}
