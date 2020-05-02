const mongoose = require('mongoose');

module.exports = (settings) => {
    mongoose.connect(settings.dbConnectionString, settings.connectionOptions);
    const db = mongoose.connection;

    db.once('open', err => {
        if (err) {
            throw err;
        }

        console.log(`Database ${db.name} ready!`);
    });

    db.on('error', err => console.log(`Database error: ${err}`));
}