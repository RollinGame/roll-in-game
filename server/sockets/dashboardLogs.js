const Logs = require('../model/LogItem');
const getParsedDate = require('../utils/utils');

const emitInitialLogs = async(socket)=>{
	const logItems = await Logs.find({}) // We would need endpoints for each game as the limit here will apply to all logs. Also we would most likely never need combined logs.
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

    socket.emit('initialLogs',parsedDateLogs);
}

exports.emitInitialLogs = emitInitialLogs;