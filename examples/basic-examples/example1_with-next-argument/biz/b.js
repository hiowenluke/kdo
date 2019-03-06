
const fn = ({}, next) => {

	// if the condition is not met, then return next().
	// this will go to the next function.
	if (1) return next();

	// the subsequent code will not be executed
	config.log('B do something...');
	next();
};

module.exports = fn;
