
const kdo = {
	do: require('./do')
};

const fn = (module, argName) => {
	return eval(`async (${argName}) => await kdo.do(module, {${argName}})`);
};

module.exports = fn;
