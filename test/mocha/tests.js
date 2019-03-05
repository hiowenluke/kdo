
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

// relate to kdo root path
const root = './demo';

const ok = {
	getMainConfig(root) {
		const dir = path.join(path.resolve(root), '../__config');
		return require(dir);
	},

	getBrief(demoName) {
		return demoName
			.split('_')[1]
			.replace(/-/g, ' ')
		;
	},

	getTestFn(demoDir) {
		return require(demoDir + '/prepare');
	},

	getTestConfig(demoDir) {
		if (fs.existsSync(demoDir + '/config')) {
			return require(demoDir + '/config');
		}
	},

	compare(kdoResult, calcResult) {
		if (typeof kdoResult === 'undefined') return false;

		if (typeof calcResult === 'object') {
			if (typeof kdoResult !== 'object') {
				return false;
			}
			else {
				const index = Object.keys(calcResult).findIndex(key => {
					if (calcResult[key] !== kdoResult[key]) return true;
				});

				return index === -1;
			}
		}
		else {
			return kdoResult === calcResult;
		}
	}
};

const createDescribe = (folder) => {
	const demos = fs.readdirSync(folder);
	const mainConfig = ok.getMainConfig(folder);

	const folderName = folder.split('/')[2].replace(/-/g, ' ');

	describe(`for ${folderName}`, () => {
		demos.forEach(demoName => {
			if (!/^demo\d/.test(demoName)) return;

			const demoDir = path.join(path.resolve(folder), demoName);
			const brief = ok.getBrief(demoName);

			it(brief, async () => {
				const testFn = ok.getTestFn(demoDir);
				const testConfig = ok.getTestConfig(demoDir);

				const config = Object.assign(mainConfig, testConfig);
				config.isShowLog = false;

				global.config = config;

				const kdoResult = await testFn(config.args);
				const calcResult = config.calc();

				expect(ok.compare(kdoResult, calcResult)).to.be.true;
			});
		});

	});
};

const main = () => {
	const catalogs = fs.readdirSync(root);
	catalogs.forEach(catalogName => {
		if (/^_/.test(catalogName)) return;
		createDescribe(root + '/' + catalogName);
	});
};

main();
