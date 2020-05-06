const mongoose = require('mongoose');

module.exports = settings => {
	mongoose
		.connect(settings.dbConnectionString, settings.connectionOptions)
		.then(() => {

            console.log('Database ready!`')
			// const logsEventEmitter = testLogs.watch();

			// logsEventEmitter.on('change', change => console.log(change.fullDocument));
		})
		.catch(err => {
			console.log(err);
		});

	// db.once('open', err => {
	//     if (err) {
	//         throw err;
	//     }

	//     console.log(`Database ${db.name} ready!`);
	// });

	// db.on('error', err => console.log(`Database error: ${err}`));
};
