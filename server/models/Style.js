const mongoose = require('mongoose');

const { Schema } = mongoose;

const styleSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
    // TODO: Add an array for specific beers later after MVP is complete
});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;