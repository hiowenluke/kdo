
const kdo = require('../../../../lib');

const options = {
	first: 'f3',
	last: ['f7', 'f4'],
	exclude: 'f5',
};

module.exports = kdo.dir(module, options);
