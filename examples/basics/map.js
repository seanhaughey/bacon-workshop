function addFive(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 5)
  }
  return result
}
addFive([1, 2, 3])
// >> [6, 7, 8]

function addFive(numbers) {
  return numbers.map(number => number + 5)
}

addFive([1, 2, 3])
// >> [6, 7, 8]

function addVal(value) {
  return number => number + value
}

[1, 2, 3].map(addVal(5))
// // >> [6, 7, 8]

function add(a, b) {return a + b}
[1, 2, 3].map(add.bind(null, 5))
// >> [6, 7, 8]
