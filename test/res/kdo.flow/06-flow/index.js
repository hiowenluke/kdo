
const kdo = require('../../../../lib');

const order = `
	f3
	f4
	f2, // the comma can be omitted
	f1
`;

module.exports = kdo.flow(module, order);
