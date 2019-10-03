
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}) {
	const val = 8;
	this.save({a1: val});
	this.log(`a1 = ${val} // <= second time`);
};

module.exports = fn;

