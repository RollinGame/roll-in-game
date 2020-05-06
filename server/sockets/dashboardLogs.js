const Logs = require('../model/LogItem');
const getParsedDate = require('../utils/utils');

const emitInitialLogs = async(socket)=>{
	const logItems = await Logs.find({})
			.limit(50)
			.sort('-timeStamp');

		const parsedDateLogs = logItems.map(log => ({
			...log.toObject(),
			timeStamp: getParsedDate(log.timeStamp)
		}));

    socket.emit('initialLogs',parsedDateLogs);
}

exports.emitInitialLogs = emitInitialLogs;