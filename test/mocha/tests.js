
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

// relate to kdo root path
const root = './examples';

// Disable printing in kdo
const kdo = require('../../lib');
kdo.config({isDisablePrint: true});

// Disable printing in lib (out of kdo)
global.isTest = true;

const ok = {
	getBrief(exampleName) {
		return exampleName
			.replace('_', ': ')
			.replace(/-/g, ' ')
		;
	},

	getTestFn(exampleDir) {
		return require(exampleDir + '/example');
	},

	getTestConfig(exampleDir) {
		if (fs.existsSync(exampleDir + '/config')) {
			return require(exampleDir + '/config');
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
	const examples = fs.readdirSync(folder);
	const folderName = folder.split('/')[2].replace(/-/g, ' ');

	describe(`for ${folderName}`, () => {
		examples.forEach(exampleName => {

			if (!/^example\d/.test(exampleName)) return;

			const exampleDir = path.join(path.resolve(folder), exampleName);
			const brief = ok.getBrief(exampleName);

			it(brief, async () => {
				// if (exampleName.indexOf('example01') >= 0)
				// 	debugger;

				const fn = ok.getTestFn(exampleDir);
				const config = ok.getTestConfig(exampleDir);

				const kdoResult = await fn();
				const calcResult = config.getResult();

				expect(ok.compare(kdoResult, calcResult)).to.be.true;
			});
		});
	});
};

const main = () => {
	const catalogs = fs.readdirSync(root);
	catalogs.forEach(catalogName => {
		if (/^[._]/.test(catalogName)) return;
		createDescribe(root + '/' + catalogName);
	});
};

main();
