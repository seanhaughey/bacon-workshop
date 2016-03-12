var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

function isUnique(x, i, xs) {
  return xs.indexOf(x) === i
}

function wrap(pre, post) {
  return (content, word) => {return content + pre + word + post }
}

var paragraphs = breakfastMeats
.map(capitalize)
.filter(isUnique)
.reduce(wrap('<p>', '</p>'), '')

console.log(paragraphs)
