const app = require('express')();
const env = process.env.NODE_ENV || 'development';
const settings = require('./config/settings')[env];
require('./config/database')(settings);
require('./config/express')(app);
require('./config/routes')(app);
const Logs = require('./model/LogItem');
const getParsedDate = require('./utils/utils');
const { emitInitialLogs } = require('./sockets/dashboardLogs');

// Set server listen port
const expressServer = app.listen(settings.apiPort);
console.log(`Server listening on port ${settings.apiPort}...`);

// Set the sockets to listen to the express server port
const socketio = require('socket.io');
const io = socketio(expressServer);

io.on('connection', emitInitialLogs);

const logsEventEmitter = Logs.watch();
logsEventEmitter.on('change', change => {
	io.emit('newLogAdded', {
		...change.fullDocument,
		timeStamp: getParsedDate((change.fullDocument.timeStamp)),
	});
});
