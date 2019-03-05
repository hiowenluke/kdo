
const fn = ({a1, a2, a3}) => {
	config.log('B do something...');

	// Return a value to caller. This will break the flow,
	// and the following "next" functions will not be executed.
	return config.calc();
};

module.exports = fn;
