
const fn = ({a1, a2, a3}) => {
	config.log('A do something...');
	config.log(a1, a2, a3);

	a2 = 4;
	a3 = 5;

	// This will make kdo to save these new values of arguments
	// and pass them to the next function
	return {args: {a2, a3}};
};

module.exports = fn;
