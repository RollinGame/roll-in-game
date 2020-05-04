const { Schema, model } = require('mongoose');

const logSchema = new Schema({
    game: { type: Schema.Types.String, required: true },
    outcome: { type: Schema.Types.Number, required: true },
    walletId: { type: Schema.Types.String, required: true },
    alias: { type: Schema.Types.String },
    payout: { type: Schema.Types.Number, required: true },
    profit: { type: Schema.Types.Number, required: true },
    currency: { type: Schema.Types.String, required: true },
    timeStamp: { type: Schema.Types.Date, default: Date.now() }
});

logSchema.statics.getLogsByGame = function (game, limit) {
    return this.model('LogItem').find({ game: game }).limit(limit).sort('-timeStamp')

}

const LogItem = model('LogItem', logSchema);

module.exports = LogItem;