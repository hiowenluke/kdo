
const kdo = {
	new: require('../new')
};

const useWithOrder = (k, obj, array) => {
	array.forEach(key => {
		const fn = obj[key];
		if (!fn) {
			console.log('[KDO][Info]', key, 'is not exists.');
			return;
		}

		if (typeof fn === 'string') return;
		k.use(fn, key);
	});
};

const fn = async (obj, args, opt) => {
	const {first, order, last} = opt;
	const k = kdo.new(args, opt);

	useWithOrder(k, obj, first);
	useWithOrder(k, obj, order);
	useWithOrder(k, obj, last);

	return await k.do();
};

module.exports = fn;
