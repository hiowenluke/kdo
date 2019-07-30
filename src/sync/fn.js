
const kdo = {
	do: require('./do')
};

const fn = (module, argName) => {
	return eval(`(${argName}) => kdo.do(module, {${argName}})`);
};

module.exports = fn;
