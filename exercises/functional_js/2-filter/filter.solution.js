var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

function isUnique(x, i, xs) {
  return xs.indexOf(x) === i
}

var simplified = breakfastMeats.map(capitalize).filter(isUnique)

console.log(simplified)
