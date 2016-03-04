var Bacon = require('baconjs')

function openCloseValve(freq){
  Bacon.fromPoll(1000, alwaysOne)
  .scan(0, zeroOrOne)
  .map(Boolean)
}
function alwaysOne(){ return Bacon.Next(1) }
function zeroOrOne(prev){ return (prev + 1) % 2 }
