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
  return numbers.map(number=>{return number + 5})
}

addFive([1, 2, 3])
// >> [6, 7, 8]

function addVal(value) {
  // return number => {return number + value}
  return function(number) {return number + value}
}

console.log([1, 2, 3].map(addVal(5)))
// // >> [6, 7, 8]

function add(a, b) {
  return a + b
}

function foo(a, b, c) {
}

foo.bind(null, 1, 2)

foo(3)

console.log([1, 2, 3].map(add.bind(null, 5)))
// >> [6, 7, 8]
