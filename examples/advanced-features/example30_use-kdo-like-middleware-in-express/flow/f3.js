
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {
	this.log(this.fnName, 'do something');
	this.log(a2, a3);

	// This function has no next parameter (recommend),
	// kdo will automatically go to the next function, cool!
};

module.exports = fn;
