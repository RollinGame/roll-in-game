module.exports = {
    development: {
        dbConnectionString: 'mongodb+srv://rgdbuser:RGdbu$er1@rgcl01-7xbkj.mongodb.net/RollinGames?retryWrites=true&w=majority',
        connectionOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        apiPort: 2323
    },
    production: {
        dbConnectionString: '',
        connectionOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        apiPort: process.env.PORT
    }
}