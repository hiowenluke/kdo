
const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const kdo = require('../src');

// the path relative to the project root
const root = path.resolve('../examples');

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

		const testFns = kdo(folderPath + '/.');
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

	// disable kdo printing any info
	kdo.config(true);

	const folderNames = getFolderNames();

	for (let i = 0; i < folderNames.length; i ++) {
		const folderName = folderNames[i];
		if (folderName === '__lib') continue;

		createDescribe(folderName);
	}
};

main();
