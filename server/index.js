const app = require('express')();
const env = process.env.NODE_ENV || 'development';
const settings = require('./config/settings')[env];
require('./config/database')(settings);
require('./config/express')(app);
require('./config/routes')(app);
const logs = require('./model/LogItem');

const expressServer = app.listen(settings.apiPort);
console.log(`Server listening on port ${settings.apiPort}...`);


const logsEventEmitter = logs.watch();

logsEventEmitter.on('change', change => console.log(change.fullDocument));