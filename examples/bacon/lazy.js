$ = require('baconjs');
_ = require('lodash');

//map vs flatMap

const counter = $.interval(100)
  .map(val => new Date().getTime())
  .toProperty();
const sampler = counter.sampledBy(
  $.interval(1000).delay(500))
  .log('map : ');

const flatCounter = $.interval(100)
  .flatMap(val => new Date().getTime())
  .toProperty();
const flatSampler = flatCounter.sampledBy(
  $.interval(1000).delay(500))
  .log('flat: ');
