
const fn = async function({a1, a2, a3}, next) {

	// this.log === lib.log, cool!
	this.log(this.fnName, 'do something');
	this.log(a1, a2, a3);

	// Call next() to go to the next function
	await next();
};

module.exports = fn;

