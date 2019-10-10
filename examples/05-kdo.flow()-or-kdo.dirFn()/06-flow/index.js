
const kdo = require('../../../src');

const order = `
	f3
	f4
	f2, // the comma can be omitted
	f1
`;

module.exports = kdo.flow(order);
