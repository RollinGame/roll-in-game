const { getAllLogs, newLog } = require('../controller/logItemController');

module.exports = app => {
	app.get('/', (req, res) => res.send('Starting point.'));

	// Default API responce
	app.get('/api', (req, res) => {
		res.json({
			status: 'API is working.',
			message: 'Welcome to RollinGames API.',
		});
	});

	app.get('/api/logitems', getAllLogs);
	app.post('/api/logitems', newLog);

	app.use((req, res, next) => {
		const error = new Error('Could not find this route.');
		throw error;
	});
};
