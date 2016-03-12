var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

var capitalized = breakfastMeats.map(capitalize)

console.log(capitalized)
