
const fn = async (module) => {

	try { // for debugging only

	const filename = module.filename;
	const path = filename.replace(/\/index\.js$/, '/example');

	const example = require(path);
	await example();

	console.log('done');

	} catch (e) { console.log(e) }
};

module.exports = fn;
