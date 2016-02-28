"use strict";

function countStream(id){
  return $(id).asEventStream('click')
  .map(always(1))
  .scan(0, add)
  .toProperty(0)
}

let stream1 = countStream('#button1')
let stream2 = countStream('#button2')
stream1.combine(stream2, Math.pow)
.onValue(setValue)

stream1.onValue(setValue1)
stream2.onValue(setValue2)

function setValue(value){
  $('#power').text(value)
}
function setValue1(value){
  $('#value1').text(value)
}
function setValue2(value){
  $('#value2').text(value)
}

function join(joiner){
  return function(ls){
    return ls.join(joiner)
  }
}

function always(value){
  return value
}

function add(a, b){
  return a + b
}

function concat(previous, current){
  return previous.concat(current)
}
