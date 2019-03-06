
const async = require('./async');
const sync = require('./sync');

// the default action is async
const fn = async;
fn.async = async;
fn.sync = sync;

module.exports = fn;
