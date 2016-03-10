$ = require('baconjs');
_ = require('lodash');

//lazily filters
$.sequentially(100, _.times(10))
.filter(x => x % 2)
.log()

//can take props
$.interval(100, {archived: false})
.filter('.archived')
.log()
//nothing
