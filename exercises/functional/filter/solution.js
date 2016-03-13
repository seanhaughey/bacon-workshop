const breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

function isUnique(x, i, xs) {
  return xs.indexOf(x) === i
}

const simplified = breakfastMeats.map(capitalize).filter(isUnique)

console.log(simplified)
