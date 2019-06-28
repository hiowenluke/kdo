
const kdo = require('my-kdo');

const order = `
	f3
	f4
	f2, // the comma can be omitted
	f1
`;

module.exports = kdo.dirFn(module, order);
