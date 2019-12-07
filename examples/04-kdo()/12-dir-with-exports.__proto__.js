
const verify = (obj) => {
	return obj.dir2.obj.a === 1;
};

const fn = async () => {

	// Kdo will requires all files (exclude hi.js) in the directory which
	// this file is located to be an object.

	const obj = require('./dir-with-exports.__proto__');
	return verify(obj);
};

module.exports = fn;
