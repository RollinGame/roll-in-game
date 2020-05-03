const app = require('express')();
const env = process.env.NODE_ENV || 'development';
const settings = require('./config/settings')[env];
require('./config/database')(settings);
require('./config/express')(app);
require('./config/routes')(app);
const testLogs = require('./model/TestLogItem');

const expressServer = app.listen(settings.apiPort);
console.log(`Server listening on port ${settings.apiPort}...`);


const logsEventEmitter = testLogs.watch();

logsEventEmitter.on('change', change => console.log(change.fullDocument));