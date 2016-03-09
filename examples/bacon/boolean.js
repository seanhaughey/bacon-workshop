$ = require('baconjs');
_ = require('lodash');

const halfSecondCount = $.sequentially(500, _.times(20))
const yesNo = halfSecondCount.map(x => !!(x % 2)).toProperty();
const noYes = halfSecondCount.map(x => !(x % 2)).toProperty();
const noNo = $.interval(500, false);

yesNo.log('yesNo:');
noNo.log('noNo :');
noYes.log('noYes:');
yesNo.or(noYes).log('or :');
yesNo.and(noYes).log('and:');
yesNo.and(noYes).and(noNo).log('and chain:')
