
/** @name lib.getModuleName */
const fn = (module) => {
	const filename = module.filename;
	const temp = filename.split('/');
	return temp[temp.length - 1].split('.')[0].toUpperCase();
};

module.exports = fn;
