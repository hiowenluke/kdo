
const fn = () => {

	// if the condition is not met, then return next().
	// this will go to the next function.
	if (1) return;

	// the subsequent code will not be executed
	config.log('B do something...');
};

module.exports = fn;
