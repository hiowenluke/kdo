
const kdo = require('../../src');

const verify = (obj) => {
	return (

		typeof obj.dir.fn === 'function' &&
		typeof obj.dir.obj === 'object' &&
		typeof obj.dir.obj.fn === 'function' &&

		typeof obj.dir.dir1.fn === 'function' &&
		typeof obj.dir.dir1.obj === 'object' &&
		typeof obj.dir.dir1.obj.fn === 'function' &&

		typeof obj.dir.dir1.dir11.fn === 'function' &&
		typeof obj.dir.dir1.dir11.obj === 'object' &&
		typeof obj.dir.dir1.dir11.obj.fn === 'function' &&

		typeof obj.dir.dir2.fn === 'function' &&
		typeof obj.dir.dir2.obj === 'object' &&
		typeof obj.dir.dir2.obj.fn === 'function' &&

		typeof obj.dir.dir3.fn === 'function' &&
		typeof obj.dir.dir3.obj === 'object' &&
		typeof obj.dir.dir3.obj.fn === 'function' &&

	true);
};

const fn = async () => {

	// If all parameters are omitted, kdo will requires all files in the directory
	// which this file is located to be an object.

	// Note that this file self will not be required.

	const obj = kdo();
	return verify(obj);
};

fn.verify = verify;
module.exports = fn;
