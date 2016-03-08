$ = require('baconjs');
_ = require('lodash');

//stream.holdWhen(@ : EventStream[A], valve : Observable[B]) : EventStream[A]
$.sequentially(200, _.times(100))
.holdWhen(
  $.sequentially(
    1000,
    _.times(20, i => i % 2)))
.onValue(console.log);

// stream.skipWhile(property)
$.sequentially(10, _.times(50))
.skipWhile(
  $.sequentially(
    100,
    _.times(30, i => (i+1) % 2)).toProperty())
.onValue(console.log);

//stream.bufferWithTime(delay)
$.interval(200, 'what a value!')
.bufferWithTime(1000)
.onValue(console.log);
