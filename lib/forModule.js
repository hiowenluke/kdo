
const requireDirectory = require('rir');
const tools = require('./tools');

const fn = (obj, kdo) => {

	// If the obj is a Node.js module, then require the whole directory
	if (tools.isModule(obj)) {
		obj = requireDirectory(obj);
	}

	return obj;
};

module.exports = fn;
