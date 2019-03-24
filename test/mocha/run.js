
const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const requireDirectory = require('rir');

// the path relative to the project root
const root = path.resolve('./test/res');

// disable kdo printing any info
const kdo = require('../../lib')(true);

const createTest = ({verify, run, fileName}) => {
	const topic = fileName.replace(/-/g, ' ');
	it(topic, async () => {
		const result = await run();
		expect(verify(result)).to.be.true;
	});
};

const createDescribe = (folderName) => {
	const topic = folderName.replace(/-/g, ' ');
	describe(topic, () => {
		const folderPath = root + '/' + folderName;
		if (!fs.statSync(folderPath).isDirectory()) return;

		const testInfos = requireDirectory(module, folderPath + '/.');
		Object.keys(testInfos).forEach(fileName => {
			const filePath = folderPath + '/' + fileName;

			// For js file, the fileName has no extend name ".js",
			// the filePath will not exists, this will cause fs.statSync() to be failed.
			const fileState = fs.existsSync(filePath) && fs.statSync(filePath);

			// ignore non-test file
			if (fileState && fileState.isDirectory()) return;

			const testInfo = testInfos[fileName];
			testInfo.fileName = fileName;
			createTest(testInfo);
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
		createDescribe(folderName);
	}
};

main();
