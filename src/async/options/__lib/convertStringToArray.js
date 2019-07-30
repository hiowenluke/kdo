
const fn = (str) => {

	if (Array.isArray(str)) return str;
	if (typeof str !== 'string') return str;

	// Single line string
	if (!/[\r\n]/.test(str)) return [str];

	// Multiple-line string, like the following:
	// `
	//		f1 // comment
	//		f2 // /* comment */
	// `
	str = str
		.replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, '') // strip comments
		.replace(/,/g, ' ') // replace commas with spaces
		.replace(/\s+/mg, ' ') // remove redundant spaces
		.replace(/(^\s)|(\s$)/g, '') // remove leading and trailing spaces
	;

	return str.split(' ');
};

module.exports = fn;
