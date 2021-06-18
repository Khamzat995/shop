const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
    // userId: {
    //     ref: 'User',
    //     type: mongoose.Schema.Types.ObjectId
    // },
    products: [
        {
            ref: 'Product',
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    cost: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model("Cart", cartSchema);
