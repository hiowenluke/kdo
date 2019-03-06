
// This function has "next" argument,
// and go to the next function via call next()

// Note that the 1st argument must be specified (an object)
// if the 2nd argument is next
const fn = ({}, next) => {
	config.log('A do something...');
	next();
};

module.exports = fn;
