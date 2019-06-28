
const kdo = require('my-kdo');

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

const run = async () => {
	const obj = kdo(module);
	return obj;
};

const info = {verify, run};
module.exports = info;
