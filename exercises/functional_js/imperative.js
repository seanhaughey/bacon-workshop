// make unique
// return table data

var breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"];

for (var i = 0; i < breakfastMeats.length; i++) {
  breakfastMeats[i] = breakfastMeats[i].slice(0, 1).toUpperCase() +
                      breakfastMeats[i].slice(1, breakfastMeats[i].length)
                      .toLowerCase();
}

// breakfastMeats === ["Bacon", "Bacon", "Sausage", "Sausage"]

for (var k = 0; k < breakfastMeats.length; k++) {
  for (var j = k+1; j < breakfastMeats.length; j++) {
    if (breakfastMeats[k] === breakfastMeats[j]) {
      breakfastMeats = breakfastMeats.slice(0, j).concat(
                       breakfastMeats.slice(j+1, breakfastMeats.length));
    }
  }
}

// breakfastMeats === ["Bacon", "Sausage"]

var tableData = '';

for (var i = 0; i < breakfastMeats.length; i++) {
  tableData += "<td>"+breakfastMeats[i]+"</td>"
}

console.log(breakfastMeats);
