
const kdo = require('../../../src');

const options = {
	first: 'f3', // execute these functions at first
	last: ['f7', 'f4'], // execute these functions at last
	exclude: 'f5', // do not execute these functions
};

module.exports = kdo.flow(options);
