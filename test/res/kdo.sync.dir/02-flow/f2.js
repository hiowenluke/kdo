
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = function(obj) {
	obj.a ++;
};

module.exports = fn;
