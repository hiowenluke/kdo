
const fn = async (module) => {

	try { // for debugging only

	const filename = module.filename;
	const path = filename.replace(/\/[a-zA-Z]+?\.js$/, '');

	const example = require(path);
	await example();

	} catch (e) { console.log(e) }
};

module.exports = fn;
