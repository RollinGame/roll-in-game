const { Schema, model } = require('mongoose');

const testLogSchema = new Schema({
    gameName: { type: Schema.Types.String, required: true },
    playerWon: { type: Schema.Types.String, required: true },
    alias: { type: Schema.Types.String },
    winAmount: { type: Schema.Types.Number, required: true },
    currency: { type: Schema.Types.String, required: true },
    time: { type: Schema.Types.Date, default: Date.now() }
});

const TestLogItem = model('TestLogItem', testLogSchema);

module.exports = TestLogItem;