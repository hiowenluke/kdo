
const fn = () => {
	config.log('B do something...');

	// Return a true to caller. This will break the flow,
	// and the following "next" functions will not be executed.
	return true;
};

module.exports = fn;
