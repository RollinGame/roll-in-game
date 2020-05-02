module.exports = () => {
    const env = process.env.NODE_ENV || 'development';
    const settings = require('../config/settings')[env];
    const app = require('express')();
    require('../config/database')(settings);
    require('../config/express')(app);
    require('../config/routes')(app);

    app.listen(settings.apiPort);
    console.log(`Server listening on port ${settings.apiPort}...`);
}