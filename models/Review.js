const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    productId: {
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId
    }
});
module.exports = mongoose.model("Review", reviewSchema);
