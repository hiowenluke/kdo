
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}) {

	const val = 5;
	a1 = val;

	this.setArgs({a1});
	this.log(`Hey, I changed the value of a1 to ${val}`);
};

module.exports = fn;

