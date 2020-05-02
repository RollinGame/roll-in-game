const LogItem = require('../model/LogItem');

const getAllLogs = async (req, res, next) => {
    try {
        const logItems = await LogItem.find({});
        res.json({
            status: "success",
            message: "Log items retrieved successfully.",
            data: logItems
        });        
    } catch (err) {
        const error = new Error(err);
        return next(error);
    }
}

const newLog = async (req, res, next) => {
    const { game, outcome, walletId, alias, payout, profit, currency } = req.body;
    const logItem = new LogItem({
        game,
        outcome,
        walletId,
        alias,
        payout,
        profit,
        currency
    });

    try {
        await logItem.save();
        res.json({
            message: 'New Log Item created!',
            data: logItem
        });
    } catch (err) {
        const error = new Error(err);
        return next(error);
    }
}

module.exports = {
    getAllLogs,
    newLog
}