
const fs = require('fs');
const path = require('path');
const requireDirectory = require('rir');

const config = require('../../__config');
const convertStringToArray = require('./__lib/convertStringToArray');

const kdo = {
	new: require('../new')
};

const me = {
	initOptions({opt}) {

		// If the opt is a string or an array, then it's order
		if (typeof opt === 'string' || Array.isArray(opt)) {
			opt = {order: opt};
		}

		this.setArgs({opt});
	},

	saveLidDirNameToOptions({opt}) {
		opt.libDirName = config.getLibDirName();
	},

	convertSortingRulesStringToArray({opt}) {
		opt.order = convertStringToArray(opt.order);
		opt.first = convertStringToArray(opt.first);
		opt.last = convertStringToArray(opt.last);
		opt.exclude = convertStringToArray(opt.exclude);
	},

	fetchDefaultOrderFromObjIfNoOrder({opt, obj}) {
		if (opt.order) return;

		const order = Object.keys(obj);
		const libDirName = opt.libDirName;

		opt.order = order.filter(el => el !== '__moduleFilename' && el !== libDirName);
	},

	attachLibDirNameToExclude({opt}) {
		if (!opt.libDirName) return;

		const exclude = opt.exclude || [];
		const libDirName = opt.libDirName;

		exclude.push(libDirName);
		opt.exclude = exclude;
	},

	loadLibIfNeeded({opt, obj}) {
		if (opt.lib) return;

		const libDirName = opt.libDirName;
		const moduleFilename = obj.__moduleFilename;
		if (!libDirName || !moduleFilename) return;

		const dirName = path.dirname(moduleFilename);
		const libPath = path.resolve(dirName, './' + libDirName);
		if (!fs.existsSync(libPath)) return;

		// Use {filename} to simulate a node.js Module
		// Attach "/." to specify a directory
		opt.lib = requireDirectory({filename: libPath + '/.'});
	}
};

const fn = (obj, opt) => {
	const args = {opt, obj};
	const options = {return: 'opt'};

	const k = kdo.new(args, options);
	k.use(me);

	return k.do();
};

module.exports = fn;
