
const kdo = require('my-kdo');
const lib = require('my-examples-lib');

const options = {
	first: 'f5',
	lib,
};

// The kdo.dirFn will loads the entire directory like the normal node.js module.
// The parent doesn't need to care about the details in flow.
module.exports = kdo.dirFn(module, options);
