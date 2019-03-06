
// the 1st argument must be specified (e.g., an object)
// if the 2nd argument is next
const fn = ({}, next) => {
	config.log('A do something...');

	// go to the next function
	next();
};

module.exports = fn;
