
const fn = (...args) => {
	if (global.isTest) return;
	console.log(...args);
};

module.exports = fn;
