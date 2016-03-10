$ = require('baconjs');
_ = require('lodash');

//jquery targeting
$("#my-input").asEventStream('click');

//promises or callbacks, also fromNodeCallback
$.fromPromise(openSSEStream());
$.fromCallback(done => {
  openSSEStream()
  .then(done);
})

//Events in the DOM
$.fromEvent(document.body, 'keypress');
//from a node EventEmitter
$.fromEvent(new EventEmitter(), 'data');

function openSSEStream() {
  return new Promise((res, rej) => {})
}
