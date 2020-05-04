const LogItem = require('../model/LogItem');
const getParsedDate = require('../utils/utils');

const getAllLogs = async (req, res, next) => {
	try {
		const logItems = await LogItem.find({}) // We would need endpoints for each game as the limit here will apply to all logs. Also we would most likely never need combined logs.
			.limit(50)
			.sort('-timeStamp');
			
		const parsedDateLogs = logItems.map(log => ({
			game: log.game,
			outcome: log.outcome,
			walletId: log.walletId,
			alias: log.alias,
			payout: log.payout,
			profit: log.profit,
			currency: log.currency,
			timeStamp: getParsedDate(String(log.timeStamp)),
		}));

		res.json({
			status: 'success',
			message: 'Log items retrieved successfully.',
			data: parsedDateLogs,
		});
	} catch (err) {
		const error = new Error(err);
		return next(error);
	}
};

const newLog = async (req, res, next) => {
	const { game, outcome, walletId, alias, payout, profit, currency } = req.body;
	const logItem = new LogItem({
		game,
		outcome,
		walletId,
		alias,
		payout,
		profit,
		currency,
	});

	try {
		await logItem.save();
		res.json({
			message: 'New Log Item created!',
			data: logItem,
		});
	} catch (err) {
		const error = new Error(err);
		return next(error);
	}
};

module.exports = {
	getAllLogs,
	newLog,
};
