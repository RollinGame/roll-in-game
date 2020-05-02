const TestLogItem = require('../model/TestLogItem');
const getParsedDate = require('../utils/utils');

const getAllLogs = async (req, res, next) => {
	try {
		const testLogItems = await TestLogItem.find({});
		const testLogItemsParsedDate = testLogItems.map(item => ({
			gameName: item.gameName,
			playerWon: item.playerWon,
			alias: item.alias,
			winAmount: item.winAmount,
			currency: item.currency,
			time: getParsedDate(String(item.time)),
		}));

		res.json({
			status: 'success',
			message: 'TestLogItems retrieved successfully.',
			data: testLogItemsParsedDate,
		});
	} catch (err) {
		const error = new Error(err);
		return next(error);
	}
};

const newLog = async (req, res, next) => {
	const { gameName, playerWon, alias, winAmount, currency } = req.body;
	let testLogItem = new TestLogItem({
		gameName,
		playerWon,
		alias,
		winAmount,
		currency,
	});

	// save the contact and check for errors
	try {
		await testLogItem.save();
		res.json({
			message: 'New Log Item created!',
			data: testLogItem,
		});
	} catch (err) {
		const error = new Error(err);
		return next(error);
	}
};

module.exports = {
	testGetAllLogs: getAllLogs,
	testNewLog: newLog,
};
