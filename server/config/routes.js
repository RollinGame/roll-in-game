const controllers = require('../controller');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('Hello World.'));

    // Default API responce
    app.get('/api', (req, res) => {
        res.json({
            status: 'API Its Working.',
            message: 'Welcome to RollinGames API.'
        });
    });

    app.get('/api/logitems', controllers.logItemController.getAllLogs);
    app.post('/api/logitems', controllers.logItemController.newLog);

    app.get('/api/testlogitems', controllers.testLogItemController.getAllLogs);
    app.post('/api/testlogitems', controllers.testLogItemController.newLog);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Ups! Something went wrong! 404 Not Found!');
        res.end();
    });
}