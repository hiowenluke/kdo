
const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const requireDirectory = require('rir');

// the path relative to the project root
const root = path.resolve('../examples');

// disable kdo printing any info
const kdo = require('../src');
kdo.config(true);

const createTest = (testFn, fileName) => {
	const topic = fileName.replace(/-/g, ' ');
	it(topic, async () => {
		const result = await testFn();
		expect(result).to.be.true;
	});
};

const createDescribe = (folderName) => {
	const topic = folderName.replace(/-/g, ' ');
	describe(topic, () => {
		const folderPath = root + '/' + folderName;
		if (!fs.statSync(folderPath).isDirectory()) return;

		const testFns = requireDirectory(module, folderPath + '/.');
		Object.keys(testFns).forEach(fileName => {
			const filePath = folderPath + '/' + fileName;

			// For js file, the fileName has no extend name ".js",
			// the filePath will not exists, this will cause fs.statSync() to be failed.
			const fileState = fs.existsSync(filePath) && fs.statSync(filePath);

			// ignore non-test file
			if (fileState && fileState.isDirectory()) return;

			const testFn = testFns[fileName];
			createTest(testFn, fileName);
		});
	});
};

const getFolderNames = () => {
	return fs.readdirSync(root);
};

const main = () => {
	const folderNames = getFolderNames();

	for (let i = 0; i < folderNames.length; i ++) {
		const folderName = folderNames[i];
		if (folderName === '__lib') continue;

		createDescribe(folderName);
	}
};

main();
